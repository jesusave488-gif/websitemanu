import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { getProject, getRelatedProject, projects } from "@/content/projects";
import StudySidebar from "@/components/study/StudySidebar";
import StudyBlocks from "@/components/study/StudyBlocks";
import ContactCard from "@/components/ContactCard";
import styles from "@/components/study/Study.module.css";

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
    title: `${project.title[lang]} — ${project.subtitle[lang]}`,
    description: project.description[lang],
    alternates: {
      canonical: `/${lang}/projets/${slug}`,
      languages: { fr: `/fr/projets/${slug}`, en: `/en/projets/${slug}` },
    },
    openGraph: project.cover?.src ? { images: [project.cover.src] } : undefined,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <div className={styles.study}>
        <StudySidebar project={project} related={getRelatedProject(project)} locale={lang} dict={dict} />

        <article className={styles.content}>
          {project.sections.map((section, i) => (
            <section key={section.id} id={section.id} className={styles.section} aria-label={section.nav[lang]}>
              <StudyBlocks
                blocks={section.blocks}
                locale={lang}
                placeholderLabel={dict.project.mediaPlaceholder}
                priorityFirst={i === 0}
              />
            </section>
          ))}
        </article>
      </div>

      <ContactCard dict={dict.contact} />
    </>
  );
}
