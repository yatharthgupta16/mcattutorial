import { SectionHead } from "./SectionHead";
import { CtaBand } from "./CtaBand";

const onYourOwn = [
  "Too many resources to choose from",
  "Studying without regular feedback",
  "Generic study schedules",
  "Reviewing mistakes independently",
  "Uncertainty about progress",
  "Staying motivated on your own",
];

const withCoaching = [
  "A personalized MCAT study roadmap tailored to your goals",
  "One-on-one coaching with continuous mentor guidance",
  "Weekly study plans designed around your availability",
  "Structured question review and passage analysis",
  "Regular progress tracking and performance reviews",
  "Accountability and ongoing support throughout your preparation",
];

const markBase =
  "mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-xs font-extrabold";

export function Comparison() {
  return (
    <section className="section bg-mint">
      <div className="container-page">
        <SectionHead
          eyebrow="The Difference"
          title={
            <>
              Why Choose <span className="text-green">Personalized MCAT Coaching?</span>
            </>
          }
        >
          <p>
            While high-quality MCAT resources are readily available, many students benefit
            from personalized guidance, structured planning, and regular feedback that helps
            them make the most of their preparation.
          </p>
        </SectionHead>

        <div className="grid overflow-hidden rounded-[20px] border border-line shadow-card min-[761px]:grid-cols-2">
          <div className="bg-white px-[34px] py-[38px]">
            <h3 className="mb-[22px] flex items-center gap-2.5 text-[19px] font-extrabold">
              Preparing on Your Own
            </h3>
            <ul className="grid list-none gap-4 text-[15.5px]">
              {onYourOwn.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={`${markBase} bg-flag-chip text-flag`}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-dark px-[34px] py-[38px] text-[#e7f5ee]">
            <h3 className="mb-[22px] flex items-center gap-2.5 text-[19px] font-extrabold text-white">
              With Personalized MCAT Coaching
            </h3>
            <ul className="grid list-none gap-4 text-[15.5px]">
              {withCoaching.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={`${markBase} bg-white/15 text-[#7ee2b4]`}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CtaBand
          white
          title="Ready to Prepare with Confidence?"
          text="Discover how personalized MCAT coaching can help you study more effectively and stay on track toward your target score."
        />
      </div>
    </section>
  );
}
