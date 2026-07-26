import { SectionHead } from "./SectionHead";
import { CtaBand } from "./CtaBand";
import { PhotoCard } from "./PhotoCard";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Book Your Free MCAT Consultation",
    body: "Schedule a convenient time to speak with us and tell us about your current preparation, goals, and target test date.",
  },
  {
    title: "Personalized Preparation Review",
    body: "We'll discuss your current study plan, strengths, challenges, resources, and areas where you need the most support.",
  },
  {
    title: "Receive Your Personalized Coaching Plan",
    body: "Based on your consultation, we'll recommend a personalized MCAT study plan and coaching approach tailored to your goals.",
  },
  {
    title: "Start Your Personalized MCAT Coaching",
    body: "Begin one-on-one coaching with a structured study plan, regular progress reviews, and ongoing mentor support designed to help you reach your target score.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-page">
        <SectionHead
          center
          title={
            <>
              How Our Online <span className="text-green">MCAT Coaching Works</span>
            </>
          }
        >
          <p>
            Getting started is simple. Every student begins with a free consultation to
            understand their goals and determine the best path forward.
          </p>
        </SectionHead>

        {/* The steps stay capped at 720px for readability; on large screens the photo fills
            the margin beside them and sticks as the reader works down the list. */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start lg:gap-14">
          <div className="mx-auto w-full max-w-[720px] lg:mx-0">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <div
                  className={`relative flex gap-4 sm:gap-[22px] ${
                    i < steps.length - 1 ? "pb-11" : ""
                  }`}
                >
                  {i < steps.length - 1 && (
                    <span
                      className="absolute bottom-1.5 left-[22px] top-[50px] w-0.5 bg-gradient-to-b from-green to-[#cdeade] sm:left-[27px] sm:top-[58px]"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-dark text-base font-extrabold text-white shadow-step sm:h-[54px] sm:w-[54px] sm:text-[19px]">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-card border border-line bg-white px-7 py-6 shadow-card transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-green">
                      Step {i + 1}
                    </span>
                    <h3 className="mb-2 text-[19px] font-bold">{step.title}</h3>
                    <p className="text-[15px]">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <PhotoCard
            src="coaching-session.jpg"
            alt="Student in a live one-on-one online MCAT coaching session on a laptop"
            width={612}
            height={408}
            aspect="aspect-[3/2]"
            caption="Live one-on-one sessions, scheduled around you."
            className="mx-auto w-full max-w-[420px] lg:sticky lg:top-[100px] lg:max-w-none"
          />
        </div>

        <CtaBand
          title="Getting Started Is Easier Than You Think"
          text="Book a free consultation and we'll guide you through the next steps."
        />
      </div>
    </section>
  );
}
