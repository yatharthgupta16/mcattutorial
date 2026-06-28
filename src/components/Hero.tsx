import { ArrowRight, Sparkles, CalendarCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white"
    >
      <div className="container-page grid grid-cols-1 items-stretch gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Personalized prep · 1:1 expert tutors
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Personalized MCAT Coaching for{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Future Medical Students
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Prepare for the MCAT with expert-led online classes, structured
            study plans, regular assessments, and personalized mentorship
            designed to keep you on track from day one.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-2xl bg-brand-700 px-8 py-5 text-lg font-semibold text-white shadow-md transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Book a Free Demo Class
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://calendar.app.google/vRLtL7SiDRxSYXGe8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border-2 border-brand-200 bg-white px-8 py-5 text-lg font-semibold text-brand-700 shadow-sm transition hover:border-brand-400 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <CalendarCheck className="h-5 w-5" />
              Schedule a Consultation
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:flex">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-xl">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-400 opacity-20 blur-2xl" />
            <img
              src={`${import.meta.env.BASE_URL}hero.jpg`}
              alt="Student studying for the MCAT"
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
