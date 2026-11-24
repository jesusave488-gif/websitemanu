import type { Project } from "./types";
import { images } from "./media";

// EXEMPLE FICTIF — « NovaPay » n'existe pas. Ce projet sert à voir le rendu d'une étude
// de cas complète. Visible en local seulement (status "demo") ; remplacez textes et images
// par un vrai projet, puis passez status à "published".
//
// Pour une vraie vidéo : { kind: "video", src: "/projects/projet-motion/film.mp4", poster: "…", alt, ratio }.
// Images : public/projects/projet-motion/ — déclarées avec img("fichier", "format", "alt FR", "alt EN").
const img = images("projet-motion");

const projetMotion: Project = {
  slug: "projet-motion",
  status: "demo",
  service: "motion",
  year: "2025",
  title: { fr: "NovaPay", en: "NovaPay" },
  subtitle: { fr: "Payer au marché en trois secondes", en: "Paying at the market in three seconds" },
  category: { fr: "Motion design", en: "Motion design" },
  client: "NovaPay",
  cover: img("cover", "16 / 10", "Image clé de la campagne « Payez d'un geste »", "Key visual of the “Pay with a gesture” campaign"),
  description: {
    fr: "Campagne animée pour une application de paiement mobile : un film de 30 secondes et trois stories pour les réseaux sociaux.",
    en: "Animated campaign for a mobile payment app: a 30-second film and three social media stories.",
  },
  sections: [
    {
      id: "defi",
      nav: { fr: "Défi", en: "Challenge" },
      blocks: [
        { type: "media", items: [img("defi", "16 / 9", "Image du film : « Au marché, en 3 secondes »", "Film still: “At the market, in 3 seconds”")] },
        {
          type: "text",
          title: { fr: "Expliquer un nouveau geste sans un mot de trop", en: "Explaining a new habit without a word too many" },
          body: {
            fr: [
              "NovaPay permet de payer en scannant le code d'un commerçant. Beaucoup de vendeuses du marché ne connaissaient pas encore ce geste.",
              "Le film devait le montrer en situation réelle, se comprendre sans le son, et fonctionner aussi bien à la télévision que sur un téléphone.",
            ],
            en: [
              "NovaPay lets people pay by scanning a merchant's code. Many market sellers were not yet familiar with this habit.",
              "The film had to show it in a real setting, make sense without sound, and work on TV as well as on a phone.",
            ],
          },
        },
      ],
    },
    {
      id: "storyboard",
      nav: { fr: "Storyboard", en: "Storyboard" },
      blocks: [
        {
          type: "text",
          label: { fr: "Storyboard", en: "Storyboard" },
          title: { fr: "Huit plans, une histoire simple", en: "Eight shots, one simple story" },
          body: {
            fr: ["Une cliente, une vendeuse, pas de monnaie : le paiement se fait d'un geste et tout le monde repart avec le sourire."],
            en: ["A customer, a seller, no change: the payment takes a single gesture and everyone leaves smiling."],
          },
        },
        {
          type: "grid",
          columns: 4,
          items: [
            img("sb-1", "16 / 9", "Plan 1 : le marché s'éveille", "Shot 1: the market wakes up"),
            img("sb-2", "16 / 9", "Plan 2 : une cliente choisit ses tomates", "Shot 2: a customer picks tomatoes"),
            img("sb-3", "16 / 9", "Plan 3 : pas de monnaie", "Shot 3: no change"),
            img("sb-4", "16 / 9", "Plan 4 : elle sort son téléphone", "Shot 4: she takes out her phone"),
            img("sb-5", "16 / 9", "Plan 5 : scan du code de la vendeuse", "Shot 5: scanning the seller's code"),
            img("sb-6", "16 / 9", "Plan 6 : paiement validé", "Shot 6: payment confirmed"),
            img("sb-7", "16 / 9", "Plan 7 : les deux sourient", "Shot 7: both smile"),
            img("sb-8", "16 / 9", "Plan 8 : logo et signature", "Shot 8: logo and tagline"),
          ],
        },
      ],
    },
    {
      id: "animation",
      nav: { fr: "Animation", en: "Animation" },
      blocks: [
        {
          type: "text",
          label: { fr: "Animation", en: "Animation" },
          title: { fr: "Des couleurs vives et des mouvements nets", en: "Bright colours and crisp movements" },
          body: {
            fr: ["Le bleu de la marque et un jaune solaire, des textes courts qui apparaissent au rythme de la musique, et des formats verticaux pensés pour les stories."],
            en: ["The brand blue and a sunny yellow, short texts appearing to the beat of the music, and vertical formats designed for stories."],
          },
        },
        { type: "media", items: [img("key", "16 / 9", "Image clé : « Envoyez. Recevez. Souriez. »", "Key frame: “Send. Receive. Smile.”")] },
        {
          type: "media",
          items: [
            img("story-1", "9 / 16", "Story 1 : ouvrez NovaPay", "Story 1: open NovaPay"),
            img("story-2", "9 / 16", "Story 2 : scannez", "Story 2: scan"),
            img("story-3", "9 / 16", "Story 3 : c'est payé", "Story 3: it's paid"),
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
            { value: "30 s", label: { fr: "film principal", en: "main film" } },
            { value: "3", label: { fr: "stories verticales", en: "vertical stories" } },
            { value: "1,2 M", label: { fr: "vues en quatre semaines", en: "views in four weeks" } },
          ],
        },
        {
          type: "text",
          label: { fr: "Résultat", en: "Outcome" },
          title: { fr: "Un geste devenu familier", en: "A habit that became familiar" },
          body: {
            fr: ["La campagne a été diffusée sur les réseaux sociaux et sur les écrans des marchés ; les inscriptions de commerçants ont nettement augmenté pendant la diffusion."],
            en: ["The campaign ran on social media and on market screens; merchant sign-ups rose sharply while it was on air."],
          },
        },
      ],
    },
  ],
};

export default projetMotion;
