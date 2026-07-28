import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-DXAZFq4b.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as hero } from "./router-C3IveAVT.mjs";
import { A as About, P as Process, C as Certifications, a as about } from "./Certifications-BxrilaYp.mjs";
import { R as Reveal } from "./Reveal-BvCDmFk6.mjs";
import { p as products } from "./products-DB_KMtVB.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DHLHTaCP.mjs";
import { I as InquiryForm } from "./InquiryForm-BN55lkl4.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { b as Award, C as Cog, S as ShieldCheck, W as Wheat, T as Truck, A as ArrowUpRight, X, c as ChevronLeft, d as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
function Hero() {
  const [offset, setOffset] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen min-h-[640px] w-full overflow-hidden bg-field-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute inset-0 animate-hero-zoom",
        style: { transform: `translateY(${offset}px) scale(1.05)` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: hero,
              alt: "Vast golden rice fields at sunrise with misty mountains in the distance",
              width: 1920,
              height: 1280,
              className: "h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-field-deep/40 via-field-deep/30 to-field-deep/80" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-reveal block font-mono text-[10px] uppercase tracking-[0.4em] text-gold", children: "From Farm to Dish" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-reveal mt-8 max-w-4xl text-balance font-display text-5xl leading-[0.95] text-canvas md:text-7xl lg:text-8xl", style: { animationDelay: "200ms" }, children: [
        "Healthy Grains ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic font-normal italic", children: "Happy Life" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-reveal mt-8 max-w-xl text-pretty text-base text-canvas/75 md:text-lg", style: { animationDelay: "400ms" }, children: "Delivering premium quality rice from farm to dish - trusted by homes, distributors, and retailers across the country." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-reveal mt-12 flex flex-col gap-3 sm:flex-row", style: { animationDelay: "600ms" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products",
            className: "inline-flex items-center justify-center bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-field-deep hover:bg-canvas transition-colors",
            children: "Explore Products"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center justify-center border border-canvas/30 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-canvas/10 transition-colors",
            children: "Contact Us"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-1/2 z-10 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-px bg-gradient-to-b from-gold to-transparent" }) })
  ] });
}
const items = [
  { icon: Award, title: "Premium Quality", text: "Hand-selected paddy from the most fertile growing regions, aged to maximize flavour and elongation." },
  { icon: Cog, title: "Advanced Processing", text: "Sortex-cleaned, double polished, and moisture-controlled milling in modern facilities." },
  { icon: ShieldCheck, title: "Hygienic Packaging", text: "Vacuum and BOPP packaging meeting international food-grade standards for long transit." },
  { icon: Wheat, title: "Trusted Supply Chain", text: "Direct partnerships with 1,200+ verified farms ensure traceability from field to container." },
  { icon: Award, title: "Consistent Grading", text: "Every batch is laboratory-tested for length, moisture, broken percentage and aroma profile." },
  { icon: Truck, title: "Timely Delivery", text: "Container-ready logistics with documented export experience to 60+ destinations." }
];
function WhyChooseUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Why partner with us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl", children: "A standard of excellence at every stage." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground", children: "From paddy procurement to final dispatch, our protocols are designed for partners who cannot afford inconsistency." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full bg-canvas p-10 transition-all duration-500 hover:bg-field hover:text-canvas", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-8 text-gold transition-transform duration-500 group-hover:scale-110", strokeWidth: 1.4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-2xl text-ink group-hover:text-canvas", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-canvas/70", children: item.text })
    ] }) }, item.title)) })
  ] }) });
}
function Products() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "bg-ink py-32 md:py-40 text-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "The Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight md:text-5xl", children: "Premium varieties, milled to specification." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm leading-relaxed text-canvas/55", children: "Five signature varieties available in retail packs and bulk export sizes. Custom private-label packaging available on request." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: products.slice(0, 6).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: p.image,
            alt: p.name,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 bg-canvas/95 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-field-deep", children: "Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 w-24 h-24 bg-white p-2 rounded shadow-xl overflow-hidden transform group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.packagingImage, alt: p.name + " packaging", className: "w-full h-full object-contain" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-canvas", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block font-mono text-[10px] uppercase tracking-widest text-gold", children: p.tagline })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-1 text-xs", children: p.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 border-b border-canvas/10 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-canvas/85", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://wa.me/919552955990?text=${encodeURIComponent(`Hi, I'm interested in ${p.name}.`)}`,
            target: "_blank",
            rel: "noreferrer",
            className: "mt-8 inline-flex items-center justify-between border border-gold/40 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-field-deep",
            children: [
              "Inquire on WhatsApp",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14, strokeWidth: 1.6 })
            ]
          }
        )
      ] })
    ] }) }, p.slug)) })
  ] }) });
}
const facility = "/assets/rice-gallery-packaging-g3mq3szu.png";
const warehouse = "/assets/rice-gallery-warehouse-zmC8TTuP.png";
const harvest = "/assets/rice-gallery-harvest-BmQeYFZc.png";
const packaging = "/assets/rice-gallery-field-DTruthed.png";
const tiles = [
  { src: hero, alt: "Rice fields at sunrise", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: warehouse, alt: "Rice stacked in warehouse", span: "md:row-span-2 aspect-[3/4] md:aspect-auto" },
  { src: harvest, alt: "Farmer harvesting rice at sunset", span: "aspect-square" },
  { src: facility, alt: "Modern rice packaging facility", span: "aspect-square" },
  { src: packaging, alt: "Lush green rice field", span: "md:col-span-2 aspect-[2/1]" },
  { src: about, alt: "Hands holding white rice", span: "md:col-span-2 aspect-[2/1]" }
];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-canvas py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl leading-tight text-ink md:text-5xl", children: "From field to facility - moments from the journey." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4", children: tiles.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 50, className: t.span, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group h-full w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: t.src,
        alt: t.alt,
        loading: "lazy",
        className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
      }
    ) }) }, i)) })
  ] }) });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getCloudinaryImages = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ab7f1a38c9fb738b5b1327697a4eb20010632758df7fcc666e681db9303df8b8"));
