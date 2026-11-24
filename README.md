# Portfolio — Emmanuel KIKI

Site portfolio one-page bilingue (FR / EN) : Next.js (App Router), React, TypeScript et CSS Modules.

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000 (redirige vers `/fr` ou `/en` selon la langue du navigateur).

| Commande            | Rôle                                        |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | serveur de développement (rechargement auto) |
| `npm run build`     | build de production (vérifie aussi les types) |
| `npm run start`     | lance le build de production                 |
| `npm run typecheck` | vérifie uniquement TypeScript                |

## Structure

```
public/
  images/                 → portrait et images générales
  projects/<slug>/        → images de chaque projet (cover.jpg, 01.jpg…)
src/
  app/
    globals.css           → couleurs, typo, thèmes clair / sombre (tokens de la DA)
    [lang]/
      layout.tsx          → <html>, polices, Footer, SEO
      page.tsx            → page d'accueil one-page (ordre des sections)
      projets/[slug]/     → page étude de cas
      not-found.tsx       → page 404 traduite
    sitemap.ts, robots.ts → SEO
  components/             → Header, Hero, Work/WorkGrid/ProjectCard, About,
                            Experience, Services, Clients, ContactCard, Footer,
                            MediaFrame, ThemeToggle, LangSwitch, Reveal
    study/                → étude de cas : barre latérale, sommaire, blocs
  content/
    site.ts               → email, WhatsApp, réseaux sociaux, portrait, clients
    services.ts           → ordre et numéros des services
    projects/             → un fichier par projet + index.ts (ordre d'affichage)
  i18n/
    dictionaries/fr.ts    → tous les textes français
    dictionaries/en.ts    → tous les textes anglais
  proxy.ts                → redirige "/" vers /fr ou /en
```

## Modifier les textes

Tous les textes du site sont dans `src/i18n/dictionaries/fr.ts` et `en.ts`
(hero, à propos, expérience, services, contact…). Les deux fichiers ont la même forme :
si une clé manque dans l'un, `npm run build` le signale.

Les coordonnées, liens LinkedIn / Instagram, la photo et la liste des clients sont dans
`src/content/site.ts`.

## Ajouter ou remplir un projet

1. **Images et vidéos** : créer `public/projects/mon-projet/` et y déposer `cover.jpg`
   (2000 px de large environ ; la carte est recadrée en paysage ou en carré selon sa place)
   et les visuels de l'étude de cas (`.jpg`, `.png`, `.webp`, ou `.mp4` pour le motion).
2. **Données** : dupliquer un fichier de `src/content/projects/`
   (ex. `projet-site-web.ts` → `mon-projet.ts`) et remplir :
   - `slug: "mon-projet"` (l'adresse sera `/fr/projets/mon-projet`)
   - `status: "published"`
   - `service` : `"web" | "brand" | "documents" | "dataviz" | "motion"`
   - `title`, `subtitle` (accroche), `category`, `description` en `fr` et `en`
   - `cover: { src: "/projects/mon-projet/cover.jpg", alt: { fr: "…", en: "…" } }`
   - `sections` : l'étude de cas (voir ci-dessous)
3. **Affichage** : dans `src/content/projects/index.ts`, importer le fichier et le placer dans
   la liste `projects`. Les 6 premiers apparaissent sur l'accueil
   (les 3 premiers dans la colonne de gauche, les 3 suivants à droite).

### Composer une étude de cas

Chaque section apparaît dans le sommaire de la barre latérale (`nav`) et contient des
blocs empilés dans l'ordre :

| Bloc     | Rendu                                                                  |
| -------- | ---------------------------------------------------------------------- |
| `text`   | titre à gauche + paragraphes à droite (ou petit `label` mono à gauche) |
| `media`  | 1 visuel pleine largeur, ou 2–3 visuels côte à côte                    |
| `grid`   | grille de visuels sur un panneau (`columns` : 2, 3, 4 ou 6)            |
| `colors` | palette de couleurs (nom + code hexadécimal)                           |
| `figures`| chiffres clés (grand nombre + légende)                                 |

Un visuel : `{ src: "/projects/mon-projet/01.jpg", alt: { fr: "…", en: "…" }, ratio: "16 / 9" }`.
Options : `kind: "video"` (lecture en boucle sans son), `poster`, `fit: "contain"` +
`background: "#F3F2EC"` pour montrer une page de document entière sur un fond.
Un `src` vide (`""`) affiche un emplacement « Visuel à venir ».

Pour remplacer un emplacement « Projet à venir », il suffit de remplir son fichier existant
(et éventuellement de renommer son `slug`). Chaque fichier contient déjà une trame adaptée
à son service (site web, identité, document FR/EN, infographie, motion).

### Brouillons : visibles en local, masqués en ligne

- Les projets `status: "upcoming"` et les témoignages `published: false` s'affichent avec
  `npm run dev`, mais **pas sur le site en ligne**. La section Travaux n'apparaît en ligne
  que lorsqu'au moins un projet est `"published"`.
- Pour prévisualiser le site complet en production : `NEXT_PUBLIC_SHOW_DRAFTS=true npm run build`.

### Témoignages

Dans `src/content/testimonials.ts` : citation FR/EN, nom, poste. Passez `published: true`
une fois la citation validée par la personne.

### Liens et chiffres clés d'une étude de cas

- `links` : boutons sous le titre (`kind: "external"` pour un site, `"download"` pour un PDF
  déposé dans `public/projects/mon-projet/`).
- Bloc `figures` : `{ type: "figures", items: [{ value: "48", label: { fr: "pages", en: "pages" } }] }`.

## Déploiement (GitHub + Vercel)

1. Créer un dépôt vide sur GitHub, puis :
   ```bash
   git remote add origin https://github.com/<votre-compte>/portfolio-manu.git
   git push -u origin main
   ```
2. Sur [vercel.com](https://vercel.com) : **Add New → Project**, importer le dépôt.
   Next.js est détecté automatiquement, aucun réglage n'est nécessaire.
3. Optionnel : ajouter la variable d'environnement `NEXT_PUBLIC_SITE_URL`
   (ex. `https://emmanuelkiki.com`) quand vous aurez un nom de domaine.

Chaque `git push` redéploie le site automatiquement.
