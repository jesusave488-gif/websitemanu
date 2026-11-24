import type { Project } from "./types";
import { images } from "./media";

// EXEMPLE FICTIF — « Lagune Lodge » n'existe pas. Ce projet sert à voir le rendu d'une étude
// de cas complète. Visible en local seulement (status "demo") ; remplacez textes et images
// par un vrai projet, puis passez status à "published".
//
// Images : public/projects/projet-site-web/ — déclarées avec img("fichier", "format", "alt FR", "alt EN").
const img = images("projet-site-web");

const projetSiteWeb: Project = {
  slug: "projet-site-web",
  status: "demo",
  service: "web",
  year: "2025",
  title: { fr: "Lagune Lodge", en: "Lagune Lodge" },
  subtitle: { fr: "Un écolodge qui se réserve en trois gestes", en: "An eco-lodge you can book in three taps" },
  category: { fr: "Site web", en: "Website" },
  client: "Lagune Lodge, Grand-Popo",
  cover: img("cover", "16 / 10", "Site de Lagune Lodge sur ordinateur et téléphone", "Lagune Lodge website on desktop and phone"),
  description: {
    fr: "Refonte du site d'un écolodge de Grand-Popo : une vitrine qui donne envie et une réservation en ligne avec paiement Mobile Money.",
    en: "Redesign of a Grand-Popo eco-lodge website: a showcase that makes people want to come, and online booking with Mobile Money payment.",
  },
  links: [{ label: { fr: "Voir le site", en: "Visit the site" }, href: "", kind: "external" }],
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [img("defi", "16 / 9", "L'ancien site de 2019 à côté du nouveau", "The 2019 website next to the new one")] },
        {
          type: "text",
          title: { fr: "Un site de 2019 qui faisait fuir les réservations", en: "A 2019 website that scared bookings away" },
          body: {
            fr: [
              "Le lodge recevait ses demandes par e-mail et répondait sous 72 heures. Sur téléphone, le site était illisible, et les tarifs dataient de 2019.",
              "L'objectif : montrer le lieu tel qu'il est, et permettre de réserver et payer en ligne sans passer par une plateforme qui prend 18 % de commission.",
            ],
            en: [
              "The lodge took requests by email and replied within 72 hours. On phones the site was unreadable, and prices dated back to 2019.",
              "The goal: show the place as it really is, and let guests book and pay online without a platform taking an 18% commission.",
            ],
          },
        },
      ],
    },
    {
      id: "design",
      nav: { fr: "Design", en: "Design" },
      blocks: [
        {
          type: "text",
          label: { fr: "Design", en: "Design" },
          title: { fr: "Donner envie, puis rassurer", en: "Make people want it, then reassure them" },
          body: {
            fr: [
              "La page d'accueil s'ouvre sur la lagune au coucher du soleil et une barre de réservation visible tout de suite. Chaque bungalow a sa fiche avec prix, capacité et photos.",
              "Le parcours de réservation tient en trois étapes : dates, bungalow, paiement.",
            ],
            en: [
              "The home page opens on the lagoon at sunset, with a booking bar visible right away. Each bungalow has its own page with price, capacity and photos.",
              "Booking takes three steps: dates, bungalow, payment.",
            ],
          },
        },
        { type: "media", items: [img("home", "16 / 10", "Page d'accueil de Lagune Lodge", "Lagune Lodge home page")] },
        {
          type: "media",
          items: [
            img("rooms", "16 / 10", "Page des bungalows avec filtres", "Bungalows page with filters"),
            img("booking", "16 / 10", "Page de réservation avec calendrier et récapitulatif", "Booking page with calendar and summary"),
          ],
        },
      ],
    },
    {
      id: "mobile",
      nav: { fr: "Mobile", en: "Mobile" },
      blocks: [
        {
          type: "text",
          label: { fr: "Mobile", en: "Mobile" },
          title: { fr: "Pensé d'abord pour le téléphone", en: "Designed for phones first" },
          body: {
            fr: ["Sept visiteurs sur dix arrivent depuis un téléphone. Les boutons sont larges, les formulaires courts, et le paiement Mobile Money est proposé en premier."],
            en: ["Seven visitors out of ten come from a phone. Buttons are large, forms are short, and Mobile Money is offered first at checkout."],
          },
        },
        {
          type: "media",
          items: [
            img("mobile-1", "9 / 19", "Accueil sur téléphone", "Home screen on a phone"),
            img("mobile-2", "9 / 19", "Liste des bungalows sur téléphone", "Bungalow list on a phone"),
            img("mobile-3", "9 / 19", "Paiement Mobile Money sur téléphone", "Mobile Money payment on a phone"),
          ],
        },
      ],
    },
    {
      id: "resultat",
      nav: { fr: "Résultat", en: "Outcome" },
      blocks: [
        {
          type: "figures",
          items: [
            { value: "12", label: { fr: "pages conçues", en: "pages designed" } },
            { value: "+64 %", label: { fr: "de réservations directes", en: "direct bookings" } },
            { value: "6 sem.", label: { fr: "de la maquette à la mise en ligne", en: "from mockup to launch" } },
          ],
        },
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Des réservations directes, sans intermédiaire", en: "Direct bookings, with no middleman" },
          body: {
            fr: ["Trois mois après la mise en ligne, la majorité des séjours sont réservés et payés directement sur le site. L'équipe met à jour elle-même les tarifs et les disponibilités."],
            en: ["Three months after launch, most stays are booked and paid directly on the site. The team updates prices and availability on its own."],
          },
        },
      ],
    },
  ],
};

export default projetSiteWeb;
