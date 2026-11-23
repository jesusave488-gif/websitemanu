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
  // par exemple "/images/portrait.jpg". Laissez vide pour afficher l'emplacement.
  portrait: "",

  clients: ["Zeyhii", "VIP Tribe", "Ayo Agency", "Camp Régional", "International Relief"],
};

/** URL publique du site (utilisée pour le SEO et le sitemap). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
