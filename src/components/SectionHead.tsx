import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadProps {
  eyebrow?: string;
  title: ReactNode;
  center?: boolean;
  /** Drops the default bottom margin when the head sits inside a layout that owns its own spacing. */
  flush?: boolean;
  children?: ReactNode;
}

export function SectionHead({
  eyebrow,
  title,
  center = false,
  flush = false,
  children,
}: SectionHeadProps) {
  return (
    <Reveal
      className={`max-w-[760px] ${flush ? "" : "mb-[52px]"} ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mb-4 text-[clamp(28px,3.6vw,42px)] font-extrabold">{title}</h2>
      <div className="space-y-3 text-[17px]">{children}</div>
    </Reveal>
  );
}
