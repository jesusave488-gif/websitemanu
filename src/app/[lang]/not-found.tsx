"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, hasLocale } from "@/i18n/config";
import fr from "@/i18n/dictionaries/fr";
import en from "@/i18n/dictionaries/en";

// Composant client : la langue est lue dans l'URL, ce qui garde les pages statiques.
export default function NotFound() {
  const segment = usePathname()?.split("/")[1] ?? "";
  const locale = hasLocale(segment) ? segment : defaultLocale;
  const dict = locale === "en" ? en : fr;

  return (
    <section className="nf sec wrap">
      <p className="k"><b>404</b></p>
      <h1>{dict.notFound.title}</h1>
      <p>{dict.notFound.text}</p>
      <Link href={`/${locale}`} className="btn fill">
        <span>{dict.notFound.back}</span>
        <span className="ic" aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
