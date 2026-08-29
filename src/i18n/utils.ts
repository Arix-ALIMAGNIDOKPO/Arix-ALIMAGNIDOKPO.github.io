import { SITE } from '@/data/site';
import type { I18nText, Locale } from '@/data/types';
import { UI, type UIKey } from './ui';

const LOCALES = SITE.locales;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Reads the locale off the URL. `/fr/...` is French, everything else is English. */
export function getLocale(url: URL): Locale {
  const first = url.pathname.split('/').filter(Boolean)[0];
  return first !== undefined && isLocale(first) ? first : SITE.defaultLocale;
}

/** Returns a translator bound to one locale. */
export function useTranslations(locale: Locale): (key: UIKey) => string {
  return (key) => UI[locale][key];
}

/** Picks the right side of an `{ en, fr }` pair. */
export function pick<T>(value: Readonly<Record<Locale, T>>, locale: Locale): T {
  return value[locale];
}

/**
 * Builds an in-site path for a locale.
 * `path('/articles/', 'fr')` -> `/fr/articles/`
 */
export function path(pathname: string, locale: Locale): string {
  const clean = `/${pathname.replace(/^\/+|\/+$/g, '')}`;
  const withSlash = clean === '/' ? '/' : `${clean}/`;
  return locale === SITE.defaultLocale ? withSlash : `/${locale}${withSlash}`;
}

/** Absolute URL for canonical tags, Open Graph and the sitemap. */
export function absolute(pathname: string): string {
  return new URL(pathname, SITE.origin).href;
}

/** The same page in the other locale, for the language switcher and hreflang. */
export function alternateUrl(url: URL, target: Locale): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] !== undefined && isLocale(segments[0])) segments.shift();
  return path(segments.join('/'), target);
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}

export const HTML_LANG: Readonly<Record<Locale, string>> = { en: 'en', fr: 'fr' };
export const OG_LOCALE: Readonly<Record<Locale, string>> = { en: 'en_US', fr: 'fr_FR' };

export type { I18nText, Locale, UIKey };
