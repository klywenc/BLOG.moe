import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from './consts';
import { useTranslations, type Lang } from './i18n';
import { getPosts, postUrl } from './utils';

export async function buildRss(context: APIContext, lang: Lang) {
  const t = useTranslations(lang);
  const posts = await getPosts(lang);
  return rss({
    title: SITE_TITLE,
    description: t('site.description'),
    site: context.site!,
    customData: `<language>${lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: postUrl(post),
    })),
  });
}
