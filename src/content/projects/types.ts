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
 * - colors  : palette de couleurs (projets d'identité)
 * - figures : chiffres clés (ex. "48 pages", "2 langues", "+30 % de visites")
 */
export type StudyBlock =
  | { type: "text"; label?: Localized; title: Localized; body: Localized<string[]> }
  | { type: "media"; items: Media[] }
  | { type: "grid"; columns?: 2 | 3 | 4 | 6; items: Media[] }
  | { type: "colors"; colors: { name: string; hex: string }[] }
  | { type: "figures"; items: { value: string; label: Localized }[] };

/** Lien affiché sous le titre de l'étude de cas (site en ligne, PDF à télécharger…). */
export type ProjectLink = {
  label: Localized;
  /** Adresse complète ("https://…") ou fichier dans public/ ("/projects/mon-projet/rapport.pdf"). */
  href: string;
  /** "external" ouvre un nouvel onglet (↗), "download" télécharge le fichier (↓). */
  kind: "external" | "download";
};

/** Une section de l'étude de cas = un onglet de la barre des sections, collée en haut pendant la lecture. */
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
  /**
   * - "published" : visible en ligne.
   * - "upcoming"  : emplacement « Projet à venir », visible en local seulement.
   * - "demo"      : projet fictif d'exemple (titre, visuels, textes), visible en local seulement,
   *                 avec la mention « Exemple fictif ». À remplacer par un vrai projet avant publication.
   */
  status: "published" | "upcoming" | "demo";
  service: ServiceId;
  year: string;
  /** Nom du projet (souvent le client). */
  title: Localized;
  /** Accroche courte sous le titre, ex. "Une banque simple, partout". */
  subtitle: Localized;
  /** Catégorie affichée sur la carte et dans le fil d'Ariane de l'étude de cas. */
  category: Localized;
  client?: string;
  /** Visuel de la carte sur l'accueil (le cadrage s'adapte : paysage ou carré). */
  cover?: Media;
  /** Résumé pour Google et les partages sur les réseaux. */
  description: Localized;
  /** Boutons sous le titre : "Voir le site", "Télécharger le PDF"… */
  links?: ProjectLink[];
  sections: StudySection[];
  /** Projet proposé en fin d'étude de cas (slug). Par défaut : le projet suivant. */
  related?: string;
};
