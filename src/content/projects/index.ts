import type { Project } from "./types";
import projetSiteWeb from "./projet-site-web";
import projetIdentite from "./projet-identite";
import projetRapport from "./projet-rapport";
import projetInfographie from "./projet-infographie";
import projetMotion from "./projet-motion";
import projetPlanStrategique from "./projet-plan-strategique";

// Ordre d'affichage sur la page d'accueil (les 6 premiers sont affichés).
// Pour ajouter un projet : créez son fichier dans ce dossier, importez-le ici
// et placez-le dans la liste.
export const projects: Project[] = [
  projetSiteWeb,
  projetIdentite,
  projetRapport,
  projetInfographie,
  projetMotion,
  projetPlanStrategique,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type { Project, ProjectImage, ProjectSection } from "./types";
