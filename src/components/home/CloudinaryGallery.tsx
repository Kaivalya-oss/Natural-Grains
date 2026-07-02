import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Reveal } from "@/components/ui/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getCloudinaryImages } from "@/api/cloudinary";

// Helper to inject Cloudinary transformations (f_auto, q_auto)
function getOptimizedUrl(url: string) {
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
}

export function CloudinaryGallery() {
  const { data: images, isLoading } = useQuery({
    queryKey: ["cloudinary-gallery"],
    queryFn: () => getCloudinaryImages(),
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      if (e.key === "ArrowRight" && images) {
        setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images]);

  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Live Showcase
          </span>
          <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            Latest highlights and updates.
          </h2>
        </Reveal>

        <div className="mt-16">
          {isLoading ? (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`animate-pulse bg-ink/5 rounded-2xl break-inside-avoid ${i % 2 === 0 ? 'h-64' : 'h-80'}`}></div>
              ))}
            </div>
          ) : images && images.length > 0 ? (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {images.map((img, i) => (
                <Reveal key={img.id} delay={(i % 4) * 100}>
                  <div
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-ink/5 break-inside-avoid shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-ink/10"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img
                      src={getOptimizedUrl(img.url)}
                      alt="Natural Grains Gallery"
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border border-dashed border-ink/20 rounded-2xl bg-ink/5">
              <p className="text-xl text-ink font-display">Gallery images will be available soon.</p>
              <p className="text-sm text-muted-foreground mt-2">Check back later for our latest updates.</p>
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && images && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white/70 transition-colors hover:text-white z-50 bg-black/20 rounded-full hover:bg-black/40"
          >
            <X className="size-8" strokeWidth={1.5} />
          </button>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
            disabled={lightboxIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 transition-all hover:text-white disabled:opacity-0 z-50 bg-black/20 rounded-full hover:bg-black/40"
          >
            <ChevronLeft className="size-8" strokeWidth={1.5} />
          </button>

          <div className="relative max-h-full max-w-full flex items-center justify-center">
            <img
              src={getOptimizedUrl(images[lightboxIndex].url)}
              alt="Fullscreen view"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>

          <button
            onClick={() => setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev))}
            disabled={lightboxIndex === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 transition-all hover:text-white disabled:opacity-0 z-50 bg-black/20 rounded-full hover:bg-black/40"
          >
            <ChevronRight className="size-8" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}
