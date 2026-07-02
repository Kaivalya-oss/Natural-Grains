import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-rice-fields.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-field-deep">
      <div
        className="absolute inset-0 animate-hero-zoom"
        style={{ transform: `translateY(${offset}px) scale(1.05)` }}
      >
        <img
          src={heroImg}
          alt="Vast golden rice fields at sunrise with misty mountains in the distance"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-field-deep/40 via-field-deep/30 to-field-deep/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="animate-reveal block font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          From Farm to Dish
        </span>
        <h1 className="animate-reveal mt-8 max-w-4xl text-balance font-display text-5xl leading-[0.95] text-canvas md:text-7xl lg:text-8xl" style={{ animationDelay: "200ms" }}>
          Healthy Grains <br /><em className="text-gold not-italic font-normal italic">Happy Life</em>
        </h1>
        <p className="animate-reveal mt-8 max-w-xl text-pretty text-base text-canvas/75 md:text-lg" style={{ animationDelay: "400ms" }}>
          Delivering premium quality rice from farm to dish - trusted by homes,
          distributors, and retailers across the country.
        </p>
        <div className="animate-reveal mt-12 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "600ms" }}>
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-field-deep hover:bg-canvas transition-colors"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-canvas/30 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-canvas/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="h-14 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
