# NorthStar Med — Personalized Online MCAT Coaching

Single-page marketing site for NorthStar Med, offering personalized one-on-one online MCAT coaching.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (design tokens mapped from the reference design: ink/body/muted text colors, green brand scale, mint section backgrounds)
- No runtime dependencies beyond React — icons are inline SVGs (`src/components/icons.tsx`)

## Sections

- **Header** — sticky nav with anchor links (How it Works, FAQ), booking CTA, and WhatsApp button
- **Hero** — headline, intro copy, CTAs, and feature check strip
- **The Challenge** — four pain-point cards, each with a "how coaching helps" callout
- **The Program** — three pillars, each with two feature cards
- **How It Works** — four-step timeline
- **The Difference** — self-study vs. coaching comparison table
- **FAQ** — ten native `<details>` accordions
- **Final CTA** — gradient panel anchored at `#calendar`
- **Footer** — brand, contact links, legal

All "Book Your Free MCAT Consultation" buttons render `BookingLink`, which opens Calendly
as a popup (falling back to navigating to the booking page if the widget script does not
load); all "Chat on WhatsApp" buttons open WhatsApp. Both URLs (plus email) live in
`src/lib/site.ts`.

## Run

```bash
npm install
npm run dev
```

Then open the URL Vite prints.

## Quality checks

```bash
npm run lint
npm run build   # runs tsc -b, then vite build
```

## Deploy

The site deploys to GitHub Pages (base path `/mcattutorial/` is set in `vite.config.ts`):

```bash
npm run build
npm run deploy
```
