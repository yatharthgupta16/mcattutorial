import { GraduationCap, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Tutors",
    body: "Top-percentile MCAT scorers and medical school mentors with years of teaching experience.",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    body: "We diagnose your weak spots, then build a study plan around your timeline and target score.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    body: "Our students consistently lift their composite scores by 10+ points across full-length exams.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              About us
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              A coaching team built by{" "}
              <span className="text-brand-700">future doctors, for future doctors.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-slate-600">
              MCAT Coaching Classes was founded by a group of physicians and
              top-percentile MCAT scorers who wanted to replace cookie-cutter
              prep with something that actually works. Over the last several
              years we've mentored more than{" "}
              <span className="font-semibold text-slate-900">1,000 students</span>{" "}
              into their dream medical schools — through diagnostic-first
              coaching, deeply personalized study plans, and live 1:1 teaching
              that adapts to how you learn.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our mission is simple: make elite MCAT prep accessible, human, and
              measurable. No bloated lectures. No generic question banks. Just
              clear strategy, expert tutors, and a plan that moves your score.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-md"
            >
              <span className="icon-circle mb-4 h-11 w-11">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
