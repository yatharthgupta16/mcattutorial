import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#home" className="flex items-center gap-2 text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-base font-bold tracking-tight">
              MCAT Coaching Classes
            </span>
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Personalized MCAT prep and live 1:1 classes from expert tutors.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3"
        >
          <a className="text-slate-600 hover:text-brand-700" href="#home">
            Home
          </a>
          <a className="text-slate-600 hover:text-brand-700" href="#about">
            About
          </a>
          <a className="text-slate-600 hover:text-brand-700" href="#services">
            Services
          </a>
          <a
            className="text-slate-600 hover:text-brand-700"
            href="/services#consultation"
          >
            Consultation
          </a>
          <a
            className="text-slate-600 hover:text-brand-700"
            href="/services#biology"
          >
            1:1 Classes
          </a>
          <a className="text-slate-600 hover:text-brand-700" href="#contact">
            Contact
          </a>
        </nav>
      </div>

      <div className="container-page mt-10 border-t border-slate-100 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} MCAT Coaching Classes. All rights reserved.
      </div>
    </footer>
  );
}
