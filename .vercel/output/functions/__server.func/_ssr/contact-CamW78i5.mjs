import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-DXAZFq4b.mjs";
import { I as InquiryForm } from "./InquiryForm-BN55lkl4.mjs";
import "../_libs/sonner.mjs";
import { a as Mail, P as Phone } from "../_libs/lucide-react.mjs";
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
import "./Reveal-BvCDmFk6.mjs";
import "../_libs/zod.mjs";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-canvas", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto max-w-7xl px-6 py-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 mx-auto max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink md:text-6xl", children: "Let's discuss your requirement." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-16 grid max-w-4xl gap-px bg-ink/10 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, label: "Email", value: "greenfieldindustriess@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, label: "Customer Care", value: "9552955990" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Info({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-canvas p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto size-5 text-gold", strokeWidth: 1.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-medium text-ink", children: value })
  ] });
}
export {
  ContactPage as component
};
