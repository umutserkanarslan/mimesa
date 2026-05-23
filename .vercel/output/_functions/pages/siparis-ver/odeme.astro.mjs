import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { $ as $$CheckoutPage } from '../../chunks/CheckoutPage_cUk9B_8-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Odeme = createComponent(($$result, $$props, $$slots) => {
  const lang = "tr";
  return renderTemplate`${renderComponent($$result, "CheckoutPage", $$CheckoutPage, { "lang": lang })}`;
}, "C:/Users/Serkan/MiMesa/src/pages/siparis-ver/odeme.astro", void 0);

const $$file = "C:/Users/Serkan/MiMesa/src/pages/siparis-ver/odeme.astro";
const $$url = "/siparis-ver/odeme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Odeme,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
