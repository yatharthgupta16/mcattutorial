export const SITE_NAME = "NorthStar Med";
export const SITE_TAGLINE = "Personalized Online MCAT Coaching";

/**
 * Calendly booking page for the free consultation. Rendered by BookingLink, which
 * opens it as a popup when the Calendly widget is available and otherwise falls
 * back to navigating here directly.
 *
 * Points at the event type ("/30min", the Book Consultation event) rather than the
 * "/contact-thenorthstarmed" profile page: the profile lists every event and makes
 * the visitor pick one first, which is a wasted click when there is only one. This
 * opens straight on the date-and-time picker. If the event is ever renamed or
 * recreated in Calendly, its slug changes and this needs updating with it.
 */
export const CALENDLY_URL = "https://calendly.com/contact-thenorthstarmed/30min";
export const WHATSAPP_URL = "https://wa.me/919958064082";
export const WHATSAPP_DISPLAY = "+91 99580 64082";
export const EMAIL = "contact@thenorthstarmed.com";
