import { EDUCATION, VENTURES } from '@/data/profile';
import { META_DESCRIPTION, SITE, SOCIAL, TITLE } from '@/data/site';
import type { Locale } from '@/data/types';
import { absolute } from '@/i18n/utils';

/** schema.org Person + Organization graph for the homepage. */
export function personSchema(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE.origin}/#person`,
        name: SITE.name,
        alternateName: SITE.legalName,
        url: absolute('/'),
        email: `mailto:${SITE.email}`,
        jobTitle: TITLE[locale],
        description: META_DESCRIPTION[locale],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cotonou',
          addressCountry: SITE.locationCountry,
        },
        alumniOf: EDUCATION.map((study) => ({
          '@type': 'EducationalOrganization',
          name: study.school,
          ...(study.schoolUrl === undefined ? {} : { url: study.schoolUrl }),
        })),
        worksFor: { '@id': 'https://aida.bj/#organization' },
        knowsAbout: [
          'Natural Language Processing',
          'Speech recognition',
          'Low-resource languages',
          'Responsible AI',
          'Data analysis',
        ],
        knowsLanguage: ['fr', 'en'],
        sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.aida],
      },
      {
        '@type': 'Organization',
        '@id': 'https://aida.bj/#organization',
        name: 'AIDA',
        alternateName: 'Artificial Intelligence for the Development of Africa',
        url: 'https://aida.bj',
        foundingDate: '2022',
        founder: { '@id': `${SITE.origin}/#person` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cotonou',
          addressCountry: 'BJ',
        },
        subOrganization: VENTURES.slice(1).map((venture) => ({
          '@type': 'SoftwareApplication',
          name: venture.name,
          url: venture.url,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.origin}/#website`,
        url: SITE.origin,
        name: SITE.name,
        inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
        publisher: { '@id': `${SITE.origin}/#person` },
      },
    ],
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date | undefined;
  locale: Locale;
  tags: readonly string[];
}

export function articleSchema(input: ArticleSchemaInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified ?? input.datePublished).toISOString(),
    inLanguage: input.locale === 'fr' ? 'fr-FR' : 'en-US',
    keywords: input.tags.join(', '),
    author: { '@id': `${SITE.origin}/#person` },
    publisher: { '@id': `${SITE.origin}/#person` },
  };
}
