import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { $ as $$OrderCategoryPage } from '../../../chunks/OrderCategoryPage_GbQbSe9h.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://mimesarestoran.com");
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const lang = "ar";
  const { category } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "OrderCategoryPage", $$OrderCategoryPage, { "lang": lang, "categorySlug": category })}`;
}, "C:/Users/Serkan/MiMesa/src/pages/ar/siparis-ver/[category].astro", void 0);

const $$file = "C:/Users/Serkan/MiMesa/src/pages/ar/siparis-ver/[category].astro";
const $$url = "/ar/siparis-ver/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
