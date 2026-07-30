import type { MouseEvent, ReactNode } from "react";
import { CALENDLY_URL } from "../lib/site";

declare global {
  interface Window {
    Calendly?: { initPopupWidget(options: { url: string }): void };
  }
}

interface BookingLinkProps {
  className?: string;
  children: ReactNode;
}

/**
 * Every "Book Your Free MCAT Consultation" CTA on the page. Opens Calendly as an
 * overlay rather than sending the visitor away.
 *
 * The real `href` is kept (rather than the empty one in Calendly's copy-paste
 * snippet) so the button still works if the widget script is slow, blocked by an
 * extension, or fails outright — in that case the click just navigates to the
 * booking page. An empty href would reload the current page instead, silently
 * losing the booking.
 */
export function BookingLink({ className = "", children }: BookingLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Not loaded yet: leave the event alone and let the href do its job.
    if (!window.Calendly) return;
    e.preventDefault();
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }

  return (
    <a
      className={className}
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
