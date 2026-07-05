import { SITE_NAME, SITE_TAGLINE } from "../lib/site";
import { StarIcon } from "./icons";

interface LogoProps {
  /** Show the small tagline under the wordmark (header variant). */
  withTagline?: boolean;
  className?: string;
}

export function Logo({ withTagline = false, className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 text-lg font-extrabold ${className}`}
      aria-label={`${SITE_NAME} home`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-green to-green-dark text-white">
        <StarIcon />
      </span>
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
