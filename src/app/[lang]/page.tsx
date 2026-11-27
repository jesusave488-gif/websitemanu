import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { realisations } from "@/content/realisations";
import { serviceIds, serviceNumber } from "@/content/services";
import { site } from "@/content/site";
import Hero from "@/components/Hero";
import Realisations from "@/components/Realisations";
import Services from "@/components/Services";
import Method from "@/components/Method";
import About from "@/components/About";

// Ordre : Accueil → (01) Réalisations → (02) Services → (03) Méthode → (04) À propos → (05) Contact (dans le footer).
export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} portrait={site.portrait} />
      <Realisations items={realisations} clients={site.clients} locale={lang} dict={dict.realisations} />
      <Services
        dict={dict.services}
        items={serviceIds.map((id) => ({ id, number: serviceNumber(id) }))}
      />
      <Method dict={dict.method} />
      <About dict={dict.about} locale={lang} />
    </>
  );
}
