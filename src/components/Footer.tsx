import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

type FooterProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  dict: Dictionary["footer"];
};

export default function Footer({ locale, nav, dict }: FooterProps) {
  const home = `/${locale}`;
  const links = [
    { href: `${home}#top`, label: nav.homeText },
    { href: `${home}#travaux`, label: nav.work },
    { href: `${home}#a-propos`, label: nav.about },
    { href: `${home}#contact`, label: nav.contact },
  ];

  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.row}>
        <nav aria-label={dict.navLabel}>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.list} aria-label={dict.socialLabel}>
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
        </ul>
      </div>

      <div className={`${styles.row} ${styles.bottom}`}>
        <p className={styles.meta}>{dict.location}</p>
        <p className={styles.meta}>
          © {site.year} {site.name}
        </p>
      </div>
    </footer>
  );
}
