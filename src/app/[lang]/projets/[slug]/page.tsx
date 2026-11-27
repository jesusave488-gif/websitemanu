import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { getProject, getRelatedProject, projects } from "@/content/projects";
import CaseStudy from "@/components/study/CaseStudy";

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

  return <CaseStudy project={project} related={getRelatedProject(project)} locale={lang} dict={dict} />;
}
