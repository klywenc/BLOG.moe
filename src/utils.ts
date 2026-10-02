import { getCollection, type CollectionEntry } from 'astro:content';
import { localize, type Lang } from './i18n';

export type Post = CollectionEntry<'posts'>;

/** Posts live in src/content/posts/<lang>/<slug>.md */
export const postLang = (post: Post) => post.id.split('/')[0] as Lang;
export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');
export const postUrl = (post: Post) => localize(postLang(post), `/posts/${postSlug(post)}/`);

export async function getAllPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPosts(lang: Lang) {
  return (await getAllPosts()).filter((p) => postLang(p) === lang);
}

export async function postPaths(lang: Lang) {
  const all = await getAllPosts();
  const posts = all.filter((p) => postLang(p) === lang);
  return posts.map((post, i) => ({
    params: { slug: postSlug(post) },
    props: {
      post,
      newer: posts[i - 1],
      older: posts[i + 1],
      translations: all.filter((p) => postSlug(p) === postSlug(post)),
    },
  }));
}

export async function tagPaths(lang: Lang) {
  const posts = await getPosts(lang);
  const tags = [...new Set(posts.flatMap((p) => p.data.tags))];
  return tags.map((tag) => ({
    params: { tag },
    props: { posts: posts.filter((p) => p.data.tags.includes(tag)) },
  }));
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
