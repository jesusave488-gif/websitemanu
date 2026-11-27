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
    steps: [
      { title: "Écouter", text: "On définit vos objectifs, votre public et vos contraintes." },
      { title: "Structurer", text: "J'organise le contenu avant de dessiner quoi que ce soit." },
      { title: "Concevoir", text: "Maquettes, retours, ajustements, jusqu'à validation." },
      { title: "Livrer", text: "Fichiers prêts à l'emploi, mise en ligne et accompagnement." },
    ],
  },
  about: {
    label: "À propos",
    title: "Designer depuis 7 ans, formé au développement web.",
    paragraphs: [
      "J'ai commencé par le graphisme, puis je me suis formé au développement web (Epitech) et à la gestion de projet (Scripture Union). Aujourd'hui, je relie les deux : je pense le design et je sais le construire.",
      "Je travaille surtout avec des ONG, des institutions et des entreprises en croissance, qui ont besoin de supports sérieux dans les deux langues.",
    ],
    // value : chiffre animé. text : texte affiché à la place (ex. une valeur à compléter).
    stats: [
      { value: 7, suffix: "+", text: "", label: "ans d'expérience" },
      { value: 60, suffix: "+", text: "", label: "projets livrés" },
      { value: 15, suffix: "+", text: "", label: "organisations accompagnées" },
    ],
    trainings: "Formations",
    certificate: "Certificat ↗",
  },
  contact: {
    label: "Contact",
    title: "Un projet en tête ? Parlons-en.",
    text: "Un site à lancer, une marque à créer, un rapport à mettre en page : décrivez-moi votre besoin, je vous réponds rapidement.",
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
