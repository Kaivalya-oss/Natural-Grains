import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-DXAZFq4b.mjs";
import { p as products } from "./products-DB_KMtVB.mjs";
import { R as Reveal } from "./Reveal-BvCDmFk6.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-canvas", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-32 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto max-w-7xl px-6 py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "The Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 mx-auto max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink md:text-6xl", children: "Premium varieties, selected for you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground", children: "From daily meals to festive occasions, Natural Grains brings you the finest quality rice." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-px bg-ink/10", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `grid items-center gap-12 bg-canvas px-2 py-16 md:grid-cols-2 md:gap-20 md:px-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-surface rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 w-32 h-32 md:w-48 md:h-48 bg-white p-2 rounded-lg shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.packagingImage, alt: p.name + " packaging", className: "w-full h-full object-contain" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Premium" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-ink md:text-5xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: p.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base leading-relaxed text-ink/80", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid grid-cols-2 gap-4", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-ink/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
          ] }, f)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/919552955990?text=${encodeURIComponent(`Hi, I'm interested in ${p.name}.`)}`, target: "_blank", rel: "noreferrer", className: "mt-10 inline-flex items-center gap-3 bg-field px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-gold transition-colors", children: [
            "Inquire on WhatsApp",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14, strokeWidth: 1.6 })
          ] })
        ] })
      ] }) }, p.slug)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProductsPage as component
};
