import { Reveal } from "@/components/ui/Reveal";

const quotes = [
  {
    q: "Natural Grains's basmati has been our retail benchmark for seven years. Consistency, paperwork and on-time shipping - flawless.",
    n: "Markus Lehmann",
    r: "Head of Procurement, Continental Retail Group",
  },
  {
    q: "We supply 240 restaurants across the Gulf. Natural Grains is the only exporter we have never had to switch away from.",
    n: "Aisha Al-Mansouri",
    r: "Director, Al-Mansouri Foodservice",
  },
  {
    q: "Their sella grade is the cleanest we receive from the subcontinent. The cooking yield is reliably 10% above competitors.",
    n: "Jean-Pierre Reyes",
    r: "Master Chef & Owner, Maison Réyes",
  },
  {
    q: "From 5kg retail pouches to 50kg bulk - every spec we ask for arrives exactly as agreed. A true B2B partner.",
    n: "Priya Venkatesh",
    r: "Export Manager, Pacific Foods Ltd.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Voices of our partners
          </span>
          <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            Trusted by retailers, restaurants and exporters worldwide.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.n} delay={i * 100}>
              <figure className="h-full bg-canvas p-10 md:p-12">
                <div className="font-display text-5xl leading-none text-gold">"</div>
                <blockquote className="mt-4 font-display text-xl leading-snug text-ink md:text-2xl">
                  {q.q}
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-6">
                  <div className="font-medium text-ink">{q.n}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {q.r}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
