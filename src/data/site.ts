import type { I18nText, Locale } from './types';

export const SITE = {
  origin: 'https://arix-alimagnidokpo.github.io',
  name: 'Arix ALIMAGNIDOKPO',
  firstName: 'Arix',
  lastName: 'ALIMAGNIDOKPO',
  legalName: 'Ange Michel Arix ALIMAGNIDOKPO',
  email: 'arixalim@gmail.com',
  location: { en: 'Cotonou, Benin', fr: 'Cotonou, Bénin' } satisfies I18nText,
  locationCountry: 'BJ',
  cv: '/cv-arix-alimagnidokpo.pdf',
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
  en: 'Arix ALIMAGNIDOKPO — AI & NLP engineer in Cotonou, Benin. Founder and CEO of AIDA. AI Developer and Project Lead at the Ministry of Foreign Affairs of Benin, working on low-resource language NLP and responsible AI.',
  fr: 'Arix ALIMAGNIDOKPO — Ingénieur IA & NLP à Cotonou, Bénin. Fondateur et CEO d’AIDA. Développeur IA et chef de projet au Ministère des Affaires Étrangères du Bénin, spécialisé en NLP pour langues peu dotées et IA responsable.',
} satisfies I18nText;

/**
 * External profiles. `github` and `linkedin` are verified against the live
 * profiles; everything else is a first-party address.
 */
export const SOCIAL = {
  github: 'https://github.com/Arix-ALIMAGNIDOKPO',
  linkedin: 'https://www.linkedin.com/in/arixalimagnidokpo',
  email: `mailto:${SITE.email}`,
  aida: 'https://aida.bj',
} as const;

export type NavKey = 'about' | 'work' | 'ventures' | 'articles' | 'contact';

export const NAV: readonly { key: NavKey; href: string }[] = [
  { key: 'about', href: '#about' },
  { key: 'work', href: '#work' },
  { key: 'ventures', href: '#ventures' },
  { key: 'articles', href: '#articles' },
  { key: 'contact', href: '#contact' },
];
