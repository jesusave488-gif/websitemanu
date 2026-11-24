"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, hasLocale } from "@/i18n/config";
import fr from "@/i18n/dictionaries/fr";
import en from "@/i18n/dictionaries/en";
import Header from "@/components/Header";
import styles from "./not-found.module.css";

// Composant client : la langue est lue dans l'URL, ce qui garde les pages statiques.
export default function NotFound() {
  const segment = usePathname()?.split("/")[1] ?? "";
  const locale = hasLocale(segment) ? segment : defaultLocale;
  const dict = locale === "en" ? en : fr;

  return (
    <>
      <Header locale={locale} dict={dict.nav} />
      <section className={`container ${styles.notFound}`}>
        <p className="label">404</p>
        <h1 className={styles.title}>{dict.notFound.title}</h1>
        <p className={styles.text}>{dict.notFound.text}</p>
        <Link href={`/${locale}`} className={styles.back}>
          {dict.notFound.back} →
        </Link>
      </section>
    </>
  );
}
