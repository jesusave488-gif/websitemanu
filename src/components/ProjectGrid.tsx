import type { Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import styles from "./ProjectGrid.module.css";

type ProjectGridProps = {
  projects: Project[];
  locale: Locale;
  upcomingLabel: string;
};

export default function ProjectGrid({ projects, locale, upcomingLabel }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project, i) => (
        <Reveal as="li" key={project.slug} delay={(i % 2) * 120}>
          <ProjectCard project={project} locale={locale} upcomingLabel={upcomingLabel} priority={i < 2} />
        </Reveal>
      ))}
    </ul>
  );
}
