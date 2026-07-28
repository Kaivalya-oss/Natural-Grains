import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CloudinaryGallery } from "@/components/home/CloudinaryGallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Natural Grains | Gallery" },
      {
        name: "description",
        content:
          "Explore our gallery featuring highlights and updates from Natural Grains.",
      },
      { property: "og:title", content: "Gallery - Natural Grains" },
      {
        property: "og:description",
        content:
          "Explore our gallery featuring highlights and updates from Natural Grains.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="bg-canvas flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-24">
        <CloudinaryGallery />
      </main>
      <Footer />
    </div>
  );
}
