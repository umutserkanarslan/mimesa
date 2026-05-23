import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { l as localizedPath, $ as $$BaseLayout, g as getDict } from './LangSwitcher_gwGoJj_h.mjs';
import { $ as $$MenuTopBar } from './MenuTopBar_C24HPe-o.mjs';
import { $ as $$FadeIn } from './FadeIn_BZ8fagZ0.mjs';
import { $ as $$Image } from './_astro_assets_CPRWeAh8.mjs';
import { l as localized, g as getCategories, a as getAllItems } from './menu_DomRmme3.mjs';

const $$Astro$1 = createAstro("https://mimesarestoran.com");
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { lang, category, index, total, itemCount, itemsLabel } = Astro2.props;
  const href = localizedPath(lang, `/menu/${category.slug}`);
  const numeral = String(index).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");
  const name = localized(category.name, lang);
  const tagline = localized(category.tagline, lang);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="group block relative overflow-hidden"> <article class="relative w-full overflow-hidden bg-[var(--color-charcoal)]" style="aspect-ratio:4/5;"> ${renderComponent($$result, "Image", $$Image, { "src": category.cover, "alt": name, "width": 900, "height": 1125, "loading": "lazy", "decoding": "async", "class": "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" })} <!-- Bottom gradient for legibility --> <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div> <!-- Corner ornaments --> <span class="absolute top-3 start-3 w-5 h-5 border-t border-s border-[var(--color-copper)]/55 transition-all duration-500 group-hover:w-7 group-hover:h-7" aria-hidden="true"></span> <span class="absolute bottom-3 end-3 w-5 h-5 border-b border-e border-[var(--color-copper)]/55 transition-all duration-500 group-hover:w-7 group-hover:h-7" aria-hidden="true"></span> <!-- Top numeral --> <span class="absolute top-4 end-4 text-[var(--color-champagne)]/75 text-[0.65rem]" style="letter-spacing:var(--tracking-wider-luxe);font-family:var(--font-body);"> ${numeral}<span class="text-[var(--color-champagne)]/40"> / ${totalStr}</span> </span> <!-- Bottom caption --> <div class="absolute inset-x-0 bottom-0 p-5 md:p-7"> <div class="flex items-center gap-2 mb-3"> <span class="block w-6 h-px bg-[var(--color-copper-soft)] transition-all duration-500 group-hover:w-12"></span> <span class="text-[0.62rem] text-[var(--color-champagne)]/65" style="letter-spacing:var(--tracking-wider-luxe);text-transform:uppercase;"> ${itemCount} · ${itemsLabel} </span> </div> <h3 class="text-[var(--color-champagne)]" style="font-family:var(--font-display);font-size:clamp(1.4rem, 2.6vw, 2rem);line-height:1.1;font-weight:400;"> <span class="block">${name}</span> <span class="block italic mt-0.5 text-[var(--color-copper-soft)] text-[0.62em]">${tagline}</span> </h3> </div> </article> </a>`;
}, "C:/Users/Serkan/MiMesa/src/components/menu/CategoryCard.astro", void 0);

const $$Astro = createAstro("https://mimesarestoran.com");
const $$MenuCategoriesPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuCategoriesPage;
  const { lang } = Astro2.props;
  const dict = getDict(lang);
  const m = dict.menuPage.meta;
  const idx = dict.menuPage.index;
  const c = dict.menuPage.category;
  const categories = await getCategories();
  const allItems = await getAllItems();
  const splashHref = localizedPath(lang, "/menu");
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=30, stale-while-revalidate=300"
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": m.title, "description": m.description, "ogAlt": m.ogAlt }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuTopBar", $$MenuTopBar, { "lang": lang, "backHref": splashHref, "backLabel": c.backToSplash })} ${maybeRenderHead()}<main class="bg-[var(--color-champagne)] grain-bg"> <!-- Subtle title strip --> <section class="relative pt-10 pb-6 md:pt-14 md:pb-10"> <div class="container-luxe text-center"> <span class="eyebrow">${idx.eyebrow}</span> <h1 class="mt-3" style="font-family:var(--font-display);font-size:clamp(1.75rem, 3.4vw, 2.6rem);line-height:1.05;letter-spacing:-0.01em;font-weight:400;color:var(--color-ink);"> <span class="italic" style="color:var(--color-copper);">${idx.titleEm}</span> </h1> <span class="block hairline mx-auto w-12 mt-6"></span> </div> </section> <!-- 2-column tile grid --> <section class="relative pb-24 md:pb-32"> <div class="container-luxe"> <div class="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto"> ${categories.map((cat, i) => renderTemplate`${renderComponent($$result2, "FadeIn", $$FadeIn, { "delay": Math.min(i, 3) * 60 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CategoryCard", $$CategoryCard, { "lang": lang, "category": cat, "index": i + 1, "total": categories.length, "itemCount": allItems.filter((it) => it.category === cat.slug).length, "itemsLabel": idx.itemsLabel })} ` })}`)} </div> ${renderComponent($$result2, "FadeIn", $$FadeIn, { "delay": 120 }, { "default": async ($$result3) => renderTemplate` <div class="mt-16 md:mt-20 max-w-xl mx-auto text-center px-4"> <span class="block hairline mx-auto w-12 mb-5"></span> <p class="text-[0.78rem] md:text-[0.82rem] leading-[1.8] text-[var(--color-ink)]/85 italic" style="font-family:var(--font-display);"> ${idx.footnote} </p> </div> ` })} </div> </section> </main> ` })}`;
}, "C:/Users/Serkan/MiMesa/src/components/menu/MenuCategoriesPage.astro", void 0);

export { $$MenuCategoriesPage as $ };
