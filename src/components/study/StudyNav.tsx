"use client";

import { useEffect, useState } from "react";
import styles from "./Study.module.css";

type StudyNavProps = {
  label: string;
  items: { id: string; label: string }[];
};

/** Sommaire de l'étude de cas : la section visible à l'écran passe en blanc, avec un point. */
export default function StudyNav({ label, items }: StudyNavProps) {
  const [active, setActive] = useState(items[0]?.id);
  const ids = items.map((item) => item.id).join(",");

  useEffect(() => {
    const sections = ids
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.4) current = section.id;
      }
      setActive(current);
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
    <nav className={styles.nav} aria-label={label}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={styles.navLink}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
