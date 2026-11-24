import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n";
import { BentArrowIcon, WaveIcon } from "./Icons";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

type HeroProps = {
  dict: Dictionary["hero"];
  /** Ancre de la section suivante, pour la flèche « découvrir la suite ». */
  next: string;
};

/** Découpe une phrase en mots qui montent un à un (le texte reste lisible tel quel sans JavaScript). */
function Words({ text, start, className }: { text: string; start: number; className: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className={styles.word}>
            <span className={styles.wordInner} style={{ "--i": start + i } as CSSProperties}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

/**
 * Accueil : « Salut, hey ! » avec la main qui salue (comme sur la brochure),
 * l'autocollant « mode créatif », puis la phrase de présentation qui apparaît mot par mot.
 */
export default function Hero({ dict, next }: HeroProps) {
  const leadCount = dict.lead.split(" ").length;

  return (
    <section className={`container ${styles.hero}`}>
      <p className={styles.greeting}>
        <WaveIcon className={styles.hand} />
        <span className={styles.hello}>{dict.greeting}</span>
        <span className={styles.hey}>{dict.greetingEnd}</span>
      </p>

      {/* Clin d'œil à la brochure : un interrupteur qui s'allume tout seul. */}
      <span className={styles.sticker} aria-hidden="true">
        {dict.creativeMode}
        <span className={styles.switch}>
          <span className={styles.knob} />
        </span>
      </span>

      <h1 className={styles.title}>
        <Words text={dict.lead} start={0} className={styles.lead} />{" "}
        <Words text={dict.rest} start={leadCount} className={styles.rest} />
      </h1>

      <div className={styles.bottom}>
        <Reveal as="ul" className={styles.tags} delay={700}>
          {dict.tags.map((tag) => (
            <li key={tag} className={`label ${styles.tag}`}>
              {tag}
            </li>
          ))}
        </Reveal>

        <a href={next} className={styles.scroll} aria-label={dict.scrollLabel}>
          <BentArrowIcon className={styles.arrow} />
        </a>
      </div>
    </section>
  );
}
