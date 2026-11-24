import Image from "next/image";
import type { Dictionary } from "@/i18n";
import { BulbIcon } from "./Icons";
import Reveal from "./Reveal";
import Split from "./Split";
import styles from "./About.module.css";

type AboutProps = {
  dict: Dictionary["about"];
  /** Chemin de la photo détourée dans public/ ; vide = emplacement. */
  portrait: string;
};

/**
 * "À propos" en deux colonnes, puis le portrait dans le grand cadre pleine largeur,
 * sur un décor de la brochure (disque bleu, anneaux, ampoule).
 */
export default function About({ dict, portrait }: AboutProps) {
  return (
    <>
      <Split id="a-propos" title={dict.title}>
        <div className={styles.text}>
          {dict.paragraphs.map((paragraph, i) => (
            <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? styles.first : styles.paragraph}>
              {paragraph}
            </Reveal>
          ))}
        </div>
      </Split>

      <Reveal className={styles.portrait}>
        <div className={styles.frame}>
          <span className={styles.disc} aria-hidden="true" />
          <span className={styles.ring} aria-hidden="true" />
          <span className={`${styles.ring} ${styles.ringAlt}`} aria-hidden="true" />

          {portrait ? (
            <Image src={portrait} alt={dict.portraitAlt} fill sizes="100vw" className={styles.image} />
          ) : (
            <span className={`label ${styles.placeholder}`}>{dict.portraitPlaceholder}</span>
          )}

          <span className={styles.bulb} aria-hidden="true">
            <BulbIcon className={styles.bulbIcon} />
          </span>
        </div>
      </Reveal>
    </>
  );
}
