import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { l as localizedPath, a as $$LangSwitcher } from './LangSwitcher_gwGoJj_h.mjs';

const $$Astro = createAstro("https://mimesarestoran.com");
const $$MenuTopBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuTopBar;
  const { lang, backHref, backLabel, title } = Astro2.props;
  const homeHref = localizedPath(lang, "/");
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 inset-x-0 z-40 bg-[var(--color-champagne)]/92 backdrop-blur-md border-b border-[var(--color-copper)]/20"> <div class="container-luxe h-[58px] md:h-[68px] flex items-center gap-3 sm:gap-4"> <!-- Back --> <a${addAttribute(backHref, "href")} class="flex-shrink-0 inline-flex items-center gap-2 text-[0.72rem] text-[var(--color-ink)]/75 hover:text-[var(--color-copper)] transition-colors" style="letter-spacing:var(--tracking-wide-luxe);text-transform:uppercase;"${addAttribute(backLabel, "aria-label")}> <svg aria-hidden="true"${addAttribute(["w-4 h-4 flex-shrink-0", lang === "ar" && "scale-x-[-1]"], "class:list")} viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.5 13L5.5 8L10.5 3"></path> </svg> <span class="hidden sm:inline">${backLabel}</span> </a> <!-- Title (Mi Mesa logo or category name) --> <a${addAttribute(homeHref, "href")} class="flex-1 min-w-0 group" aria-label="Mi Mesa"> <span class="block text-center truncate px-1" style="font-family:var(--font-display);font-style:italic;font-weight:500;font-size:clamp(0.9rem, 2vw, 1.35rem);line-height:1.1;color:var(--color-ink);"> ${title ?? "Mi Mesa"} </span> </a> <!-- Lang switcher --> <div class="flex-shrink-0"> ${renderComponent($$result, "LangSwitcher", $$LangSwitcher, { "current": lang })} </div> </div> </header>`;
}, "C:/Users/Serkan/MiMesa/src/components/menu/MenuTopBar.astro", void 0);

export { $$MenuTopBar as $ };
