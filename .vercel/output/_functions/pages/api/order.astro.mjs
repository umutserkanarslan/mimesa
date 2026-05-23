import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

function formatPriceTRY(n) {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(n) + " ₺";
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return map[c] ?? c;
  });
}
function buildOrderMessage(o) {
  const lineRows = o.lines.map((l) => {
    const label = l.priceLabel ? ` (${escapeHtml(l.priceLabel)})` : "";
    return `• ${l.qty}× ${escapeHtml(l.name)}${label} — ${formatPriceTRY(l.lineTotal)}`;
  });
  const ts = new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Istanbul"
  }).format(/* @__PURE__ */ new Date());
  const lines = [
    `🍽️ <b>Yeni Sipariş #${o.orderNo}</b>`,
    "",
    `👤 ${escapeHtml(o.customer.name)}`,
    `📞 ${escapeHtml(o.customer.phone)}`
  ];
  if (o.customer.email) lines.push(`✉️ ${escapeHtml(o.customer.email)}`);
  lines.push(`🌐 ${o.lang.toUpperCase()}`);
  lines.push("");
  lines.push("📍 <b>Adres:</b>");
  lines.push(escapeHtml(o.address));
  if (o.addressNote) lines.push(`<i>${escapeHtml(o.addressNote)}</i>`);
  if (o.note) {
    lines.push("");
    lines.push(`📝 <b>Not:</b> ${escapeHtml(o.note)}`);
  }
  lines.push("");
  lines.push("🛒 <b>Sipariş:</b>");
  lines.push(...lineRows);
  lines.push("");
  lines.push(`💰 <b>Toplam:</b> ${formatPriceTRY(o.total)}`);
  lines.push(`💳 ${o.paymentMethod === "cash" ? "Kapıda nakit" : "Kapıda kart"}`);
  lines.push("");
  lines.push(`🕐 ${ts}`);
  return lines.join("\n");
}
async function sendTelegram(text) {
  {
    return { ok: false, error: "telegram_env_missing" };
  }
}

const prerender = false;
const SUPABASE_URL = "https://zyuwlprjbzqreyyynavd.supabase.co";
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dXdscHJqYnpxcmV5eXluYXZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODQzNjE5MSwiZXhwIjoyMDk0MDEyMTkxfQ.BJumTbwuDliuXOaDzpn1hdkS-z-HVeMECtJ8oIOQA3g";
const rateBuckets = /* @__PURE__ */ new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (rateBuckets.get(ip) ?? []).filter((t) => now - t < 6e4);
  arr.push(now);
  rateBuckets.set(ip, arr);
  return arr.length > 5;
}
function clip(s, n) {
  if (!s) return null;
  const t = String(s).trim();
  return t ? t.slice(0, n) : null;
}
function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" }
  });
}
const POST = async ({ request, clientAddress }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: "invalid_json" });
  }
  if (body.honeypot && body.honeypot.trim() !== "") {
    return json(200, { ok: true });
  }
  const ip = clientAddress ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return json(429, { ok: false, error: "rate_limited" });
  }
  const lang = body.lang === "en" || body.lang === "ar" ? body.lang : "tr";
  const name = clip(body.customer?.name, 80);
  const phone = clip(body.customer?.phone, 30);
  const email = clip(body.customer?.email, 120);
  const address = clip(body.address, 400);
  const addressNote = clip(body.addressNote, 200);
  const note = clip(body.note, 400);
  const paymentMethod = body.paymentMethod === "card" ? "card" : "cash";
  const lines = Array.isArray(body.lines) ? body.lines : [];
  if (!name || !phone || !address) {
    return json(400, { ok: false, error: "missing_fields" });
  }
  if (lines.length === 0 || lines.length > 50) {
    return json(400, { ok: false, error: "bad_lines" });
  }
  const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
  const itemIds = Array.from(new Set(lines.map((l) => String(l.itemId))));
  const { data: dbItems, error: itemsErr } = await admin.from("items").select(
    "id, slug, name, price, price_alt, price_label, price_alt_label, is_published, currency"
  ).in("id", itemIds);
  if (itemsErr) {
    return json(500, { ok: false, error: "db_lookup_failed" });
  }
  const byId = new Map((dbItems ?? []).map((r) => [r.id, r]));
  const validatedLines = [];
  for (const raw of lines) {
    const itemId = String(raw.itemId ?? "");
    const qty = Math.max(1, Math.min(99, Math.floor(Number(raw.qty) || 0)));
    const row = byId.get(itemId);
    if (!row || row.is_published === false) {
      return json(400, { ok: false, error: "unavailable_item" });
    }
    let unitPrice = Number(row.price);
    let priceLabel = null;
    const wantedLabel = clip(raw.priceLabel ?? null, 30);
    if (row.price_alt != null && row.price_label && row.price_alt_label) {
      if (wantedLabel && wantedLabel === row.price_alt_label) {
        unitPrice = Number(row.price_alt);
        priceLabel = row.price_alt_label;
      } else {
        unitPrice = Number(row.price);
        priceLabel = row.price_label;
      }
    }
    if (!Number.isFinite(unitPrice) || unitPrice <= 0) {
      return json(400, { ok: false, error: "price_unavailable" });
    }
    const nameObj = row.name;
    const localizedName = nameObj?.[lang] ?? nameObj?.tr ?? row.slug;
    const lineTotal = qty * unitPrice;
    validatedLines.push({
      slug: row.slug,
      name: localizedName,
      qty,
      priceLabel,
      unitPrice,
      lineTotal
    });
  }
  if (validatedLines.length === 0) {
    return json(400, { ok: false, error: "empty" });
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
    currency: "TRY",
    ip,
    user_agent: clip(request.headers.get("user-agent"), 400),
    source: "web"
  };
  const { data: inserted, error: insErr } = await admin.from("orders").insert(insertRow).select("order_no").single();
  if (insErr || !inserted) {
    return json(500, { ok: false, error: "insert_failed" });
  }
  const orderNo = Number(inserted.order_no);
  buildOrderMessage({
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
  sendTelegram().then(async (r) => {
    if (r.ok && r.messageId) {
      await admin.from("orders").update({ telegram_message_id: String(r.messageId) }).eq("order_no", orderNo);
    }
  }).catch(() => {
  });
  return json(200, { ok: true, orderNo });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
