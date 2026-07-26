import type { ComponentType } from "react";
import { SectionHead } from "./SectionHead";
import { CtaBand } from "./CtaBand";
import { PhotoCard } from "./PhotoCard";
import { Reveal } from "./Reveal";
import { Grid2 } from "./Struggle";
import {
  CalendarIcon,
  ChatIcon,
  ChecklistIcon,
  PlanIcon,
  SearchIcon,
  VideoIcon,
} from "./icons";

interface Feature {
  icon: ComponentType;
  title: string;
  tag: string;
  body: string;
}

interface Pillar {
  label: string;
  features: Feature[];
}

const pillars: Pillar[] = [
  {
    label: "Plan Your Preparation",
    features: [
      {
        icon: PlanIcon,
        title: "Personalized MCAT Study Plan",
        tag: "Build a roadmap designed specifically for your goals.",
        body: "Instead of following a generic schedule, you'll receive a personalized MCAT study plan based on your current preparation, available study time, target score, and exam timeline.",
      },
      {
        icon: CalendarIcon,
        title: "Flexible Online Scheduling",
        tag: "Coaching that fits around your life.",
        body: "Choose coaching sessions that work with your academic schedule, work commitments, research, or extracurricular activities.",
      },
    ],
  },
  {
    label: "Improve Your Performance",
    features: [
      {
        icon: VideoIcon,
        title: "Live One-on-One MCAT Coaching",
        tag: "Learn through interactive online sessions.",
        body: "Every coaching session focuses on your individual strengths, weaknesses, and questions, allowing you to spend more time improving the areas that matter most.",
      },
      {
        icon: SearchIcon,
        title: "Question Review & Passage Analysis",
        tag: "Learn how to approach MCAT questions with confidence.",
        body: "Rather than simply reviewing answers, we'll analyze your reasoning process, identify recurring mistakes, and develop strategies for tackling similar questions in the future.",
      },
    ],
  },
  {
    label: "Stay on Track",
    features: [
      {
        icon: ChecklistIcon,
        title: "Weekly Study Planning & Progress Tracking",
        tag: "Stay accountable throughout your preparation.",
        body: "Weekly study plans, progress reviews, and regular check-ins help you stay consistent while balancing college, work, research, or volunteering.",
      },
      {
        icon: ChatIcon,
        title: "Mentor Support Between Sessions",
        tag: "Never feel stuck while preparing.",
        body: "Get guidance whenever you need clarification on concepts, study strategies, or preparation decisions between your scheduled coaching sessions.",
      },
    ],
  },
];

export function Program() {
  return (
    <section className="section bg-mint">
      <div className="container-page">
        {/* Two-column intro: the heading previously capped at 760px and left the rest of
            the row empty, so the photo now occupies that space instead of adding height. */}
        <div className="mb-[52px] grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14">
          <SectionHead
            flush
            title={
              <>
                What's Included in Your{" "}
                <span className="text-green">Personalized MCAT Coaching Program</span>
              </>
            }
          >
            <p>
              Every student's MCAT preparation is different. Our personalized online MCAT
              coaching is designed around your current level, target score, timeline, and
              learning style to help you prepare more efficiently and improve with confidence.
            </p>
          </SectionHead>

          <PhotoCard
            src="student-library.jpg"
            alt="Student working through an MCAT study plan with a laptop and textbooks at a library desk"
            width={1200}
            height={675}
            aspect="aspect-[3/2]"
            caption="Weekly study plans you actually follow — built around your schedule."
          />
        </div>

        <div className="space-y-11">
          {pillars.map((pillar) => (
            <div key={pillar.label}>
              <span className="mb-[18px] inline-flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.16em] text-green-dark">
                <span className="h-[3px] w-[34px] rounded-sm bg-green" />
                {pillar.label}
              </span>
              <Grid2>
                {pillar.features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 90}>
                    <article className="group rounded-card border border-line bg-white p-[30px] shadow-card transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft text-green-dark transition-transform duration-200 group-hover:scale-110">
                        <f.icon />
                      </span>
                      <h3 className="mb-1.5 text-[19px] font-bold">{f.title}</h3>
                      <span className="mb-2.5 block text-[15px] font-semibold text-green-dark">
                        {f.tag}
                      </span>
                      <p className="text-[15px]">{f.body}</p>
                    </article>
                  </Reveal>
                ))}
              </Grid2>
            </div>
          ))}
        </div>

        <CtaBand
          white
          title="Ready to Experience Personalized MCAT Coaching?"
          text="Let's discuss your goals, preparation, and how a personalized coaching plan can help you reach your target score."
        />
      </div>
    </section>
  );
}
