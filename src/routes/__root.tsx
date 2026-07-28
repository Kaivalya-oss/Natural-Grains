import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-field">404</h1>
        <h2 className="mt-4 font-display text-2xl text-ink">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-field px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-gold"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ink">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          We couldn't load this page. Please try again or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-field px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-canvas hover:bg-gold"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Natural Grains | Premium Rice Manufacturer" },
      {
        name: "description",
        content:
          "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale and retail markets.",
      },
      { name: "author", content: "Natural Grains" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Natural Grains" },
      { property: "og:title", content: "Natural Grains | Premium Rice Manufacturer" },
      { property: "og:description", content: "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale and retail markets." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Natural Grains | Premium Rice Manufacturer" },
      { name: "twitter:description", content: "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale and retail markets." },
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
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Natural Grains",
          description:
            "Natural Grains is a trusted premium rice manufacturer and supplier, delivering high-quality rice for wholesale and retail markets.",
          foundingDate: "1978",
        }),
      },
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-0TXVH89K0J",
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0TXVH89K0J');
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="bottom-right" theme="light" />
    </QueryClientProvider>
  );
}
