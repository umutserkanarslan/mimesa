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

let categoriesCache: MenuCategory[] | null = null;
let itemsCache: MenuItem[] | null = null;

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
    currency: row.currency as 'TRY',
    image: row.image ?? FALLBACK_IMAGE,
    flags: (row.flags as MenuFlag[]) ?? [],
    sortOrder: row.sort_order,
  };
}

export async function getCategories(): Promise<MenuCategory[]> {
  if (categoriesCache) return categoriesCache;
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  categoriesCache = (data ?? []).map(toCategory);
  return categoriesCache;
}

export async function getCategoryBySlug(slug: string): Promise<MenuCategory | undefined> {
  const all = await getCategories();
  return all.find((c) => c.slug === slug);
}

export async function getAllItems(): Promise<MenuItem[]> {
  if (itemsCache) return itemsCache;
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });
  if (error) throw error;
  itemsCache = (data ?? []).map(toItem);
  return itemsCache;
}

export async function getItemsByCategory(slug: string): Promise<MenuItem[]> {
  const all = await getAllItems();
  return all.filter((i) => i.category === slug);
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
