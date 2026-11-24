import type { Localized } from "@/i18n/config";

export type Recognition = {
  id: string;
  title: Localized;
  /** Structure qui a délivré la distinction. */
  issuer: string;
  /** Domaine, affiché sous le titre. */
  category: Localized;
  year: string;
  certificate: {
    /** Image du certificat dans public/images/certificats/ (JPG ou PNG). Vide = emplacement. */
    src: string;
    alt: Localized;
    /** Largeur / hauteur de l'image : "1754 / 1240" pour un A4 à l'horizontale. */
    ratio: string;
  };
};

// Distinctions, de la plus récente à la plus ancienne.
// Pour ajouter un certificat : déposez l'image dans public/images/certificats/
// puis indiquez son chemin dans "src", par exemple "/images/certificats/epitech.jpg".
export const recognitions: Recognition[] = [
  {
    id: "epitech",
    title: {
      fr: "Certificat de formation en développement web",
      en: "Web Development Training Certificate",
    },
    issuer: "Epitech",
    category: { fr: "Développement web", en: "Web development" },
    year: "[Année]",
    certificate: {
      src: "",
      alt: {
        fr: "Certificat de formation en développement web délivré par Epitech à Emmanuel KIKI",
        en: "Web development training certificate issued by Epitech to Emmanuel KIKI",
      },
      ratio: "1754 / 1240",
    },
  },
  {
    id: "scripture-union",
    title: {
      fr: "Certificat de formation en gestion de projet",
      en: "Project Management Training Certificate",
    },
    issuer: "Scripture Union",
    category: { fr: "Gestion de projet", en: "Project management" },
    year: "[Année]",
    certificate: {
      src: "",
      alt: {
        fr: "Certificat de formation en gestion de projet délivré par Scripture Union à Emmanuel KIKI",
        en: "Project management training certificate issued by Scripture Union to Emmanuel KIKI",
      },
      ratio: "1754 / 1240",
    },
  },
];
