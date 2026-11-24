import type { Project } from "./types";
import projetSiteWeb from "./projet-site-web";
import projetIdentite from "./projet-identite";
import projetRapport from "./projet-rapport";
import projetInfographie from "./projet-infographie";
import projetMotion from "./projet-motion";
import projetPlanStrategique from "./projet-plan-strategique";

// Ordre d'affichage sur la page d'accueil (les 6 premiers sont affichés).
// Grille en deux colonnes : les 3 premiers à gauche, les 3 suivants à droite.
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

/** Projet mis en avant dans la barre latérale : "related" s'il est défini, sinon le suivant. */
export function getRelatedProject(project: Project): Project | undefined {
  if (project.related) return getProject(project.related);
  if (projects.length < 2) return undefined;
  return projects[(projects.indexOf(project) + 1) % projects.length];
}

export type { Project, Media, StudyBlock, StudySection } from "./types";
