import rss from '@astrojs/rss';
import { META_DESCRIPTION, SITE, TITLE } from '@/data/site';
import type { Locale } from '@/data/types';
import { getArticles } from '@/lib/articles';
import { absolute, path } from '@/i18n/utils';

/** One RSS feed per locale, listing only that locale's published articles. */
export async function buildFeed(locale: Locale, site: URL | undefined): Promise<Response> {
  const articles = await getArticles(locale);
  const base = path('/articles/', locale);

  return rss({
    title: `${SITE.name} — ${TITLE[locale]}`,
    description: META_DESCRIPTION[locale],
    site: site ?? SITE.origin,
    trailingSlash: true,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: absolute(`${base}${article.id}/`),
      categories: [...article.data.tags],
    })),
    customData: `<language>${locale === 'fr' ? 'fr-FR' : 'en-US'}</language>`,
  });
}
