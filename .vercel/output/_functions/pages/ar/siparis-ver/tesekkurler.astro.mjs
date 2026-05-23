import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_2XIcTBoS.mjs';
import 'piccolore';
import { $ as $$ThanksPage } from '../../../chunks/ThanksPage_CZfCyP8L.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Tesekkurler = createComponent(($$result, $$props, $$slots) => {
  const lang = "ar";
  return renderTemplate`${renderComponent($$result, "ThanksPage", $$ThanksPage, { "lang": lang })}`;
}, "C:/Users/Serkan/MiMesa/src/pages/ar/siparis-ver/tesekkurler.astro", void 0);

const $$file = "C:/Users/Serkan/MiMesa/src/pages/ar/siparis-ver/tesekkurler.astro";
const $$url = "/ar/siparis-ver/tesekkurler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Tesekkurler,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
