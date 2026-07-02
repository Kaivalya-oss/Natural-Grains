import aboutImg from "@/assets/about-rice-hands.png";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-canvas py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center md:gap-24">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="A farmer's weathered hands cradling freshly harvested white rice grains"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-8 -left-6 hidden bg-field p-8 text-canvas lg:block">
              <div className="font-display text-5xl">100%</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                Pure & Authentic
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              Our Story
            </span>
            <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
              Generations of tradition and expertise.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Nature's one of the finest products draws its unique aroma and taste from the special soil and climatic conditions found only in the mighty and misty land. Carefully nurtured by skilled farmers and harvested at the perfect time, each grain reflects generations of tradition and expertise. From the fields to the final pack, every step is guided by purity, authenticity, and quality-this is where the story of each bag of NATURAL GRAINS begins.
            </p>

            <div className="mt-12">
              <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-gold mb-6">
                Cooking Methods
              </h3>
              <div className="space-y-8">
                <Block
                  label="GENTLE BOIL"
                  text="Take a 1:3 ratio of rice and water in a bowl, boil it while stirring it occasionally reduce heat and boil gently, for 12-15 minutes, while keeping the bowl uncovered, drain well and serve."
                />
                <Block
                  label="PRESSURE COOKER"
                  text="Take 1 cup of rice add 3 cup of water place it in a pressure cooker and keep it on a burner for required time. After it is cooked, leave it for 5-10 minutes and enjoy the healthy and delicious rice."
                />
                <Block
                  label="ELECTRIC COOKER"
                  text="Add 1 cup of rice add 3 cup of water place it in a electric cooker, switch on and when it automatically shuts off, wait for 5-10 minutes and take out rice and serve."
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l-2 border-gold/40 pl-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
        {label}
      </div>
      <p className="text-base leading-relaxed text-ink/80">{text}</p>
    </div>
  );
}
