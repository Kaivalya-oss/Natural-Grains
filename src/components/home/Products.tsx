import { Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="bg-ink py-32 md:py-40 text-canvas">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                The Collection
              </span>
              <h2 className="mt-6 text-balance font-display text-4xl leading-tight md:text-5xl">
                Premium varieties, milled to specification.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-canvas/55">
              Five signature varieties available in retail packs and bulk export sizes.
              Custom private-label packaging available on request.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 bg-canvas/95 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-field-deep">
                    Premium
                  </div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-white p-2 rounded shadow-xl overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
                     <img src={p.packagingImage} alt={p.name + " packaging"} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="mt-6 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-canvas">{p.name}</h3>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-gold">
                        {p.tagline}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-1 text-xs">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 border-b border-canvas/10 pb-2">
                        <span className="text-gold">•</span>
                        <span className="font-medium text-canvas/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919552955990?text=${encodeURIComponent(`Hi, I'm interested in ${p.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center justify-between border border-gold/40 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-field-deep"
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
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-canvas/10 pb-2">
      <dt className="text-canvas/50">{label}</dt>
      <dd className="font-medium text-canvas/85">{value}</dd>
    </div>
  );
}
