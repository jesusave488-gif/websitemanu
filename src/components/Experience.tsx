import type { Dictionary } from "@/i18n";
import Split from "./Split";
import Timeline from "./Timeline";
import styles from "./Experience.module.css";

/** Expérience : titre fixe à gauche, frise chronologique à droite. */
export default function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Split
      id="experience"
      title={dict.title}
      sticky
      aside={
        <>
          <p className={styles.intro}>{dict.intro}</p>
          <p className={`label ${styles.period}`}>{dict.period}</p>
        </>
      }
    >
      <Timeline items={dict.items} currentLabel={dict.currentLabel} />
    </Split>
  );
}
