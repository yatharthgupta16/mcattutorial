## MCAT Coaching Classes — Website Plan

### Design direction
- **Palette:** Emerald Forest — primary `#047857`, accent gradient `#10B981 → #6EE7B7`, soft `bg-emerald-50` sections, white cards.
- **Typography:** Large bold headings (hero `text-6xl` / `text-7xl`), clean Inter-style body.
- **Hero image box:** smaller, sits to the side of an enlarged headline (text dominates).
- **Layout motif:** rounded cards, small emerald icon circles, generous whitespace.

### Header (single horizontal bar)
Logo "MCAT Coaching Classes" on the left, with **Home · About · Services ▾ · Contact** placed right next to it (same row, left-aligned cluster), not on the far right.

- **Services dropdown** opens on hover/click with two items:
  - **MCAT Consultation** (link → `/services#consultation`)
  - **Live 1:1 Classes ▸** (nested submenu) → Biology, Biochemistry, Physics, CARS

### Sections (single-page, anchor-scrolled)

1. **Hero** — Big headline "Your Path to **Med School** Starts Here" (much larger than mock), short subtitle, primary CTA "Get Started". Smaller emerald gradient illustration card on the right.
2. **About Us** — Heading + sample paragraph about the coaching center (founders, mission, ~1000 students mentored), plus 3 feature cards: Expert Tutors, Personalized Plans, Proven Results.
3. **Services** — Two cards:
   - *MCAT Consultation* — strategy & diagnostic sessions.
   - *Live 1:1 Classes* — sub-cards for Biology, Biochemistry, Physics, CARS (each with short description).
4. **Contact Us** — Email `contact@mcatcoaching.com` and phone `+1 (555) 123-4567` displayed in clean icon rows. (Real values can be edited later.)
5. **Footer** — Copyright + quick links.

### Floating CTA (bottom-right, persistent)
- Pill button "📚 Book a Mock Class Now" fixed to **bottom-right**, visible on scroll, with subtle pulse dot.
- On click → opens a modal dialog with form:
  - Name (required, 2–100 chars)
  - Email (required, valid email)
  - Phone (required, 7–20 digits/chars)
  - Submit → saves to database, shows success toast, closes modal.
- Zod validation client-side; server function re-validates before insert.

### Backend (Lovable Cloud)
- Table `mock_class_bookings` (id, name, email, phone, created_at).
- RLS: public `INSERT` allowed; `SELECT` restricted (admin-only later).
- TanStack server function `submitBooking` performs insert with Zod validation.

### Routing
Single homepage route `src/routes/index.tsx` with smooth scroll to `#about`, `#services`, `#contact`. Services subject pages can be added later if desired.

### Technical notes
- Components: `Header`, `ServicesMenu` (shadcn `NavigationMenu` for nested dropdown), `Hero`, `About`, `Services`, `Contact`, `Footer`, `FloatingCTA`, `BookingDialog`.
- Form via `react-hook-form` + `zod` + shadcn `Dialog`, `Input`, `Button`, `Sonner` toast.
- Booking persistence via Lovable Cloud (Supabase) + a `createServerFn` in `src/server/bookings.functions.ts`.

After approval I'll implement everything in one pass.