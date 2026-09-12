import type { I18nText, Locale } from './types';

export const SITE = {
  origin: 'https://arix-alimagnidokpo.github.io',
  name: 'Arix ALIMAGNIDOKPO',
  firstName: 'Arix',
  lastName: 'ALIMAGNIDOKPO',
  legalName: 'Ange Michel Arix ALIMAGNIDOKPO',
  email: 'arixalim@gmail.com',
  location: { en: 'Paris, France', fr: 'Paris, France' } satisfies I18nText,
  locationCity: 'Paris',
  locationCountry: 'FR',
  /** One CV per language: a French reader should not download an English CV. */
  cv: {
    en: '/cv-arix-alimagnidokpo-en.pdf',
    fr: '/cv-arix-alimagnidokpo-fr.pdf',
  } satisfies I18nText,
  defaultLocale: 'en' as Locale,
  locales: ['en', 'fr'] as const satisfies readonly Locale[],
} as const;

export const TITLE = {
  en: 'AI & NLP Engineer, Founder of AIDA',
  fr: 'Ingénieur IA & NLP, Fondateur d’AIDA',
} satisfies I18nText;

export const TAGLINE = {
  en: 'I build language technology for the people the internet skipped.',
  fr: 'Je construis des technologies du langage pour ceux que l’internet a oubliés.',
} satisfies I18nText;

export const META_DESCRIPTION = {
  en: 'Arix ALIMAGNIDOKPO, AI and NLP engineer in Paris. Student researcher and EUR fellow at the LIPN, Université Sorbonne Paris Nord, and founder of AIDA. Working on low-resource language NLP, speech, and responsible AI.',
  fr: 'Arix ALIMAGNIDOKPO, ingénieur IA et NLP à Paris. Étudiant-chercheur et boursier EUR au LIPN, Université Sorbonne Paris Nord, et fondateur d’AIDA. Travaux sur le NLP des langues peu dotées, la parole et l’IA responsable.',
} satisfies I18nText;

/**
 * External profiles. `github` and `linkedin` are verified against the live
 * profiles; everything else is a first-party address.
 */
export const SOCIAL = {
  github: 'https://github.com/Arix-ALIMAGNIDOKPO',
  linkedin: 'https://www.linkedin.com/in/arixalimagnidokpo/',
  email: `mailto:${SITE.email}`,
  aida: 'https://aida.bj',
} as const;
