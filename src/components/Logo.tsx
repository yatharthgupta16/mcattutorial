import { SITE_NAME, SITE_TAGLINE } from "../lib/site";

interface LogoProps {
  /** Show the small tagline under the wordmark (header variant). */
  withTagline?: boolean;
  /**
   * Places the mark on a white plate. The logo art is a JPEG with an opaque white
   * background, so on a dark surface it needs one — otherwise its own background
   * reads as a bare white rectangle.
   */
  onDark?: boolean;
  className?: string;
}

export function Logo({ withTagline = false, onDark = false, className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 text-lg font-extrabold ${className}`}
      aria-label={`${SITE_NAME} home`}
    >
      {/* Decorative: the wordmark beside it already names the brand, and the anchor
          carries an aria-label, so alt text here would just repeat itself. */}
      <img
        src={`${import.meta.env.BASE_URL}logo-mark.jpg`}
        alt=""
        width={220}
        height={220}
        className={`h-11 w-11 shrink-0 object-contain ${
          onDark ? "rounded-lg bg-white p-1" : ""
        }`}
      />
      <span>
        {SITE_NAME}
        {withTagline && (
          <span className="mt-px block text-[11px] font-semibold tracking-[0.02em] text-muted">
            {SITE_TAGLINE}
          </span>
        )}
      </span>
    </a>
  );
}
