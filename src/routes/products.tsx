import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { products } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Natural Grains | Premium Rice Manufacturer" },
      {
        name: "description",
        content:
          "Explore our premium rice varieties: Jeera Rice and Krushnakamod Rice.",
      },
      { property: "og:title", content: "Rice Varieties - Natural Grains" },
      {
        property: "og:description",
        content:
          "Premium rice varieties, selected and processed with modern cleaning technology.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="bg-canvas">
      <Nav />
      <main className="pt-32 pb-20">
        <header className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            The Collection
          </span>
          <h1 className="mt-6 mx-auto max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink md:text-6xl">
            Premium varieties, selected for you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            From daily meals to festive occasions, Natural Grains brings you the finest quality rice.
          </p>
        </header>

        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-px bg-ink/10">
            {products.map((p, i) => (
              <Reveal key={p.slug}>
                <article className={`grid items-center gap-12 bg-canvas px-2 py-16 md:grid-cols-2 md:gap-20 md:px-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative overflow-hidden bg-surface rounded-sm">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 w-32 h-32 md:w-48 md:h-48 bg-white p-2 rounded-lg shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                       <img src={p.packagingImage} alt={p.name + " packaging"} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                      Premium
                    </span>
                    <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
                      {p.name}
                    </h2>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.tagline}
                    </p>
                    <p className="mt-8 text-base leading-relaxed text-ink/80">
                      {p.description}
                    </p>
                    <ul className="mt-10 grid grid-cols-2 gap-4">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-ink/80">
                          <span className="text-gold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919552955990?text=${encodeURIComponent(`Hi, I'm interested in ${p.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-10 inline-flex items-center gap-3 bg-field px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-gold transition-colors"
                    >
                      Inquire on WhatsApp
                      <ArrowUpRight size={14} strokeWidth={1.6} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-canvas p-5">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-ink">{value}</div>
    </div>
  );
}
