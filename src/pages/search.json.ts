import { getAllPosts, postLang, postUrl } from '../utils';

/** Markdown -> roughly plain text, good enough for searching and snippets. */
const plain = (md = '') =>
  md
    .replace(/```[^\n]*\n?/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, '')
    .replace(/[*_`|]/g, '')
    .replace(/^[-: ]+$/gm, '')
    .replace(/\s+/g, ' ')
    .trim();

export async function GET() {
  const posts = await getAllPosts();
  const docs = posts.map((post) => ({
    lang: postLang(post),
    url: postUrl(post),
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    text: plain(post.body),
  }));
  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json' },
  });
}
