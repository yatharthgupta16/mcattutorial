import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface PhotoCardProps {
  /** File name inside `public/`; BASE_URL is prepended so it resolves under the Pages subpath. */
  src: string;
  alt: string;
  /** Intrinsic pixel size of the source, so the browser can reserve space before it loads. */
  width: number;
  height: number;
  /** Tailwind aspect ratio class controlling the rendered crop. */
  aspect?: string;
  /** Optional strip under the image — use it to caption what the photo is showing. */
  caption?: ReactNode;
  /** Set on the above-the-fold hero only; everything else stays lazy. */
  priority?: boolean;
  className?: string;
}

/**
 * Shared framed photo used across the page.
 *
 * Deliberately opacity-only (no transform): `position: sticky` breaks on an element
 * whose ancestor has an active `transform`, which the shared Reveal component sets
 * while animating in. Fading without translating keeps callers free to make this
 * sticky, which both the hero and the How-It-Works aside rely on.
 */
export function PhotoCard({
  src,
  alt,
  width,
  height,
  aspect = "aspect-[4/3]",
  caption,
  priority = false,
  className = "",
}: PhotoCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-card border border-line bg-white shadow-card transition-opacity duration-700 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? "200ms" : "0ms" }}
    >
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`${aspect} w-full object-cover`}
      />
      {caption && (
        <p className="border-t border-line px-5 py-3.5 text-[13.5px] font-semibold text-muted">
          {caption}
        </p>
      )}
    </div>
  );
}
