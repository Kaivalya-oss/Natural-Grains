import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/Logo.png";

export function Footer() {
  return (
    <footer className="bg-field-deep text-canvas">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <img src={logoImg} alt="Natural Grains" className="h-12 w-auto object-contain" />
              <span className="font-display text-2xl tracking-tight">Natural Grains</span>
            </div>
            <p className="max-w-sm text-sm text-canvas/55 leading-relaxed">
              Nature's finest products, nurtured by skilled farmers, bringing pure and authentic rice to your family.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["FSSAI"].map((c) => (
                <span
                  key={c}
                  className="border border-canvas/15 px-3 py-1.5 text-[10px] uppercase tracking-widest text-canvas/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-gold">
              Navigate
            </h5>
            <ul className="space-y-3 text-sm text-canvas/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-gold">
              Varieties
            </h5>
            <ul className="space-y-3 text-sm text-canvas/70">
              <li>Kalimooch</li>
              <li>Jeera Rice</li>
              <li>Steam Jeera Rice</li>
              <li>Krushnakamod</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-gold">
              Contact
            </h5>
            <div className="text-sm text-canvas/70 space-y-1">
              <p>greenfieldindustriess@gmail.com</p>
              <p>Customer Care: 9552955990</p>
              <p className="mt-4 font-mono text-[10px] text-gold uppercase tracking-widest">FSSAI Lic. No. 11526030000034</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 border-t border-canvas/10 pt-8 text-[10px] uppercase tracking-widest text-canvas/40">
          <span>© {new Date().getFullYear()} Natural Grains. All rights reserved.</span>
          <div className="flex gap-8">
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Privacy</Link>
            <span>Export Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
