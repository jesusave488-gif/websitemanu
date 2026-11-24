import type { Project } from "./types";

// Emplacement "Projet à venir" — trame d'étude de cas « Identité de marque » à remplir.
// Visible en local (npm run dev) ; masqué en ligne tant que status vaut "upcoming".
//
// Images et vidéos : déposez-les dans public/projects/projet-identite/ puis indiquez
// leur chemin dans "src" (ex. "/projects/projet-identite/01.jpg"). Un "src" vide affiche un emplacement.
// Ajoutez, supprimez ou réordonnez librement les sections et les blocs.
const projetIdentite: Project = {
  slug: "projet-identite",
  status: "upcoming",
  service: "brand",
  year: "2026",
  title: { fr: "Identité de marque", en: "Brand identity" },
  subtitle: { fr: "Une accroche courte sur le projet", en: "A short tagline for the project" },
  category: { fr: "Identité de marque", en: "Brand identity" },
  client: "[Client]",
  // cover: { src: "/projects/projet-identite/cover.jpg", alt: { fr: "…", en: "…" } },
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
      id: "logo",
      nav: {
        fr: "Logo",
        en: "Logo"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Logo",
            en: "Logo"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "L'idée derrière le logo, sa construction et ses déclinaisons."
            ],
            en: [
              "The idea behind the logo, how it is built and its variations."
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
              ratio: "1 / 1",
              background: "#F3F2EC"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1",
              background: "#22323C"
            }
          ]
        }
      ]
    },
    {
      id: "systeme",
      nav: {
        fr: "Système graphique",
        en: "Graphic system"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Système graphique",
            en: "Graphic system"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Couleurs, typographies et règles qui rendent l'identité reconnaissable partout."
            ],
            en: [
              "Colours, typefaces and rules that make the identity recognisable everywhere."
            ]
          }
        },
        {
          type: "colors",
          colors: [
            {
              name: "Couleur principale",
              hex: "#22323C"
            },
            {
              name: "Couleur secondaire",
              hex: "#354B60"
            },
            {
              name: "Accent",
              hex: "#B8D0DE"
            },
            {
              name: "Fond",
              hex: "#F3F2EC"
            }
          ]
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
        }
      ]
    },
    {
      id: "applications",
      nav: {
        fr: "Applications",
        en: "Applications"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Applications",
            en: "Applications"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "L'identité en situation : papeterie, signalétique, réseaux sociaux, supports imprimés."
            ],
            en: [
              "The identity in use: stationery, signage, social media, print."
            ]
          }
        },
        {
          type: "grid",
          columns: 3,
          items: [
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "1 / 1"
            }
          ]
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

export default projetIdentite;
