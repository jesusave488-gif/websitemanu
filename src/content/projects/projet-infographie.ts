import type { Project } from "./types";

// Emplacement "Projet à venir" — trame d'étude de cas « Infographie » à remplir.
// Visible en local (npm run dev) ; masqué en ligne tant que status vaut "upcoming".
//
// Images et vidéos : déposez-les dans public/projects/projet-infographie/ puis indiquez
// leur chemin dans "src" (ex. "/projects/projet-infographie/01.jpg"). Un "src" vide affiche un emplacement.
// Ajoutez, supprimez ou réordonnez librement les sections et les blocs.
const projetInfographie: Project = {
  slug: "projet-infographie",
  status: "upcoming",
  service: "dataviz",
  year: "2026",
  title: { fr: "Infographie", en: "Infographic" },
  subtitle: { fr: "Une accroche courte sur le projet", en: "A short tagline for the project" },
  category: { fr: "Infographie", en: "Infographics" },
  client: "[Client]",
  // cover: { src: "/projects/projet-infographie/cover.jpg", alt: { fr: "…", en: "…" } },
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
              src: "",
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
      id: "donnees",
      nav: {
        fr: "Données",
        en: "Data"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Données",
            en: "Data"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Les données de départ, ce qu'il fallait faire comprendre, et à qui."
            ],
            en: [
              "The source data, what needed to be understood, and by whom."
            ]
          }
        },
        {
          type: "figures",
          items: [
            {
              value: "[00]",
              label: {
                fr: "indicateurs mis en forme",
                en: "indicators visualised"
              }
            },
            {
              value: "[00]",
              label: {
                fr: "schémas et cartes",
                en: "diagrams and maps"
              }
            },
            {
              value: "[0]",
              label: {
                fr: "formats (print, web, réseaux)",
                en: "formats (print, web, social)"
              }
            }
          ]
        }
      ]
    },
    {
      id: "visualisations",
      nav: {
        fr: "Visualisations",
        en: "Visualisations"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Visualisations",
            en: "Visualisations"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Le choix des graphiques, des couleurs et de la hiérarchie pour une lecture en quelques secondes."
            ],
            en: [
              "Choosing charts, colours and hierarchy so it reads in seconds."
            ]
          }
        },
        {
          type: "media",
          items: [
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 9"
            }
          ]
        },
        {
          type: "grid",
          columns: 2,
          items: [
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "4 / 3"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "4 / 3"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "4 / 3"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "4 / 3"
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

export default projetInfographie;
