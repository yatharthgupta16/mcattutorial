import { useEffect, useRef, useState } from "react";

/** Fires once when the element first scrolls into view; skips the wait entirely under reduced-motion. */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, inView]);

  return { ref, inView };
}
