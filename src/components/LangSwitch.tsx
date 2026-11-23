"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import styles from "./LangSwitch.module.css";

type LangSwitchProps = {
  locale: Locale;
  label: string;
  ariaLabel: string;
};

/** Bouton FR/EN : renvoie vers la même page dans l'autre langue. */
export default function LangSwitch({ locale, label, ariaLabel }: LangSwitchProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const target: Locale = locale === "fr" ? "en" : "fr";
  const href = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${target}`);

  return (
    <Link href={href} className={styles.switch} hrefLang={target} lang={target} aria-label={ariaLabel}>
      {label}
    </Link>
  );
}
