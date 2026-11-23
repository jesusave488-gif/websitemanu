import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ServiceList from "@/components/ServiceList";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />

      <Section id="travaux" label={dict.work.label} meta={dict.work.years}>
        <ProjectGrid projects={projects.slice(0, 6)} locale={lang} upcomingLabel={dict.work.upcoming} />
      </Section>

      <Section id="a-propos" label={dict.about.label}>
        <About dict={dict.about} portrait={site.portrait} />
      </Section>

      <Section id="experience" label={dict.experience.label}>
        <Experience dict={dict.experience} />
      </Section>

      <Section id="services" label={dict.services.label}>
        <ServiceList dict={dict.services} />
      </Section>

      <Section id="clients" label={dict.clients.label}>
        <Clients clients={site.clients} />
      </Section>

      <Contact dict={dict.contact} />
    </>
  );
}
