import {
  Stethoscope,
  Microscope,
  FlaskConical,
  Atom,
  BookOpenText,
  ArrowRight,
} from "lucide-react";

const subjects = [
  {
    icon: Microscope,
    name: "Biology",
    blurb:
      "Cells, systems, and genetics taught with clinical context so concepts stick.",
  },
  {
    icon: FlaskConical,
    name: "Biochemistry",
    blurb:
      "Metabolism, enzymes, and molecular biology — the highest-yield section, mastered.",
  },
  {
    icon: Atom,
    name: "Physics",
    blurb:
      "Mechanics, waves, and circuits built from first principles, not memorization.",
  },
  {
    icon: BookOpenText,
    name: "CARS",
    blurb:
      "A repeatable reading framework plus timed practice to lift your hardest section.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-brand-50/60 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Services
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Built around how you{" "}
            <span className="text-brand-700">actually learn.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Two ways to work with us — start with a strategy session, then go
            deep with subject-specific 1:1 classes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article
            id="consultation"
            className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm"
          >
            <span className="icon-circle h-12 w-12">
              <Stethoscope className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              MCAT Consultation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Diagnostic sessions and strategy planning with a senior coach.
              We'll review your scores, identify gaps, and build a week-by-week
              study plan tied to your target score and test date.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {[
                "Full diagnostic review",
                "Personalized study calendar",
                "Resource & question-bank guidance",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <article className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-600 p-8 text-white shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
              <BookOpenText className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Live 1:1 Classes</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Subject-specific tutoring with expert tutors. Choose a single
              section or stack multiple — every class is live, recorded, and
              tailored to your weak spots.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {subjects.map((s) => (
                <a
                  key={s.name}
                  href={`/services#${s.name.toLowerCase()}`}
                  id={s.name.toLowerCase()}
                  className="group rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/15"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-sm font-semibold">{s.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">
                    {s.blurb}
                  </p>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
