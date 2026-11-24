import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { getProject, getRelatedProject, projects } from "@/content/projects";
import StudyEditorial from "@/components/study/editorial/StudyEditorial";
import LayoutSwitch from "@/components/study/LayoutSwitch";

// Proposition B : même étude de cas, mise en page éditoriale pleine largeur.
// Page de comparaison, non indexée ; la version retenue remplacera l'autre.

type ProposalPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: ProposalPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!hasLocale(lang) || !project) return {};

  return {
    title: `${project.title[lang]} — ${project.subtitle[lang]}`,
    description: project.description[lang],
    alternates: { canonical: `/${lang}/projets/${slug}` },
    robots: { index: false },
  };
}

export default async function ProposalPage({ params }: ProposalPageProps) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <StudyEditorial project={project} related={getRelatedProject(project)} locale={lang} dict={dict} />
      <LayoutSwitch locale={lang} slug={slug} current="editorial" dict={dict.project} />
    </>
  );
}
