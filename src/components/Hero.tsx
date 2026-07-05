import { CtaButtons } from "./CtaButtons";

const highlights = [
  "Live 1-on-1 MCAT Coaching",
  "Personalized Study Plans",
  "Question & Passage Analysis",
  "Flexible Online Scheduling",
];

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-mint to-white pb-14 pt-16 sm:pb-[84px] sm:pt-24">
      <div className="mx-auto w-full max-w-[860px] px-6">
        <span className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-[#d7ece1] bg-white px-4 py-2 text-[13.5px] font-semibold text-green-dark shadow-badge">
          ✓ Live Online • Personalized • One-on-One
        </span>

        <h1 className="mb-[18px] text-[clamp(38px,5.4vw,62px)] font-extrabold">
          Personalized MCAT Coaching for{" "}
          <span className="text-green">Medical School Applicants</span>
        </h1>

        <p className="mb-[22px] text-[clamp(18px,2.2vw,22px)] font-semibold text-ink">
          One-on-One Guidance Designed Around Your Goals, Timeline, and Target Score
        </p>

        <div className="max-w-[720px] space-y-3.5 text-[17px]">
          <p>Preparing for the MCAT can feel overwhelming.</p>
          <p>
            With countless resources, conflicting advice, and no clear way to measure
            progress, many students spend months studying without seeing the improvement
            they expect.
          </p>
          <p>
            Our personalized online MCAT coaching combines one-on-one tutoring, customized
            study plans, question and passage analysis, and ongoing mentorship to help you
            prepare with confidence and achieve your target score.
          </p>
        </div>

        <p className="mb-[18px] mt-[30px] text-lg font-bold text-ink">
          Let's Build a Study Plan That Works for You
        </p>

        <CtaButtons withIcons />

        <div className="mt-[30px] flex flex-wrap gap-x-[26px] gap-y-3 text-[14.5px] font-semibold text-ink">
          {highlights.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-soft text-xs font-extrabold text-green-dark">
                ✓
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
