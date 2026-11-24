import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { showDrafts } from "@/content/site";
import styles from "./LayoutSwitch.module.css";

type LayoutSwitchProps = {
  locale: Locale;
  slug: string;
  current: "sidebar" | "editorial";
  dict: Dictionary["project"];
};

/**
 * Petit sélecteur en bas à gauche pour comparer les deux mises en page d'étude de cas.
 * Visible en local uniquement (comme les brouillons) : il n'apparaît jamais sur le site en ligne.
 */
export default function LayoutSwitch({ locale, slug, current, dict }: LayoutSwitchProps) {
  if (!showDrafts) return null;
  const base = `/${locale}/projets/${slug}`;

  return (
    <nav className={styles.switch} aria-label={dict.layoutLabel}>
      <span className={styles.label}>{dict.layoutLabel}</span>
      <Link href={base} className={styles.option} aria-current={current === "sidebar" ? "page" : undefined}>
        {dict.layoutSidebar}
      </Link>
      <Link
        href={`${base}/proposition`}
        className={styles.option}
        aria-current={current === "editorial" ? "page" : undefined}
      >
        {dict.layoutEditorial}
      </Link>
    </nav>
  );
}
