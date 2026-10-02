---
title: "hello, world (again)"
description: "Every blog starts with this post. Here's mine, plus how this site is wired together."
date: 2026-10-01
tags: ["meta", "astro"]
---

Yes, another dev blog. I wanted a place to dump notes about the things I tinker with —
software, hardware, and the awkward bits where they meet.

## The stack

The site is built with [Astro](https://astro.build), statically generated, no client-side
framework. The only JavaScript that ships is the theme toggle.

| thing        | choice                         |
| ------------ | ------------------------------ |
| generator    | Astro                          |
| content      | Markdown / MDX                 |
| highlighting | Shiki (dual light/dark themes) |
| JS shipped   | ~300 bytes                     |

## Writing a post

Drop a file in `src/content/posts/` with some frontmatter:

```yaml
---
title: "my post"
description: "one line summary"
date: 2026-10-01
tags: ["rust", "linux"]
draft: true   # hidden in production builds
---
```

Then run `npm run dev` and hit <kbd>Ctrl</kbd> + <kbd>S</kbd>. That's it.

> Note to self: actually write the posts instead of tweaking the CSS.

---

Next up: something with more registers in it.
