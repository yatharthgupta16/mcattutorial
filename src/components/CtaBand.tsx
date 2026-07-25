import type { ReactNode } from "react";
import { CtaButtons } from "./CtaButtons";

interface CtaBandProps {
  title: ReactNode;
  text?: string;
  /** White card variant, used inside mint-backed sections. */
  white?: boolean;
  /** Adds the arrow / WhatsApp icons inside the buttons (hero variant). */
  withIcons?: boolean;
  /** Override the default top margin (used when nested directly under other spaced content). */
  className?: string;
}

export function CtaBand({ title, text, white = false, withIcons = false, className = "mt-14" }: CtaBandProps) {
  return (
    <div
      className={`${className} flex flex-wrap items-center justify-between gap-[22px] rounded-[20px] border border-[#ddefe6] px-[26px] py-8 sm:px-10 sm:py-[42px] ${
        white ? "bg-white" : "bg-mint"
      }`}
    >
      <div>
        <h3 className="text-[clamp(21px,2.6vw,27px)] font-extrabold">{title}</h3>
        {text && <p className="mt-2 max-w-[520px] text-base">{text}</p>}
      </div>
      <CtaButtons withIcons={withIcons} />
    </div>
  );
}
