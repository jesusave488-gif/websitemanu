"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Study.module.css";

type StudyNavProps = {
  label: string;
  items: { id: string; label: string }[];
};

/**
 * Sommaire numéroté de l'étude de cas.
 * - La section visible à l'écran est mise en avant.
 * - Une ligne verte se remplit à mesure de la lecture, avec une fine barre en haut de page.
 */
export default function StudyNav({ label, items }: StudyNavProps) {
  const [active, setActive] = useState(items[0]?.id);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const ids = items.map((item) => item.id).join(",");

  useEffect(() => {
    const sections = ids
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const article = sections[0]?.parentElement;

    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.4;
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top < anchor) current = section.id;
      }
      setActive(current);

      // Progression de lecture : 0 en haut de l'étude, 1 quand sa fin passe sous le repère.
      if (article) {
        const box = article.getBoundingClientRect();
        const progress = Math.min(Math.max((anchor - box.top) / (box.height - anchor * 0.5), 0), 1);
        navRef.current?.style.setProperty("--progress", progress.toFixed(4));
        barRef.current?.style.setProperty("--progress", progress.toFixed(4));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return (
    <>
      <div ref={barRef} className={styles.progressBar} aria-hidden="true" />
      <nav ref={navRef} className={styles.nav} aria-label={label}>
        <span className={styles.navTrack} aria-hidden="true" />
        <ul>
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={styles.navLink}
                aria-current={active === item.id ? "location" : undefined}
              >
                <span className={styles.navNumber}>{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
