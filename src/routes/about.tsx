import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { Certifications } from "@/components/home/Certifications";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Natural Grains | Premium Rice Manufacturer" },
      {
        name: "description",
        content:
          "Four decades of mastery in premium rice cultivation. Learn about our story, mission, vision and quality protocols.",
      },
      { property: "og:title", content: "About - Natural Grains" },
      {
        property: "og:description",
        content:
          "Four decades of mastery in premium rice cultivation and distribution.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-canvas">
      <Nav />
      <main className="pt-24">
        <header className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Our Heritage
          </span>
          <h1 className="mt-6 mx-auto max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink md:text-6xl">
            A heritage rooted in fertile soil. A future built on precision.
          </h1>
        </header>
        <About />
        <Process />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
