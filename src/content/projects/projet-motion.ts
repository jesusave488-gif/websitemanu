import type { Project } from "./types";

// Emplacement "Projet à venir" — structure d'étude de cas à remplir.
// Images et vidéos : déposez-les dans public/projects/projet-motion/ puis indiquez
// leur chemin dans "src" (ex. "/projects/projet-motion/01.jpg"). Un "src" vide affiche un emplacement.
const projetMotion: Project = {
  slug: "projet-motion",
  status: "upcoming",
  service: "motion",
  year: "2026",
  title: { fr: "Publicité animée", en: "Animated ad" },
  subtitle: { fr: "Une accroche courte sur le projet", en: "A short tagline for the project" },
  category: { fr: "Motion design", en: "Motion design" },
  client: "[Client]",
  // cover: { src: "/projects/projet-motion/cover.jpg", alt: { fr: "…", en: "…" } },
  description: {
    fr: "Une phrase qui résume le projet : pour qui, quel besoin, quel résultat.",
    en: "One sentence that sums up the project: for whom, what need, what outcome.",
  },
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [{ kind: "video", src: "", poster: "", alt: { fr: "", en: "" }, ratio: "16 / 9" }] },
        {
          type: "text",
          title: { fr: "Titre de la section", en: "Section title" },
          body: {
            fr: [
              "Le point de départ : la structure, son message, son public et ce qui devait changer.",
              "Ce qui rendait le projet difficile ou intéressant.",
            ],
            en: [
              "The starting point: the organisation, its message, its audience and what needed to change.",
              "What made the project difficult or interesting.",
            ],
          },
        },
      ],
    },
    {
      id: "demarche",
      nav: { fr: "Démarche", en: "Approach" },
      blocks: [
        {
          type: "text",
          label: { fr: "Démarche", en: "Approach" },
          title: { fr: "Titre de la section", en: "Section title" },
          body: {
            fr: ["Les choix de hiérarchie, de typographie, de couleur et de format, et pourquoi."],
            en: ["The choices of hierarchy, typography, colour and format, and why."],
          },
        },
        { type: "media", items: [{ src: "", alt: { fr: "", en: "" }, ratio: "4 / 5" }, { src: "", alt: { fr: "", en: "" }, ratio: "4 / 5" }] },
        {
          type: "grid",
          columns: 3,
          items: [{ src: "", alt: { fr: "", en: "" }, ratio: "1 / 1" }, { src: "", alt: { fr: "", en: "" }, ratio: "1 / 1" }, { src: "", alt: { fr: "", en: "" }, ratio: "1 / 1" }, { src: "", alt: { fr: "", en: "" }, ratio: "1 / 1" }, { src: "", alt: { fr: "", en: "" }, ratio: "1 / 1" }, { src: "", alt: { fr: "", en: "" }, ratio: "1 / 1" }],
        },
      ],
    },
    {
      id: "resultat",
      nav: { fr: "Résultat", en: "Outcome" },
      blocks: [
        { type: "media", items: [{ src: "", alt: { fr: "", en: "" }, ratio: "16 / 9" }] },
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Titre de la section", en: "Section title" },
          body: {
            fr: ["Ce qui a été livré, comment il est utilisé, et l'effet obtenu."],
            en: ["What was delivered, how it is used, and the effect it had."],
          },
        },
      ],
    },
  ],
};

export default projetMotion;
