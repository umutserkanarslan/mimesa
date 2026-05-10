import tr from '../i18n/tr.json';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

export type Locale = 'tr' | 'en' | 'ar';

export const locales: Locale[] = ['tr', 'en', 'ar'];

export const defaultLocale: Locale = 'tr';

export const localeLabels: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
  ar: 'AR',
};

export const localeHtml: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en-US',
  ar: 'ar',
};

const dictionaries = { tr, en, ar } as const;

export type Dict = typeof tr;

export function getDict(lang: Locale): Dict {
  return dictionaries[lang] as Dict;
}

export function getDir(lang: Locale): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function localizedPath(lang: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}

const localePrefixRe = new RegExp(`^/(${locales.filter((l) => l !== defaultLocale).join('|')})(?=/|$)`);

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(localePrefixRe, '');
  return stripped === '' ? '/' : stripped;
}

export function altLocaleHrefs(currentPath = '/'): Array<{ lang: Locale; href: string; hreflang: string }> {
  return locales.map((l) => ({
    lang: l,
    href: localizedPath(l, currentPath),
    hreflang: localeHtml[l],
  }));
}
