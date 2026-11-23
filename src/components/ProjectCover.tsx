import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import { serviceNumber } from "@/content/services";
import styles from "./ProjectCover.module.css";

type ProjectCoverProps = {
  project: Project;
  locale: Locale;
  /** Texte affiché dans l'emplacement quand il n'y a pas encore d'image (facultatif). */
  placeholderLabel?: string;
  sizes: string;
  priority?: boolean;
  /** Active le zoom léger au survol du parent (carte). */
  zoomOnHover?: boolean;
  /** Format du cadre, 4 / 3 par défaut. */
  ratio?: string;
  className?: string;
};

/** Couverture d'un projet : l'image si elle existe, sinon un emplacement aux couleurs de la DA. */
export default function ProjectCover({
  project,
  locale,
  placeholderLabel,
  sizes,
  priority = false,
  zoomOnHover = false,
  ratio,
  className,
}: ProjectCoverProps) {
  const classes = [styles.frame, zoomOnHover ? styles.zoom : "", className ?? ""].join(" ");
  const style = ratio ? { aspectRatio: ratio } : undefined;

  if (project.cover) {
    return (
      <div className={classes} style={style}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt[locale]}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      </div>
    );
  }

  return (
    <div className={`${classes} ${styles.placeholder}`} style={style} aria-hidden="true">
      <span className={styles.number}>{serviceNumber(project.service)}</span>
      <span className={styles.shape} />
      {placeholderLabel ? <span className={`label ${styles.caption}`}>{placeholderLabel}</span> : null}
    </div>
  );
}
