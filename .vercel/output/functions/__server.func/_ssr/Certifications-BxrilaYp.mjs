import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-BvCDmFk6.mjs";
import { B as BadgeCheck } from "../_libs/lucide-react.mjs";
const about = "/assets/about-rice-hands-BU0RlE4n.png";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "bg-canvas py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center md:gap-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: about,
          alt: "A farmer's weathered hands cradling freshly harvested white rice grains",
          width: 1024,
          height: 1280,
          loading: "lazy",
          className: "aspect-[4/5] w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-8 -left-6 hidden bg-field p-8 text-canvas lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl", children: "100%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold", children: "Pure & Authentic" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl", children: "Generations of tradition and expertise." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg leading-relaxed text-muted-foreground", children: "Nature's one of the finest products draws its unique aroma and taste from the special soil and climatic conditions found only in the mighty and misty land. Carefully nurtured by skilled farmers and harvested at the perfect time, each grain reflects generations of tradition and expertise. From the fields to the final pack, every step is guided by purity, authenticity, and quality-this is where the story of each bag of NATURAL GRAINS begins." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-[12px] uppercase tracking-[0.2em] text-gold mb-6", children: "Cooking Methods" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Block,
            {
              label: "GENTLE BOIL",
              text: "Take a 1:3 ratio of rice and water in a bowl, boil it while stirring it occasionally reduce heat and boil gently, for 12-15 minutes, while keeping the bowl uncovered, drain well and serve."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Block,
            {
              label: "PRESSURE COOKER",
              text: "Take 1 cup of rice add 3 cup of water place it in a pressure cooker and keep it on a burner for required time. After it is cooked, leave it for 5-10 minutes and enjoy the healthy and delicious rice."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Block,
            {
              label: "ELECTRIC COOKER",
              text: "Add 1 cup of rice add 3 cup of water place it in a electric cooker, switch on and when it automatically shuts off, wait for 5-10 minutes and take out rice and serve."
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
}
function Block({ label, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-gold/40 pl-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-ink/80", children: text })
  ] });
}
const steps = [
  { n: "01", t: "Farm Selection", d: "Partnering with farms whose soil and water profiles meet our cultivation standards." },
  { n: "02", t: "Harvesting", d: "Paddy harvested at optimal moisture for the highest milling yield and grain integrity." },
  { n: "03", t: "Cleaning", d: "Multi-stage de-stoning and sieving to remove foreign matter before milling." },
  { n: "04", t: "Quality Inspection", d: "Laboratory analysis for moisture, broken percentage, aroma and chemical residue." },
  { n: "05", t: "Packaging", d: "Hygienic, food-grade packaging from 1 kg retail to 50 kg bulk export sacks." },
  { n: "06", t: "Distribution", d: "Container-ready dispatch with full export documentation to 60+ destinations." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "bg-canvas py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Quality Protocol" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl", children: "From paddy field to your warehouse - six precise stages." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[1.45rem] top-3 bottom-3 w-px bg-ink/10 md:left-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-12", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `grid grid-cols-[3rem_1fr] items-start gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative md:flex md:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid size-12 place-items-center rounded-full bg-field font-mono text-xs text-gold md:size-14", children: s.n }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${i % 2 === 1 ? "md:text-right" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-ink", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:max-w-sm md:inline-block", children: s.d })
        ] })
      ] }) }, s.n)) })
    ] })
  ] }) });
}
const certs = [
  { name: "FSSAI", body: "License no: 11526030000034" }
];
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-16 md:grid-cols-2 lg:gap-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Compliance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl leading-tight text-ink md:text-5xl", children: "Independently verified, internationally accepted." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-start md:justify-end", children: certs.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden border border-ink/10 bg-canvas p-10 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 text-ink/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-32", strokeWidth: 1 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-10 text-gold", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-3xl text-ink", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-relaxed text-muted-foreground", children: c.body })
      ] })
    ] }) }, c.name)) })
  ] }) }) });
}
export {
  About as A,
  Certifications as C,
  Process as P,
  about as a
};
