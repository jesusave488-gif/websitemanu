import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Project } from "@/content/projects";
import { showDrafts } from "@/content/site";
import Header from "@/components/Header";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import { serviceTones } from "@/components/tones";
import StudyBlocks from "./StudyBlocks";
import SectionTabs from "./SectionTabs";
import styles from "./Study.module.css";

type StudyEditorialProps = {
  project: Project;
  related?: Project;
  locale: Locale;
  dict: Dictionary;
};

/**
 * Étude de cas, mise en page éditoriale pleine largeur (dans l'esprit de l'accueil) :
 * en-tête avec fiche projet, grand visuel, barre des sections collante,
 * puis chaque section en deux colonnes (titre collant à gauche, contenu à droite).
 */
export default function StudyEditorial({ project, related, locale, dict }: StudyEditorialProps) {
  const tone = serviceTones[project.service];
  const links = (project.links ?? []).filter((link) => link.href || showDrafts);
  const facts = [
    { label: dict.project.client, value: project.client },
    { label: dict.project.service, value: dict.services.items[project.service].title },
    { label: dict.project.year, value: project.year },
  ].filter((fact) => fact.value);

  return (
    <>
      <Header locale={locale} dict={dict.nav} />

      <article className={styles.page}>
        {/* ---------- En-tête ---------- */}
        <header className={`container ${styles.intro}`}>
          <Reveal as="p" className={`label ${styles.crumbs}`}>
            <Link href={`/${locale}#travaux`} className={styles.crumbLink}>
              {dict.project.work}
            </Link>
            <span aria-hidden="true">/</span>
            <span>{project.category[locale]}</span>
            {project.status === "upcoming" ? <span className={styles.badge}>{dict.project.upcomingNote}</span> : null}
          </Reveal>

          <Reveal as="h1" className={styles.title} delay={60}>
            {project.title[locale]} <span className={styles.subtitle}>— {project.subtitle[locale]}</span>
          </Reveal>

          <Reveal className={styles.summary} delay={120}>
            <p className={styles.description}>{project.description[locale]}</p>

            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt className="label">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              {links.length ? (
                <div className={styles.fact}>
                  <dt className="label">{dict.project.links}</dt>
                  <dd className={styles.links}>
                    {links.map((link) => {
                      const external = link.kind === "external";
                      return (
                        <a
                          key={link.label.fr}
                          href={link.href || undefined}
                          className={styles.link}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          download={link.kind === "download" ? "" : undefined}
                          aria-disabled={!link.href || undefined}
                        >
                          {link.label[locale]}
                          <span aria-hidden="true">{external ? " ↗" : " ↓"}</span>
                        </a>
                      );
                    })}
                  </dd>
                </div>
              ) : null}
            </dl>
          </Reveal>
        </header>

        {/* ---------- Grand visuel ---------- */}
        <Reveal className={`container ${styles.cover}`} delay={160}>
          <MediaFrame
            media={project.cover}
            locale={locale}
            ratio="21 / 9"
            sizes="100vw"
            priority
            tone={tone}
            className={styles.coverFrame}
            placeholder={<span className="label">{dict.project.mediaPlaceholder}</span>}
          />
        </Reveal>

        {/* ---------- Sections ---------- */}
        <SectionTabs
          label={dict.project.sectionsLabel}
          items={project.sections.map((section) => ({ id: section.id, label: section.nav[locale] }))}
        />

        <div className="container">
          {project.sections.map((section, i) => (
            <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionNumber}>{String(i + 1).padStart(2, "0")}</span>
                <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                  {section.nav[locale]}
                </h2>
              </div>

              <div className={styles.blocks}>
                <StudyBlocks
                  blocks={section.blocks}
                  locale={locale}
                  placeholderLabel={dict.project.mediaPlaceholder}
                  tone={tone}
                />
              </div>
            </section>
          ))}
        </div>

        {/* ---------- Projet suivant ---------- */}
        {related ? (
          <Reveal className="container">
            <Link href={`/${locale}/projets/${related.slug}`} className={styles.next}>
              <span className={styles.nextText}>
                <span className={`label ${styles.nextLabel}`}>
                  {dict.project.next} <span className={styles.nextArrow}>→</span>
                </span>
                <span className={styles.nextTitle}>
                  {related.status === "upcoming" ? dict.work.upcoming : related.title[locale]}
                </span>
                <span className={styles.nextCategory}>{related.category[locale]}</span>
              </span>
              <MediaFrame
                media={related.cover}
                locale={locale}
                ratio="16 / 10"
                sizes="(max-width: 860px) 100vw, 40vw"
                tone={serviceTones[related.service]}
                className={styles.nextThumb}
              />
            </Link>
          </Reveal>
        ) : null}
      </article>
    </>
  );
}
