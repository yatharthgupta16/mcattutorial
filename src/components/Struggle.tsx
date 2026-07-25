import type { ComponentType, ReactNode } from "react";
import { SectionHead } from "./SectionHead";
import { CtaBand } from "./CtaBand";
import { ClockIcon, CompassIcon, HelpIcon, TrendUpIcon } from "./icons";

interface PainPoint {
  icon: ComponentType;
  title: string;
  tagline?: string;
  resources?: string;
  body: string;
  questions?: string[];
  helps: string;
}

const painPoints: PainPoint[] = [
  {
    icon: CompassIcon,
    title: "Too many resources. Too little clarity.",
    resources: "Kaplan | Blueprint | AAMC | UWorld | Anki | Jack Westin | Khan Academy",
    body: "There are dozens of excellent MCAT resources, but knowing which ones to use, when to use them, and how to combine them is often the hardest part of preparing.",
    helps:
      "We create a customized MCAT study plan based on your timeline, current level, and target score, helping you focus on the right resources instead of trying to use everything.",
  },
  {
    icon: TrendUpIcon,
    title: "Score Plateau",
    tagline: "You're studying hard, but your score isn't improving.",
    body: "Many students spend hours reviewing questions yet continue making the same mistakes because they never identify the underlying reasoning errors.",
    helps:
      "Every coaching session focuses on question analysis, passage reasoning, and mistake review so you understand not only what went wrong, but why it happened and how to avoid repeating it.",
  },
  {
    icon: ClockIcon,
    title: "Consistency",
    tagline: "Staying consistent is harder than studying.",
    body: "Balancing college, work, volunteering, research, and MCAT preparation often leads to inconsistent study habits and burnout.",
    helps:
      "Through weekly planning, structured milestones, and regular accountability, we help you maintain steady progress without overwhelming your schedule.",
  },
  {
    icon: HelpIcon,
    title: "Confidence",
    tagline: "It's difficult to know whether you're actually ready.",
    body: "Many students constantly question:",
    questions: [
      "Am I improving?",
      "Should I postpone?",
      "Should I buy another course?",
      "Am I doing enough?",
    ],
    helps:
      "Regular progress reviews and personalized feedback give you confidence that you're preparing efficiently and moving toward your target score.",
  },
];

function PainCard({ point, index }: { point: PainPoint; index: number }) {
  return (
    <article className="flex flex-col gap-3 rounded-card border border-line bg-white p-[30px] shadow-card">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flag-chip text-flag">
          <point.icon />
        </span>
        <span className="text-[44px] font-extrabold leading-none text-[#eef1f4]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-xl font-bold">{point.title}</h3>
      {point.resources && (
        <p className="text-[13.5px] font-semibold tracking-[0.01em] text-muted">
          {point.resources}
        </p>
      )}
      {point.tagline && <p className="text-[15.5px] font-semibold text-ink">{point.tagline}</p>}
      <p className="text-[15px]">{point.body}</p>
      {point.questions && (
        <ul className="my-0.5 grid list-none gap-1 text-[15px]">
          {point.questions.map((q) => (
            <li
              key={q}
              className="before:mr-1 before:font-extrabold before:text-green before:content-['“'] after:ml-0.5 after:font-extrabold after:text-green after:content-['”']"
            >
              {q}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-1.5 rounded-xl bg-green-soft px-[18px] py-4">
        <span className="mb-[7px] flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.12em] text-green-dark">
          How personalized coaching helps
        </span>
        <p className="text-[14.5px] text-[#2c4a3c]">{point.helps}</p>
      </div>
    </article>
  );
}

export function Grid2({ children }: { children: ReactNode }) {
  return <div className="grid gap-[22px] min-[821px]:grid-cols-2">{children}</div>;
}

export function Struggle() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionHead
          title={
            <>
              Why Many Students <span className="text-green">Struggle with the MCAT</span>
            </>
          }
        >
          <p>
            Preparing for the MCAT isn't just about learning Biology, Chemistry, Physics,
            Psychology, or CARS. Most students struggle because they don't know what to
            study, how to improve, or whether they're making progress.
          </p>
          <p>
            Our personalized online MCAT coaching is designed to solve these challenges
            through structured study planning, one-on-one mentoring, and focused question
            analysis.
          </p>
        </SectionHead>

        <Grid2>
          {painPoints.map((point, i) => (
            <PainCard key={point.title} point={point} index={i} />
          ))}
        </Grid2>

        <CtaBand title="If These Challenges Sound Familiar, Let's Talk." />
      </div>
    </section>
  );
}
