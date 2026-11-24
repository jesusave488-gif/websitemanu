import type { Project } from "./types";
import { images } from "./media";

// EXEMPLE FICTIF — le « Collectif Akwaba Entreprendre » n'existe pas. Ce projet sert à voir le rendu
// d'une étude de cas complète. Visible en local seulement (status "demo") ; remplacez textes et images
// par un vrai projet, puis passez status à "published".
//
// Images : public/projects/projet-plan-strategique/ — déclarées avec img("fichier", "format", "alt FR", "alt EN").
const img = images("projet-plan-strategique");

const projetPlanStrategique: Project = {
  slug: "projet-plan-strategique",
  status: "demo",
  service: "documents",
  year: "2026",
  title: { fr: "Collectif Akwaba Entreprendre", en: "Akwaba Entreprendre Collective" },
  subtitle: { fr: "Un plan stratégique que les membres s'approprient", en: "A strategic plan members make their own" },
  category: { fr: "Plan stratégique · FR / EN", en: "Strategic plan · FR / EN" },
  client: "Collectif Akwaba Entreprendre",
  cover: img("cover", "16 / 10", "Couvertures française et anglaise du plan stratégique 2026–2030", "French and English covers of the 2026–2030 strategic plan"),
  description: {
    fr: "Mise en page du plan stratégique 2026–2030 d'un réseau de femmes entrepreneures : quatre axes, une feuille de route et une version anglaise pour les partenaires.",
    en: "Layout of the 2026–2030 strategic plan of a women entrepreneurs' network: four pillars, a roadmap and an English version for partners.",
  },
  links: [{ label: { fr: "Télécharger le PDF", en: "Download the PDF" }, href: "", kind: "download" }],
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [img("spread", "16 / 9", "Double page « Notre ambition » et les quatre axes", "“Our ambition” spread and the four pillars")] },
        {
          type: "text",
          title: { fr: "Rendre un plan de cinq ans clair pour 800 membres", en: "Making a five-year plan clear to 800 members" },
          body: {
            fr: [
              "Le collectif avait rédigé un plan ambitieux, mais sous forme de tableaux denses, difficiles à présenter aux membres comme aux bailleurs.",
              "Il fallait en tirer un document court, motivant, et une version anglaise pour les partenaires internationaux.",
            ],
            en: [
              "The collective had written an ambitious plan, but as dense tables that were hard to present to members and funders alike.",
              "The goal was a short, motivating document, plus an English version for international partners.",
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
          title: { fr: "Quatre axes, une feuille de route", en: "Four pillars, one roadmap" },
          body: {
            fr: ["Chaque axe tient sur une double page avec son objectif chiffré ; la feuille de route montre les étapes année par année."],
            en: ["Each pillar fits on one spread with its target figure; the roadmap shows the milestones year by year."],
          },
        },
        { type: "media", items: [img("toc", "3 / 2", "Sommaire et feuille de route 2026–2030", "Table of contents and 2026–2030 roadmap")] },
        {
          type: "grid",
          columns: 4,
          items: [
            img("p1", "3 / 4", "Couverture", "Cover"),
            img("p2", "3 / 4", "Sommaire", "Table of contents"),
            img("p3", "3 / 4", "Les quatre axes stratégiques", "The four strategic pillars"),
            img("p4", "3 / 4", "Feuille de route", "Roadmap"),
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
          title: { fr: "La même page, dans les deux langues", en: "The same page, in both languages" },
          body: {
            fr: ["Les deux versions partagent les mêmes gabarits : une mise à jour se reporte facilement de l'une à l'autre."],
            en: ["Both versions share the same templates, so an update carries over easily from one to the other."],
          },
        },
        {
          type: "media",
          items: [
            img("fr", "3 / 4", "Axe 2, version française", "Pillar 2, French version"),
            img("en", "3 / 4", "Axe 2, version anglaise", "Pillar 2, English version"),
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
            { value: "36", label: { fr: "pages par version", en: "pages per version" } },
            { value: "4", label: { fr: "axes stratégiques", en: "strategic pillars" } },
            { value: "2", label: { fr: "langues", en: "languages" } },
          ],
        },
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Un plan présenté avec fierté", en: "A plan presented with pride" },
          body: {
            fr: ["Le plan a été présenté en assemblée générale puis envoyé aux partenaires ; ses pages servent aussi de support aux formations des membres."],
            en: ["The plan was presented at the general assembly and sent to partners; its pages are also used as material for member training."],
          },
        },
      ],
    },
  ],
};

export default projetPlanStrategique;
