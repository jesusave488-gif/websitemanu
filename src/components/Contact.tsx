import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className={`container ${styles.contact}`} aria-labelledby="contact-title">
      <Reveal className={styles.head}>
        <span className="label">{dict.label}</span>
      </Reveal>

      <Reveal as="h2" id="contact-title" className={styles.title}>
        {dict.title} <em className={styles.accent}>{dict.accent}</em>
      </Reveal>

      <Reveal className={styles.channels} delay={120}>
        <div className={styles.channel}>
          <span className="label">{dict.emailLabel}</span>
          <a href={`mailto:${site.email}`} className={`link ${styles.value}`}>
            {site.email}
          </a>
        </div>
        <div className={styles.channel}>
          <span className="label">{dict.whatsappLabel}</span>
          <a
            href={`https://wa.me/${site.whatsapp.number}`}
            className={`link ${styles.value}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.whatsapp.display}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
