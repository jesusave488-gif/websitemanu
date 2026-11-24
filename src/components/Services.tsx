import type { Dictionary } from "@/i18n";
import { serviceIds, serviceNumber } from "@/content/services";
import { whatsappLink } from "@/content/site";
import { ArrowIcon, ChatIcon, ServiceIcon } from "./Icons";
import Reveal from "./Reveal";
import styles from "./Services.module.css";

type ServicesProps = {
  dict: Dictionary["services"];
  /** Message WhatsApp pré-rempli du bouton principal. */
  contactMessage: string;
};

/**
 * Services : présentation et bouton de contact dans la première case de la grille,
 * puis une carte par service. La première carte est mise en avant (fond ardoise, légèrement inclinée).
 */
export default function Services({ dict, contactMessage }: ServicesProps) {
  return (
    <section id="services" className={`container ${styles.wrap}`} aria-labelledby="services-title">
      <div className={styles.grid}>
        <Reveal className={styles.intro}>
          <h2 id="services-title" className={styles.title}>
            {dict.title}
          </h2>
          <p className={styles.lead}>{dict.intro}</p>
          <a href={whatsappLink(contactMessage)} className={styles.cta} target="_blank" rel="noopener noreferrer">
            <ChatIcon className={styles.ctaIcon} />
            {dict.cta}
          </a>
        </Reveal>

        <ul className={styles.list}>
          {serviceIds.map((id, i) => {
            const item = dict.items[id];
            return (
              // L'apparition est sur le <li> ; l'inclinaison est sur la carte, pour ne pas se gêner.
              <Reveal as="li" key={id} className={styles.item} delay={(i + 1) * 70}>
                <article className={styles.card} data-featured={i === 0 || undefined}>
                  <div className={styles.top}>
                    <span className={styles.icon}>
                      <ServiceIcon id={id} className={styles.iconSvg} />
                    </span>
                    <span className={styles.number}>{serviceNumber(id)}</span>
                  </div>
                  <h3 className={styles.name}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                  <a
                    href={whatsappLink(dict.messagePrefix + item.title)}
                    className={styles.more}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.more}
                    <span className="visually-hidden"> : {item.title}</span>
                    <ArrowIcon className={styles.moreIcon} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
