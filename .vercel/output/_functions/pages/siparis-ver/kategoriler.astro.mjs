import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { $ as $$OrderCategoriesPage } from '../../chunks/OrderCategoriesPage_CJ8neE5M.mjs';
export { renderers } from '../../renderers.mjs';

const $$Kategoriler = createComponent(($$result, $$props, $$slots) => {
  const lang = "tr";
  return renderTemplate`${renderComponent($$result, "OrderCategoriesPage", $$OrderCategoriesPage, { "lang": lang })}`;
}, "C:/Users/Serkan/MiMesa/src/pages/siparis-ver/kategoriler.astro", void 0);

const $$file = "C:/Users/Serkan/MiMesa/src/pages/siparis-ver/kategoriler.astro";
const $$url = "/siparis-ver/kategoriler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Kategoriler,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
