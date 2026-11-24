import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Project } from "@/content/projects";
import Reveal from "./Reveal";
import WorkGrid from "./WorkGrid";
import styles from "./Work.module.css";

type WorkProps = {
  projects: Project[];
  locale: Locale;
  dict: Dictionary["work"];
};

/** Section "Projets sélectionnés · 2019–2026" + grille de cartes. */
export default function Work({ projects, locale, dict }: WorkProps) {
  return (
    <section id="travaux" className={`container ${styles.work}`} aria-labelledby="travaux-title">
      <Reveal as="h2" id="travaux-title" className={styles.heading}>
        {dict.title}
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.years}>{dict.years}</span>
      </Reveal>
      <WorkGrid projects={projects} locale={locale} upcomingLabel={dict.upcoming} demoLabel={dict.demo} />
    </section>
  );
}
