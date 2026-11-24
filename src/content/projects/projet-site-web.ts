import type { Project } from "./types";

// Emplacement "Projet à venir" — trame d'étude de cas « Site web » à remplir.
// Visible en local (npm run dev) ; masqué en ligne tant que status vaut "upcoming".
//
// Images et vidéos : déposez-les dans public/projects/projet-site-web/ puis indiquez
// leur chemin dans "src" (ex. "/projects/projet-site-web/01.jpg"). Un "src" vide affiche un emplacement.
// Ajoutez, supprimez ou réordonnez librement les sections et les blocs.
const projetSiteWeb: Project = {
  slug: "projet-site-web",
  status: "upcoming",
  service: "web",
  year: "2026",
  title: { fr: "Site web", en: "Website" },
  subtitle: { fr: "Une accroche courte sur le projet", en: "A short tagline for the project" },
  category: { fr: "Site web", en: "Website" },
  client: "[Client]",
  // cover: { src: "/projects/projet-site-web/cover.jpg", alt: { fr: "…", en: "…" } },
  description: {
    fr: "Une phrase qui résume le projet : pour qui, quel besoin, quel résultat.",
    en: "One sentence that sums up the project: for whom, what need, what outcome.",
  },
  // Lien affiché sous le titre — renseignez "href" (une adresse https:// ou un fichier dans public/).
  links: [
    {
      label: {
        fr: "Voir le site",
        en: "Visit the site"
      },
      href: "",
      kind: "external"
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
      id: "design",
      nav: {
        fr: "Design",
        en: "Design"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Design",
            en: "Design"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Arborescence, parcours, grille et composants : comment le site guide le visiteur."
            ],
            en: [
              "Structure, user journeys, grid and components: how the site guides visitors."
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
              ratio: "16 / 10"
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
              ratio: "16 / 10"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "16 / 10"
            }
          ]
        }
      ]
    },
    {
      id: "mobile",
      nav: {
        fr: "Mobile",
        en: "Mobile"
      },
      blocks: [
        {
          type: "text",
          label: {
            fr: "Mobile",
            en: "Mobile"
          },
          title: {
            fr: "Titre de la section",
            en: "Section title"
          },
          body: {
            fr: [
              "Les choix faits pour le téléphone, là où se trouve la majorité des visiteurs."
            ],
            en: [
              "The choices made for phones, where most visitors are."
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
              ratio: "9 / 19"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "9 / 19"
            },
            {
              src: "",
              alt: {
                fr: "",
                en: ""
              },
              ratio: "9 / 19"
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
                fr: "pages conçues",
                en: "pages designed"
              }
            },
            {
              value: "[00 %]",
              label: {
                fr: "de visiteurs sur mobile",
                en: "mobile visitors"
              }
            },
            {
              value: "[0 sem.]",
              label: {
                fr: "de la maquette à la mise en ligne",
                en: "from mockup to launch"
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

export default projetSiteWeb;