function getOptimizedUrl(url) {
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
}
function CloudinaryGallery() {
  const { data: images, isLoading } = useQuery({
    queryKey: ["cloudinary-gallery"],
    queryFn: () => getCloudinaryImages()
  });
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  reactExports.useEffect(() => {
    function handleKeyDown(e) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : prev);
      if (e.key === "ArrowRight" && images) {
        setLightboxIndex((prev) => prev !== null && prev < images.length - 1 ? prev + 1 : prev);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-canvas py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Live Showcase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl", children: "Latest highlights and updates." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `animate-pulse bg-ink/5 rounded-2xl break-inside-avoid ${i % 2 === 0 ? "h-64" : "h-80"}` }, i)) }) : images && images.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "group relative cursor-pointer overflow-hidden rounded-2xl bg-ink/5 break-inside-avoid shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-ink/10",
          onClick: () => setLightboxIndex(i),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: getOptimizedUrl(img.url),
              alt: "Natural Grains Gallery",
              loading: "lazy",
              className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            }
          )
        }
      ) }, img.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-32 text-center border border-dashed border-ink/20 rounded-2xl bg-ink/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-ink font-display", children: "Gallery images will be available soon." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Check back later for our latest updates." })
      ] }) })
    ] }),
    lightboxIndex !== null && images && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setLightboxIndex(null),
          className: "absolute top-6 right-6 p-2 text-white/70 transition-colors hover:text-white z-50 bg-black/20 rounded-full hover:bg-black/40",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-8", strokeWidth: 1.5 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : prev),
          disabled: lightboxIndex === 0,
          className: "absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 transition-all hover:text-white disabled:opacity-0 z-50 bg-black/20 rounded-full hover:bg-black/40",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-8", strokeWidth: 1.5 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-h-full max-w-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: getOptimizedUrl(images[lightboxIndex].url),
          alt: "Fullscreen view",
          className: "max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setLightboxIndex((prev) => prev !== null && prev < images.length - 1 ? prev + 1 : prev),
          disabled: lightboxIndex === images.length - 1,
          className: "absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 transition-all hover:text-white disabled:opacity-0 z-50 bg-black/20 rounded-full hover:bg-black/40",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-8", strokeWidth: 1.5 })
        }
      )
    ] })
  ] });
}
const quotes = [
  {
    q: "Natural Grains's basmati has been our retail benchmark for seven years. Consistency, paperwork and on-time shipping - flawless.",
    n: "Markus Lehmann",
    r: "Head of Procurement, Continental Retail Group"
  },
  {
    q: "We supply 240 restaurants across the Gulf. Natural Grains is the only exporter we have never had to switch away from.",
    n: "Aisha Al-Mansouri",
    r: "Director, Al-Mansouri Foodservice"
  },
  {
    q: "Their sella grade is the cleanest we receive from the subcontinent. The cooking yield is reliably 10% above competitors.",
    n: "Jean-Pierre Reyes",
    r: "Master Chef & Owner, Maison Réyes"
  },
  {
    q: "From 5kg retail pouches to 50kg bulk - every spec we ask for arrives exactly as agreed. A true B2B partner.",
    n: "Priya Venkatesh",
    r: "Export Manager, Pacific Foods Ltd."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Voices of our partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl", children: "Trusted by retailers, restaurants and exporters worldwide." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-6 md:grid-cols-2", children: quotes.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "h-full bg-canvas p-10 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl leading-none text-gold", children: '"' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-4 font-display text-xl leading-snug text-ink md:text-2xl", children: q.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 border-t border-ink/10 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-ink", children: q.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: q.r })
      ] })
    ] }) }, q.n)) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-canvas", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CloudinaryGallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Home as component
};
