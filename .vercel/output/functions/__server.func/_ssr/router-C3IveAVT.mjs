import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
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
const appCss = "/assets/styles-JW9qPFqT.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-canvas px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-8xl text-field", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl text-ink", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The page you're looking for has moved or no longer exists." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center bg-field px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-gold",
        children: "Return Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-canvas px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-ink", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "We couldn't load this page. Please try again or return home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center bg-field px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-canvas hover:bg-gold",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center border border-ink/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink hover:bg-surface",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Natural Grains | Premium Rice Manufacturer" },
      {
        name: "description",
        content: "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale, retail, and export markets."
      },
      { name: "author", content: "Natural Grains" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Natural Grains" },
      { property: "og:title", content: "Natural Grains | Premium Rice Manufacturer" },
      { property: "og:description", content: "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale, retail, and export markets." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Natural Grains | Premium Rice Manufacturer" },
      { name: "twitter:description", content: "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale, retail, and export markets." }
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Natural Grains",
          description: "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale, retail, and export markets.",
          foundingDate: "1978"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-right", theme: "light" })
  ] });
}
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/products", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./products-B9Fk6a5f.mjs");
const Route$4 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Natural Grains | Premium Rice Manufacturer"
    }, {
      name: "description",
      content: "Explore our premium rice varieties: Jeera Rice and Krushnakamod Rice."
    }, {
      property: "og:title",
      content: "Rice Varieties - Natural Grains"
    }, {
      property: "og:description",
      content: "Premium rice varieties, selected and processed with modern cleaning technology."
    }, {
      property: "og:url",
      content: "/products"
    }],
    links: [{
      rel: "canonical",
      href: "/products"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./privacy-BxzXTplC.mjs");
const Route$3 = createFileRoute("/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Natural Grains | Premium Rice Manufacturer"
    }, {
      name: "description",
      content: "Privacy Policy for Natural Grains"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./contact-CamW78i5.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Natural Grains | Premium Rice Manufacturer"
    }, {
      name: "description",
      content: "Speak with our team. Distributors, retailers, restaurants and exporters - we respond to all inquiries within 24 hours."
    }, {
      property: "og:title",
      content: "Contact - Natural Grains"
    }, {
      property: "og:description",
      content: "Speak with our team - we respond within 24 hours."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DtXAXc-U.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Natural Grains | Premium Rice Manufacturer"
    }, {
      name: "description",
      content: "Four decades of mastery in premium rice cultivation and export. Learn about our story, mission, vision and quality protocols."
    }, {
      property: "og:title",
      content: "About - Natural Grains"
    }, {
      property: "og:description",
      content: "Four decades of mastery in premium rice cultivation and global export."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const hero = "/assets/hero-rice-fields-CQfqV2dy.jpg";
const $$splitComponentImporter = () => import("./index-BUbkE7Aj.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Natural Grains | Premium Rice Manufacturer"
    }, {
      name: "description",
      content: "Premium basmati, long grain, steam, sella and brown rice exported to 60+ countries. Trusted by distributors, retailers and restaurants worldwide."
    }, {
      property: "og:title",
      content: "Natural Grains - Healthy Grains Happy Life"
    }, {
      property: "og:description",
      content: "Premium quality rice from farm to dish - trusted by homes, distributors, and retailers."
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:image",
      content: hero
    }, {
      property: "twitter:image",
      content: hero
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ProductsRoute = Route$4.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$6
});
const PrivacyRoute = Route$3.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PrivacyRoute,
  ProductsRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  hero as h,
  router as r
};
