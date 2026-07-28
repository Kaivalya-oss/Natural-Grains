import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Reveal } from "./Reveal-BvCDmFk6.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(100),
  company: stringType().trim().max(150).optional(),
  phone: stringType().trim().min(5, "Phone required").max(30),
  email: stringType().trim().email("Invalid email").max(255),
  state: stringType().min(1, "Please select a state"),
  requirement_type: stringType().min(1, "Please select"),
  message: stringType().trim().max(1500).optional()
});
const requirementTypes = [
  "Distributor / Wholesaler",
  "Retail Chain",
  "Restaurant / Hospitality",
  "Export / Import Agent",
  "Private Label",
  "Personal Use",
  "Other"
];
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];
function InquiryForm() {
  const [loading, setLoading] = reactExports.useState(false);
  function onSubmit(e) {
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
Message: ${parsed.data.message || "N/A"}`;
    const waUrl = `https://wa.me/919552955990?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    e.target.reset();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "inquiry", className: "bg-field-deep py-32 md:py-40 text-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "Business Inquiry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-balance font-display text-4xl leading-tight md:text-5xl", children: "Partner with the masters of the grain." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-canvas/60", children: "Distributors, retailers, exporters and hospitality groups our trade desk responds to every inquiry within 24 hours." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", label: "Full Name", placeholder: "Rahul Sharma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "company", label: "Company Name (Optional)", placeholder: "Sharma Enterprises", required: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "phone", label: "Phone", placeholder: "+91 98765 43210", type: "tel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", label: "Email", placeholder: "contact@sharmaent.in", type: "email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold", children: "State" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            name: "state",
            required: true,
            defaultValue: "",
            className: "w-full appearance-none border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas focus:border-gold focus:outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, className: "text-ink", children: "Select State…" }),
              indianStates.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, className: "text-ink", children: s }, s))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold", children: "Requirement Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            name: "requirement_type",
            required: true,
            defaultValue: "",
            className: "w-full appearance-none border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas focus:border-gold focus:outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, className: "text-ink", children: "Select…" }),
              requirementTypes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: r, className: "text-ink", children: r }, r))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            name: "message",
            rows: 4,
            placeholder: "Variety, volume, packaging, destination port…",
            className: "w-full resize-none border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas placeholder:text-canvas/30 focus:border-gold focus:outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "mt-6 bg-gold py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-field-deep transition-colors hover:bg-canvas md:col-span-2 disabled:opacity-60",
          children: loading ? "Submitting…" : "Request a Business Inquiry"
        }
      )
    ] }) })
  ] }) });
}
function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name,
        type,
        required,
        placeholder,
        className: "w-full border-b border-canvas/20 bg-transparent py-3 text-sm text-canvas placeholder:text-canvas/30 focus:border-gold focus:outline-none"
      }
    )
  ] });
}
export {
  InquiryForm as I
};
