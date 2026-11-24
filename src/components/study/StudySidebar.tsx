import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Project } from "@/content/projects";
import { showDrafts } from "@/content/site";
import LangSwitch from "@/components/LangSwitch";
import Logo from "@/components/Logo";
import MediaFrame from "@/components/MediaFrame";
import StudyNav from "./StudyNav";
import styles from "./Study.module.css";

type StudySidebarProps = {
  project: Project;
  related?: Project;
  locale: Locale;
  dict: Dictionary;
};

/** Barre latérale fixe : fil d'Ariane, titre du projet, sommaire, projet suivant. */
export default function StudySidebar({ project, related, locale, dict }: StudySidebarProps) {
  const isUpcoming = project.status === "upcoming";

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topbar}>
        <Link href={`/${locale}`} className={styles.home} aria-label={dict.nav.homeText}>
          <Logo className={styles.logo} />
        </Link>
        <p className={`label ${styles.crumbs}`}>
          <Link href={`/${locale}#travaux`} className={styles.crumbLink}>
            {dict.project.work}
          </Link>
          <span className={styles.crumbCurrent}>{project.title[locale]}</span>
        </p>
        <div className={styles.tools}>
          <LangSwitch locale={locale} label={dict.nav.switchTo} ariaLabel={dict.nav.switchLabel} />
        </div>
      </div>

      <div className={styles.intro}>
        <h1 className={styles.title}>
          {project.title[locale]}
          <span className={styles.subtitle}>{project.subtitle[locale]}</span>
        </h1>
        <p className={`label ${styles.meta}`}>
          {project.category[locale]} · {project.year}
          {isUpcoming ? <span className={styles.badge}>{dict.project.upcomingNote}</span> : null}
        </p>
        {project.links?.length ? (
          <div className={styles.links}>
            {/* Un lien sans adresse n'apparaît qu'en local, grisé, pour rappeler de le remplir. */}
            {project.links.filter((link) => link.href || showDrafts).map((link) => {
              const empty = !link.href;
              const external = link.kind === "external";
              return (
                <a
                  key={link.label.fr}
                  href={link.href || undefined}
                  className={styles.linkButton}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  download={link.kind === "download" ? "" : undefined}
                  aria-disabled={empty || undefined}
                >
                  {link.label[locale]}
                  <span aria-hidden="true">{external ? "↗" : "↓"}</span>
                </a>
              );
            })}
          </div>
        ) : null}
      </div>

      <StudyNav
        label={dict.project.sectionsLabel}
        items={project.sections.map((section) => ({ id: section.id, label: section.nav[locale] }))}
      />

      {related ? (
        <Link href={`/${locale}/projets/${related.slug}`} className={styles.related}>
          <MediaFrame
            media={related.cover}
            locale={locale}
            ratio="1 / 1"
            sizes="96px"
            tone="forest"
            className={styles.relatedThumb}
          />
          <span className={styles.relatedText}>
            <span className={styles.relatedTitle}>
              {related.status === "upcoming" ? dict.work.upcoming : related.title[locale]}
            </span>
            <span className={styles.relatedSubtitle}>{related.category[locale]}</span>
            <span className={`label ${styles.relatedTag}`}>{dict.project.seeAlso}</span>
          </span>
          <span className={styles.relatedArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      ) : null}
    </aside>
  );
}
