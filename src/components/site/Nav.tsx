import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/Logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-canvas/85 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoImg} alt="Natural Grains" className="h-10 w-auto object-contain" />
          <span className={`font-display text-xl tracking-tight ${scrolled ? "text-ink" : "text-canvas mix-blend-difference"}`}>
            Natural Grains
          </span>
        </Link>

        <div className={`hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] ${scrolled ? "text-ink/70" : "text-canvas mix-blend-difference"}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center bg-field px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-gold transition-colors"
        >
          Inquire
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden ${scrolled ? "text-ink" : "text-canvas mix-blend-difference"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute w-full bg-canvas border-b border-ink/5 transition-all duration-300 ease-in-out origin-top overflow-hidden shadow-lg ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-widest text-ink/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center bg-field py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-canvas hover:bg-gold transition-colors"
          >
            Request Inquiry
          </Link>
        </div>
      </div>
    </nav>
  );
}
