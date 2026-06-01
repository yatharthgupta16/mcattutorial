# MCAT Coaching Classes

A single-page marketing site for MCAT Coaching Classes built from the spec in `instructions.md`.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (custom emerald palette)
- Radix UI (`Dialog`, `NavigationMenu`)
- `react-hook-form` + `zod` for the booking form
- `sonner` for toast notifications
- `lucide-react` for icons

## Sections

- **Header** with nested **Services ▸ Live 1:1 Classes** dropdown
- **Hero** with oversized headline + emerald gradient schedule card
- **About Us** with 3 feature cards (Expert Tutors, Personalized Plans, Proven Results)
- **Services** — Consultation card + Live 1:1 Classes card with sub-cards (Bio, Biochem, Physics, CARS)
- **Contact Us** — email & phone in icon rows
- **Footer** with quick links
- **Floating CTA** (bottom-right) opens a modal with Zod-validated booking form

## Backend note

The spec calls for Lovable Cloud (Supabase) persistence with a TanStack server function. To keep this scaffold runnable locally with no extra config, `submitBooking` in `src/lib/bookings.ts` writes to `localStorage` instead. Replace the body of that function with a `createServerFn` call (or a `fetch` to your Supabase endpoint) to wire up real persistence — the input validation and call sites stay the same.

## Run

```bash
npm install
npm run dev
```

Then open the URL Vite prints.

## Build

```bash
npm run build
npm run preview
```
