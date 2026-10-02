// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: change to your real domain before deploying
  site: 'https://blog.mequ.moe',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'rose-pine-dawn', dark: 'catppuccin-mocha' },
      wrap: false,
    },
  },
});
