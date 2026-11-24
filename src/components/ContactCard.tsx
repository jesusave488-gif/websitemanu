import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/content/site";
import { ChatIcon, MailIcon } from "./Icons";
import Reveal from "./Reveal";
import styles from "./ContactCard.module.css";

/** Grande carte de contact en dégradé ardoise → vert, avec WhatsApp et email au même niveau. */
export default function ContactCard({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className={`container ${styles.wrap}`} aria-labelledby="contact-title">
      <Reveal className={styles.card}>
        <span className={styles.ring} aria-hidden="true" />
        <h2 id="contact-title" className={styles.title}>
          {dict.title} <em className={styles.accent}>{dict.accent}</em>
        </h2>

        <div className={styles.actions}>
          <a
            href={whatsappLink(dict.whatsappMessage)}
            className={`${styles.button} ${styles.primary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChatIcon className={styles.icon} />
            {dict.whatsappCta}
          </a>
          <a href={`mailto:${site.email}`} className={`${styles.button} ${styles.secondary}`}>
            <MailIcon className={styles.icon} />
            <span>
              <span className="visually-hidden">{dict.emailCta} : </span>
              {site.email}
            </span>
          </a>
        </div>

        <p className={styles.phone}>WhatsApp · {site.whatsapp.display}</p>
      </Reveal>
    </section>
  );
}
