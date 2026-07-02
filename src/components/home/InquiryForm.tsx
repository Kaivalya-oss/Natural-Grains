import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/ui/Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(150).optional(),
  phone: z.string().trim().min(5, "Phone required").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  state: z.string().min(1, "Please select a state"),
  requirement_type: z.string().min(1, "Please select"),
  message: z.string().trim().max(1500).optional(),
});

const requirementTypes = [
  "Distributor / Wholesaler",
  "Retail Chain",
  "Restaurant / Hospitality",
  "Export / Import Agent",
  "Private Label",
  "Personal Use",
  "Other",
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export function InquiryForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    const messageText = `Hi, I am ${parsed.data.name} from ${parsed.data.company}.
Phone: ${parsed.data.phone}
Email: ${parsed.data.email}
State: ${parsed.data.state}
Requirement: ${parsed.data.requirement_type}
Message: ${parsed.data.message || 'N/A'}`;

    const waUrl = `https://wa.me/919552955990?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank");

    toast.success("Redirecting to WhatsApp...");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="inquiry" className="bg-field-deep py-32 md:py-40 text-canvas">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            Business Inquiry
          </span>
          <h2 className="mt-6 text-balance font-display text-4xl leading-tight md:text-5xl">
            Partner with the masters of the grain.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-canvas/60">
            Distributors, retailers, exporters and hospitality groups our trade desk
            responds to every inquiry within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-16">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            <Field name="name" label="Full Name" placeholder="Rahul Sharma" />
            <Field name="company" label="Company Name (Optional)" placeholder="Sharma Enterprises" required={false} />
            <Field name="phone" label="Phone" placeholder="+91 98765 43210" type="tel" />
            <Field name="email" label="Email" placeholder="contact@sharmaent.in" type="email" />
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                State
              </label>
              <select
                name="state"
                required
                defaultValue=""
                className="w-full appearance-none border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas focus:border-gold focus:outline-none"
              >
                <option value="" disabled className="text-ink">
                  Select State…
                </option>
                {indianStates.map((s) => (
                  <option key={s} value={s} className="text-ink">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                Requirement Type
              </label>
              <select
                name="requirement_type"
                required
                defaultValue=""
                className="w-full appearance-none border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas focus:border-gold focus:outline-none"
              >
                <option value="" disabled className="text-ink">
                  Select…
                </option>
                {requirementTypes.map((r) => (
                  <option key={r} value={r} className="text-ink">
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Variety, volume, packaging, destination port…"
                className="w-full resize-none border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas placeholder:text-canvas/30 focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-gold py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-field-deep transition-colors hover:bg-canvas md:col-span-2 disabled:opacity-60"
            >
              {loading ? "Submitting…" : "Request a Business Inquiry"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = true,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas placeholder:text-canvas/30 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
