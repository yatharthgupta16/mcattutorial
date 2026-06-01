import { useState } from "react";
import { BookingDialog } from "./BookingDialog";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-sm font-semibold text-white shadow-xl ring-1 ring-brand-800/20 transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        aria-label="Book a mock class"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-pulseDot" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-300" />
        </span>
        <span aria-hidden>📚</span>
        Book a Mock Class Now
      </button>

      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
