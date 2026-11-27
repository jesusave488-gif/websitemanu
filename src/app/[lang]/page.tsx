import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { projects } from "@/content/projects";
import { serviceIds, serviceNumber } from "@/content/services";
import { site, whatsappLink } from "@/content/site";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Method from "@/components/Method";
import References from "@/components/References";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  // La section Travaux n'apparaît que s'il y a au moins un projet visible ; la numérotation suit.
  const hasWork = projects.length > 0;
  const num = (i: number) => String(hasWork || i < 2 ? i : i - 1).padStart(2, "0");

  // Chaque service renvoie vers un de ses projets, sinon vers WhatsApp avec un message pré-rempli.
  const serviceItems = serviceIds.map((id) => {
    const project = projects.find((p) => p.service === id);
    return {
      id,
      number: serviceNumber(id),
      isProject: Boolean(project),
      href: project
        ? `/${lang}/projets/${project.slug}`
        : whatsappLink(dict.services.messagePrefix + dict.services.items[id].title),
    };
  });

  return (
    <>
      <Hero dict={dict.hero} portrait={site.portrait} hasWork={hasWork} />
      <About dict={dict.about} n={num(1)} />
      {hasWork ? <Work projects={projects.slice(0, 6)} locale={lang} dict={dict.work} n={num(2)} /> : null}
      <Services dict={dict.services} n={num(3)} items={serviceItems} contactHref={whatsappLink(dict.contact.whatsappMessage)} />
      <Method dict={dict.method} n={num(4)} />
      <References locale={lang} dict={dict.references} clients={site.clients} n={num(5)} />
    </>
  );
}
