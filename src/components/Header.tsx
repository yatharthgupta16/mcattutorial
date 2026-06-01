import { GraduationCap } from "lucide-react";
import { ServicesMenu } from "./ServicesMenu";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="flex items-center gap-2 text-slate-900"
            aria-label="MCAT Coaching Classes home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-base font-bold tracking-tight">
              MCAT Coaching Classes
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="btn-ghost">
                {l.label}
              </a>
            ))}
            <ServicesMenu />
            <a href="#contact" className="btn-ghost">
              Contact
            </a>
          </nav>
        </div>

        <a href="#contact" className="hidden btn-primary md:inline-flex">
          Talk to us
        </a>
      </div>
    </header>
  );
}
