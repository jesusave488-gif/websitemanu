import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import LangSwitch from "./LangSwitch";
import styles from "./Header.module.css";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
};

export default function Header({ locale, dict }: HeaderProps) {
  const home = `/${locale}`;

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.inner}`}>
        <Link href={`${home}#top`} className={styles.home} aria-label={dict.homeLabel}>
          {dict.home}
        </Link>

        <ul className={styles.links}>
          <li>
            <Link href={`${home}#travaux`} className={styles.link}>
              {dict.work}
            </Link>
          </li>
          <li>
            <Link href={`${home}#a-propos`} className={styles.link}>
              {dict.about}
            </Link>
          </li>
          <li>
            <Link href={`${home}#contact`} className={styles.link}>
              {dict.contact}
            </Link>
          </li>
          <li>
            <LangSwitch locale={locale} label={dict.switchTo} ariaLabel={dict.switchLabel} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
