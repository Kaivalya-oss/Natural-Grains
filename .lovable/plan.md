# Premium Rice Brand Website — Build Plan

Going with the **Cinematic Immersive** direction (Oryza Global style): cream canvas, deep field green, burnished gold, Playfair Display + Inter + JetBrains Mono. Best match for "cinematic hero", "high-end photography", and "large sections with breathing space".

## Brand identity (placeholder, easy to swap)
- Name: **Oryza Global**
- Tagline: "Purity in Every Grain"

## Routes
- `/` — full home with all sections listed below
- `/products` — full product catalog (5 varieties)
- `/about` — extended story, mission, vision, timeline
- `/contact` — inquiry form + map embed
- Each route gets its own `head()` meta (title, description, og:title/description). og:image only on leaves once hero images exist.

Home anchors (`#about`, `#products`, `#process`, `#inquiry`) drive in-page scroll for the long landing experience; standalone routes exist for SEO + deep linking.

## Sections on `/`
1. **Hero** — full-bleed rice-field image, headline "Purity in Every Grain", subhead, two CTAs (Explore Products → /products, Contact Us → /contact)
2. **About** — story, mission, vision side-by-side with portrait image
3. **Why Choose Us** — 6 cards (Premium Quality, Advanced Processing, Hygienic Packaging, Trusted Supply Chain, Consistent Grain Standards, Timely Delivery) with hover lift
4. **Product Showcase** — 5 cards (Basmati, Long Grain, Steam, Sella, Brown) with image, grain length, aroma, packaging sizes, grade. CTA: "Request Details" → scrolls to inquiry. No price, no cart.
5. **Quality Process** — 7-step vertical timeline (Farm Selection → Distribution), numbered, fade-up on scroll
6. **Certifications** — ISO, FSSAI, HACCP, Export — elegant cards
7. **Global Presence** — stylized world map image + 4 animated counters (Countries, Tons, Years, Partners)
8. **Gallery** — masonry grid (fields, processing, warehouses, packaging, product photography)
9. **Testimonials** — 3–4 quotes from distributor / retailer / restaurant / export partner
10. **Inquiry** — large form: Name, Company, Phone, Email, Country, Requirement Type (select), Message. CTA: "Request a Business Inquiry". Submits to a server function that stores leads.
11. **Footer** — quick links, product categories, contact info, socials, cert badges, Google Maps embed

## Imagery
Generate ~10 premium photos via imagegen (hero, about portrait, 5 product shots, 3 gallery shots, world map). All stored in `src/assets/`. Heroes get `og:image` per route.

## Animations (restrained)
- Smooth scroll, fade-up on intersection observer (custom small hook, no framer-motion dependency)
- Counter animation on stats
- Image zoom on hover for products + gallery
- Subtle parallax on hero only
- Tailwind v4 `@keyframes` in `src/styles.css`

## Backend
Enable Lovable Cloud for the inquiry form:
- Table `public.inquiries` (name, company, phone, email, country, requirement_type, message, created_at)
- RLS: insert allowed for anon (it's a public lead form), select restricted to admins only
- Server function `submitInquiry` (with Zod validation: trimmed strings, length caps, email format) inserts the row
- Toast on success/error via sonner

## Design tokens (src/styles.css)
```
--canvas: oklch(0.97 0.012 80)        /* warm cream */
--ink:    oklch(0.24 0.03 165)        /* deep field */
--field:  oklch(0.30 0.04 165)
--gold:   oklch(0.68 0.10 80)
--surface: oklch(0.94 0.015 75)
```
Fonts loaded via `<link>` in `__root.tsx` head; `@theme` exposes `--font-display` (Playfair Display), `--font-sans` (Inter), `--font-mono` (JetBrains Mono).

## Component structure (`src/components/`)
- `site/Nav.tsx`, `site/Footer.tsx`
- `home/Hero.tsx`, `home/About.tsx`, `home/WhyChooseUs.tsx`, `home/Products.tsx`, `home/Process.tsx`, `home/Certifications.tsx`, `home/GlobalPresence.tsx`, `home/Gallery.tsx`, `home/Testimonials.tsx`, `home/InquiryForm.tsx`
- `ui/Counter.tsx`, `ui/FadeIn.tsx`, `ui/SectionLabel.tsx`
- Data files: `src/data/products.ts`, `src/data/certifications.ts`, `src/data/testimonials.ts`

## SEO
- Per-route `head()` with unique title/description/og
- Single H1 per page, semantic HTML
- `public/robots.txt` allowing all; `sitemap.xml` listing routes (relative URLs since no domain set)
- JSON-LD Organization on `__root.tsx`, no canonical there

## Out of scope (explicit)
No cart, checkout, payments, order tracking, user accounts.

## Open question
I'll use the placeholder brand "Oryza Global" — easy to find-and-replace once you share the real brand name, contact details, and HQ address.
