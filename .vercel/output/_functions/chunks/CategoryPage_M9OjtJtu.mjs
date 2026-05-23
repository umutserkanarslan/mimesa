import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute } from './astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { g as getDict, l as localizedPath, $ as $$BaseLayout } from './LangSwitcher_gwGoJj_h.mjs';
import { $ as $$MenuTopBar } from './MenuTopBar_C24HPe-o.mjs';
import { $ as $$FadeIn } from './FadeIn_BZ8fagZ0.mjs';
import { $ as $$Image } from './_astro_assets_CPRWeAh8.mjs';
import { l as localized, f as formatPrice, b as flagLabels, c as getCategoryBySlug, d as getItemsByCategory } from './menu_DomRmme3.mjs';

const $$Astro$1 = createAstro("https://mimesarestoran.com");
const $$MenuItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MenuItemCard;
  const { lang, item } = Astro2.props;
  const dict = getDict(lang);
  const name = localized(item.name, lang);
  const description = localized(item.description, lang);
  const askChef = !item.priceAlt && (!item.price || item.price <= 0);
  const price = askChef ? dict.menuPage.category.askChef : formatPrice(item.price, lang);
  const priceAlt = item.priceAlt != null ? formatPrice(item.priceAlt, lang) : null;
  const flags = item.flags ?? [];
  const isSignature = flags.includes("signature");
  return renderTemplate`${maybeRenderHead()}<article class="group grid grid-cols-12 gap-5 md:gap-8 py-9 md:py-12"> <!-- Image --> <div class="col-span-4 md:col-span-3"> <div class="relative w-full overflow-hidden bg-[var(--color-champagne-soft)]" style="aspect-ratio:1/1;"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": name, "width": 600, "height": 600, "loading": "lazy", "decoding": "async", "class": "absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" })} ${isSignature && renderTemplate`<span class="absolute top-2 start-2 text-[0.6rem] text-[var(--color-champagne)] bg-[var(--color-copper)]/90 px-2 py-1" style="letter-spacing:var(--tracking-wide-luxe);text-transform:uppercase;"> ${localized(flagLabels.signature, lang)} </span>`} </div> </div> <!-- Content --> <div class="col-span-8 md:col-span-9 flex flex-col justify-center"> <!-- Name + price row, with dotted leader on sm+; on mobile the price
         drops below the name so long names like "Pastırmalı Tost" never
         have to break mid-word. --> <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"> <h3 class="min-w-0" style="font-family:var(--font-display);font-size:clamp(1.05rem,2.4vw,1.85rem);line-height:1.2;font-weight:400;color:var(--color-ink);"> ${name} </h3> <span class="hidden sm:block flex-1 self-end translate-y-[-0.3em] border-b border-dotted border-[var(--color-copper)]/35 min-w-[1.5rem]" aria-hidden="true"></span> <span class="self-end sm:self-auto flex-shrink-0 italic whitespace-nowrap text-right" style="font-family:var(--font-display);font-size:clamp(1rem,2vw,1.45rem);font-weight:400;color:var(--color-copper);"> ${priceAlt ? renderTemplate`<span class="flex flex-col items-end leading-[1.15]"> <span> ${item.priceLabel && renderTemplate`<span class="opacity-60 not-italic text-[0.72em] me-1.5" style="letter-spacing:var(--tracking-wide-luxe);text-transform:uppercase;">${item.priceLabel}</span>`} ${price} </span> <span> ${item.priceAltLabel && renderTemplate`<span class="opacity-60 not-italic text-[0.72em] me-1.5" style="letter-spacing:var(--tracking-wide-luxe);text-transform:uppercase;">${item.priceAltLabel}</span>`} ${priceAlt} </span> </span>` : price} </span> </div> <p class="mt-3 text-[0.92rem] md:text-[0.98rem] leading-[1.75] text-[var(--color-ink)]/75 max-w-2xl"> ${description} </p> ${flags.length > 0 && renderTemplate`<ul class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2"> ${flags.filter((f) => f !== "signature").map((flag) => renderTemplate`<li class="inline-flex items-center gap-2 text-[0.68rem] text-[var(--color-ink)]/55" style="letter-spacing:var(--tracking-wide-luxe);text-transform:uppercase;"> <span class="block w-1 h-1 rounded-full bg-[var(--color-copper)]/55"></span> ${localized(flagLabels[flag], lang)} </li>`)} </ul>`} </div> </article>`;
}, "C:/Users/Serkan/MiMesa/src/components/menu/MenuItemCard.astro", void 0);

