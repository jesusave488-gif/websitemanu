import type { Project } from "./types";
import { images } from "./media";

// EXEMPLE FICTIF — la « Fondation Wémà » n'existe pas. Ce projet sert à voir le rendu d'une étude
// de cas complète. Visible en local seulement (status "demo") ; remplacez textes et images
// par un vrai projet, puis passez status à "published".
//
// Images : public/projects/projet-rapport/ — déclarées avec img("fichier", "format", "alt FR", "alt EN").
const img = images("projet-rapport");

const projetRapport: Project = {
  slug: "projet-rapport",
  status: "demo",
  service: "documents",
  year: "2025",
  title: { fr: "Fondation Wémà", en: "Wémà Foundation" },
  subtitle: { fr: "Un rapport annuel lu jusqu'au bout, en deux langues", en: "An annual report read to the end, in two languages" },
  category: { fr: "Rapport bilingue · FR / EN", en: "Bilingual report · FR / EN" },
  client: "Fondation Wémà",
  cover: img("cover", "16 / 10", "Couvertures française et anglaise du rapport annuel 2025", "French and English covers of the 2025 annual report"),
  description: {
    fr: "Mise en page du rapport annuel 2025 d'une fondation pour l'éducation et la santé, en français et en anglais : 48 pages, chiffres clés et graphiques.",
    en: "Layout of a 2025 annual report for an education and health foundation, in French and English: 48 pages, key figures and charts.",
  },
  links: [{ label: { fr: "Télécharger le PDF", en: "Download the PDF" }, href: "", kind: "download" }],
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [img("spread", "16 / 9", "Double page d'ouverture du chapitre Éducation", "Opening spread of the Education chapter")] },
        {
          type: "text",
          title: { fr: "Un document que les bailleurs lisent vraiment", en: "A document funders actually read" },
          body: {
            fr: [
              "Le rapport précédent était un long texte Word de 60 pages, sans graphique, que peu de partenaires ouvraient.",
              "La fondation voulait un rapport clair, agréable à feuilleter, et identique en français et en anglais pour ses partenaires internationaux.",
            ],
            en: [
              "The previous report was a 60-page Word document with no charts, which few partners ever opened.",
              "The foundation wanted a clear report, pleasant to leaf through, and identical in French and English for its international partners.",
            ],
          },
        },
      ],
    },
    {
      id: "structure",
      nav: { fr: "Structure", en: "Structure" },
      blocks: [
        {
          type: "text",
          label: { fr: "Structure", en: "Structure" },
          title: { fr: "Cinq chapitres, une page d'ouverture chacun", en: "Five chapters, one opening page each" },
          body: {
            fr: ["Un sommaire court, une couleur par chapitre et des chiffres clés en grand : on trouve l'essentiel en deux minutes."],
            en: ["A short table of contents, one colour per chapter and big key figures: the essentials can be found in two minutes."],
          },
        },
        { type: "media", items: [img("toc", "3 / 2", "Sommaire et ouverture du chapitre Éducation", "Table of contents and Education chapter opener")] },
        {
          type: "grid",
          columns: 4,
          items: [
            img("p1", "3 / 4", "Couverture", "Cover"),
            img("p2", "3 / 4", "Sommaire", "Table of contents"),
            img("p3", "3 / 4", "Page des chiffres clés", "Key figures page"),
            img("p4", "3 / 4", "Graphique du taux de réussite", "Pass rate chart"),
          ],
        },
      ],
    },
    {
      id: "fr-en",
      nav: { fr: "FR / EN", en: "FR / EN" },
      blocks: [
        {
          type: "text",
          label: { fr: "FR / EN", en: "FR / EN" },
          title: { fr: "Deux versions, une seule mise en page", en: "Two versions, one layout" },
          body: {
            fr: ["Les gabarits laissent la place à l'anglais, souvent plus court, et au français, souvent plus long, sans changer la pagination."],
            en: ["The templates leave room for English, usually shorter, and French, usually longer, without changing the page count."],
          },
        },
        {
          type: "media",
          items: [
            img("fr", "3 / 4", "Le mot de la présidente, version française", "Chair's message, French version"),
            img("en", "3 / 4", "Le mot de la présidente, version anglaise", "Chair's message, English version"),
          ],
        },
      ],
    },
    {
      id: "resultat",
      nav: { fr: "Résultat", en: "Outcome" },
      blocks: [
        {
          type: "figures",
          items: [
            { value: "48", label: { fr: "pages par version", en: "pages per version" } },
            { value: "2", label: { fr: "langues", en: "languages" } },
            { value: "3 sem.", label: { fr: "de mise en page", en: "of layout work" } },
          ],
        },
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Un rapport partagé, pas seulement archivé", en: "A report people share, not just file away" },
          body: {
            fr: ["Le rapport est diffusé en PDF et imprimé pour l'assemblée générale ; ses pages de chiffres clés sont reprises sur les réseaux sociaux."],
            en: ["The report is shared as a PDF and printed for the general assembly; its key figure pages are reused on social media."],
          },
        },
      ],
    },
  ],
};

export default projetRapport;
