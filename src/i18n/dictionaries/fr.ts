// Tous les textes français du site. Le fichier en.ts doit avoir exactement la même forme.

const fr = {
  meta: {
    title: "Emmanuel KIKI — Designer de sites web, de marques et de documents",
    description:
      "Designer basé à Cotonou, Bénin. J'aide les entreprises et les institutions à porter leur message avec des sites, des identités et des documents clairs, cohérents et durables.",
  },
  nav: {
    home: "./",
    homeLabel: "Retour en haut",
    work: "Travaux",
    about: "À propos",
    contact: "Contact",
    switchTo: "EN",
    switchLabel: "Read in English",
    skip: "Aller au contenu",
  },
  hero: {
    lead: "Je suis Emmanuel —",
    rest: "designer de sites web, de marques et de documents qui aide les entreprises et les institutions à porter leur message.",
  },
  work: {
    label: "Projets sélectionnés",
    years: "2019–2026",
    upcoming: "Projet à venir",
  },
  about: {
    label: "À propos",
    paragraphs: [
      "Depuis 7 ans, je conçois des identités et des supports de communication visuelle pour des entreprises, des associations et des institutions.",
      "Mon approche part toujours du message : clarifier ce qui doit être dit, hiérarchiser l'information, puis lui donner une forme lisible, cohérente et durable.",
      "Je réalise aussi des documents bilingues français / anglais — rapports, plans stratégiques, présentations. Je travaille depuis Cotonou, au Bénin, avec des clients d'ici et d'ailleurs.",
    ],
    portraitAlt: "Portrait d'Emmanuel KIKI",
    portraitPlaceholder: "Portrait à venir",
  },
  experience: {
    label: "Expérience",
    // À compléter : une ligne par expérience (structure / poste / dates).
    items: [
      { org: "[Structure]", role: "[Poste]", dates: "[Dates]" },
      { org: "[Structure]", role: "[Poste]", dates: "[Dates]" },
      { org: "[Structure]", role: "[Poste]", dates: "[Dates]" },
    ],
  },
  services: {
    label: "Services",
    items: {
      web: {
        title: "Sites web & landing pages",
        tags: ["Conception", "Développement", "Mise en ligne"],
      },
      brand: {
        title: "Identité de marque",
        tags: ["Logo", "Charte graphique", "Brandbook"],
      },
      documents: {
        title: "Mise en page de documents (FR / EN)",
        tags: ["Rapports", "Plans stratégiques", "FR / EN"],
      },
      dataviz: {
        title: "Infographie & data visualisation",
        tags: ["Schémas", "Chiffres clés", "Cartes"],
      },
      motion: {
        title: "Motion design & publicités animées",
        tags: ["Réseaux sociaux", "Écrans", "Événements"],
      },
    },
  },
  clients: {
    label: "Clients",
  },
  contact: {
    label: "Contact",
    title: "Votre message mérite d'être vu.",
    accent: "Écrivez-moi.",
    emailLabel: "Email",
    whatsappLabel: "Appel / WhatsApp",
  },
  footer: {
    navLabel: "Navigation",
    socialLabel: "Réseaux",
    rights: "Tous droits réservés.",
  },
  project: {
    back: "Tous les travaux",
    client: "Client",
    service: "Service",
    year: "Année",
    role: "Rôle",
    gallery: "Galerie",
    upcomingNote:
      "Cette étude de cas est en préparation. Revenez bientôt — ou écrivez-moi pour en parler dès maintenant.",
    other: "Autres projets",
    coverAlt: "Visuel principal du projet",
  },
  notFound: {
    title: "Page introuvable.",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionary = typeof fr;
