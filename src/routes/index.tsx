import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Products } from "@/components/home/Products";
import { Process } from "@/components/home/Process";
import { Certifications } from "@/components/home/Certifications";
import { Gallery } from "@/components/home/Gallery";
import { CloudinaryGallery } from "@/components/home/CloudinaryGallery";
import { Testimonials } from "@/components/home/Testimonials";
import { InquiryForm } from "@/components/home/InquiryForm";
import heroImg from "@/assets/hero-rice-fields.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natural Grains | Premium Rice Manufacturer" },
      {
        name: "description",
        content:
          "Premium basmati, long grain, steam, sella and brown rice exported to 60+ countries. Trusted by distributors, retailers and restaurants worldwide.",
      },
      { property: "og:title", content: "Natural Grains - Healthy Grains Happy Life" },
      {
        property: "og:description",
        content:
          "Premium quality rice from farm to dish - trusted by homes, distributors, and retailers.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-canvas">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <Process />
        <Certifications />
        <Gallery />
        <Testimonials />
        <CloudinaryGallery />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
