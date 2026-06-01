import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/cn";

const subjects = [
  {
    name: "Biology",
    href: "/services#biology",
    blurb: "Cells, systems, genetics — taught with clinical context.",
  },
  {
    name: "Biochemistry",
    href: "/services#biochemistry",
    blurb: "Metabolism, enzymes, and molecular biology fundamentals.",
  },
  {
    name: "Physics",
    href: "/services#physics",
    blurb: "Mechanics, waves, and electricity built from first principles.",
  },
  {
    name: "CARS",
    href: "/services#cars",
    blurb: "Critical Analysis & Reasoning — strategy and timed practice.",
  },
];

export function ServicesMenu() {
  const [liveOpen, setLiveOpen] = useState(false);

  return (
    <NavigationMenu.Root className="relative" delayDuration={100}>
      <NavigationMenu.List className="flex items-center">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "btn-ghost data-[state=open]:text-brand-700",
              "group",
            )}
          >
            Services
            <ChevronDown
              className="h-4 w-4 transition group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content
            className={cn(
              "absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg",
              "data-[motion^=from-]:animate-fadeIn",
            )}
            onPointerLeave={() => setLiveOpen(false)}
          >
            <ul className="flex flex-col">
              <li>
                <a
                  href="/services#consultation"
                  className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition hover:bg-brand-50"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    MCAT Consultation
                  </span>
                  <span className="text-xs text-slate-500">
                    Strategy & diagnostic sessions tailored to you.
                  </span>
                </a>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setLiveOpen(true)}
                onMouseLeave={() => setLiveOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setLiveOpen((v) => !v)}
                  className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left transition hover:bg-brand-50"
                  aria-haspopup="true"
                  aria-expanded={liveOpen}
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-slate-900">
                      Live 1:1 Classes
                    </span>
                    <span className="text-xs text-slate-500">
                      Subject-specific tutoring with expert tutors.
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden />
                </button>

                {liveOpen && (
                  <div
                    className={cn(
                      "absolute left-full top-0 ml-2 w-72 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg",
                      "animate-fadeIn",
                    )}
                  >
                    <ul className="flex flex-col">
                      {subjects.map((s) => (
                        <li key={s.name}>
                          <a
                            href={s.href}
                            className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition hover:bg-brand-50"
                          >
                            <span className="text-sm font-semibold text-slate-900">
                              {s.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              {s.blurb}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
