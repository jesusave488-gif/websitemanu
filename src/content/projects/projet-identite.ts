import type { Project } from "./types";
import { images } from "./media";

// EXEMPLE FICTIF — « Ayaba » n'existe pas. Ce projet sert à voir le rendu d'une étude
// de cas complète. Visible en local seulement (status "demo") ; remplacez textes et images
// par un vrai projet, puis passez status à "published".
//
// Images : public/projects/projet-identite/ — déclarées avec img("fichier", "format", "alt FR", "alt EN").
const img = images("projet-identite");

const projetIdentite: Project = {
  slug: "projet-identite",
  status: "demo",
  service: "brand",
  year: "2025",
  title: { fr: "Ayaba", en: "Ayaba" },
  subtitle: { fr: "Une marque de café qui sent la torréfaction", en: "A coffee brand that smells of the roaster" },
  category: { fr: "Identité de marque", en: "Brand identity" },
  client: "Ayaba, torréfaction à Cotonou",
  cover: img("cover", "16 / 10", "Logo Ayaba et sachet de café", "Ayaba logo and coffee bag"),
  description: {
    fr: "Identité complète d'une jeune torréfaction de Cotonou : logo, couleurs, typographies, emballages et boutique.",
    en: "Full identity for a young Cotonou coffee roaster: logo, colours, typefaces, packaging and shop.",
  },
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [img("defi", "16 / 9", "Planche d'inspiration : couleurs, matières et mots-clés", "Moodboard: colours, textures and keywords")] },
        {
          type: "text",
          title: { fr: "Faire exister un café béninois face aux marques importées", en: "Making a Beninese coffee stand out next to imported brands" },
          body: {
            fr: [
              "Ayaba torréfie chaque semaine des grains du Kouffo, mais ses sachets ressemblaient à ceux de tout le monde et se perdaient en rayon.",
              "Il fallait une marque chaleureuse, fière de son origine, et assez simple pour être imprimée localement à petit prix.",
            ],
            en: [
              "Ayaba roasts Kouffo beans every week, but its bags looked like everyone else's and got lost on the shelf.",
              "The brand needed to feel warm, proud of its origin, and simple enough to be printed locally at low cost.",
            ],
          },
        },
      ],
    },
    {
      id: "logo",
      nav: { fr: "Logo", en: "Logo" },
      blocks: [
        {
          type: "text",
          label: { fr: "Logo", en: "Logo" },
          title: { fr: "Un grain de café dans le soleil du matin", en: "A coffee bean in the morning sun" },
          body: {
            fr: ["Le symbole réunit le grain et le soleil levant ; le nom est écrit dans une italique généreuse qui rappelle l'écriture à la main."],
            en: ["The mark combines the bean and the rising sun; the name is set in a generous italic that recalls handwriting."],
          },
        },
        {
          type: "media",
          items: [
            img("logo-grid", "1 / 1", "Construction du symbole sur une grille", "Mark construction on a grid"),
            img("logo-variants", "1 / 1", "Déclinaisons du logo sur les quatre couleurs", "Logo versions on the four colours"),
          ],
        },
      ],
    },
    {
      id: "systeme",
      nav: { fr: "Système graphique", en: "Graphic system" },
      blocks: [
        {
          type: "text",
          label: { fr: "Système graphique", en: "Graphic system" },
          title: { fr: "Quatre couleurs tirées de la torréfaction", en: "Four colours taken from roasting" },
          body: {
            fr: ["Du grain vert doré au café noir : chaque couleur correspond à un degré de torréfaction et sert à distinguer les gammes."],
            en: ["From golden green bean to dark coffee: each colour matches a roast level and helps tell the ranges apart."],
          },
        },
        {
          type: "colors",
          colors: [
            { name: "Café", hex: "#3B2418" },
            { name: "Terre cuite", hex: "#C65A32" },
            { name: "Or", hex: "#D9A441" },
            { name: "Crème", hex: "#F4EBDD" },
          ],
        },
        { type: "media", items: [img("type", "16 / 9", "Typographies : titres en italique, textes en linéale", "Typefaces: italic headings, sans-serif text")] },
      ],
    },
    {
      id: "applications",
      nav: { fr: "Applications", en: "Applications" },
      blocks: [
        {
          type: "text",
          label: { fr: "Applications", en: "Applications" },
          title: { fr: "Du sachet à la devanture", en: "From the bag to the shopfront" },
          body: {
            fr: ["Sachets, gobelets, cartes de visite, enseigne, tote bag et publications pour les réseaux sociaux."],
            en: ["Bags, cups, business cards, shop sign, tote bag and social media posts."],
          },
        },
        {
          type: "grid",
          columns: 3,
          items: [
            img("app-bag", "1 / 1", "Sachet de café 250 g", "250 g coffee bag"),
            img("app-cup", "1 / 1", "Gobelet à emporter", "Takeaway cup"),
            img("app-cards", "1 / 1", "Cartes de visite", "Business cards"),
            img("app-shop", "1 / 1", "Devanture de la boutique", "Shopfront"),
            img("app-tote", "1 / 1", "Tote bag", "Tote bag"),
            img("app-post", "1 / 1", "Publication Instagram", "Instagram post"),
          ],
        },
        { type: "media", items: [img("range", "16 / 9", "Les trois gammes de café côte à côte", "The three coffee ranges side by side")] },
      ],
    },
    {
      id: "resultat",
      nav: { fr: "Résultat", en: "Outcome" },
      blocks: [
        {
          type: "figures",
          items: [
            { value: "3", label: { fr: "gammes de café", en: "coffee ranges" } },
            { value: "24", label: { fr: "supports livrés", en: "items delivered" } },
            { value: "40", label: { fr: "pages de charte graphique", en: "pages of brand guidelines" } },
          ],
        },
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Une marque qu'on reconnaît de loin", en: "A brand people recognise from afar" },
          body: {
            fr: ["Les sachets sont désormais vendus dans des épiceries fines de Cotonou, et la charte permet à l'équipe de créer seule ses publications."],
            en: ["The bags are now sold in Cotonou delicatessens, and the guidelines let the team create its own posts."],
          },
        },
      ],
    },
  ],
};

export default projetIdentite;
