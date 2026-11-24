"use client";

import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";

export type TimelineItem = {
  org: string;
  role: string;
  dates: string;
  location?: string;
  description?: string;
  tags?: string[];
  current?: boolean;
};

type TimelineProps = {
  items: TimelineItem[];
  currentLabel: string;
};

/**
 * Frise verticale : une ligne fine relie les étapes. Au défilement, la ligne se remplit
 * en vert et chaque point s'allume quand il passe le repère de lecture (60 % de l'écran).
 * Sans JavaScript ou en mouvement réduit, tout est affiché allumé.
 */
export default function Timeline({ items, currentLabel }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const entries = Array.from(root.querySelectorAll<HTMLElement>("[data-entry]"));
    const dots = entries.map((entry) => entry.querySelector<HTMLElement>("[data-dot]")!);
    root.dataset.tracking = "true";

    let frame = 0;
    const update = () => {
      frame = 0;
      const rootBox = root.getBoundingClientRect();
      const centers = dots.map((dot) => {
        const box = dot.getBoundingClientRect();
        return box.top + box.height / 2;
      });
      const first = centers[0];
      const last = centers[centers.length - 1];
      const anchor = window.innerHeight * 0.6;

      // La ligne va exactement du premier au dernier point.
      root.style.setProperty("--line-start", `${first - rootBox.top}px`);
      root.style.setProperty("--line-length", `${Math.max(last - first, 0)}px`);
      const progress = last > first ? (anchor - first) / (last - first) : anchor > first ? 1 : 0;
      root.style.setProperty("--progress", String(Math.min(Math.max(progress, 0), 1)));

      entries.forEach((entry, i) => entry.toggleAttribute("data-reached", centers[i] <= anchor));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={styles.timeline}>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.fill} />
      </span>

      <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.entry} data-entry data-current={item.current || undefined}>
          <span className={styles.dot} data-dot aria-hidden="true" />

          <p className={styles.meta}>
            <span className={styles.dates}>{item.dates}</span>
            {item.current ? <span className={styles.badge}>{currentLabel}</span> : null}
          </p>

          <h3 className={styles.org}>{item.org}</h3>
          <p className={styles.role}>
            {item.role}
            {item.location ? <span className={styles.location}> · {item.location}</span> : null}
          </p>

          {item.description ? <p className={styles.description}>{item.description}</p> : null}

          {item.tags?.length ? (
            <ul className={styles.tags}>
              {item.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
      </ol>
    </div>
  );
}
