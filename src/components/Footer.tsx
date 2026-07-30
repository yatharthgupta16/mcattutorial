import { EMAIL, SITE_NAME, SITE_TAGLINE, WHATSAPP_DISPLAY, WHATSAPP_URL } from "../lib/site";
import { Logo } from "./Logo";
import { MailIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-[#0c1a26] pb-[34px] pt-16 text-[#9fb1bd]">
      <div className="container-page">
        <div className="flex flex-wrap justify-between gap-9 border-b border-white/10 pb-10">
          <div className="max-w-[380px]">
            <Logo onDark className="mb-1.5 text-white" />
            <p className="mb-3.5 text-sm font-bold text-green">{SITE_TAGLINE}</p>
            <p className="text-[14.5px]">
              Helping future medical students prepare with confidence through personalized
              one-on-one online coaching.
            </p>
          </div>
          <div className="grid content-start gap-3 text-[14.5px]">
            <a
              className="flex items-center gap-2.5 transition hover:text-white"
              href={`mailto:${EMAIL}`}
            >
              <MailIcon size={17} />
              {EMAIL}
            </a>
            <a
              className="flex items-center gap-2.5 transition hover:text-white"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={17} />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
        <p className="pt-[26px] text-[13.5px]">
          © {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
