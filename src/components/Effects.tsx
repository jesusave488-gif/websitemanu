"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Script inline, exécuté avant React : ajoute la classe "js" sur <html>, ce qui masque
// les éléments .rv en attendant leur apparition. Sans JavaScript, rien n'est masqué.
const init = `document.documentElement.classList.add("js");`;

export function EffectsInit() {
  return <script dangerouslySetInnerHTML={{ __html: init }} />;
}

/** Apparition au défilement (.rv → .in) et compteurs (.count[data-to]), relancés à chaque page. */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv:not(.in)");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
          e.target.querySelectorAll<HTMLElement>(".count").forEach((c) => {
            const to = Number(c.dataset.to);
            const t0 = performance.now();
            const step = (t: number) => {
              const p = Math.min((t - t0) / 1200, 1);
              c.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
