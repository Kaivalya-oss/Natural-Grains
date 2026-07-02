import { Reveal } from "@/components/ui/Reveal";
import { BadgeCheck } from "lucide-react";

const certs = [
  { name: "FSSAI", body: "License no: 11526030000034" },
];

export function Certifications() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 lg:gap-24">
          <Reveal className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              Compliance
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink md:text-5xl">
              Independently verified, internationally accepted.
            </h2>
          </Reveal>

          <div className="flex w-full justify-start md:justify-end">
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={i * 80} className="w-full max-w-md">
                <div className="relative overflow-hidden border border-ink/10 bg-canvas p-10 md:p-12">
                  <div className="absolute -right-6 -top-6 text-ink/5">
                    <BadgeCheck className="size-32" strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <BadgeCheck className="size-10 text-gold" strokeWidth={1.5} />
                    <h3 className="mt-8 font-display text-3xl text-ink">{c.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
