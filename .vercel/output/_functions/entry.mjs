import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_De0EB8x8.mjs';
import { manifest } from './manifest_VkzfRoTA.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/order.astro.mjs');
const _page2 = () => import('./pages/ar/menu/kategoriler.astro.mjs');
const _page3 = () => import('./pages/ar/menu/_category_.astro.mjs');
const _page4 = () => import('./pages/ar/menu.astro.mjs');
const _page5 = () => import('./pages/ar/siparis-ver/kategoriler.astro.mjs');
const _page6 = () => import('./pages/ar/siparis-ver/odeme.astro.mjs');
const _page7 = () => import('./pages/ar/siparis-ver/tesekkurler.astro.mjs');
const _page8 = () => import('./pages/ar/siparis-ver/_category_.astro.mjs');
const _page9 = () => import('./pages/ar/siparis-ver.astro.mjs');
const _page10 = () => import('./pages/ar.astro.mjs');
const _page11 = () => import('./pages/en/menu/kategoriler.astro.mjs');
const _page12 = () => import('./pages/en/menu/_category_.astro.mjs');
const _page13 = () => import('./pages/en/menu.astro.mjs');
const _page14 = () => import('./pages/en/siparis-ver/kategoriler.astro.mjs');
const _page15 = () => import('./pages/en/siparis-ver/odeme.astro.mjs');
const _page16 = () => import('./pages/en/siparis-ver/tesekkurler.astro.mjs');
const _page17 = () => import('./pages/en/siparis-ver/_category_.astro.mjs');
const _page18 = () => import('./pages/en/siparis-ver.astro.mjs');
const _page19 = () => import('./pages/en.astro.mjs');
const _page20 = () => import('./pages/menu/kategoriler.astro.mjs');
const _page21 = () => import('./pages/menu/_category_.astro.mjs');
const _page22 = () => import('./pages/menu.astro.mjs');
const _page23 = () => import('./pages/siparis-ver/kategoriler.astro.mjs');
const _page24 = () => import('./pages/siparis-ver/odeme.astro.mjs');
const _page25 = () => import('./pages/siparis-ver/tesekkurler.astro.mjs');
const _page26 = () => import('./pages/siparis-ver/_category_.astro.mjs');
const _page27 = () => import('./pages/siparis-ver.astro.mjs');
const _page28 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/order.ts", _page1],
    ["src/pages/ar/menu/kategoriler.astro", _page2],
    ["src/pages/ar/menu/[category].astro", _page3],
    ["src/pages/ar/menu/index.astro", _page4],
    ["src/pages/ar/siparis-ver/kategoriler.astro", _page5],
    ["src/pages/ar/siparis-ver/odeme.astro", _page6],
    ["src/pages/ar/siparis-ver/tesekkurler.astro", _page7],
    ["src/pages/ar/siparis-ver/[category].astro", _page8],
    ["src/pages/ar/siparis-ver/index.astro", _page9],
    ["src/pages/ar/index.astro", _page10],
    ["src/pages/en/menu/kategoriler.astro", _page11],
    ["src/pages/en/menu/[category].astro", _page12],
    ["src/pages/en/menu/index.astro", _page13],
    ["src/pages/en/siparis-ver/kategoriler.astro", _page14],
    ["src/pages/en/siparis-ver/odeme.astro", _page15],
    ["src/pages/en/siparis-ver/tesekkurler.astro", _page16],
    ["src/pages/en/siparis-ver/[category].astro", _page17],
    ["src/pages/en/siparis-ver/index.astro", _page18],
    ["src/pages/en/index.astro", _page19],
    ["src/pages/menu/kategoriler.astro", _page20],
    ["src/pages/menu/[category].astro", _page21],
    ["src/pages/menu/index.astro", _page22],
    ["src/pages/siparis-ver/kategoriler.astro", _page23],
    ["src/pages/siparis-ver/odeme.astro", _page24],
    ["src/pages/siparis-ver/tesekkurler.astro", _page25],
    ["src/pages/siparis-ver/[category].astro", _page26],
    ["src/pages/siparis-ver/index.astro", _page27],
    ["src/pages/index.astro", _page28]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4fb38439-3049-4311-b1d3-6d47070a1097",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
