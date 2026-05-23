// Mi Mesa — POST /api/order
//
// Single, security-conscious endpoint. Steps:
//   1. Parse JSON; honeypot → silent 200, no write.
//   2. Cheap in-memory rate limit (per Vercel instance).
//   3. Validate required fields (name, phone, address) and line count (1–50).
//   4. Re-fetch each item from Supabase using its UUID; verify is_published.
//   5. Re-compute unit price from DB. Pick base vs alt price by the label the
//      client claims — never trust the client's `price` field.
//   6. Insert the order via service_role (RLS bypass).
//   7. Telegram is fire-and-forget: never blocks the response, never aborts
//      the order. We record the resulting message_id back into the row so V2
//      can later edit it with kabul/red buttons.
//
// Returns { ok: true, orderNo } on success, { ok: false, error: code } else.

import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { buildOrderMessage, sendTelegram } from '@/lib/telegram';

export const prerender = false;

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SERVICE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

// Per-IP token bucket: max 5 requests / 60s. Cleared on cold start, which is
// fine — this is a friction layer, not the only line of defence.
const rateBuckets = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
	const now = Date.now();
	const arr = (rateBuckets.get(ip) ?? []).filter((t) => now - t < 60_000);
	arr.push(now);
	rateBuckets.set(ip, arr);
	return arr.length > 5;
}

interface IncomingLine {
	itemId: string;
	priceLabel?: string | null;
	qty: number;
}
interface IncomingBody {
	honeypot?: string;
	lang?: 'tr' | 'en' | 'ar';
	customer?: { name?: string; phone?: string; email?: string };
	address?: string;
	addressNote?: string;
	note?: string;
	paymentMethod?: 'cash' | 'card';
	lines?: IncomingLine[];
}

function clip(s: string | undefined | null, n: number): string | null {
	if (!s) return null;
	const t = String(s).trim();
	return t ? t.slice(0, n) : null;
}

function json(status: number, body: unknown): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json' }
	});
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	let body: IncomingBody;
	try {
		body = (await request.json()) as IncomingBody;
	} catch {
		return json(400, { ok: false, error: 'invalid_json' });
	}

	// Honeypot — bots fill hidden inputs; humans don't.
	if (body.honeypot && body.honeypot.trim() !== '') {
		return json(200, { ok: true });
	}

	const ip =
		clientAddress ??
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
		'unknown';
	if (rateLimited(ip)) {
		return json(429, { ok: false, error: 'rate_limited' });
	}

	const lang: 'tr' | 'en' | 'ar' =
		body.lang === 'en' || body.lang === 'ar' ? body.lang : 'tr';
	const name = clip(body.customer?.name, 80);
	const phone = clip(body.customer?.phone, 30);
	const email = clip(body.customer?.email, 120);
	const address = clip(body.address, 400);
	const addressNote = clip(body.addressNote, 200);
	const note = clip(body.note, 400);
	const paymentMethod: 'cash' | 'card' =
		body.paymentMethod === 'card' ? 'card' : 'cash';
	const lines = Array.isArray(body.lines) ? body.lines : [];

	if (!name || !phone || !address) {
		return json(400, { ok: false, error: 'missing_fields' });
	}
	if (lines.length === 0 || lines.length > 50) {
		return json(400, { ok: false, error: 'bad_lines' });
	}

	if (!SUPABASE_URL || !SERVICE_KEY) {
		return json(500, { ok: false, error: 'server_misconfigured' });
	}
	const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
		auth: { autoRefreshToken: false, persistSession: false }
	});

	const itemIds = Array.from(new Set(lines.map((l) => String(l.itemId))));
	const { data: dbItems, error: itemsErr } = await admin
		.from('items')
		.select(
			'id, slug, name, price, price_alt, price_label, price_alt_label, is_published, currency'
		)
		.in('id', itemIds);
	if (itemsErr) {
		return json(500, { ok: false, error: 'db_lookup_failed' });
	}
	const byId = new Map((dbItems ?? []).map((r) => [r.id as string, r]));

	const validatedLines: Array<{
		slug: string;
		name: string;
		qty: number;
		priceLabel: string | null;
		unitPrice: number;
		lineTotal: number;
	}> = [];

	for (const raw of lines) {
		const itemId = String(raw.itemId ?? '');
		const qty = Math.max(1, Math.min(99, Math.floor(Number(raw.qty) || 0)));
		const row = byId.get(itemId);
		if (!row || row.is_published === false) {
			return json(400, { ok: false, error: 'unavailable_item' });
		}

		// Resolve unit price: dual-price items pick by label, single-price uses `price`.
		let unitPrice = Number(row.price);
		let priceLabel: string | null = null;
		const wantedLabel = clip(raw.priceLabel ?? null, 30);
		if (row.price_alt != null && row.price_label && row.price_alt_label) {
			if (wantedLabel && wantedLabel === row.price_alt_label) {
				unitPrice = Number(row.price_alt);
				priceLabel = row.price_alt_label as string;
			} else {
				unitPrice = Number(row.price);
				priceLabel = row.price_label as string;
			}
		}
		if (!Number.isFinite(unitPrice) || unitPrice <= 0) {
			return json(400, { ok: false, error: 'price_unavailable' });
		}

		const nameObj = row.name as Record<string, string> | null;
		const localizedName = nameObj?.[lang] ?? nameObj?.tr ?? (row.slug as string);
		const lineTotal = qty * unitPrice;
		validatedLines.push({
			slug: row.slug as string,
			name: localizedName,
			qty,
			priceLabel,
			unitPrice,
			lineTotal
		});
	}
	if (validatedLines.length === 0) {
		return json(400, { ok: false, error: 'empty' });
	}
	const totalAmount = validatedLines.reduce((s, l) => s + l.lineTotal, 0);

	const insertRow = {
		lang,
		customer_name: name,
		customer_phone: phone,
		customer_email: email,
		address,
		address_note: addressNote,
		note,
		payment_method: paymentMethod,
		items: validatedLines.map((l) => ({
			slug: l.slug,
			name: l.name,
			qty: l.qty,
			unit_price: l.unitPrice,
			line_total: l.lineTotal,
			price_label: l.priceLabel
		})),
		total_amount: totalAmount,
		currency: 'TRY',
		ip,
		user_agent: clip(request.headers.get('user-agent'), 400),
		source: 'web'
	};

	// @ts-expect-error — orders table isn't in the generated Database type yet
	const { data: inserted, error: insErr } = await admin
		.from('orders')
		.insert(insertRow)
		.select('order_no')
		.single();
	if (insErr || !inserted) {
		return json(500, { ok: false, error: 'insert_failed' });
	}
	const orderNo = Number((inserted as { order_no: number }).order_no);

	// Fire-and-forget Telegram. Don't await — the customer shouldn't wait.
	const message = buildOrderMessage({
		orderNo,
		lang,
		customer: { name, phone, email },
		address,
		addressNote,
		note,
		paymentMethod,
		lines: validatedLines.map((l) => ({
			name: l.name,
			qty: l.qty,
			priceLabel: l.priceLabel,
			lineTotal: l.lineTotal
		})),
		total: totalAmount
	});
	sendTelegram(message)
		.then(async (r) => {
			if (r.ok && r.messageId) {
				// @ts-expect-error — see above
				await admin
					.from('orders')
					.update({ telegram_message_id: String(r.messageId) })
					.eq('order_no', orderNo);
			}
		})
		.catch(() => {
			/* swallow — order is already safely persisted */
		});

	return json(200, { ok: true, orderNo });
};
