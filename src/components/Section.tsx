import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  label: string;
  /** Texte secondaire aligné à droite du label (ex. "2019–2026"). */
  meta?: string;
  children: ReactNode;
};

/** Section de la page : filet fin + petit label mono, puis le contenu. */
export default function Section({ id, label, meta, children }: SectionProps) {
  return (
    <section id={id} className={`container ${styles.section}`} aria-labelledby={id ? `${id}-title` : undefined}>
      <Reveal className={styles.head}>
        <h2 id={id ? `${id}-title` : undefined} className="label">
          {label}
        </h2>
        {meta ? <span className="label">{meta}</span> : null}
      </Reveal>
      {children}
    </section>
  );
}
