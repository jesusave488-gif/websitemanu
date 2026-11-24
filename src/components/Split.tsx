import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./Split.module.css";

type SplitProps = {
  id?: string;
  title: string;
  /** Contenu facultatif sous le titre (colonne de gauche). */
  aside?: ReactNode;
  /** La colonne de gauche reste visible pendant le défilement (grand écran). */
  sticky?: boolean;
  children: ReactNode;
};

/** Section en deux colonnes : grand titre à gauche, contenu à droite. */
export default function Split({ id, title, aside, sticky = false, children }: SplitProps) {
  const titleId = id ? `${id}-title` : undefined;
  return (
    <section id={id} className={`container ${styles.split}`} aria-labelledby={titleId}>
      <div className={sticky ? `${styles.head} ${styles.sticky}` : styles.head}>
        <Reveal as="h2" id={titleId} className={styles.title}>
          {title}
        </Reveal>
        {aside ? (
          <Reveal className={styles.aside} delay={80}>
            {aside}
          </Reveal>
        ) : null}
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
