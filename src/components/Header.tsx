import { WHATSAPP_URL } from "../lib/site";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { BookingLink } from "./BookingLink";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const { progress, scrolled } = useScrollProgress();

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-[10px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(16,32,46,.08)]" : ""
      }`}
    >
      <div className="container-page flex min-h-[68px] flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2">
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

        <div className="flex shrink-0 items-center gap-3 max-[820px]:ml-auto">
          <BookingLink className="btn btn-primary whitespace-nowrap px-[18px] py-[10px] text-[13px] min-[380px]:px-[22px] min-[380px]:py-[11px] min-[380px]:text-sm">
            Book Free Consultation
          </BookingLink>
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

      <div className="h-[3px] w-full bg-line/50" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-green to-green-dark transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
