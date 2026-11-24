"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Editorial.module.css";

type SectionTabsProps = {
  label: string;
  items: { id: string; label: string }[];
};

/**
 * Barre des sections, collée en haut de l'écran pendant la lecture :
 * la section en cours est mise en avant, et un trait sous la barre avance avec la lecture.
 */
export default function SectionTabs({ label, items }: SectionTabsProps) {
  const [active, setActive] = useState(items[0]?.id);
  const barRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const ids = items.map((item) => item.id).join(",");

  useEffect(() => {
    const sections = ids
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const first = sections[0];
    const last = sections[sections.length - 1];

    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.35;
      let current = first?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top < anchor) current = section.id;
      }
      setActive(current);

      if (first && last) {
        const start = first.getBoundingClientRect().top;
        const end = last.getBoundingClientRect().bottom;
        const progress = Math.min(Math.max((anchor - start) / (end - start), 0), 1);
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

  // Sur mobile, l'onglet actif reste visible dans la barre défilante.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>("[aria-current]");
    if (!list || !link) return;
    const offset = link.offsetLeft - (list.clientWidth - link.clientWidth) / 2;
    list.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  return (
    <div ref={barRef} className={styles.tabsBar}>
      <nav className={`container ${styles.tabs}`} aria-label={label}>
        <ul ref={listRef} className={styles.tabsList}>
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={styles.tab}
                aria-current={active === item.id ? "location" : undefined}
              >
                <span className={styles.tabNumber}>{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className={styles.tabsProgress} aria-hidden="true" />
    </div>
  );
}
