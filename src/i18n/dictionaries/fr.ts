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
    // Salutation au-dessus de la présentation, comme sur la brochure.
    greeting: "Salut",
    greetingEnd: ", hey !",
    creativeMode: "mode créatif",
    scrollLabel: "Découvrir la suite",
    // Première partie en couleur pleine, seconde partie en gris.
    lead: "Je suis Emmanuel — designer de sites web, de marques et de documents",
    rest: "qui aide les entreprises et les institutions à porter leur message.",
    // Repères de positionnement affichés sous la phrase.
    tags: ["Basé à Cotonou, Bénin", "Documents FR / EN", "Entreprises & institutions"],
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
    intro: "7 ans à concevoir des identités, des documents et des sites pour des entreprises et des institutions.",
    period: "2019 — Aujourd'hui",
    currentLabel: "En cours",
    // À compléter : une entrée par expérience, de la plus récente à la plus ancienne.
    // current: true marque le poste actuel (point vert clair).
    // tags : 2 à 4 mots-clés (missions, outils). location et description sont facultatifs.
    items: [
      {
        org: "[Structure]",
        role: "[Poste]",
        dates: "[2023] — Aujourd'hui",
        location: "[Ville, Pays]",
        description: "[Une à deux phrases : vos missions principales et ce que vous y avez apporté.]",
        tags: ["[Mission]", "[Outil]"],
        current: true,
      },
      {
        org: "[Structure]",
        role: "[Poste]",
        dates: "[2021] — [2023]",
        location: "[Ville, Pays]",
        description: "[Une à deux phrases : vos missions principales et ce que vous y avez apporté.]",
        tags: ["[Mission]", "[Outil]"],
        current: false,
      },
      {
        org: "[Structure]",
        role: "[Poste]",
        dates: "[2019] — [2021]",
        location: "[Ville, Pays]",
        description: "[Une à deux phrases : vos missions principales et ce que vous y avez apporté.]",
        tags: ["[Mission]", "[Outil]"],
        current: false,
      },
    ],
  },
  services: {
    title: "Services",
    intro: "De l'identité visuelle au site web, je conçois des supports clairs et cohérents, en français comme en anglais.",
    cta: "Parlons de votre projet",
    more: "En discuter",
    // Message WhatsApp pré-rempli depuis une carte : le nom du service est ajouté à la fin.
    messagePrefix: "Bonjour Emmanuel, j'ai vu votre portfolio et j'aimerais échanger sur un projet : ",
    items: {
      web: {
        title: "Sites web & landing pages",
        description: "Sites vitrines et pages d'atterrissage clairs, rapides et pensés pour convertir, de la maquette à la mise en ligne.",
      },
      brand: {
        title: "Identité de marque",
        description: "Logo, couleurs, typographies et charte graphique pour une marque reconnaissable sur tous ses supports.",
      },
      documents: {
        title: "Mise en page de documents (FR / EN)",
        description: "Rapports, plans stratégiques, brochures et présentations bilingues, structurés pour être lus jusqu'au bout.",
      },
      dataviz: {
        title: "Infographie & data visualisation",
        description: "Chiffres et processus complexes traduits en graphiques et infographies que l'on comprend du premier coup d'œil.",
      },
      motion: {
        title: "Motion design & publicités animées",
        description: "Vidéos courtes, animations de logo et publicités pour les réseaux sociaux qui retiennent l'attention.",
      },
    },
  },
  clients: {
    title: "Ils m'ont fait confiance",
  },
  recognitions: {
    title: "Distinctions et reconnaissances",
    intro: "Des formations certifiantes qui complètent ma pratique du design.",
    hint: "Survolez une distinction pour voir le certificat.",
    issuedBy: "Délivré par",
    view: "Voir le certificat",
    close: "Fermer",
    placeholder: "Certificat à ajouter",
  },
  contact: {
    title: "Votre message mérite d'être vu.",
    accent: "Écrivez-moi.",
    text: "Un site web, une identité de marque, un rapport à mettre en page ? Parlez-moi de votre projet, en français ou en anglais.",
    whatsappCta: "Écrire sur WhatsApp",
    emailCta: "Envoyer un email",
    // Message pré-rempli quand on ouvre WhatsApp depuis le site.
    whatsappMessage: "Bonjour Emmanuel, j'ai vu votre portfolio et j'aimerais échanger sur un projet.",
    floatingLabel: "Discuter sur WhatsApp",
  },
  footer: {
    tagline: "Designer de sites web, de marques et de documents.",
    navLabel: "Pages",
    socialLabel: "Réseaux",
    contactLabel: "Contact",
    location: "Cotonou, Bénin",
    links: {
      experience: "Expérience",
      services: "Services",
      recognitions: "Distinctions",
    },
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
