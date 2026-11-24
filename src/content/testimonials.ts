import type { Localized } from "@/i18n/config";
import { showDrafts } from "./site";

export type Testimonial = {
  /** false = brouillon : visible en local seulement, masqué en ligne. */
  published: boolean;
  quote: Localized;
  name: string;
  /** Poste et structure, ex. "Directrice communication, International Relief". */
  role: Localized;
};

// Témoignages clients. Remplacez les emplacements par de vraies citations
// (avec l'accord des personnes), puis passez "published" à true.
// La section n'apparaît en ligne que s'il y a au moins un témoignage publié.
const all: Testimonial[] = [
  {
    published: false,
    quote: {
      fr: "[Citation du client : ce qu'Emmanuel a apporté, en une ou deux phrases.]",
      en: "[Client quote: what Emmanuel brought, in one or two sentences.]",
    },
    name: "[Prénom Nom]",
    role: { fr: "[Poste, Structure]", en: "[Role, Organisation]" },
  },
  {
    published: false,
    quote: {
      fr: "[Citation du client : le résultat obtenu ou la qualité de la collaboration.]",
      en: "[Client quote: the outcome or the quality of the collaboration.]",
    },
    name: "[Prénom Nom]",
    role: { fr: "[Poste, Structure]", en: "[Role, Organisation]" },
  },
];

export const testimonials = all.filter((t) => t.published || showDrafts);
