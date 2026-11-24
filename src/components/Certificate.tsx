import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Recognition } from "@/content/recognitions";
import styles from "./Certificate.module.css";

type CertificateProps = {
  item: Recognition;
  locale: Locale;
  /** Texte affiché sur l'emplacement tant que l'image n'est pas fournie. */
  placeholder: string;
  sizes: string;
};

/**
 * Certificat : l'image fournie, ou à défaut un certificat dessiné aux couleurs de la DA
 * (pour visualiser le rendu en attendant le scan).
 */
export default function Certificate({ item, locale, placeholder, sizes }: CertificateProps) {
  const { certificate } = item;

  return (
    <div className={styles.frame} style={{ aspectRatio: certificate.ratio }}>
      {certificate.src ? (
        <Image src={certificate.src} alt={certificate.alt[locale]} fill sizes={sizes} className={styles.image} />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={certificate.alt[locale]}>
          <span className={styles.border} aria-hidden="true" />
          <span className={styles.tag}>{placeholder}</span>
          <span className={styles.kicker}>{item.issuer}</span>
          <span className={styles.heading}>{item.title[locale]}</span>
          <span className={styles.name}>Emmanuel KIKI</span>
          <span className={styles.lines} aria-hidden="true">
            <span />
            <span />
          </span>
          <span className={styles.footer}>
            <span>{item.category[locale]}</span>
            <span>{item.year}</span>
          </span>
          <span className={styles.seal} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
