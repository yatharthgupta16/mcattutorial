import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadProps {
  eyebrow?: string;
  title: ReactNode;
  center?: boolean;
  children?: ReactNode;
}

export function SectionHead({ eyebrow, title, center = false, children }: SectionHeadProps) {
  return (
    <Reveal className={`mb-[52px] max-w-[760px] ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mb-4 text-[clamp(28px,3.6vw,42px)] font-extrabold">{title}</h2>
      <div className="space-y-3 text-[17px]">{children}</div>
    </Reveal>
  );
}
