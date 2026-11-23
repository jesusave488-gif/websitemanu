import type { Project } from "./types";

// Emplacement "Projet à venir". Pour le remplir : changez les textes,
// ajoutez les images dans public/projects/projet-site-web/ et passez status à "published".
const projetSiteWeb: Project = {
  slug: "projet-site-web",
  status: "upcoming",
  service: "web",
  year: "2026",
  title: { fr: "Site web", en: "Website" },
  category: { fr: "Site web", en: "Website" },
  client: "[Client]",
  role: { fr: "[Rôle]", en: "[Role]" },
  // cover: {
  //   src: "/projects/projet-site-web/cover.jpg",
  //   alt: { fr: "Description de l'image", en: "Image description" },
  // },
  gallery: [
    // { src: "/projects/projet-site-web/01.jpg", alt: { fr: "…", en: "…" }, width: 1600, height: 1200 },
  ],
  intro: {
    fr: "Une phrase qui résume le projet : pour qui, quel besoin, quel résultat.",
    en: "One sentence that sums up the project: for whom, what need, what outcome.",
  },
  sections: {
    fr: [
      { title: "Contexte", text: "Le point de départ : la structure, son message, ce qui devait changer." },
      { title: "Démarche", text: "Les choix de hiérarchie, de typographie, de couleur et de format." },
      { title: "Résultat", text: "Ce qui a été livré et l'effet obtenu." },
    ],
    en: [
      { title: "Context", text: "The starting point: the organisation, its message, what needed to change." },
      { title: "Approach", text: "The choices of hierarchy, typography, colour and format." },
      { title: "Outcome", text: "What was delivered and the effect it had." },
    ],
  },
};

export default projetSiteWeb;
