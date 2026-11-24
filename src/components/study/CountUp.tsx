"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Chiffre qui défile de 0 à sa valeur quand il apparaît à l'écran (« 120+ », « 95 % », « 3,5 »…).
 * Le texte d'origine est rendu côté serveur : sans JavaScript ou en mouvement réduit, il s'affiche tel quel.
 * Une valeur sans nombre (ex. « [00] » en attente) reste fixe.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const [text, setText] = useState(value);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const match = value.match(/^([^\d]*)(\d[\d\s.,]*\d|\d)(.*)$/);
    const el = ref.current;
    if (!match || !el || value.startsWith("[")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const separator = digits.includes(",") ? "," : ".";
    const decimals = digits.includes(separator) ? digits.split(separator).pop()!.length : 0;
    const target = parseFloat(digits.replace(/\s/g, "").replace(",", "."));
    const format = (n: number) => prefix + n.toFixed(decimals).replace(".", separator) + suffix;

    setText(format(0));
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setText(t < 1 ? format(target * eased) : value);
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <dd ref={ref} className={className}>
      {text}
    </dd>
  );
}
