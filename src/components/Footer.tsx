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

  return (
    <footer className="container">
      <div className={styles.footer}>
      <nav aria-label={dict.navLabel}>
        <ul className={styles.list}>
          <li>
            <Link href={`${home}#top`} className={styles.link}>
              {nav.home}
            </Link>
          </li>
          <li>
            <Link href={`${home}#travaux`} className={styles.link}>
              {nav.work}
            </Link>
          </li>
          <li>
            <Link href={`${home}#a-propos`} className={styles.link}>
              {nav.about}
            </Link>
          </li>
          <li>
            <Link href={`${home}#contact`} className={styles.link}>
              {nav.contact}
            </Link>
          </li>
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
              {social.label} ↗
            </a>
          </li>
        ))}
      </ul>

      <p className={`label ${styles.copy}`}>
        © {site.year} {site.name}
      </p>
      </div>
    </footer>
  );
}
