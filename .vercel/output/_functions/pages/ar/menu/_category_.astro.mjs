import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { $ as $$CategoryPage } from '../../../chunks/CategoryPage_M9OjtJtu.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://mimesarestoran.com");
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const lang = "ar";
  const { category } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "CategoryPage", $$CategoryPage, { "lang": lang, "categorySlug": category })}`;
}, "C:/Users/Serkan/MiMesa/src/pages/ar/menu/[category].astro", void 0);

const $$file = "C:/Users/Serkan/MiMesa/src/pages/ar/menu/[category].astro";
const $$url = "/ar/menu/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
