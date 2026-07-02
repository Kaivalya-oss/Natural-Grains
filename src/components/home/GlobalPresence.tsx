import worldMap from "@/assets/world-map.jpg";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { n: 60, s: "+", l: "Countries Served" },
  { n: 120000, s: "+", l: "Tons / Year" },
  { n: 45, s: "+", l: "Years of Experience" },
  { n: 400, s: "+", l: "Business Partners" },
];

export function GlobalPresence() {
  return (
    <section className="bg-field-deep py-32 md:py-40 text-canvas">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              Global Reach
            </span>
            <h2 className="mt-6 text-balance font-display text-4xl leading-tight md:text-5xl">
              A supply chain trusted on five continents.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-canvas/65">
              From flagship retailers in Europe to wholesale distributors across the
              Americas, Middle East and Asia-Pacific - our consignments arrive on time,
              every time.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <img
              src={worldMap}
              alt="World map highlighting Natural Grains export regions"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full"
            />
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px bg-canvas/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div className="bg-field-deep p-8 text-center md:p-10">
                <div className="font-display text-5xl text-gold md:text-6xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-canvas/50">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
