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
    homeText: "Accueil",
    work: "Travaux",
    about: "À propos",
    contact: "Contact",
    switchTo: "EN",
    switchLabel: "Read in English",
    theme: "Basculer entre mode clair et mode sombre",
    skip: "Aller au contenu",
  },
  hero: {
    // Première partie en couleur pleine, seconde partie en gris.
    lead: "Je suis Emmanuel — designer de sites web, de marques et de documents",
    rest: "qui aide les entreprises et les institutions à porter leur message.",
  },
  work: {
    title: "Projets sélectionnés",
    years: "2019–2026",
    upcoming: "Projet à venir",
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Depuis 7 ans, je conçois des identités et des supports de communication visuelle pour des entreprises, des associations et des institutions.",
      "Mon approche part toujours du message : clarifier ce qui doit être dit, hiérarchiser l'information, puis lui donner une forme lisible, cohérente et durable.",
      "Je réalise aussi des documents bilingues français / anglais — rapports, plans stratégiques, présentations. Je travaille depuis Cotonou, au Bénin, avec des clients d'ici et d'ailleurs.",
    ],
    portraitAlt: "Portrait d'Emmanuel KIKI",
    portraitPlaceholder: "Portrait à venir — photo horizontale conseillée",
  },
  experience: {
    title: "Expérience",
    // À compléter : une ligne par expérience (structure / poste / dates).
    items: [
      { org: "[Structure]", role: "[Poste]", dates: "[Dates]" },
      { org: "[Structure]", role: "[Poste]", dates: "[Dates]" },
      { org: "[Structure]", role: "[Poste]", dates: "[Dates]" },
    ],
  },
  services: {
    title: "Services",
    items: {
      web: "Sites web & landing pages",
      brand: "Identité de marque",
      documents: "Mise en page de documents (FR / EN)",
      dataviz: "Infographie & data visualisation",
      motion: "Motion design & publicités animées",
    },
  },
  clients: {
    title: "Clients",
  },
  contact: {
    title: "Votre message mérite d'être vu.",
    accent: "Écrivez-moi.",
    whatsappLabel: "WhatsApp",
  },
  footer: {
    navLabel: "Navigation",
    socialLabel: "Réseaux",
    location: "Basé à Cotonou, Bénin",
  },
  project: {
    work: "Travaux",
    sectionsLabel: "Sections de l'étude de cas",
    seeAlso: "À voir aussi",
    mediaPlaceholder: "Visuel à venir",
    upcomingNote: "Étude de cas en préparation",
  },
  notFound: {
    title: "Page introuvable.",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionary = typeof fr;
