import type { Locale } from './i18n';
import { supabase, type DbCategory, type DbItem } from './supabase';

export type Translated = Record<Locale, string>;

export type MenuFlag = 'signature' | 'vegan' | 'vegetarian' | 'spicy' | 'gluten-free';

export interface MenuItem {
  id: string;
  slug: string;
  category: string;
  name: Translated;
  description: Translated;
  price: number;
  priceLabel: string | null;
  priceAlt: number | null;
  priceAltLabel: string | null;
  currency: 'TRY';
  image: string;
  flags?: MenuFlag[];
  sortOrder: number;
}

export interface MenuCategory {
  id: string;
  slug: string;
  name: Translated;
  tagline: Translated;
  description: Translated;
  cover: string;
  order: number;
}

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=72';

function toCategory(row: DbCategory): MenuCategory {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name as Translated,
    tagline: row.tagline as Translated,
    description: row.description as Translated,
    cover: row.cover ?? FALLBACK_IMAGE,
    order: row.sort_order,
  };
}

function toItem(row: DbItem): MenuItem {
  return {
    id: row.id,
    slug: row.slug,
    category: row.category_slug,
    name: row.name as Translated,
    description: row.description as Translated,
    price: Number(row.price),
    priceLabel: row.price_label ?? null,
    priceAlt: row.price_alt == null ? null : Number(row.price_alt),
    priceAltLabel: row.price_alt_label ?? null,
    currency: row.currency as 'TRY',
    image: row.image ?? FALLBACK_IMAGE,
    flags: (row.flags as MenuFlag[]) ?? [],
    sortOrder: row.sort_order,
  };
}

export async function getCategories(): Promise<MenuCategory[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toCategory);
}

export async function getCategoryBySlug(slug: string): Promise<MenuCategory | undefined> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (error) throw error;
  return data ? toCategory(data) : undefined;
}

export async function getAllItems(): Promise<MenuItem[]> {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toItem);
}

export async function getItemsByCategory(slug: string): Promise<MenuItem[]> {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('category_slug', slug)
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(toItem);
}

export function localized<T extends Translated>(value: T, lang: Locale): string {
  return value[lang] ?? value.tr;
}

export function formatPrice(price: number, lang: Locale): string {
  const formatter = new Intl.NumberFormat(
    lang === 'tr' ? 'tr-TR' : lang === 'ar' ? 'ar' : 'en-US',
    { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 }
  );
  const amount = formatter.format(price);
  return lang === 'ar' ? `${amount} ل.ت` : `${amount} ₺`;
}

export const flagLabels: Record<MenuFlag, Translated> = {
  signature: { tr: 'İmza', en: 'Signature', ar: 'توقيع' },
  vegan: { tr: 'Vegan', en: 'Vegan', ar: 'نباتي صرف' },
  vegetarian: { tr: 'Vejetaryen', en: 'Vegetarian', ar: 'نباتي' },
  spicy: { tr: 'Acılı', en: 'Spicy', ar: 'حار' },
  'gluten-free': { tr: 'Glütensiz', en: 'Gluten-free', ar: 'خالٍ من الغلوتين' },
};
