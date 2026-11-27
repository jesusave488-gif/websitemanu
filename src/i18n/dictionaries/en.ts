// All English copy. Must keep exactly the same shape as fr.ts (TypeScript checks it).
import type { Dictionary } from "./fr";

const en: Dictionary = {
  meta: {
    title: "Emmanuel KIKI — Websites & apps, visual identities and reports · Cotonou",
    description:
      "Web and graphic designer based in Cotonou. Websites and apps, visual identities and bilingual FR/EN reports for companies, NGOs and institutions.",
  },
  nav: {
    role: "Designer · Cotonou",
    realisations: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    switchTo: "FR",
    switchLabel: "Lire en français",
    skip: "Skip to content",
    menu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    hello: "Hello, hey!",
    name: ["Emmanuel", "KIKI"],
    role: "Web & graphic designer",
    lead: "I design websites and apps, visual identities and reports that help companies, NGOs and institutions present their work better.",
    ctaWork: "See my work",
    ctaContact: "Let's talk about your project",
    tags: ["Cotonou, Benin", "Remote projects", "English / Français"],
    portraitAlt: "Portrait of Emmanuel KIKI, web and graphic designer in Cotonou",
    creativeMode: "creative mode",
  },
  realisations: {
    label: "Work",
    title: "Real projects, measurable results.",
    subtitle: "A selection of collaborations with startups, NGOs and international organisations.",
    clients: "Trusted by",
    coverAlt: "Project visual",
  },
  services: {
    label: "Services",
    title: "What I can do for you.",
    cta: "Request a quote",
    items: {
      web: {
        title: "Websites & apps",
        description: "Fast, easy-to-manage websites, from mockup to launch.",
      },
      brand: {
        title: "Brand identity",
        description: "Logo, colours, typography and guidelines, so you're recognised everywhere.",
      },
      documents: {
        title: "Bilingual reports & documents",
        description: "Reports, strategic plans and brochures, laid out in French and English.",
      },
      dataviz: {
        title: "Infographics",
        description: "Your figures and processes turned into visuals people understand at a glance.",
      },
      motion: {
        title: "Motion design",
        description: "Logo animations, short videos and social media ads.",
      },
    },
  },
  method: {
    label: "Process",
    title: "How we work together.",
    steps: [
      { title: "Listen", text: "We define your goals, audience and constraints." },
      { title: "Structure", text: "I organise the content before designing anything." },
      { title: "Design", text: "Mockups, feedback, adjustments, until sign-off." },
      { title: "Deliver", text: "Ready-to-use files, launch and support." },
    ],
  },
  about: {
    label: "About",
    title: "A designer for 7 years, trained in web development.",
    paragraphs: [
      "I started in graphic design, then trained in web development (Epitech) and project management (Scripture Union). Today I bring both together: I think through the design and I know how to build it.",
      "I mostly work with NGOs, institutions and growing companies that need professional materials in both languages.",
    ],
    stats: [
      { value: 7, suffix: "+", text: "", label: "years of experience" },
      { value: 0, suffix: "", text: "[TO COMPLETE]", label: "projects delivered" },
      { value: 0, suffix: "", text: "[TO COMPLETE]", label: "organisations supported" },
    ],
    trainings: "Training",
    certificate: "Certificate ↗",
  },
  contact: {
    label: "Contact",
    title: "Got a project in mind? Let's talk.",
    text: "A website to launch, a brand to create, a report to lay out: tell me what you need and I'll get back to you quickly.",
    whatsappCta: "Message me on WhatsApp",
    emailCta: "Send an email",
    location: "Cotonou, Benin",
  },
  footer: {
    backToTop: "Back to top ↑",
  },
  project: {
    demoNote: "Fictional example project — to be replaced by a real case study.",
    client: "Client",
    service: "Service",
    year: "Year",
    link: "Link",
    deliverables: "Deliverables",
    deliverablesTitle: "What was delivered",
    next: "Next project",
    mediaPlaceholder: "Visual coming soon",
  },
  notFound: {
    title: "Page not found.",
    text: "This page doesn't exist or has moved.",
    back: "Back to home",
  },
};

export default en;
