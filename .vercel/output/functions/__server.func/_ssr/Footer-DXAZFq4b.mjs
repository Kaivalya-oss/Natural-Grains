import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
const logoImg = "/assets/Logo-CRDCHHaR.png";
const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-canvas/85 backdrop-blur-md border-b border-ink/5" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Natural Grains", className: "h-10 w-auto object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-xl tracking-tight ${scrolled ? "text-ink" : "text-canvas mix-blend-difference"}`, children: "Natural Grains" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] ${scrolled ? "text-ink/70" : "text-canvas mix-blend-difference"}`, children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "hover:text-gold transition-colors",
              activeProps: { className: "text-gold" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "hidden md:inline-flex items-center bg-field px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-gold transition-colors",
              children: "Inquire"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              className: `md:hidden ${scrolled ? "text-ink" : "text-canvas mix-blend-difference"}`,
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `md:hidden absolute w-full bg-canvas border-b border-ink/5 transition-all duration-300 ease-in-out origin-top overflow-hidden shadow-lg ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 px-6 py-6", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "py-3 text-sm uppercase tracking-widest text-ink/80 hover:text-gold transition-colors",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "mt-4 inline-flex justify-center bg-field py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-gold transition-colors",
                  children: "Request Inquiry"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-field-deep text-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-24 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Natural Grains", className: "h-12 w-auto object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl tracking-tight", children: "Natural Grains" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm text-canvas/55 leading-relaxed", children: "Nature's finest products, nurtured by skilled farmers, bringing pure and authentic rice to your family." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-3", children: ["FSSAI"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "border border-canvas/15 px-3 py-1.5 text-[10px] uppercase tracking-widest text-canvas/60",
            children: c
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-6 font-mono text-[10px] uppercase tracking-widest text-gold", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-canvas/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-gold transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-gold transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-gold transition-colors", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-6 font-mono text-[10px] uppercase tracking-widest text-gold", children: "Varieties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-canvas/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Kalimooch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Jeera Rice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Steam Jeera Rice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Krushnakamod" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-6 font-mono text-[10px] uppercase tracking-widest text-gold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-canvas/70 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "greenfieldindustriess@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customer Care: 9552955990" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-mono text-[10px] text-gold uppercase tracking-widest", children: "FSSAI Lic. No. 11526030000034" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col md:flex-row justify-between gap-4 border-t border-canvas/10 pt-8 text-[10px] uppercase tracking-widest text-canvas/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Natural Grains. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Export Terms" })
      ] })
    ] })
  ] }) });
}
export {
  Footer as F,
  Nav as N
};