const $$Astro = createAstro("https://mimesarestoran.com");
const $$CategoryPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryPage;
  const { lang, categorySlug } = Astro2.props;
  const dict = getDict(lang);
  const m = dict.menuPage.meta;
  const c = dict.menuPage.category;
  const category = await getCategoryBySlug(categorySlug);
  if (!category) {
    return Astro2.redirect(localizedPath(lang, "/menu"));
  }
  const items = await getItemsByCategory(categorySlug);
  const name = localized(category.name, lang);
  const tagline = localized(category.tagline, lang);
  const description = localized(category.description, lang);
  const pageTitle = dict.menuPage.index.categoryMetaTitle.replace("{name}", name);
  const categoriesHref = localizedPath(lang, "/menu/kategoriler");
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=30, stale-while-revalidate=300"
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": pageTitle, "description": description, "ogAlt": m.ogAlt }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuTopBar", $$MenuTopBar, { "lang": lang, "backHref": categoriesHref, "backLabel": c.backToMenu, "title": name })} ${maybeRenderHead()}<main class="bg-[var(--color-champagne)] grain-bg"> <!-- Compact category header --> <section class="relative pt-12 md:pt-16 pb-6 md:pb-10"> <div class="container-luxe text-center max-w-2xl mx-auto"> <span class="eyebrow">${tagline}</span> <h1 class="mt-4" style="font-family:var(--font-display);font-size:clamp(2rem, 5vw, 3.5rem);line-height:1.05;letter-spacing:-0.01em;font-weight:400;color:var(--color-ink);"> ${name} </h1> <p class="mt-5 text-[0.95rem] leading-[1.75] text-[var(--color-ink)]/70 max-w-xl mx-auto"> ${description} </p> <div class="mt-7 flex items-center justify-center gap-3 text-[0.7rem] text-[var(--color-copper)]" style="letter-spacing:var(--tracking-wider-luxe);text-transform:uppercase;"> <span class="block w-6 h-px bg-[var(--color-copper)]/60"></span> <span>${items.length} · ${c.itemsLabel}</span> <span class="block w-6 h-px bg-[var(--color-copper)]/60"></span> </div> </div> </section> <!-- Items list --> <section class="relative pb-20 md:pb-28 pt-4 md:pt-8"> <div class="container-luxe"> <div class="max-w-3xl mx-auto bg-[var(--color-offwhite)] px-5 sm:px-8 md:px-12 py-2 md:py-4"> <ul class="divide-y divide-[var(--color-copper)]/15"> ${items.map((item, i) => renderTemplate`<li> ${renderComponent($$result2, "FadeIn", $$FadeIn, { "delay": Math.min(i, 4) * 40 }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "MenuItemCard", $$MenuItemCard, { "lang": lang, "item": item })} ` })} </li>`)} </ul> </div> ${renderComponent($$result2, "FadeIn", $$FadeIn, { "delay": 120 }, { "default": async ($$result3) => renderTemplate` <div class="mt-12 md:mt-16 flex items-center justify-center"> <a${addAttribute(categoriesHref, "href")} class="inline-flex items-center gap-3 text-[0.74rem] text-[var(--color-copper)] hover:text-[var(--color-charcoal)] transition-colors" style="letter-spacing:var(--tracking-wider-luxe);text-transform:uppercase;"> <svg aria-hidden="true"${addAttribute(["w-4 h-4", lang === "ar" && "scale-x-[-1]"], "class:list")} viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.5 13L5.5 8L10.5 3"></path> </svg> ${c.backToMenu} </a> </div> ` })} </div> </section> </main> ` })}`;
}, "C:/Users/Serkan/MiMesa/src/components/menu/CategoryPage.astro", void 0);

export { $$CategoryPage as $ };
