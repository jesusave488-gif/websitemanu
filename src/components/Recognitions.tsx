import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { recognitions } from "@/content/recognitions";
import RecognitionList from "./RecognitionList";
import Reveal from "./Reveal";
import styles from "./Recognitions.module.css";

/** Distinctions : titre à gauche, liste à droite. Le certificat apparaît au survol. */
export default function Recognitions({ locale, dict }: { locale: Locale; dict: Dictionary["recognitions"] }) {
  if (recognitions.length === 0) return null;

  return (
    <section id="distinctions" className={styles.band} aria-labelledby="distinctions-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <Reveal as="h2" id="distinctions-title" className={styles.title}>
            {dict.title}
          </Reveal>
          <Reveal delay={80}>
            <p className={styles.intro}>{dict.intro}</p>
            <p className={`label ${styles.hint}`}>{dict.hint}</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <RecognitionList
            items={recognitions}
            locale={locale}
            labels={{
              issuedBy: dict.issuedBy,
              view: dict.view,
              close: dict.close,
              placeholder: dict.placeholder,
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
