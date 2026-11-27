// Tous les textes français du site. Le fichier en.ts doit avoir exactement la même forme.

const fr = {
  meta: {
    title: "Emmanuel KIKI — Designer de sites web, de marques et de documents",
    description:
      "Designer basé à Cotonou, Bénin. J'aide les entreprises et les institutions à porter leur message avec des sites, des identités et des documents clairs, cohérents et durables.",
  },
  nav: {
    role: "Designer · Cotonou",
    work: "Travaux",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    switchTo: "EN",
    switchLabel: "Read in English",
    skip: "Aller au contenu",
  },
  hero: {
    hello: "Salut, hey !",
    name: ["Emmanuel", "KIKI"],
    role: "designer",
    lead: "Je conçois des sites web, des marques et des documents qui aident les entreprises et les institutions à porter leur message.",
    cta: "Parlons de votre projet",
    seeWork: "Voir les travaux",
    tags: ["Cotonou, Bénin", "Documents FR / EN", "Entreprises & institutions"],
    portraitAlt: "Portrait d'Emmanuel KIKI",
    creativeMode: "mode créatif",
  },
  about: {
    label: "À propos",
    bio: "Je réalise aussi des documents bilingues français / anglais : rapports, plans stratégiques, présentations.",
    statement: "Depuis 7 ans, je transforme des messages complexes en supports clairs, en français comme en anglais.",
    // value : chiffre animé (laisser vide pour un texte fixe) ; suffix : texte après le chiffre.
    stats: [
      { value: 7, suffix: "+", text: "", label: "ans d'expérience" },
      { value: 0, suffix: "", text: "FR · EN", label: "documents bilingues" },
      { value: 2, suffix: "", text: "", label: "formations certifiantes" },
    ],
  },
  work: {
    label: "Travaux sélectionnés",
    title: "Sites, marques et documents, de Cotonou à partout.",
    demo: "Exemple fictif",
    upcoming: "Projet à venir",
  },
  services: {
    label: "Services",
    title: "Cinq métiers, un seul but : rendre votre message clair.",
    seeProject: "Voir un projet →",
    talk: "En discuter →",
    // Message WhatsApp pré-rempli quand il n'y a pas encore de projet : le nom du service est ajouté.
    messagePrefix: "Bonjour Emmanuel, j'ai vu votre portfolio et j'aimerais échanger sur un projet : ",
    items: {
      web: {
        title: "Sites web",
        description: "Sites vitrines et pages d'atterrissage clairs, rapides et pensés pour convertir, de la maquette à la mise en ligne.",
      },
      brand: {
        title: "Identité de marque",
        description: "Logo, couleurs, typographies et charte pour une marque reconnaissable partout.",
      },
      documents: {
        title: "Documents FR / EN",
        description: "Rapports, plans stratégiques et présentations bilingues, structurés pour être lus jusqu'au bout.",
      },
      dataviz: {
        title: "Infographie",
        description: "Chiffres et processus complexes traduits en graphiques compris d'un coup d'œil.",
      },
      motion: {
        title: "Motion design",
        description: "Vidéos courtes, animations de logo et publicités pour les réseaux sociaux qui retiennent l'attention.",
      },
    },
  },
  method: {
    label: "Méthode",
    title: "Une méthode simple, du premier échange à la livraison.",
    steps: [
      { title: "Écouter", text: "Comprendre la structure, son public et ce qui doit changer." },
      { title: "Clarifier", text: "Hiérarchiser le message avant de dessiner quoi que ce soit." },
      { title: "Concevoir", text: "Maquettes, allers-retours, déclinaisons FR / EN." },
      { title: "Livrer", text: "Fichiers prêts à l'emploi, mise en ligne, charte et suivi." },
    ],
  },
  references: {
    label: "Références",
    title: "Formations et clients",
    certificate: "Certificat ↗",
    certificateOf: "Emmanuel KIKI",
    clients: "Ils m'ont fait confiance",
  },
  contact: {
    label: "Contact",
    title: "Votre message mérite d'être vu.",
    accent: "Écrivez-moi.",
    whatsappCta: "Écrire sur WhatsApp",
    emailCta: "Envoyer un email",
    // Message pré-rempli quand on ouvre WhatsApp depuis le site.
    whatsappMessage: "Bonjour Emmanuel, j'ai vu votre portfolio et j'aimerais échanger sur un projet.",
  },
  footer: {
    tagline: "Designer de sites web, de marques et de documents.",
    write: "Écrire",
    follow: "Suivre",
    findMe: "Me trouver",
    location: "Cotonou, Bénin",
    localTime: "Heure locale",
    whatsapp: "WhatsApp",
    backToTop: "Retour en haut ↑",
  },
  project: {
    demoNote: "Projet d'exemple fictif — à remplacer par une vraie étude de cas.",
    client: "Client",
    service: "Service",
    year: "Année",
    link: "Lien",
    deliverables: "Livrables",
    deliverablesTitle: "Ce qui a été livré",
    next: "Projet suivant",
    mediaPlaceholder: "Visuel à venir",
  },
  notFound: {
    title: "Page introuvable.",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionary = typeof fr;
