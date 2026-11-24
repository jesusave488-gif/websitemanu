import type { Project } from "./types";

// Emplacement "Projet à venir" — trame d'étude de cas « Mise en page · FR / EN » à remplir.
// Visible en local (npm run dev) ; masqué en ligne tant que status vaut "upcoming".
//
// Images et vidéos : déposez-les dans public/projects/projet-plan-strategique/ puis indiquez
// leur chemin dans "src" (ex. "/projects/projet-plan-strategique/01.jpg"). Un "src" vide affiche un emplacement.
// Ajoutez, supprimez ou réordonnez librement les sections et les blocs.
const projetPlanStrategique: Project = {
  slug: "projet-plan-strategique",
  status: "upcoming",
  service: "documents",
  year: "2026",
  title: { fr: "Plan stratégique", en: "Strategic plan" },
  subtitle: { fr: "Une accroche courte sur le projet", en: "A short tagline for the project" },
  category: { fr: "Mise en page · FR / EN", en: "Document layout · FR / EN" },
  client: "[Client]",
  // cover: { src: "/projects/projet-plan-strategique/cover.jpg", alt: { fr: "…", en: "…" } },
  description: {
    fr: "Une phrase qui résume le projet : pour qui, quel besoin, quel résultat.",
    en: "One sentence that sums up the project: for whom, what need, what outcome.",
  },
  // Lien affiché sous le titre — renseignez "href" (une adresse https:// ou un fichier dans public/).
  links: [
    {
      label: {
        fr: "Télécharger le PDF",
        en: "Download the PDF"
      },
      href: "",
      kind: "download"
    }
  ],
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
      id: "structure",
      nav: {
        fr: "Structure",
        en: "Structure"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Structure",
            en: "Structure"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Hiérarchie de l'information, grille de mise en page, styles de titres, tableaux et encadrés."
            ],
            en: [
              "Information hierarchy, layout grid, heading styles, tables and callouts."
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
              ratio: "3 / 2",
              fit: "contain",
              background: "#E8E7DF"
            }
          ]
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
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4"
            }
          ]
        }
      ]
    },
    {
      id: "fr-en",
      nav: {
        fr: "Versions FR / EN",
        en: "FR / EN versions"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Versions FR / EN",
            en: "FR / EN versions"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Comment les deux langues partagent la même mise en page sans perdre en lisibilité."
            ],
            en: [
              "How both languages share one layout without losing readability."
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
              ratio: "3 / 4",
              fit: "contain",
              background: "#E8E7DF"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "3 / 4",
              fit: "contain",
              background: "#E8E7DF"
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
              value: "[00]",
              label: {
                fr: "pages",
                en: "pages"
              }
            },
            {
              value: "2",
              label: {
                fr: "langues (FR / EN)",
                en: "languages (FR / EN)"
              }
            },
            {
              value: "[00]",
              label: {
                fr: "infographies et tableaux",
                en: "infographics and tables"
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

export default projetPlanStrategique;
