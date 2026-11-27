// Tous les textes français du site. Le fichier en.ts doit avoir exactement la même forme.

const fr = {
  meta: {
    title: "Emmanuel KIKI — Sites web & applications, identités visuelles et rapports · Cotonou",
    description:
      "Designer web et graphique à Cotonou. Sites web et applications, identités visuelles et rapports bilingues FR/EN pour entreprises, ONG et institutions.",
  },
  nav: {
    // Accroche à gauche de la barre du haut (en mono, capitales).
    tagline: "Ici on parle web & design",
    realisations: "Réalisations",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    switchTo: "EN",
    switchLabel: "Read in English",
    skip: "Aller au contenu",
    menu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    hello: "Salut ! Je suis",
    name: "Emmanuel KIKI",
    role: "Designer web & graphique",
    // Petite ligne de repère, en haut du panneau bleu nuit.
    eyebrow: ["Cotonou, Bénin", "Missions à distance", "FR / EN"],
    lead: "Je conçois des sites et applications, des identités visuelles et des rapports qui aident les entreprises, les ONG et les institutions à mieux présenter leur travail.",
    ctaWork: "Voir mes réalisations",
    ctaContact: "Discutons de votre projet",
    figures: [
      { value: "7+", label: "ans d'expérience" },
      { value: "15+", label: "organisations accompagnées" },
      { value: "60+", label: "projets livrés" },
    ],
    // Texte qui tourne autour du badge rond (≈ 37 caractères maximum).
    seal: "Designer web & graphique · Défilez · ",
    sealLabel: "Défiler vers les réalisations",
    portraitAlt: "Portrait d'Emmanuel KIKI, designer web et graphique à Cotonou",
  },
  realisations: {
    label: "Réalisations",
    title: "Des projets concrets, des résultats mesurables.",
    subtitle: "Une sélection de collaborations avec des startups, des ONG et des organisations internationales.",
    clients: "Ils m'ont fait confiance",
    coverAlt: "Visuel du projet",
  },
  services: {
    label: "Services",
    title: "Ce que je peux faire pour vous.",
    cta: "Demander un devis",
    items: {
      web: {
        title: "Sites web & applications",
        description: "Sites vitrines, plateformes et applications web : je conçois l'interface et je la développe, de la maquette à la mise en ligne.",
      },
      brand: {
        title: "Identité de marque",
        description: "Logo, couleurs, typographies et charte, pour être reconnu sur chaque support.",
      },
      documents: {
        title: "Rapports & documents bilingues",
        description: "Rapports, plans stratégiques et brochures, mis en page en français et en anglais.",
      },
      dataviz: {
        title: "Infographie",
        description: "Vos chiffres et vos processus transformés en visuels qu'on comprend du premier coup d'œil.",
      },
      motion: {
        title: "Motion design",
        description: "Animations de logo, vidéos courtes et publicités pour les réseaux sociaux.",
      },
    },
  },
  method: {
    label: "Méthode",
    title: "Comment on travaille ensemble.",
    subtitle: "Quatre étapes claires, pour savoir à chaque moment où en est votre projet.",
    bringLabel: "Ce que vous apportez",
    getLabel: "Ce que vous recevez",
    steps: [
      {
        title: "Écouter",
        text: "Un premier échange pour comprendre votre projet : vos objectifs, votre public, vos délais et votre budget.",
        bring: "Vos idées, vos contenus existants, vos exemples de référence.",
        get: "Une proposition claire avec le périmètre, le planning et le devis.",
      },
      {
        title: "Structurer",
        text: "J'organise le contenu avant toute mise en forme : arborescence d'un site, plan d'un rapport, messages clés d'une identité.",
        bring: "Vos textes, données et validations.",
        get: "Une structure validée ensemble, qui sert de base à la création.",
      },
      {
        title: "Concevoir",
        text: "Je crée les maquettes, puis on les ajuste ensemble jusqu'à ce qu'elles vous correspondent. Les versions FR / EN sont préparées en parallèle si besoin.",
        bring: "Vos retours à chaque version.",
        get: "Des maquettes à valider, avec un nombre de révisions défini à l'avance.",
      },
      {
        title: "Livrer",
        text: "Je finalise et vous remets tout ce qu'il faut pour utiliser votre support en toute autonomie.",
        bring: "La validation finale.",
        get: "Fichiers prêts à l'emploi (impression, web, réseaux), mise en ligne pour les sites, charte ou guide d'utilisation, et un suivi après livraison.",
      },
    ],
  },
  about: {
    label: "À propos",
    title: "Un seul interlocuteur, de l'idée à la livraison.",
    paragraphs: [
      "J'ai commencé par le graphisme, puis je me suis formé au développement web et à la gestion de projet. Ce double parcours me permet de suivre un projet de bout en bout, de l'idée jusqu'au fichier livré ou au site en ligne.",
      "Ce qui compte pour moi : comprendre votre message avant de le mettre en forme, et livrer des supports que vous pouvez vraiment utiliser.",
    ],
    trainings: "Formations",
    certificate: "Certificat ↗",
    toolsLabel: "Outils",
    tools: ["Figma", "Adobe InDesign", "Illustrator", "Photoshop", "After Effects", "Next.js", "React"],
  },
  contact: {
    label: "Contact",
    title: "Un projet en tête ? Parlons-en.",
    text: "Que ce soit une idée à préciser ou un projet prêt à démarrer, écrivez-moi : je vous réponds rapidement.",
    whatsappCta: "Écrire sur WhatsApp",
    emailCta: "Envoyer un email",
    location: "Cotonou, Bénin",
  },
  footer: {
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
