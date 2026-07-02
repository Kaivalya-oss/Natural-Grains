import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/home/InquiryForm";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Natural Grains | Premium Rice Manufacturer" },
      {
        name: "description",
        content:
          "Speak with our team. Distributors, retailers, restaurants and exporters - we respond to all inquiries within 24 hours.",
      },
      { property: "og:title", content: "Contact - Natural Grains" },
      {
        property: "og:description",
        content: "Speak with our team - we respond within 24 hours.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-canvas">
      <Nav />
      <main className="pt-24">
        <header className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Get in touch
          </span>
          <h1 className="mt-6 mx-auto max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink md:text-6xl">
            Let's discuss your requirement.
          </h1>
          <div className="mx-auto mt-16 grid max-w-4xl gap-px bg-ink/10 md:grid-cols-2">
            <Info icon={Mail} label="Email" value="greenfieldindustriess@gmail.com" />
            <Info icon={Phone} label="Customer Care" value="9552955990" />
          </div>
        </header>
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-canvas p-8 text-center">
      <Icon className="mx-auto size-5 text-gold" strokeWidth={1.4} />
      <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-ink">{value}</div>
    </div>
  );
}
