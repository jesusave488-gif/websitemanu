import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import { serviceNumber } from "@/content/services";
import MediaFrame from "./MediaFrame";
import { serviceTones as tones } from "./tones";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  upcomingLabel: string;
  /** Format de l'image : la grille alterne paysage et carré. */
  ratio: string;
  priority?: boolean;
};

export default function ProjectCard({ project, locale, upcomingLabel, ratio, priority }: ProjectCardProps) {
  const isUpcoming = project.status === "upcoming";

  return (
    <Link href={`/${locale}/projets/${project.slug}`} className={styles.card}>
      <MediaFrame
        media={project.cover}
        locale={locale}
        ratio={ratio}
        sizes="(max-width: 760px) 100vw, 50vw"
        priority={priority}
        tone={tones[project.service]}
        className={styles.media}
        placeholder={<span className={`label ${styles.number}`}>{serviceNumber(project.service)}</span>}
      />
      <div className={styles.panel}>
        <h3 className={styles.title}>{isUpcoming ? upcomingLabel : project.title[locale]}</h3>
        <p className={styles.category}>{project.category[locale]}</p>
      </div>
    </Link>
  );
}
