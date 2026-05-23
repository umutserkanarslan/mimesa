import { createClient } from '@supabase/supabase-js';

const url = "https://zyuwlprjbzqreyyynavd.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dXdscHJqYnpxcmV5eXluYXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzYxOTEsImV4cCI6MjA5NDAxMjE5MX0.Fq5VdHp_3Z892dxfNUDl3PczkBpW5tSAueCGGzDEw2g";
const supabase = createClient(url, anonKey, {
  auth: { persistSession: false }
});

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=72";
function toCategory(row) {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    description: row.description,
    cover: row.cover ?? FALLBACK_IMAGE,
    order: row.sort_order
  };
}
function toItem(row) {
  return {
    id: row.id,
    slug: row.slug,
    category: row.category_slug,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    priceLabel: row.price_label ?? null,
    priceAlt: row.price_alt == null ? null : Number(row.price_alt),
    priceAltLabel: row.price_alt_label ?? null,
    currency: row.currency,
    image: row.image ?? FALLBACK_IMAGE,
    flags: row.flags ?? [],
    sortOrder: row.sort_order
  };
}
async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toCategory);
}
async function getCategoryBySlug(slug) {
  const { data, error } = await supabase.from("categories").select("*").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data ? toCategory(data) : void 0;
}
async function getAllItems() {
  const { data, error } = await supabase.from("items").select("*").eq("is_published", true).order("sort_order", { ascending: true }).order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toItem);
}
async function getItemsByCategory(slug) {
  const { data, error } = await supabase.from("items").select("*").eq("category_slug", slug).eq("is_published", true).order("sort_order", { ascending: true }).order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toItem);
}
function localized(value, lang) {
  return value[lang] ?? value.tr;
}
function formatPrice(price, lang) {
  const formatter = new Intl.NumberFormat(
    lang === "tr" ? "tr-TR" : lang === "ar" ? "ar" : "en-US",
    { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }
  );
  const amount = formatter.format(price);
  return lang === "ar" ? `${amount} ل.ت` : `${amount} ₺`;
}
const flagLabels = {
  signature: { tr: "İmza", en: "Signature", ar: "توقيع" },
  vegan: { tr: "Vegan", en: "Vegan", ar: "نباتي صرف" },
  vegetarian: { tr: "Vejetaryen", en: "Vegetarian", ar: "نباتي" },
  spicy: { tr: "Acılı", en: "Spicy", ar: "حار" },
  "gluten-free": { tr: "Glütensiz", en: "Gluten-free", ar: "خالٍ من الغلوتين" }
};

export { getAllItems as a, flagLabels as b, getCategoryBySlug as c, getItemsByCategory as d, formatPrice as f, getCategories as g, localized as l };
