"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import Clock from "./Clock";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
};

/**
 * Barre du haut, opaque, qui passe en sombre au-dessus des sections .dark.
 * Sous 960 px, la navigation passe dans un menu burger (Échap ou clic sur un lien pour fermer).
 */
export default function Header({ locale, dict }: HeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const burger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? `/${locale}`;
  const target: Locale = locale === "fr" ? "en" : "fr";
  const switchHref = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${target}`);
  const home = `/${locale}`;

  const links = [
    { href: `${home}#realisations`, label: dict.realisations },
    { href: `${home}#services`, label: dict.services },
    { href: `${home}#apropos`, label: dict.about },
  ];

  // Passe la barre en sombre au-dessus des sections sombres.
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

  // Menu : fermeture avec Échap (le focus revient sur le bouton) et au changement de page.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    const onResize = () => {
      if (innerWidth > 960) setOpen(false);
    };
    addEventListener("keydown", onKey);
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("keydown", onKey);
      removeEventListener("resize", onResize);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);

  return (
    <header className={`top${open ? " menu-open" : ""}`} ref={ref}>
      <Link className="who" href={home} onClick={close}>
        <b>Emmanuel KIKI</b>
        <span>{dict.role}</span> <Clock prefix="· " />
      </Link>

      <nav className="main-nav" aria-label="Navigation">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>

      <div className="end">
        <Link className="lang" href={switchHref} hrefLang={target} lang={target} aria-label={dict.switchLabel}>
          {dict.switchTo}
        </Link>
        <a className="btn fill" href="#contact">
          <span>{dict.contact}</span>
          <span className="ic" aria-hidden="true">↗</span>
        </a>
        <button
          ref={burger}
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? dict.closeMenu : dict.menu}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav id="menu" className="menu" aria-label="Menu" hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>{l.label}</Link>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={close}>{dict.contact}</a>
          </li>
        </ul>
        <Link className="lang" href={switchHref} hrefLang={target} lang={target} aria-label={dict.switchLabel} onClick={close}>
          {dict.switchTo === "EN" ? "English" : "Français"} ↗
        </Link>
      </nav>
    </header>
  );
}
