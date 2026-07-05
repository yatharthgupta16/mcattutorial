import { CALENDAR_URL, WHATSAPP_URL } from "../lib/site";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";

interface CtaButtonsProps {
  /** Hero variant adds the arrow / WhatsApp icons inside the buttons. */
  withIcons?: boolean;
}

export function CtaButtons({ withIcons = false }: CtaButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3.5">
      <a
        className="btn btn-primary"
        href={CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Your Free MCAT Consultation
        {withIcons && <ArrowRightIcon />}
      </a>
      <a
        className="btn btn-secondary"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {withIcons && <WhatsAppIcon />}
        Chat on WhatsApp
      </a>
    </div>
  );
}
