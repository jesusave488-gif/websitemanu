import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
};

export default function Header({ locale, dict }: HeaderProps) {
  const home = `/${locale}`;

  return (
    <header className={`container ${styles.header}`}>
      <Link href={`${home}#top`} className={styles.home} aria-label={dict.homeLabel}>
        <Logo />
      </Link>

      <nav className={styles.nav}>
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
        </ul>
        <div className={styles.tools}>
          <LangSwitch locale={locale} label={dict.switchTo} ariaLabel={dict.switchLabel} />
          <ThemeToggle label={dict.theme} />
        </div>
      </nav>
    </header>
  );
}
