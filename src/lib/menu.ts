import type { Locale } from './i18n';
import { menuData } from '@/data/menu';

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
}

export interface MenuCategory {
  slug: string;
  name: Translated;
  tagline: Translated;
  description: Translated;
  cover: string;
  order: number;
}

export interface MenuData {
  categories: MenuCategory[];
  items: MenuItem[];
}

export function getCategories(): MenuCategory[] {
  return [...menuData.categories].sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return menuData.categories.find((c) => c.slug === slug);
}

export function getItemsByCategory(slug: string): MenuItem[] {
  return menuData.items.filter((i) => i.category === slug);
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
