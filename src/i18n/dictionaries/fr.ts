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
      {
        title: "Échanger",
        text: "Tout commence par une discussion. Vous me parlez de votre projet, de vos objectifs et de votre public, et je vous propose une approche, un délai et un devis.",
      },
      {
        title: "Structurer",
        text: "Une fois le cadre posé, j'organise le contenu : le plan du site, la trame du rapport ou les idées fortes de la marque. C'est la base de tout le reste.",
      },
      {
        title: "Concevoir",
        text: "Sur cette base, je crée les maquettes. On les affine ensemble, à partir de vos retours, jusqu'au bon résultat.",
      },
      {
        title: "Livrer",
        text: "Quand tout est validé, je prépare les fichiers finaux ou je mets le site en ligne. Et je reste disponible pour les ajustements.",
      },
    ],
    ctaText: "Envie de commencer ? Tout part d'une simple discussion.",
    ctaButton: "Parlons de votre projet",
  },
  about: {
    label: "À propos",
    title: "Graphiste d'abord, développeur ensuite.",
    paragraphs: [
      "J'ai commencé par le graphisme, puis j'ai appris le développement web à Epitech. Aujourd'hui, je fais les deux : je conçois vos supports et, quand il le faut, je les code. J'aime surtout les projets utiles, ceux qui aident une organisation à mieux expliquer ce qu'elle fait.",
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
