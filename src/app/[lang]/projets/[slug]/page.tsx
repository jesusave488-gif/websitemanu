import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { getProject, projects } from "@/content/projects";
import ProjectCover from "@/components/ProjectCover";
import ProjectGrid from "@/components/ProjectGrid";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!hasLocale(lang) || !project) return {};

  return {
    title: project.title[lang],
    description: project.intro[lang],
    alternates: {
      canonical: `/${lang}/projets/${slug}`,
      languages: { fr: `/fr/projets/${slug}`, en: `/en/projets/${slug}` },
    },
    openGraph: project.cover ? { images: [project.cover.src] } : undefined,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const isUpcoming = project.status === "upcoming";

  // Les deux projets suivants dans la liste (on reboucle au début).
  const index = projects.indexOf(project);
  const others = [1, 2]
    .map((offset) => projects[(index + offset) % projects.length])
    .filter((p) => p.slug !== project.slug);

  const meta = [
    { label: dict.project.client, value: project.client },
    { label: dict.project.service, value: dict.services.items[project.service].title },
    { label: dict.project.year, value: project.year },
    { label: dict.project.role, value: project.role?.[lang] },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  return (
    <>
      <article className="container">
        <header className={styles.header}>
          <Reveal>
            <Link href={`/${lang}#travaux`} className={`label ${styles.back}`}>
              ← {dict.project.back}
            </Link>
          </Reveal>

          <Reveal as="h1" className={styles.title}>
            {project.title[lang]}
          </Reveal>

          <Reveal as="p" className={styles.intro} delay={80}>
            {project.intro[lang]}
          </Reveal>

          <Reveal as="dl" className={styles.meta} delay={140}>
            {meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <dt className="label">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </Reveal>
        </header>

        <Reveal>
          <ProjectCover
            project={project}
            locale={lang}
            placeholderLabel={dict.work.upcoming}
            sizes="(max-width: 1400px) 100vw, 1312px"
            ratio="16 / 9"
            priority
          />
        </Reveal>

        {isUpcoming ? (
          <Reveal as="p" className={styles.note}>
            {dict.project.upcomingNote}
          </Reveal>
        ) : null}

        <div className={styles.sections}>
          {project.sections[lang].map((section, i) => (
            <Reveal key={i} className={styles.row}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionText}>{section.text}</p>
            </Reveal>
          ))}
        </div>

        {project.gallery.length > 0 ? (
          <section aria-label={dict.project.gallery} className={styles.gallery}>
            {project.gallery.map((image) => (
              <Reveal key={image.src}>
                {image.width && image.height ? (
                  <Image
                    src={image.src}
                    alt={image.alt[lang]}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 1400px) 100vw, 1312px"
                    className={styles.galleryImage}
                  />
                ) : (
                  <div className={styles.galleryFrame}>
                    <Image src={image.src} alt={image.alt[lang]} fill sizes="(max-width: 1400px) 100vw, 1312px" />
                  </div>
                )}
              </Reveal>
            ))}
          </section>
        ) : null}
      </article>

      {others.length > 0 ? (
        <Section label={dict.project.other}>
          <ProjectGrid projects={others} locale={lang} upcomingLabel={dict.work.upcoming} />
        </Section>
      ) : null}

      <Contact dict={dict.contact} />
    </>
  );
}
