import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { $ as $$MenuCategoriesPage } from '../../../chunks/MenuCategoriesPage_CSRjUpSq.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Kategoriler = createComponent(($$result, $$props, $$slots) => {
  const lang = "ar";
  return renderTemplate`${renderComponent($$result, "MenuCategoriesPage", $$MenuCategoriesPage, { "lang": lang })}`;
}, "C:/Users/Serkan/MiMesa/src/pages/ar/menu/kategoriler.astro", void 0);

const $$file = "C:/Users/Serkan/MiMesa/src/pages/ar/menu/kategoriler.astro";
const $$url = "/ar/menu/kategoriler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Kategoriler,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
