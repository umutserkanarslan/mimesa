// Mi Mesa — Telegram notifier. Server-side only. NEVER import from client.
//
// Bot setup (one-time, by the restaurant owner):
//   1. Telegram → @BotFather → /newbot → token → TELEGRAM_BOT_TOKEN
//   2. Owner sends /start to the new bot from their phone
//   3. Hit https://api.telegram.org/bot<TOKEN>/getUpdates → grab `chat.id`
//      (use a Telegram GROUP id — negative number — to alert all staff)
//   4. Store as TELEGRAM_CHAT_ID on Vercel
//
// If either env var is empty, sendTelegram() silently returns ok:false and the
// order still gets saved to the DB. The site doesn't break if Telegram is
// down or unconfigured.

interface OrderForTelegram {
	orderNo: number;
	lang: string;
	customer: { name: string; phone: string; email?: string | null };
	address: string;
	addressNote?: string | null;
	note?: string | null;
	paymentMethod: 'cash' | 'card';
	lines: Array<{ name: string; qty: number; priceLabel?: string | null; lineTotal: number }>;
	total: number;
}

function formatPriceTRY(n: number): string {
	return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(n) + ' ₺';
}

function escapeHtml(s: string): string {
	return s.replace(/[&<>"']/g, (c) => {
		const map: Record<string, string> = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#39;'
		};
		return map[c] ?? c;
	});
}

export function buildOrderMessage(o: OrderForTelegram): string {
	const lineRows = o.lines.map((l) => {
		const label = l.priceLabel ? ` (${escapeHtml(l.priceLabel)})` : '';
		return `• ${l.qty}× ${escapeHtml(l.name)}${label} — ${formatPriceTRY(l.lineTotal)}`;
	});
	const ts = new Intl.DateTimeFormat('tr-TR', {
		hour: '2-digit',
		minute: '2-digit',
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		timeZone: 'Europe/Istanbul'
	}).format(new Date());

	const lines: string[] = [
		`🍽️ <b>Yeni Sipariş #${o.orderNo}</b>`,
		'',
		`👤 ${escapeHtml(o.customer.name)}`,
		`📞 ${escapeHtml(o.customer.phone)}`
	];
	if (o.customer.email) lines.push(`✉️ ${escapeHtml(o.customer.email)}`);
	lines.push(`🌐 ${o.lang.toUpperCase()}`);
	lines.push('');
	lines.push('📍 <b>Adres:</b>');
	lines.push(escapeHtml(o.address));
	if (o.addressNote) lines.push(`<i>${escapeHtml(o.addressNote)}</i>`);
	if (o.note) {
		lines.push('');
		lines.push(`📝 <b>Not:</b> ${escapeHtml(o.note)}`);
	}
	lines.push('');
	lines.push('🛒 <b>Sipariş:</b>');
	lines.push(...lineRows);
	lines.push('');
	lines.push(`💰 <b>Toplam:</b> ${formatPriceTRY(o.total)}`);
	lines.push(`💳 ${o.paymentMethod === 'cash' ? 'Kapıda nakit' : 'Kapıda kart'}`);
	lines.push('');
	lines.push(`🕐 ${ts}`);
	return lines.join('\n');
}

export async function sendTelegram(
	text: string
): Promise<{ ok: boolean; messageId?: number; error?: string }> {
	// Read via process.env — see api/order.ts comment for why.
	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;
	if (!token || !chatId) {
		return { ok: false, error: 'telegram_env_missing' };
	}
	try {
		const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text,
				parse_mode: 'HTML',
				disable_web_page_preview: true
			})
		});
		if (!res.ok) {
			const errText = await res.text().catch(() => '');
			return { ok: false, error: `telegram_${res.status}: ${errText.slice(0, 200)}` };
		}
		const json = (await res.json()) as { result?: { message_id?: number } };
		return { ok: true, messageId: json.result?.message_id };
	} catch (err) {
		return { ok: false, error: (err as Error).message };
	}
}
