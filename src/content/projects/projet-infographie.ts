import type { Project } from "./types";
import { images } from "./media";

// EXEMPLE FICTIF — l'« Observatoire de l'eau du Mono » n'existe pas. Ce projet sert à voir le rendu
// d'une étude de cas complète. Visible en local seulement (status "demo") ; remplacez textes et images
// par un vrai projet, puis passez status à "published".
//
// Images : public/projects/projet-infographie/ — déclarées avec img("fichier", "format", "alt FR", "alt EN").
const img = images("projet-infographie");

const projetInfographie: Project = {
  slug: "projet-infographie",
  status: "demo",
  service: "dataviz",
  year: "2025",
  title: { fr: "Observatoire de l'eau du Mono", en: "Mono Water Observatory" },
  subtitle: { fr: "Des chiffres sur l'eau que tout le monde comprend", en: "Water figures everyone can understand" },
  category: { fr: "Infographie", en: "Infographics" },
  client: "Observatoire de l'eau du Mono",
  cover: img("cover", "16 / 10", "Infographie « L'eau du Mono en chiffres »", "“Mono water in figures” infographic"),
  description: {
    fr: "Une série d'infographies pour rendre lisibles les données d'une enquête sur l'accès à l'eau dans cinq communes du Mono.",
    en: "A series of infographics making survey data on water access in five Mono communes easy to read.",
  },
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [img("defi", "16 / 9", "Du tableur brut au graphique lisible", "From raw spreadsheet to readable chart")] },
        {
          type: "text",
          title: { fr: "1 200 foyers enquêtés, un tableur illisible", en: "1,200 households surveyed, one unreadable spreadsheet" },
          body: {
            fr: [
              "L'Observatoire disposait de données précieuses, mais elles tenaient dans un tableur de 40 colonnes que ni les élus ni les habitants ne pouvaient lire.",
              "Il fallait choisir les chiffres qui comptent et les montrer simplement, pour les réunions publiques comme pour les réseaux sociaux.",
            ],
            en: [
              "The Observatory had valuable data, but it lived in a 40-column spreadsheet that neither officials nor residents could read.",
              "The task was to pick the figures that matter and show them simply, for public meetings as well as social media.",
            ],
          },
        },
      ],
    },
    {
      id: "donnees",
      nav: { fr: "Données", en: "Data" },
      blocks: [
        {
          type: "text",
          label: { fr: "Données", en: "Data" },
          title: { fr: "Garder l'essentiel", en: "Keeping what matters" },
          body: {
            fr: ["Avec l'équipe, nous avons retenu douze indicateurs, chacun accompagné d'une phrase qui dit ce qu'il signifie pour les habitants."],
            en: ["With the team, we kept twelve indicators, each with a sentence explaining what it means for residents."],
          },
        },
        {
          type: "figures",
          items: [
            { value: "12", label: { fr: "indicateurs retenus", en: "indicators kept" } },
            { value: "5", label: { fr: "communes", en: "communes" } },
            { value: "1 200", label: { fr: "foyers enquêtés", en: "households surveyed" } },
          ],
        },
      ],
    },
    {
      id: "visualisations",
      nav: { fr: "Visualisations", en: "Visualisations" },
      blocks: [
        {
          type: "text",
          label: { fr: "Visualisations", en: "Visualisations" },
          title: { fr: "Le fleuve comme fil conducteur", en: "The river as a common thread" },
          body: {
            fr: ["L'infographie principale suit le cours du Mono, commune par commune. Les autres graphiques reprennent les mêmes couleurs pour se lire d'un coup d'œil."],
            en: ["The main infographic follows the Mono river, commune by commune. The other charts use the same colours so they read at a glance."],
          },
        },
        { type: "media", items: [img("main", "16 / 9", "Infographie principale le long du fleuve Mono", "Main infographic along the Mono river")] },
        {
          type: "grid",
          columns: 2,
          items: [
            img("bars", "4 / 3", "Forages construits par an", "Boreholes built per year"),
            img("map", "4 / 3", "Carte des points d'eau suivis", "Map of monitored water points"),
            img("donut", "4 / 3", "Usages de l'eau", "Water uses"),
            img("line", "4 / 3", "Niveau des puits au fil de l'année", "Well levels through the year"),
          ],
        },
      ],
    },
    {
      id: "resultat",
      nav: { fr: "Résultat", en: "Outcome" },
      blocks: [
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Des données reprises dans le débat public", en: "Data picked up in public debate" },
          body: {
            fr: ["Les infographies ont été imprimées en affiches pour les mairies et publiées en carrousels ; deux communes les utilisent pour planifier leurs nouveaux forages."],
            en: ["The infographics were printed as posters for town halls and posted as carousels; two communes use them to plan new boreholes."],
          },
        },
      ],
    },
  ],
};

export default projetInfographie;
