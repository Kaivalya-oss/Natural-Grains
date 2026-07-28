import { Award, Cog, ShieldCheck, Truck, Wheat, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  { icon: Award, title: "Premium Quality", text: "Hand-selected paddy from the most fertile growing regions, aged to maximize flavour and elongation." },
  { icon: Cog, title: "Advanced Processing", text: "Sortex-cleaned and moisture-controlled milling in modern facilities." },
  { icon: ShieldCheck, title: "Hygienic Packaging", text: "Vacuum and BOPP packaging meeting international food-grade standards for long transit." },
  { icon: Wheat, title: "Trusted Supply Chain", text: "Direct partnerships with 1,200+ verified farms ensure traceability from field to container." },
  { icon: Award, title: "Consistent Grading", text: "Every batch is laboratory-tested for length, moisture, broken percentage and aroma profile." },
  { icon: Truck, title: "Timely Delivery", text: "Container-ready logistics with documented experience to 60+ destinations." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Why partner with us
          </span>
          <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            A standard of excellence at every stage.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            From paddy procurement to final dispatch, our protocols are designed for
            partners who cannot afford inconsistency.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group h-full bg-canvas p-10 transition-all duration-500 hover:bg-field hover:text-canvas">
                <item.icon className="size-8 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} />
                <h3 className="mt-8 font-display text-2xl text-ink group-hover:text-canvas">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-canvas/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
