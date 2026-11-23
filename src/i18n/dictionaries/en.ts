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
    work: "Work",
    about: "About",
    contact: "Contact",
    switchTo: "FR",
    switchLabel: "Lire en français",
    skip: "Skip to content",
  },
  hero: {
    lead: "I'm Emmanuel —",
    rest: "a website, brand and document designer who helps businesses and institutions carry their message.",
  },
  work: {
    label: "Selected work",
    years: "2019–2026",
    upcoming: "Coming soon",
  },
  about: {
    label: "About",
    paragraphs: [
      "For 7 years, I have been designing identities and visual communication for businesses, non-profits and institutions.",
      "My approach always starts with the message: clarify what needs to be said, structure the information, then give it a form that is readable, consistent and built to last.",
      "I also produce bilingual French / English documents — reports, strategic plans, presentations. I work from Cotonou, Benin, with clients here and abroad.",
    ],
    portraitAlt: "Portrait of Emmanuel KIKI",
    portraitPlaceholder: "Portrait coming soon",
  },
  experience: {
    label: "Experience",
    items: [
      { org: "[Organisation]", role: "[Role]", dates: "[Dates]" },
      { org: "[Organisation]", role: "[Role]", dates: "[Dates]" },
      { org: "[Organisation]", role: "[Role]", dates: "[Dates]" },
    ],
  },
  services: {
    label: "Services",
    items: {
      web: {
        title: "Websites & landing pages",
        tags: ["Design", "Development", "Launch"],
      },
      brand: {
        title: "Brand identity",
        tags: ["Logo", "Visual identity guide", "Brand book"],
      },
      documents: {
        title: "Document layout (FR / EN)",
        tags: ["Reports", "Strategic plans", "FR / EN"],
      },
      dataviz: {
        title: "Infographics & data visualization",
        tags: ["Diagrams", "Key figures", "Maps"],
      },
      motion: {
        title: "Motion design & animated ads",
        tags: ["Social media", "Screens", "Events"],
      },
    },
  },
  clients: {
    label: "Clients",
  },
  contact: {
    label: "Contact",
    title: "Your message deserves to be seen.",
    accent: "Write to me.",
    emailLabel: "Email",
    whatsappLabel: "Call / WhatsApp",
  },
  footer: {
    navLabel: "Navigation",
    socialLabel: "Social",
    rights: "All rights reserved.",
  },
  project: {
    back: "All work",
    client: "Client",
    service: "Service",
    year: "Year",
    role: "Role",
    gallery: "Gallery",
    upcomingNote:
      "This case study is in the works. Check back soon — or write to me to talk about it now.",
    other: "More work",
    coverAlt: "Project main visual",
  },
  notFound: {
    title: "Page not found.",
    text: "This page doesn't exist or has moved.",
    back: "Back to home",
  },
};

export default en;
