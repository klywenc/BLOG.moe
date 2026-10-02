# hard.fault · Megu's realm

Personal blog about software, hardware and programming. Built with Astro.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Writing

Add a `.md` / `.mdx` file to `src/content/posts/en/` (English, served at `/posts/<slug>/`) and/or `src/content/posts/pl/` (Polish, `/pl/posts/<slug>/`). Same filename = translations of each other; the language switch links them.

```yaml
---
title: "post title"
description: "one-line summary"
date: 2026-10-02
tags: ["rust", "linux"]
draft: false
---
```

Drafts show up in `npm run dev` but not in production builds.

## Customising

- Site name / author: `src/consts.ts`; UI strings in both languages: `src/i18n.ts`
- Domain (for RSS + sitemap): `site` in `astro.config.mjs`
- Colors (light + dark): tokens at the top of `src/styles/global.css`
- Code themes: `shikiConfig.themes` in `astro.config.mjs`
