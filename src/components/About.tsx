import { Compass, CalendarX, Clock, UserX, Brain, ArrowRight } from "lucide-react";

const struggles = [
  {
    icon: Compass,
    title: "Don't know where to start",
    detail: "The sheer scope of the MCAT leaves most students paralysed before they open a single book.",
  },
  {
    icon: CalendarX,
    title: "Unstructured study plans",
    detail: "Jumping between resources without a clear sequence wastes weeks of valuable prep time.",
  },
  {
    icon: Clock,
    title: "Months on low-yield material",
    detail: "Over-indexing on rarely-tested topics means high-yield areas never get the attention they deserve.",
  },
  {
    icon: UserX,
    title: "No accountability or guidance",
    detail: "Studying alone makes it easy to fall behind — with no one to notice until it's too late.",
  },
  {
    icon: Brain,
    title: "Overwhelmed by content volume",
    detail: "Biology, chemistry, physics, psychology — the breadth alone is enough to derail any plan.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-page">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            About us
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            MCAT prep is more than just{" "}
            <span className="text-brand-700">studying content</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most students don't fail because they're not smart enough — they fail
            because of how they prepare. Here's what gets in the way:
          </p>
        </div>

        {/* Struggle cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {struggles.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-rose-100"
            >
              {/* large faded number */}
              <span className="absolute right-4 top-3 text-7xl font-black text-slate-50 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <s.icon className="h-5 w-5" />
              </span>

              <p className="relative mt-4 text-base font-bold text-slate-900">
                {s.title}
              </p>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-500">
                {s.detail}
              </p>
            </div>
          ))}

          {/* Goal card — fills the 6th slot in a 3-col grid */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-600 p-6 text-white shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Our promise
            </p>
            <p className="mt-3 text-lg font-bold leading-snug">
              A clear roadmap, expert instruction, and mentorship — from day one
              to test day.
            </p>
            <a
              href="#services"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200 hover:text-white transition"
            >
              See how we do it
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
