import type { Dictionary } from "@/i18n";
import Reveal from "./Reveal";
import styles from "./Experience.module.css";

export default function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <ul className={styles.list}>
      {dict.items.map((item, i) => (
        <Reveal as="li" key={i} className={styles.row} delay={i * 80}>
          <span className={styles.org}>{item.org}</span>
          <span className={styles.role}>{item.role}</span>
          <span className={`label ${styles.dates}`}>{item.dates}</span>
        </Reveal>
      ))}
    </ul>
  );
}
