import type { Localized } from "@/i18n/config";

/**
 * Les 6 réalisations de l'accueil (section « Réalisations »), dans l'ordre d'affichage.
 *
 * Images : déposez la couverture de chaque projet ici :
 *   public/images/projects/<slug>/cover.webp
 * Tant que le fichier n'existe pas, un emplacement neutre s'affiche à la place (pas d'image cassée).
 * Format conseillé : 1600 × 1000 px (16:10), WebP.
 */
export type Realisation = {
  slug: string;
  name: string;
  /** Type de travail, ex. « Identité de marque ». */
  type: Localized;
  /** Un résultat concret, ex. « +40 % d'engagement au lancement ». */
  result: Localized;
  /** Chemin de l'image depuis public/. */
  cover: string;
};

const cover = (slug: string) => `/images/projects/${slug}/cover.webp`;

export const realisations: Realisation[] = [
  {
    slug: "zeyhii",
    name: "Zeyhii",
    type: { fr: "Identité de marque", en: "Brand identity" },
    result: { fr: "+40 % d'engagement au lancement", en: "+40% engagement at launch" },
    cover: cover("zeyhii"),
  },
  {
    slug: "vip-tribe",
    name: "VIP Tribe",
    type: { fr: "Identité & déclinaisons", en: "Identity & applications" },
    result: { fr: "8 supports livrés", en: "8 deliverables" },
    cover: cover("vip-tribe"),
  },
  {
    slug: "ayo-agency",
    name: "Ayo Agency",
    type: { fr: "Identité & brochure", en: "Identity & brochure" },
    result: { fr: "Livrée en 3 semaines", en: "Delivered in 3 weeks" },
    cover: cover("ayo-agency"),
  },
  {
    slug: "wopas",
    name: "WoPAs",
    type: { fr: "Supports de communication", en: "Communication materials" },
    result: { fr: "+400 abonnés LinkedIn", en: "+400 LinkedIn followers" },
    cover: cover("wopas"),
  },
  {
    slug: "idri",
    name: "IDRI",
    type: { fr: "Plan stratégique & infographies", en: "Strategic plan & infographics" },
    result: { fr: "5 axes stratégiques mis en visuel", en: "5 strategic pillars visualised" },
    cover: cover("idri"),
  },
  {
    slug: "amd",
    name: "AMD",
    type: { fr: "Documents institutionnels", en: "Institutional documents" },
    result: { fr: "2 documents cadres mis en page", en: "2 framework documents laid out" },
    cover: cover("amd"),
  },
];
