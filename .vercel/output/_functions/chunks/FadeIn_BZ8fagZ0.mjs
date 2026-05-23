import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, w as renderSlot } from './astro/server_2XIcTBoS.mjs';
import 'piccolore';

const $$Astro = createAstro("https://mimesarestoran.com");
const $$FadeIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FadeIn;
  const { delay = 0, as: Tag = "div", class: className = "" } = Astro2.props;
  const style = `--reveal-delay: ${delay}ms`;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["reveal", className], "style": style }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Serkan/MiMesa/src/components/FadeIn.astro", void 0);

export { $$FadeIn as $ };
