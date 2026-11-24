import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/content/site";
import { ChatIcon, MailIcon } from "./Icons";
import Logo from "./Logo";
import Reveal from "./Reveal";
import styles from "./Footer.module.css";

type FooterProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  contact: Dictionary["contact"];
  dict: Dictionary["footer"];
};

/**
 * Pied de page sombre : appel à me contacter (WhatsApp et email au même niveau),
 * puis présentation, liens et copyright.
 */
export default function Footer({ locale, nav, contact, dict }: FooterProps) {
  const home = `/${locale}`;
  const pages = [
    { href: `${home}#top`, label: nav.homeText },
    { href: `${home}#a-propos`, label: nav.about },
    { href: `${home}#experience`, label: dict.links.experience },
    { href: `${home}#services`, label: dict.links.services },
    { href: `${home}#distinctions`, label: dict.links.recognitions },
  ];

  return (
    <footer className={styles.footer}>
      {/* Décor : halos qui dérivent lentement, cercle vert et anneaux de la brochure. */}
      <div className={styles.decor} aria-hidden="true">
        <span className={styles.glow} />
        <span className={styles.glowAlt} />
        <span className={styles.arc} />
        <span className={styles.ring} />
        <span className={`${styles.ring} ${styles.ringAlt}`} />
      </div>

      <div className={`container ${styles.inner}`}>
        <section id="contact" className={styles.cta} aria-labelledby="contact-title">
          <Reveal as="h2" id="contact-title" className={styles.title}>
            {contact.title} <span className={styles.accent}>{contact.accent}</span>
          </Reveal>

          <Reveal className={styles.ctaBody} delay={100}>
            <p className={styles.text}>{contact.text}</p>
            <div className={styles.actions}>
              <a
                href={whatsappLink(contact.whatsappMessage)}
                className={`${styles.button} ${styles.primary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ChatIcon className={styles.icon} />
                {contact.whatsappCta}
              </a>
              <a href={`mailto:${site.email}`} className={`${styles.button} ${styles.secondary}`}>
                <MailIcon className={styles.icon} />
                {contact.emailCta}
              </a>
            </div>
          </Reveal>
        </section>

        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href={home} className={styles.brandName}>
              <Logo className={styles.logo} />
              {site.name}
            </Link>
            <p className={styles.tagline}>{dict.tagline}</p>
          </div>

          <div className={styles.columns}>
            <nav aria-labelledby="footer-pages">
              <h2 id="footer-pages" className={styles.heading}>
                {dict.navLabel}
              </h2>
              <ul className={styles.list}>
                {pages.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={styles.heading}>{dict.socialLabel}</h2>
              <ul className={styles.list}>
                {site.social.map((social) => (
                  <li key={social.label}>
                    {/* URL à compléter dans src/content/site.ts */}
                    <a
                      href={social.url || "#"}
                      className={styles.link}
                      target={social.url ? "_blank" : undefined}
                      rel={social.url ? "noopener noreferrer" : undefined}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={whatsappLink()} className={styles.link} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={styles.heading}>{dict.contactLabel}</h2>
              <ul className={styles.list}>
                <li>
                  <a href={`mailto:${site.email}`} className={styles.link}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:+${site.whatsapp.number}`} className={styles.link}>
                    {site.whatsapp.display}
                  </a>
                </li>
                <li className={styles.plain}>{dict.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {site.year} — {site.name}
          </p>
          <a href="#top" className={styles.top}>
            {nav.homeLabel}
            <span className={styles.topArrow} aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>

      {/* Grand nom en filigrane, qui monte quand on arrive en bas de page. */}
      <p className={styles.wordmark} aria-hidden="true">
        {site.name}
      </p>
    </footer>
  );
}
