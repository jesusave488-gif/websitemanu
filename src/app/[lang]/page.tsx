import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ServicesClients from "@/components/ServicesClients";
import Testimonials from "@/components/Testimonials";
import ContactCard from "@/components/ContactCard";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header locale={lang} dict={dict.nav} />
      <Hero dict={dict.hero} />
      {/* La section Travaux n'apparaît que s'il y a au moins un projet visible. */}
      {projects.length > 0 ? <Work projects={projects.slice(0, 6)} locale={lang} dict={dict.work} /> : null}
      <About locale={lang} dict={dict.about} portrait={site.portrait} />
      <Experience dict={dict.experience} />
      <ServicesClients services={dict.services} clientsTitle={dict.clients.title} clients={site.clients} />
      <Testimonials title={dict.testimonials.title} items={testimonials} locale={lang} />
      <ContactCard dict={dict.contact} />
    </>
  );
}
