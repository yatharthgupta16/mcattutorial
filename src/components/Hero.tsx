import { CtaBand } from "./CtaBand";
import { Reveal } from "./Reveal";
import { useInView } from "../hooks/useInView";

const highlights = [
  "Live 1-on-1 MCAT Coaching",
  "Personalized Study Plans",
  "Question & Passage Analysis",
  "Flexible Online Scheduling",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-mint to-white pb-14 pt-16 sm:pb-[84px] sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-40 -top-24 h-[420px] w-[420px] rounded-full bg-green/10 blur-3xl" />
        <div className="absolute -right-32 top-56 h-[320px] w-[320px] rounded-full bg-green-dark/10 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <span className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-[#d7ece1] bg-white px-4 py-2 text-[13.5px] font-semibold text-green-dark shadow-badge">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-dark" />
                </span>
                ✓ Live Online • Personalized • One-on-One
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mb-[18px] text-[clamp(38px,5.4vw,62px)] font-extrabold">
                Personalized MCAT Coaching for{" "}
                <span className="text-green">Medical School Applicants</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mb-[22px] text-[clamp(18px,2.2vw,22px)] font-semibold text-ink">
                One-on-One Guidance Designed Around Your Goals, Timeline, and Target Score
              </p>
            </Reveal>

            <Reveal delay={240}>
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
                  prepare with <strong className="font-bold text-ink">confidence</strong> and
                  achieve your <strong className="font-bold text-ink">target score</strong>.
                </p>
              </div>
            </Reveal>

            <CtaBand
              white
              withIcons
              revealDelay={320}
              className="mt-[30px]"
              title="Let's Build a Study Plan That Works for You"
            />

            <Reveal delay={400}>
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
            </Reveal>
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
}

/**
 * Deliberately opacity-only (no transform): `position: sticky` breaks on an element
 * whose ancestor has an active `transform`, which the shared Reveal component sets
 * while animating in — so this one fades without translating to keep the sticky
 * desktop behavior intact.
 */
function HeroImage() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-card border border-line bg-white shadow-card transition-opacity duration-700 ease-out lg:sticky lg:top-[100px] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: inView ? "200ms" : "0ms" }}
    >
      <img
        src={`${import.meta.env.BASE_URL}hero-student.jpg`}
        alt="Student preparing for the MCAT"
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  );
}
