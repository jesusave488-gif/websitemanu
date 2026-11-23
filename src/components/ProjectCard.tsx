import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import ProjectCover from "./ProjectCover";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  upcomingLabel: string;
  priority?: boolean;
};

export default function ProjectCard({ project, locale, upcomingLabel, priority }: ProjectCardProps) {
  const isUpcoming = project.status === "upcoming";

  return (
    <Link href={`/${locale}/projets/${project.slug}`} className={`project-card ${styles.card}`}>
      <ProjectCover
        project={project}
        locale={locale}
        sizes="(max-width: 720px) 100vw, 50vw"
        priority={priority}
        zoomOnHover
      />
      <div className={styles.meta}>
        <h3 className={styles.title}>{isUpcoming ? upcomingLabel : project.title[locale]}</h3>
        <p className={`label ${styles.category}`}>{project.category[locale]}</p>
      </div>
    </Link>
  );
}
