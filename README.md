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
    globals.css           → couleurs, typo, mode sombre (tokens de la DA)
    [lang]/
      layout.tsx          → <html>, polices, Header + Footer, SEO
      page.tsx            → page d'accueil one-page (ordre des sections)
      projets/[slug]/     → page étude de cas
      not-found.tsx       → page 404 traduite
    sitemap.ts, robots.ts → SEO
  components/             → Header, Hero, Section, ProjectCard, ProjectGrid,
                            ProjectCover, About, Experience, ServiceList,
                            Clients, Contact, Footer, LangSwitch, Reveal
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

1. **Images** : créer `public/projects/mon-projet/` et y déposer `cover.jpg`
   (format 4:3 conseillé, 2000 px de large environ) et les images de la galerie.
2. **Données** : dupliquer un fichier de `src/content/projects/`
   (ex. `projet-site-web.ts` → `mon-projet.ts`) et remplir :
   - `slug: "mon-projet"` (l'adresse sera `/fr/projets/mon-projet`)
   - `status: "published"`
   - `service` : `"web" | "brand" | "documents" | "dataviz" | "motion"`
   - `title`, `category`, `intro`, `sections` en `fr` et `en`
   - `cover: { src: "/projects/mon-projet/cover.jpg", alt: { fr: "…", en: "…" } }`
   - `gallery` : une entrée par image (ajoutez `width` et `height` pour garder les proportions)
3. **Affichage** : dans `src/content/projects/index.ts`, importer le fichier et le placer dans
   la liste `projects`. Les 6 premiers apparaissent sur l'accueil.

Pour remplacer un emplacement « Projet à venir », il suffit de remplir son fichier existant
(et éventuellement de renommer son `slug`).

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
