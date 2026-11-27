// Informations générales du site : coordonnées, réseaux, portrait, clients.

export const site = {
  name: "Emmanuel KIKI",
  year: 2026,

  email: "jemanuki@gmail.com",
  whatsapp: {
    display: "+229 01 62 55 91 41",
    // Numéro au format international sans espaces ni "+", utilisé par wa.me
    number: "2290162559141",
  },

  // À compléter : collez l'URL complète de chaque profil.
  social: [
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" },
  ],

  // Déposez votre photo dans public/images/ puis indiquez son chemin ici,
  // par exemple "/images/portrait.png" (PNG détouré conseillé). Laissez vide pour afficher l'emplacement.
  portrait: "/images/portrait.png",

  // Ligne « Ils m'ont fait confiance », sous les réalisations.
  clients: ["Zeyhii", "VIP Tribe", "Ayo Agency", "WoPAs", "IDRI", "AMD", "Camp Régional", "International Relief"],
};

/**
 * Brouillons (projets "upcoming", témoignages non publiés) :
 * visibles pendant le développement (`npm run dev`), masqués sur le site en ligne.
 * Pour les afficher quand même en ligne : variable d'environnement NEXT_PUBLIC_SHOW_DRAFTS=true.
 */
export const showDrafts =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

/** Lien WhatsApp avec un message pré-rempli. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** URL publique du site (utilisée pour le SEO et le sitemap). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
