"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import Clock from "./Clock";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
  /** Affiche le lien « Travaux » seulement s'il y a des projets. */
  hasWork: boolean;
};

/** Barre du haut, opaque, qui passe en sombre au-dessus des sections .dark. */
export default function Header({ locale, dict, hasWork }: HeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname() ?? `/${locale}`;
  const target: Locale = locale === "fr" ? "en" : "fr";
  const switchHref = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${target}`);
  const home = `/${locale}`;

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const check = () => {
      const y = 34;
      const on = [...document.querySelectorAll<HTMLElement>(".dark")].some((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= y && r.bottom >= y;
      });
      bar.classList.toggle("on-dark", on);
    };
    check();
    addEventListener("scroll", check, { passive: true });
    addEventListener("resize", check);
    return () => {
      removeEventListener("scroll", check);
      removeEventListener("resize", check);
    };
  }, [pathname]);

  return (
    <header className="top" ref={ref}>
      <Link className="who" href={home}>
        <b>Emmanuel KIKI</b>
        <span>{dict.role}</span> <Clock prefix="· " />
      </Link>
      <nav aria-label="Navigation">
        {hasWork ? <Link href={`${home}#travaux`}>{dict.work}</Link> : null}
        <Link href={`${home}#services`}>{dict.services}</Link>
        <Link href={`${home}#apropos`}>{dict.about}</Link>
      </nav>
      <div className="end">
        <Link className="lang" href={switchHref} hrefLang={target} lang={target} aria-label={dict.switchLabel}>
          {dict.switchTo}
        </Link>
        <a className="btn fill" href="#contact">
          <span>{dict.contact}</span>
          <span className="ic" aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
