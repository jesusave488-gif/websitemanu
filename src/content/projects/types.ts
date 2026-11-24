import type { Localized } from "@/i18n/config";
import type { ServiceId } from "@/content/services";

/** Une image ou une vidéo. Laissez `src` vide ("") pour afficher un emplacement. */
export type Media = {
  /** "image" par défaut. Les vidéos sont lues en boucle, sans son (idéal pour le motion design). */
  kind?: "image" | "video";
  /** Chemin depuis le dossier public/, ex. "/projects/mon-projet/01.jpg" */
  src: string;
  alt: Localized;
  /** Format du cadre, ex. "16 / 9", "4 / 5", "1 / 1". Défaut : "16 / 9". */
  ratio?: string;
  /** Image affichée avant la lecture d'une vidéo. */
  poster?: string;
  /** "contain" pour montrer l'image entière (ex. une page de document) sur un fond coloré. */
  fit?: "cover" | "contain";
  /** Couleur de fond derrière l'image en mode "contain". */
  background?: string;
};

/**
 * Les blocs qui composent une étude de cas, empilés dans l'ordre :
 * - text   : titre + paragraphes (avec un petit label mono facultatif à gauche)
 * - media  : 1 visuel pleine largeur, 2 ou 3 visuels côte à côte
 * - grid   : grille de visuels sur un panneau (ex. 12 photos, déclinaisons)
 * - colors : palette de couleurs (projets d'identité)
 */
export type StudyBlock =
  | { type: "text"; label?: Localized; title: Localized; body: Localized<string[]> }
  | { type: "media"; items: Media[] }
  | { type: "grid"; columns?: 2 | 3 | 4 | 6; items: Media[] }
  | { type: "colors"; colors: { name: string; hex: string }[] };

/** Une section de l'étude de cas = une entrée du sommaire dans la barre latérale. */
export type StudySection = {
  /** Ancre dans l'URL, ex. "defi" → /fr/projets/mon-projet#defi */
  id: string;
  /** Intitulé dans le sommaire. */
  nav: Localized;
  blocks: StudyBlock[];
};

export type Project = {
  /** Identifiant dans l'URL : /fr/projets/<slug> */
  slug: string;
  /** "upcoming" affiche "Projet à venir" sur la carte. Passez à "published" une fois rempli. */
  status: "published" | "upcoming";
  service: ServiceId;
  year: string;
  /** Nom du projet (souvent le client). */
  title: Localized;
  /** Accroche courte sous le titre, ex. "Une banque simple, partout". */
  subtitle: Localized;
  /** Catégorie affichée sur la carte et dans la barre latérale. */
  category: Localized;
  client?: string;
  /** Visuel de la carte sur l'accueil (le cadrage s'adapte : paysage ou carré). */
  cover?: Media;
  /** Résumé pour Google et les partages sur les réseaux. */
  description: Localized;
  sections: StudySection[];
  /** Projet mis en avant en bas de la barre latérale (slug). Par défaut : le projet suivant. */
  related?: string;
};
