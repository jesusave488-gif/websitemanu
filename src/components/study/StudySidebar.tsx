import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Project } from "@/content/projects";
import { showDrafts } from "@/content/site";
import LangSwitch from "@/components/LangSwitch";
import Logo from "@/components/Logo";
import StudyNav from "./StudyNav";
import styles from "./Study.module.css";

type StudySidebarProps = {
  project: Project;
  locale: Locale;
  dict: Dictionary;
};

/** Barre latérale fixe : fil d'Ariane, titre et fiche du projet, sommaire avec progression. */
export default function StudySidebar({ project, locale, dict }: StudySidebarProps) {
  const isUpcoming = project.status === "upcoming";
  const facts = [
    { label: dict.project.client, value: project.client },
    { label: dict.project.service, value: dict.services.items[project.service].title },
    { label: dict.project.year, value: project.year },
  ].filter((fact) => fact.value);

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
        {isUpcoming ? <p className={`label ${styles.badge}`}>{dict.project.upcomingNote}</p> : null}
        <p className={styles.description}>{project.description[locale]}</p>

        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className="label">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
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
    </aside>
  );
}
