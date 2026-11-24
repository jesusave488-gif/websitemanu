import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import { serviceTones } from "@/components/tones";
import styles from "./Study.module.css";

type NextProjectProps = {
  project: Project;
  locale: Locale;
  label: string;
  upcomingLabel: string;
};

/** Grande carte « Projet suivant », en fin d'étude de cas. */
export default function NextProject({ project, locale, label, upcomingLabel }: NextProjectProps) {
  const title = project.status === "upcoming" ? upcomingLabel : project.title[locale];

  return (
    <Reveal>
      <Link href={`/${locale}/projets/${project.slug}`} className={styles.next}>
        <span className={styles.nextText}>
          <span className={styles.nextLabel}>
            {label}{" "}
            <span className={styles.nextArrow} aria-hidden="true">
              →
            </span>
          </span>
          <span className={styles.nextTitle}>{title}</span>
          <span className={styles.nextCategory}>{project.category[locale]}</span>
        </span>
        <MediaFrame
          media={project.cover}
          locale={locale}
          ratio="4 / 3"
          sizes="(max-width: 960px) 40vw, 22vw"
          tone={serviceTones[project.service]}
          className={styles.nextThumb}
        />
      </Link>
    </Reveal>
  );
}
