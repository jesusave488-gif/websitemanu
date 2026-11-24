import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import styles from "./ContactCard.module.css";

/** Grande carte de contact en dégradé ardoise → vert (couleurs de la brochure). */
export default function ContactCard({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className={`container ${styles.wrap}`} aria-labelledby="contact-title">
      <Reveal className={styles.card}>
        <span className={styles.ring} aria-hidden="true" />
        <h2 id="contact-title" className={styles.title}>
          {dict.title} <em className={styles.accent}>{dict.accent}</em>
        </h2>
        <a href={`mailto:${site.email}`} className={styles.email}>
          <span aria-hidden="true">→</span> {site.email}
        </a>
        <a
          href={`https://wa.me/${site.whatsapp.number}`}
          className={styles.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dict.whatsappLabel} · {site.whatsapp.display}
        </a>
      </Reveal>
    </section>
  );
}
