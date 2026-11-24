import type { Dictionary } from "@/i18n";
import Reveal from "./Reveal";
import Split from "./Split";
import styles from "./Experience.module.css";

export default function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Split id="experience" title={dict.title}>
      <ul className={styles.list}>
        {dict.items.map((item, i) => (
          <Reveal as="li" key={i} className={styles.item} delay={i * 80}>
            <p className={styles.org}>{item.org}</p>
            <p className={styles.role}>{item.role}</p>
            <p className={styles.dates}>{item.dates}</p>
          </Reveal>
        ))}
      </ul>
    </Split>
  );
}
