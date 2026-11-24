import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import Split from "./Split";
import styles from "./About.module.css";

type AboutProps = {
  locale: Locale;
  dict: Dictionary["about"];
  /** Chemin de la photo dans public/ ; vide = emplacement. */
  portrait: string;
};

/** "À propos" en deux colonnes, puis le portrait en pleine largeur. */
export default function About({ locale, dict, portrait }: AboutProps) {
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
        <MediaFrame
          media={portrait ? { src: portrait, alt: { fr: dict.portraitAlt, en: dict.portraitAlt } } : undefined}
          locale={locale}
          ratio="1902 / 900"
          sizes="100vw"
          tone="paper"
          className={styles.frame}
          placeholder={
            <>
              <span />
              <span className="label">{dict.portraitPlaceholder}</span>
            </>
          }
        />
      </Reveal>
    </>
  );
}
