import { useEffect, useState } from "react";

/** Tracks page scroll as a 0-100 percentage, plus whether the user has scrolled past a small threshold. */
export function useScrollProgress(scrolledThreshold = 8) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      setScrolled(scrollTop > scrolledThreshold);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledThreshold]);

  return { progress, scrolled };
}
