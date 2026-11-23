import type { Localized } from "@/i18n/config";
import type { ServiceId } from "@/content/services";

export type ProjectImage = {
  /** Chemin depuis le dossier public/, ex. "/projects/mon-projet/cover.jpg" */
  src: string;
  alt: Localized;
  /** Dimensions réelles de l'image (facultatif, évite les sauts de mise en page). */
  width?: number;
  height?: number;
};

export type ProjectSection = {
  title: string;
  text: string;
};

export type Project = {
  /** Identifiant dans l'URL : /fr/projets/<slug> */
  slug: string;
  /** "upcoming" affiche un emplacement "Projet à venir". Passez à "published" une fois rempli. */
  status: "published" | "upcoming";
  service: ServiceId;
  year: string;
  title: Localized;
  category: Localized;
  client?: string;
  role?: Localized;
  /** Image de couverture (carte + haut de l'étude de cas), format conseillé 4:3. */
  cover?: ProjectImage;
  gallery: ProjectImage[];
  /** Phrase d'accroche en haut de l'étude de cas. */
  intro: Localized;
  /** Blocs de texte de l'étude de cas (contexte, démarche, résultat…). */
  sections: Localized<ProjectSection[]>;
};
