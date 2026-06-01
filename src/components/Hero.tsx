import { ArrowRight, Sparkles, Stethoscope, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white"
    >
      <div className="container-page grid grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Personalized prep · 1:1 expert tutors
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Your Path to{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Med School
            </span>{" "}
            Starts Here
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            High-impact MCAT coaching built around you — diagnostic strategy,
            live 1:1 classes in Biology, Biochemistry, Physics, and CARS, and
            relentless score improvement.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore services
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            {[
              { k: "1,000+", v: "Students mentored" },
              { k: "+15 pts", v: "Avg. score lift" },
              { k: "98%", v: "Would recommend" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-slate-900">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-slate-500">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-4">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-400 opacity-20 blur-2xl" />
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-500 to-brand-400 p-1 shadow-xl">
        <div className="rounded-[1.4rem] bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              This week
            </span>
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              Live
            </span>
          </div>

          <div className="mt-4 space-y-3">
            <ScheduleRow
              icon={<Stethoscope className="h-4 w-4" />}
              title="Diagnostic consult"
              meta="Mon · 6:00 PM"
            />
            <ScheduleRow
              icon={<BookOpen className="h-4 w-4" />}
              title="Biochem 1:1"
              meta="Wed · 7:30 PM"
            />
            <ScheduleRow
              icon={<BookOpen className="h-4 w-4" />}
              title="CARS strategy"
              meta="Fri · 5:00 PM"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-brand-50/80 p-4">
            <p className="text-xs font-semibold text-brand-800">
              Free 30-min mock class
            </p>
            <p className="mt-1 text-xs text-brand-700/80">
              See our teaching style before you commit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleRow({
  icon,
  title,
  meta,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2">
      <span className="icon-circle h-8 w-8">{icon}</span>
      <div className="flex flex-1 items-center justify-between">
        <span className="text-sm font-medium text-slate-900">{title}</span>
        <span className="text-xs text-slate-500">{meta}</span>
      </div>
    </div>
  );
}
