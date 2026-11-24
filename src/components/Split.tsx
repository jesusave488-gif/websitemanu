import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./Split.module.css";

type SplitProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

/** Section en deux colonnes : grand titre à gauche, contenu à droite. */
export default function Split({ id, title, children }: SplitProps) {
  const titleId = id ? `${id}-title` : undefined;
  return (
    <section id={id} className={`container ${styles.split}`} aria-labelledby={titleId}>
      <Reveal as="h2" id={titleId} className={styles.title}>
        {title}
      </Reveal>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
