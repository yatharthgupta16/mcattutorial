import { CALENDAR_URL, WHATSAPP_URL } from "../lib/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-[10px]">
      <div className="container-page flex h-[68px] items-center justify-between">
        <Logo withTagline className="text-ink" />

        <nav
          className="hidden items-center gap-7 text-[15px] font-semibold text-ink min-[821px]:flex"
          aria-label="Main"
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-green-dark">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="btn btn-primary px-[22px] py-[11px] text-sm"
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Consultation
          </a>
          <a
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition hover:-translate-y-px"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>
        </div>
      </div>
    </header>
  );
}
