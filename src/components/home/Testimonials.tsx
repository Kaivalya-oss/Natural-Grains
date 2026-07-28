import { Reveal } from "@/components/ui/Reveal";

const quotes = [
  {
    q: "Natural Grains always delivers on time, making them my first choice. Great service and dependable quality!",
    n: "Akarsh Patel",
    r: "Customer",
  },
  {
    q: "Natural Grains Jeera Rice cooks perfectly and has an excellent taste. It's the ideal choice for everyday meals flavorful, wholesome, and easy to digest.",
    n: "Sharad Lodha",
    r: "Customer",
  },
  {
    q: "Premium quality with remarkable consistency. Every order has exceeded my expectations, making it a brand I trust.",
    n: "Rajesh Agrawal",
    r: "Customer",
  },
  {
    q: "A brand that genuinely cares about its retailers. Their professionalism and support make them a preferred business partner.",
    n: "V-Mart",
    r: "Retail Partner",
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
