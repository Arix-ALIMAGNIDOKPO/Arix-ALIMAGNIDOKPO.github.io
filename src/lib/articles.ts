import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/data/types';

export type Article = CollectionEntry<'articles'>;

const WORDS_PER_MINUTE = 220;

/** Drafts never reach a production build; they stay visible while running `astro dev`. */
const isPublished = (entry: Article): boolean => import.meta.env.DEV || !entry.data.draft;

/** Published articles for one locale, newest first. */
export async function getArticles(locale: Locale): Promise<Article[]> {
  const entries = await getCollection('articles', (entry) => isPublished(entry) && entry.data.lang === locale);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Every published article, both locales — used to generate the article routes. */
export async function getAllArticles(): Promise<Article[]> {
  const entries = await getCollection('articles', isPublished);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The same article in the other language, when the author linked them. */
export async function getTranslation(article: Article): Promise<Article | undefined> {
  const key = article.data.translationKey;
  if (key === undefined) return undefined;

  const entries = await getCollection(
    'articles',
    (entry) => isPublished(entry) && entry.data.translationKey === key && entry.id !== article.id,
  );
  return entries[0];
}

/** Rough reading time, counted on the raw Markdown source. */
export function readingTime(body: string | undefined): number {
  if (body === undefined) return 1;
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#*_>`~\-\[\]()!]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Neighbours for the previous/next controls on an article page. */
export function neighbours(
  articles: readonly Article[],
  current: Article,
): { previous: Article | undefined; next: Article | undefined } {
  const index = articles.findIndex((entry) => entry.id === current.id);
  if (index === -1) return { previous: undefined, next: undefined };
  return { previous: articles[index + 1], next: articles[index - 1] };
}
