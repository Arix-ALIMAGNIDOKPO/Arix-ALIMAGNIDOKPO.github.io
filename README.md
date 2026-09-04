# arix-alimagnidokpo.github.io

Portfolio and writing of **Arix ALIMAGNIDOKPO** — AI & NLP engineer, founder of [AIDA](https://aida.bj).

Bilingual (English / French), fully static, no backend, no trackers.
Live at <https://arix-alimagnidokpo.github.io>.

---

## Publier un article / Publishing an article

**One Markdown file = one published article.** Nothing else to touch.

1. Create a file in `src/content/articles/`. The file name becomes the URL:
   `mon-article.md` → `/articles/mon-article/` (or `/fr/articles/mon-article/`).
2. Fill in the front matter.
3. Write in Markdown.
4. Commit and push to `main`. GitHub Actions builds and deploys it.

```markdown
---
title: 'Titre de l’article'
description: 'Une phrase qui résume l’article. Sert au SEO, à la carte et au flux RSS.'
date: 2026-08-29
lang: fr # 'fr' → listé sur /fr/articles/ ; 'en' → listé sur /articles/
tags: [NLP, Fon, Recherche]
draft: false # true = visible en local, jamais publié
# Champs optionnels :
# updated: 2026-09-15
# cover: ../../assets/photos/mon-image.jpg   (chemin relatif au fichier .md)
# coverAlt: 'Description de l’image pour les lecteurs d’écran'
# translationKey: mon-sujet   (même valeur sur la version FR et EN → lien entre les deux)
---

## Un sous-titre

Le texte de l’article. **Gras**, _italique_, [liens](https://example.com),
listes, citations, tableaux et blocs de code fonctionnent.
```

The build **fails loudly** if the front matter is wrong (missing title, description
too short, a `cover` without a `coverAlt`, an unknown field). That is deliberate:
a broken post never reaches production.

Preview locally while writing — drafts are visible in dev, hidden in production:

```bash
npm run dev      # http://localhost:4321
```

---

## Mettre à jour le contenu du site

Everything outside the articles lives in typed data files. Edit the data, not the markup.

| What                                              | File                        |
| ------------------------------------------------- | --------------------------- |
| Name, email, links, CV path, meta descriptions     | `src/data/site.ts`          |
| Experience, ventures, awards, research, projects…  | `src/data/profile.ts`       |
| Every UI label, in both languages                  | `src/i18n/ui.ts`            |
| Colours, type scale, spacing                       | `src/styles/global.css`     |
| Social preview image and app icon                  | `npm run images`            |
| CV PDF                                             | `public/cv-arix-alimagnidokpo.pdf` |

Every content field is a `{ en, fr }` pair — TypeScript reports a missing
translation as a build error, so the two languages cannot drift apart.

The order of the experience table is the order of the `ROLES` array.
The `precision: 'year'` flag renders "2022" instead of "Jan 2022" for a date
whose month is not actually known.

---

## Commandes

| Command          | Effect                                                     |
| ---------------- | ---------------------------------------------------------- |
| `npm install`    | Install dependencies                                        |
| `npm run dev`    | Dev server at `localhost:4321`, drafts visible              |
| `npm run build`  | Type-check (`astro check`) then build to `dist/`            |
| `npm run preview`| Serve the built site locally                                |
| `npm run check`  | Type-check only                                             |
| `npm run audit`  | Fail on any high-severity dependency advisory               |
| `npm run check:links` | Verify every internal link in `dist/` resolves         |
| `npm run images` | Regenerate `public/og.png` and `public/apple-touch-icon.png`|
| `npm run deploy:manual` | Publish `dist/` straight to `gh-pages`, bypassing Actions |

Requires Node 20.3+ (CI uses Node 22).

---

## Architecture

```
src/
├── data/          Typed, bilingual content (site.ts, profile.ts, types.ts)
├── i18n/          UI strings (ui.ts) and locale helpers (utils.ts)
├── lib/           Pure helpers: dates, articles, RSS, JSON-LD
├── content/       Markdown articles + content.config.ts (the schema)
├── components/    One .astro component per section, styles scoped to it
├── layouts/       BaseLayout (head, SEO, shell) and ArticleLayout
├── pages/         Routes. `/` is English, `/fr/` is French
└── styles/        global.css — the design system
public/            Files served verbatim: CV, favicon, robots, security.txt
```

Astro renders everything to static HTML at build time. The only JavaScript
shipped is a few lines driving the article carousel; with JS disabled the
carousel is still a scrollable list and every page is fully readable.

---

## Sécurité

The site is static, has no forms, no cookies, no analytics and no third-party
requests — which removes most of the OWASP Top 10 by construction. What remains
is handled explicitly:

- **Content-Security-Policy** emitted on every page, starting from
  `default-src 'none'`. Astro hashes its own scripts and styles; nothing is
  loaded from another origin. No `unsafe-inline`, no `unsafe-eval`.
- **Self-hosted fonts** (`@fontsource-variable`) so no request ever leaves the
  origin — no Google Fonts, no icon CDN.
- **Prism, not Shiki**, for code highlighting: class-based, so `style-src`
  never needs `unsafe-inline`.
- `rel="noopener noreferrer"` on every `target="_blank"` link, and
  `referrer: strict-origin-when-cross-origin` site-wide.
- **Content is validated** by a strict Zod schema before it is rendered; unknown
  front-matter fields are rejected.
- **CI runs `npm audit --audit-level=high`** on every pull request and on every
  deploy — a high-severity advisory fails the build.
- **Least-privilege GitHub Actions**: the build job is `contents: read`; only
  the deploy job holds `pages: write` / `id-token: write`, and checkout runs
  with `persist-credentials: false`.
- **Dependabot** watches npm packages and Actions.
- `public/.well-known/security.txt` gives a disclosure contact.

`frame-ancestors` and `X-Content-Type-Options` cannot be set from a `<meta>` tag;
GitHub Pages does not allow custom response headers. Moving the site behind a
proxy that can (Cloudflare, Netlify) would let those be enforced too.

---

## Déploiement

### Normal route — GitHub Actions

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
Pull requests run the same checks without deploying (`.github/workflows/ci.yml`).

Requires **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Fallback — publishing without Actions

GitHub Actions refuses to run while the account is locked for billing. The site
is currently published this way instead: the build is produced locally and
pushed to the `gh-pages` branch, which Pages serves directly.

```bash
npm run build
npm run deploy:manual
```

`public/.nojekyll` is what stops GitHub Pages from deleting the `_astro/`
folder — without it the site loads with no CSS at all.

If Pages does not pick the push up on its own, force a build:

```bash
gh api -X POST repos/Arix-ALIMAGNIDOKPO/Arix-ALIMAGNIDOKPO.github.io/pages/builds
```

### Switching back to Actions once billing is fixed

```bash
gh api -X PUT repos/Arix-ALIMAGNIDOKPO/Arix-ALIMAGNIDOKPO.github.io/pages -f build_type=workflow
gh workflow run "Deploy to GitHub Pages" --ref main
```

The workflow is already committed and needs no changes.

---

## Licence

Source code: MIT. Written content, images and CV: © Arix ALIMAGNIDOKPO, all rights reserved.
