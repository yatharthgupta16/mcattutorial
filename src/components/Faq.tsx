import { useId, useState, type ReactNode } from "react";
import { SectionHead } from "./SectionHead";
import { CtaBand } from "./CtaBand";
import { Reveal } from "./Reveal";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const Strong = ({ children }: { children: ReactNode }) => (
  <span className="font-bold text-ink">{children}</span>
);

const faqs: FaqItem[] = [
  {
    question: "Who is personalized MCAT coaching designed for?",
    answer: (
      <p>
        Our coaching is designed for students preparing for the MCAT who want personalized
        guidance, structured study plans, one-on-one mentoring, and ongoing accountability.
        Whether you're taking the MCAT for the first time or looking to improve your
        previous score, every coaching plan is tailored to your individual goals and
        timeline.
      </p>
    ),
  },
  {
    question: "Is the MCAT consultation really free?",
    answer: (
      <>
        <p>
          <Strong>Yes.</Strong>
        </p>
        <p>
          The consultation is completely free and gives us an opportunity to understand your
          current preparation, study schedule, target score, and challenges.
        </p>
        <p>
          You'll receive personalized recommendations, and there is absolutely no obligation
          to enroll afterward.
        </p>
      </>
    ),
  },
  {
    question: "What happens during the free MCAT consultation?",
    answer: (
      <>
        <p>During your consultation, we'll discuss:</p>
        <ul>
          <li>Your target score and test date</li>
          <li>Your current preparation level</li>
          <li>Resources you're using</li>
          <li>Strengths and weak areas</li>
          <li>Study schedule and availability</li>
          <li>Challenges you're currently facing</li>
        </ul>
        <p>
          Based on this discussion, we'll recommend the most effective path forward for your
          MCAT preparation.
        </p>
      </>
    ),
  },
  {
    question: "How are online MCAT coaching sessions conducted?",
    answer: (
      <>
        <p>
          All coaching sessions are conducted live online through one-on-one interactive
          classes.
        </p>
        <p>
          This allows students to receive personalized guidance, ask questions in real time,
          and learn from anywhere while maintaining a flexible schedule.
        </p>
      </>
    ),
  },
  {
    question: "How often do coaching sessions take place?",
    answer: (
      <>
        <p>
          Your coaching schedule is personalized based on your availability, preparation
          timeline, and study goals.
        </p>
        <p>
          Most students meet once or twice each week, but the frequency is adjusted to suit
          individual learning needs.
        </p>
      </>
    ),
  },
  {
    question: "Do I need to buy specific MCAT books or resources?",
    answer: (
      <>
        <p>
          <Strong>Not necessarily.</Strong>
        </p>
        <p>
          Rather than recommending the same resources to every student, we suggest study
          materials based on your current preparation level and goals.
        </p>
        <p>
          If you already own resources such as AAMC materials, UWorld, Kaplan, Blueprint,
          Jack Westin, or Anki, we'll help you make the most of them before recommending
          anything new.
        </p>
      </>
    ),
  },
  {
    question: "Can I prepare for the MCAT while studying or working full-time?",
    answer: (
      <>
        <p>
          <Strong>Yes.</Strong>
        </p>
        <p>
          Many students preparing for the MCAT are balancing college coursework, research,
          volunteering, or full-time jobs.
        </p>
        <p>
          Your personalized MCAT study plan is designed around your schedule, helping you
          prepare consistently without feeling overwhelmed.
        </p>
      </>
    ),
  },
  {
    question: "Do I have to enroll after the consultation?",
    answer: (
      <>
        <p>
          <Strong>No.</Strong>
        </p>
        <p>
          The consultation is designed to help you understand your current preparation and
          determine whether personalized MCAT coaching is the right fit.
        </p>
        <p>If we believe another approach would serve you better, we'll tell you honestly.</p>
      </>
    ),
  },
  {
    question: "How is personalized MCAT coaching different from self-study?",
    answer: (
      <>
        <p>
          Self-study gives you access to excellent resources, but many students struggle
          with knowing what to study, how to review mistakes, and whether they're making
          meaningful progress.
        </p>
        <p>
          Personalized MCAT coaching provides structured study planning, one-on-one
          guidance, question analysis, accountability, and regular progress reviews to help
          you prepare more efficiently.
        </p>
      </>
    ),
  },
  {
    question: "What subjects do you provide coaching for?",
    answer: (
      <p>
        Our coaching focuses on the areas where students most often benefit from
        personalized guidance, including Biology, Biochemistry, CARS, and overall MCAT study
        strategy. Every coaching plan is customized based on your strengths, weaknesses, and
        target score.
      </p>
    ),
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const idPrefix = useId();

  return (
    <section id="faq" className="section bg-white">
      <div className="container-page">
        <SectionHead
          center
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked Questions About{" "}
              <span className="text-green">Online MCAT Coaching</span>
            </>
          }
        >
          <p>
            Whether you're just starting your MCAT preparation or looking for personalized
            guidance to improve your score, here are answers to some of the questions
            students ask most often.
          </p>
        </SectionHead>

        <div className="mx-auto grid max-w-[820px] gap-3.5">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const panelId = `${idPrefix}-faq-panel-${i}`;
            return (
              <Reveal key={faq.question} delay={Math.min(i * 55, 400)}>
                <div className="overflow-hidden rounded-[14px] border border-line bg-white shadow-card transition-shadow duration-200 hover:shadow-lg">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-[26px] py-[22px] text-left text-[16.5px] font-bold text-ink"
                  >
                    {faq.question}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-soft text-[17px] font-bold text-green-dark transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-[26px] pb-6 text-[15.5px] [&_p]:mb-2.5 [&_p:last-child]:mb-0 [&_ul]:my-1.5 [&_ul]:mb-3 [&_ul]:ml-5 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-1.5">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <CtaBand
          title={
            <>
              Still Have Questions? <span className="text-green">We're happy to help.</span>
            </>
          }
          text="Book a free consultation and discuss your preparation, goals, and study plan with us."
        />
      </div>
    </section>
  );
}
