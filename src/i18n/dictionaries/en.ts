// All English copy. Must keep exactly the same shape as fr.ts (TypeScript checks it).
import type { Dictionary } from "./fr";

const en: Dictionary = {
  meta: {
    title: "Emmanuel KIKI — Website, brand & document designer",
    description:
      "Designer based in Cotonou, Benin. I help businesses and institutions carry their message through websites, identities and documents that are clear, consistent and built to last.",
  },
  nav: {
    home: "./",
    homeLabel: "Back to top",
    homeText: "Home",
    work: "Work",
    about: "About",
    contact: "Contact",
    switchTo: "FR",
    switchLabel: "Lire en français",
    theme: "Switch between light and dark mode",
    skip: "Skip to content",
  },
  hero: {
    lead: "I'm Emmanuel — a website, brand and document designer",
    rest: "who helps businesses and institutions carry their message.",
    tags: ["Based in Cotonou, Benin", "FR / EN documents", "Businesses & institutions"],
  },
  work: {
    title: "Selected work",
    years: "2019–2026",
    upcoming: "Coming soon",
  },
  about: {
    title: "About",
    paragraphs: [
      "For 7 years, I have been designing identities and visual communication for businesses, non-profits and institutions.",
      "My approach always starts with the message: clarify what needs to be said, structure the information, then give it a form that is readable, consistent and built to last.",
      "I also produce bilingual French / English documents — reports, strategic plans, presentations. I work from Cotonou, Benin, with clients here and abroad.",
    ],
    portraitAlt: "Portrait of Emmanuel KIKI",
    portraitPlaceholder: "Portrait coming soon — landscape photo recommended",
  },
  experience: {
    title: "Experience",
    intro: "7 years designing identities, documents and websites for businesses and institutions.",
    period: "2019 — Today",
    currentLabel: "Current",
    items: [
      {
        org: "[Organisation]",
        role: "[Role]",
        dates: "[2023] — Today",
        location: "[City, Country]",
        description: "[One or two sentences: your main responsibilities and what you brought.]",
        tags: ["[Mission]", "[Tool]"],
        current: true,
      },
      {
        org: "[Organisation]",
        role: "[Role]",
        dates: "[2021] — [2023]",
        location: "[City, Country]",
        description: "[One or two sentences: your main responsibilities and what you brought.]",
        tags: ["[Mission]", "[Tool]"],
        current: false,
      },
      {
        org: "[Organisation]",
        role: "[Role]",
        dates: "[2019] — [2021]",
        location: "[City, Country]",
        description: "[One or two sentences: your main responsibilities and what you brought.]",
        tags: ["[Mission]", "[Tool]"],
        current: false,
      },
    ],
  },
  services: {
    title: "Services",
    intro: "From visual identity to website, I design clear, consistent materials, in French and in English.",
    cta: "Let's talk about your project",
    more: "Discuss it",
    messagePrefix: "Hello Emmanuel, I saw your portfolio and would like to discuss a project: ",
    items: {
      web: {
        title: "Websites & landing pages",
        description: "Clear, fast showcase sites and landing pages built to convert, from mockup to launch.",
      },
      brand: {
        title: "Brand identity",
        description: "Logo, colours, typography and brand guidelines for a brand people recognise everywhere.",
      },
      documents: {
        title: "Document layout (FR / EN)",
        description: "Bilingual reports, strategic plans, brochures and presentations, structured to be read to the end.",
      },
      dataviz: {
        title: "Infographics & data visualization",
        description: "Complex figures and processes turned into charts and infographics people understand at a glance.",
      },
      motion: {
        title: "Motion design & animated ads",
        description: "Short videos, logo animations and social media ads that hold attention.",
      },
    },
  },
  clients: {
    title: "They trusted me",
  },
  recognitions: {
    title: "Awards and recognition",
    intro: "Certified training that complements my design practice.",
    hint: "Hover over an award to see the certificate.",
    issuedBy: "Issued by",
    view: "View the certificate",
    close: "Close",
    placeholder: "Certificate to be added",
  },
  contact: {
    title: "Your message deserves to be seen.",
    accent: "Write to me.",
    text: "A website, a brand identity, a report to lay out? Tell me about your project, in English or in French.",
    whatsappCta: "Message me on WhatsApp",
    emailCta: "Send an email",
    whatsappMessage: "Hello Emmanuel, I saw your portfolio and would like to discuss a project.",
    floatingLabel: "Chat on WhatsApp",
  },
  footer: {
    tagline: "Website, brand and document designer.",
    navLabel: "Pages",
    socialLabel: "Social",
    contactLabel: "Contact",
    location: "Cotonou, Benin",
    links: {
      experience: "Experience",
      services: "Services",
      recognitions: "Awards",
    },
  },
  project: {
    work: "Work",
    sectionsLabel: "Case study sections",
    seeAlso: "See also",
    mediaPlaceholder: "Visual coming soon",
    upcomingNote: "Case study in progress",
  },
  notFound: {
    title: "Page not found.",
    text: "This page doesn't exist or has moved.",
    back: "Back to home",
  },
};

export default en;
