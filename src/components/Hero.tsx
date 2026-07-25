import { CtaBand } from "./CtaBand";

const highlights = [
  "Live 1-on-1 MCAT Coaching",
  "Personalized Study Plans",
  "Question & Passage Analysis",
  "Flexible Online Scheduling",
];

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-mint to-white pb-14 pt-16 sm:pb-[84px] sm:pt-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-14">
          <div>
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

            <div className="space-y-3.5 text-[17px]">
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

            <CtaBand
              white
              withIcons
              className="mt-[30px]"
              title="Let's Build a Study Plan That Works for You"
            />

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

          <div className="overflow-hidden rounded-card border border-line bg-white shadow-card lg:sticky lg:top-[100px]">
            <img
              src={`${import.meta.env.BASE_URL}hero-student.jpg`}
              alt="Student preparing for the MCAT"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
