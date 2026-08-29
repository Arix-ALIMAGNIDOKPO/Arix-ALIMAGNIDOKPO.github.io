import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

/**
 * Publishing an article = dropping one Markdown file in `src/content/articles/`.
 * The schema below is the contract: a build fails loudly rather than shipping a
 * half-filled post, and every field a template reads is guaranteed to exist.
 */
const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      /** Shown as the <h1> and the <title>. */
      title: z.string().min(3).max(140),
      /** Used for the card, the meta description and the RSS summary. */
      description: z.string().min(20).max(320),
      /** Publication date, `YYYY-MM-DD`. */
      date: z.coerce.date(),
      /** Optional revision date. */
      updated: z.coerce.date().optional(),
      /** Which language edition of the site lists this article. */
      lang: z.enum(['en', 'fr']).default('en'),
      tags: z.array(z.string().min(1).max(32)).max(8).default([]),
      /** Drafts are kept out of the build entirely. */
      draft: z.boolean().default(false),
      /** Optional cover image, resolved and optimised at build time. */
      cover: image().optional(),
      coverAlt: z.string().max(220).optional(),
      /**
       * Shared identifier between the English and French versions of one
       * article, so each page can link to its translation.
       */
      translationKey: z.string().optional(),
    })
      .strict()
      .refine((data) => data.cover === undefined || data.coverAlt !== undefined, {
        message: 'An article with a `cover` must also define `coverAlt` for screen readers.',
        path: ['coverAlt'],
      }),
});

export const collections = { articles };
