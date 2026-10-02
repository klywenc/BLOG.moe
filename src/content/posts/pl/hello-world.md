---
title: "hello, world (znowu)"
description: "Każdy blog zaczyna się od tego wpisu. Oto mój, plus jak ta strona jest zbudowana."
date: 2026-10-01
tags: ["meta", "astro"]
---

Tak, kolejny blog programistyczny. Potrzebne było miejsce na notatki o rzeczach, przy
których dłubię: oprogramowaniu, sprzęcie i tych dziwnych miejscach, gdzie jedno spotyka drugie.

## Stack

Strona jest zbudowana w [Astro](https://astro.build), generowana statycznie, bez frameworka
po stronie klienta. Jedyny JavaScript, który trafia do przeglądarki, to przełącznik motywu.

| rzecz            | wybór                              |
| ---------------- | ---------------------------------- |
| generator        | Astro                              |
| treść            | Markdown / MDX                     |
| kolorowanie kodu | Shiki (osobne motywy jasny/ciemny) |
| wysłany JS       | ~300 bajtów                        |

## Pisanie wpisu

Wrzuć plik do `src/content/posts/pl/` z frontmatterem:

```yaml
---
title: "mój wpis"
description: "podsumowanie w jednym zdaniu"
date: 2026-10-01
tags: ["rust", "linux"]
draft: true   # ukryty w buildzie produkcyjnym
---
```

Potem `npm run dev` i <kbd>Ctrl</kbd> + <kbd>S</kbd>. Tyle.

> Notatka dla siebie: pisać wpisy, zamiast w kółko poprawiać CSS.

---

Następnym razem: coś z większą liczbą rejestrów.
