import type { Media } from "./types";

/**
 * Raccourci pour déclarer les images d'un projet rangées dans public/projects/<slug>/.
 *
 *   const img = images("projet-site-web");
 *   img("home", "16 / 10", "Page d'accueil", "Home page")
 *   → { src: "/projects/projet-site-web/home.jpg", ratio: "16 / 10", alt: { fr: …, en: … } }
 *
 * Par défaut le fichier est un .jpg ; indiquez l'extension si besoin ("visuel.png").
 */
export function images(slug: string) {
  return (file: string, ratio: string, fr: string, en: string): Media => ({
    src: `/projects/${slug}/${file.includes(".") ? file : `${file}.jpg`}`,
    ratio,
    alt: { fr, en },
  });
}
