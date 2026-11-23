import Image from "next/image";
import type { Dictionary } from "@/i18n";
import Reveal from "./Reveal";
import styles from "./About.module.css";

type AboutProps = {
  dict: Dictionary["about"];
  /** Chemin de la photo dans public/ ; vide = emplacement. */
  portrait: string;
};

export default function About({ dict, portrait }: AboutProps) {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        {dict.paragraphs.map((paragraph, i) => (
          <Reveal as="p" key={i} delay={i * 100} className={i === 0 ? styles.first : styles.paragraph}>
            {paragraph}
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.portrait} delay={150}>
        {portrait ? (
          <Image
            src={portrait}
            alt={dict.portraitAlt}
            fill
            sizes="(max-width: 860px) 90vw, 30vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.shape} aria-hidden="true" />
            <span className="label">{dict.portraitPlaceholder}</span>
          </div>
        )}
      </Reveal>
    </div>
  );
}
