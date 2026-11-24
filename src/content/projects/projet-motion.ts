import type { Project } from "./types";

// Emplacement "Projet à venir" — trame d'étude de cas « Motion design » à remplir.
// Visible en local (npm run dev) ; masqué en ligne tant que status vaut "upcoming".
//
// Images et vidéos : déposez-les dans public/projects/projet-motion/ puis indiquez
// leur chemin dans "src" (ex. "/projects/projet-motion/01.jpg"). Un "src" vide affiche un emplacement.
// Ajoutez, supprimez ou réordonnez librement les sections et les blocs.
const projetMotion: Project = {
  slug: "projet-motion",
  status: "upcoming",
  service: "motion",
  year: "2026",
  title: { fr: "Publicité animée", en: "Animated ad" },
  subtitle: { fr: "Une accroche courte sur le projet", en: "A short tagline for the project" },
  category: { fr: "Motion design", en: "Motion design" },
  client: "[Client]",
  // cover: { src: "/projects/projet-motion/cover.jpg", alt: { fr: "…", en: "…" } },
  description: {
    fr: "Une phrase qui résume le projet : pour qui, quel besoin, quel résultat.",
    en: "One sentence that sums up the project: for whom, what need, what outcome.",
  },
  sections: [
    {
      id: "defi",
      nav: {
        fr: "Défi",
        en: "Challenge"
      },
      blocks: [
        {
          type: "media",
          items: [
            {
              kind: "video",
              src: "",
              poster: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            }
          ]
        },
        {
          type: "text",
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Le point de départ : la structure, son message, son public et ce qui devait changer.",
              "Ce qui rendait le projet difficile ou intéressant."
            ],
            en: [
              "The starting point: the organisation, its message, its audience and what needed to change.",
              "What made the project difficult or interesting."
            ]
          }
        }
      ]
    },
    {
      id: "storyboard",
      nav: {
        fr: "Storyboard",
        en: "Storyboard"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Storyboard",
            en: "Storyboard"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Le scénario, le rythme et les intentions de chaque plan."
            ],
            en: [
              "The script, the pacing and the intent of each shot."
            ]
          }
        },
        {
          type: "grid",
          columns: 4,
          items: [
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            }
          ]
        }
      ]
    },
    {
      id: "animation",
      nav: {
        fr: "Animation",
        en: "Animation"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Animation",
            en: "Animation"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Les déclinaisons par format : réseaux sociaux, écrans, événements."
            ],
            en: [
              "The cuts for each format: social media, screens, events."
            ]
          }
        },
        {
          type: "media",
          items: [
            {
              kind: "video",
              src: "",
              poster: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            }
          ]
        },
        {
          type: "media",
          items: [
            {
              kind: "video",
              src: "",
              poster: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "9 / 16"
            },
            {
              kind: "video",
              src: "",
              poster: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "9 / 16"
            },
            {
              kind: "video",
              src: "",
              poster: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "9 / 16"
            }
          ]
        }
      ]
    },
    {
      id: "resultat",
      nav: {
        fr: "Résultat",
        en: "Outcome"
      },
      blocks: [
        {
          type: "figures",
          items: [
            {
              value: "[00 s]",
              label: {
                fr: "durée de la version principale",
                en: "main cut length"
              }
            },
            {
              value: "[0]",
              label: {
                fr: "formats livrés",
                en: "formats delivered"
              }
            },
            {
              value: "[00 k]",
              label: {
                fr: "vues",
                en: "views"
              }
            }
          ]
        },
        {
          type: "text",
          label: {
            fr: "Résultat",
            en: "Outcome"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Ce qui a été livré, comment il est utilisé, et l'effet obtenu."
            ],
            en: [
              "What was delivered, how it is used, and the effect it had."
            ]
          }
        }
      ]
    }
  ],
};

export default projetMotion;
