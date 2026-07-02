import facility from "@/assets/rice-gallery-packaging.png";
import warehouse from "@/assets/rice-gallery-warehouse.png";
import harvest from "@/assets/rice-gallery-harvest.png";
import packaging from "@/assets/rice-gallery-field.png";
import hero from "@/assets/hero-rice-fields.jpg";
import about from "@/assets/about-rice-hands.png";
import { Reveal } from "@/components/ui/Reveal";

const tiles = [
  { src: hero, alt: "Rice fields at sunrise", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: warehouse, alt: "Rice stacked in warehouse", span: "md:row-span-2 aspect-[3/4] md:aspect-auto" },
  { src: harvest, alt: "Farmer harvesting rice at sunset", span: "aspect-square" },
  { src: facility, alt: "Modern rice packaging facility", span: "aspect-square" },
  { src: packaging, alt: "Lush green rice field", span: "md:col-span-2 aspect-[2/1]" },
  { src: about, alt: "Hands holding white rice", span: "md:col-span-2 aspect-[2/1]" },
];

export function Gallery() {
  return (
    <section className="bg-canvas py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Gallery
          </span>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink md:text-5xl">
            From field to facility - moments from the journey.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {tiles.map((t, i) => (
            <Reveal key={i} delay={i * 50} className={t.span}>
              <div className="group h-full w-full overflow-hidden">
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
