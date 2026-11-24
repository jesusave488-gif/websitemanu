"use client";

import styles from "./ThemeToggle.module.css";

/** Bouton lune / soleil : bascule entre mode clair et sombre et mémorise le choix. */
export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (next === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // stockage indisponible (navigation privée) : le choix vaut pour cette page seulement
    }
  }

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label}>
      {/* Lune : visible en mode clair */}
      <svg className={styles.moon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
      </svg>
      {/* Soleil : visible en mode sombre */}
      <svg className={styles.sun} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      </svg>
    </button>
  );
}
