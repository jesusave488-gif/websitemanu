import type { Project } from "./types";
import { showDrafts } from "@/content/site";
import projetSiteWeb from "./projet-site-web";
import projetIdentite from "./projet-identite";
import projetRapport from "./projet-rapport";
import projetInfographie from "./projet-infographie";
import projetMotion from "./projet-motion";
import projetPlanStrategique from "./projet-plan-strategique";

// Ordre d'affichage sur la page d'accueil (les 6 premiers sont affichés).
// Grille en deux colonnes : la première moitié à gauche, la seconde à droite.
// Pour ajouter un projet : créez son fichier dans ce dossier, importez-le ici
// et placez-le dans la liste.
const allProjects: Project[] = [
  projetSiteWeb,
  projetIdentite,
  projetRapport,
  projetInfographie,
  projetMotion,
  projetPlanStrategique,
];

/**
 * Projets visibles : seulement les projets "published" en ligne ;
 * tous (y compris "upcoming") pendant le développement local.
 */
export const projects: Project[] = allProjects.filter((p) => p.status === "published" || showDrafts);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Projet proposé en fin d'étude de cas (« Projet suivant ») : "related" s'il est défini, sinon le suivant. */
export function getRelatedProject(project: Project): Project | undefined {
  if (project.related) return getProject(project.related);
  if (projects.length < 2) return undefined;
  return projects[(projects.indexOf(project) + 1) % projects.length];
}

export type { Project, Media, StudyBlock, StudySection, ProjectLink } from "./types";
