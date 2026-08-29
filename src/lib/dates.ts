import type { Locale } from '@/data/types';

const MONTH_FORMAT: Readonly<Record<Locale, Intl.DateTimeFormatOptions>> = {
  en: { month: 'short', year: 'numeric' },
  fr: { month: 'short', year: 'numeric' },
};

const BCP47: Readonly<Record<Locale, string>> = { en: 'en-GB', fr: 'fr-FR' };

const PRESENT: Readonly<Record<Locale, string>> = { en: 'Present', fr: 'Aujourd’hui' };

/** Parses a `YYYY-MM` string into a UTC Date pinned to the first of the month. */
export function parseMonth(value: string): Date {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) throw new Error(`Expected a YYYY-MM date, received "${value}"`);
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
}

export function formatMonth(value: string, locale: Locale): string {
  return new Intl.DateTimeFormat(BCP47[locale], MONTH_FORMAT[locale])
    .format(parseMonth(value))
    .replace('.', '');
}

/** "May 2025 — Present" / "mai 2025 — Aujourd’hui" */
export function formatPeriod(
  start: string,
  end: string | null,
  locale: Locale,
  precision: 'month' | 'year' = 'month',
): string {
  const from = precision === 'year' ? start.slice(0, 4) : formatMonth(start, locale);
  const to = end === null ? PRESENT[locale] : formatMonth(end, locale);
  return `${from} — ${to}`;
}

/** Whole months between two `YYYY-MM` marks, inclusive of the starting month. */
export function monthsBetween(start: string, end: string | null, now = new Date()): number {
  const from = parseMonth(start);
  const to = end === null ? new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)) : parseMonth(end);
  const months = (to.getUTCFullYear() - from.getUTCFullYear()) * 12 + (to.getUTCMonth() - from.getUTCMonth());
  return Math.max(months + 1, 1);
}

/** "1 yr 4 mo" / "1 an 4 mois" — derived so it never goes stale. */
export function formatDuration(start: string, end: string | null, locale: Locale, now = new Date()): string {
  const total = monthsBetween(start, end, now);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];

  if (locale === 'fr') {
    if (years > 0) parts.push(`${years} ${years > 1 ? 'ans' : 'an'}`);
    if (months > 0) parts.push(`${months} mois`);
  } else {
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mo`);
  }

  return parts.join(' ');
}

/** Machine-readable value for <time datetime="…">. */
export function isoRange(start: string, end: string | null): string {
  return end === null ? start : `${start}/${end}`;
}

export function formatArticleDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(BCP47[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
