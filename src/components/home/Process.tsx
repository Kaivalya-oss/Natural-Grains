import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", t: "Farm Selection", d: "Partnering with farms whose soil and water profiles meet our cultivation standards." },
  { n: "02", t: "Harvesting", d: "Paddy harvested at optimal moisture for the highest milling yield and grain integrity." },
  { n: "03", t: "Cleaning", d: "Multi-stage de-stoning and sieving to remove foreign matter before milling." },
  { n: "04", t: "Quality Inspection", d: "Laboratory analysis for moisture, broken percentage, aroma and chemical residue." },
  { n: "05", t: "Packaging", d: "Hygienic, food-grade packaging from 1 kg retail to 50 kg bulk export sacks." },
  { n: "06", t: "Distribution", d: "Container-ready dispatch with full export documentation to 60+ destinations." },
];

export function Process() {
  return (
    <section id="process" className="bg-canvas py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Quality Protocol
          </span>
          <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            From paddy field to your warehouse - six precise stages.
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="absolute left-[1.45rem] top-3 bottom-3 w-px bg-ink/10 md:left-1/2" />
          <ol className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <li className={`grid grid-cols-[3rem_1fr] items-start gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative md:flex md:justify-end">
                    <div className="relative z-10 grid size-12 place-items-center rounded-full bg-field font-mono text-xs text-gold md:size-14">
                      {s.n}
                    </div>
                  </div>
                  <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <h3 className="font-display text-2xl text-ink">{s.t}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:max-w-sm md:inline-block">
                      {s.d}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
