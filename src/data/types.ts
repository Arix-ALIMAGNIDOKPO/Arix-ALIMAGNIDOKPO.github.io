/** The two locales the site ships. Keep in sync with `i18n.locales` in astro.config.mjs. */
export type Locale = 'en' | 'fr';

/** A string that exists in both locales. */
export type I18nText = Readonly<Record<Locale, string>>;

/** A list of strings that exists in both locales. */
export type I18nList = Readonly<Record<Locale, readonly string[]>>;

export interface Link {
  readonly label: string;
  readonly href: string;
  /** Anything not on this origin is rendered with rel="noopener noreferrer". */
  readonly external?: boolean;
}

export interface Role {
  readonly org: string;
  readonly orgUrl?: string;
  readonly title: I18nText;
  readonly kind: I18nText;
  /** `YYYY-MM`. Period labels and durations are derived from these at build time. */
  readonly start: string;
  /** `YYYY-MM`, or null when the role is ongoing. */
  readonly end: string | null;
  /**
   * How precisely the start date is actually known. `'year'` renders "2022"
   * instead of "Jan 2022", so the page never asserts a month we cannot source.
   */
  readonly precision?: 'month' | 'year';
  readonly summary: I18nText;
  readonly highlights: I18nList;
  readonly stack?: readonly string[];
}

export interface Award {
  readonly rank: I18nText;
  readonly title: I18nText;
  readonly event: string;
  readonly date: I18nText;
  readonly year: string;
  readonly summary: I18nText;
  readonly links?: readonly Link[];
}

export interface Study {
  readonly degree: I18nText;
  readonly school: string;
  readonly schoolUrl?: string;
  readonly place: string;
  readonly period: I18nText;
  readonly grade?: I18nText;
  readonly notes: I18nList;
  /** Highlights the current, ongoing course. */
  readonly current?: boolean;
}

export interface ResearchItem {
  readonly title: I18nText;
  readonly context: I18nText;
  readonly period: I18nText;
  readonly summary: I18nText;
  readonly highlights: I18nList;
  readonly links?: readonly Link[];
}

export interface Project {
  readonly name: I18nText;
  readonly year: string;
  /** Short, concrete result. Sits under the title in the featured card. */
  readonly outcome: I18nText;
  readonly summary: I18nText;
  readonly tags: readonly string[];
  /** Primary language, shown as a coloured dot the way code hosts do. */
  readonly language: string;
  readonly repo?: string;
  /** One project leads the section at full width. */
  readonly featured?: boolean;
}

/** Slugs of the logo files in `src/assets/logos/`. */
export type LogoName = 'aida' | 'ayoka' | 'sovrean';

export interface Product {
  readonly name: string;
  readonly logo: LogoName;
  readonly domain: string;
  readonly url: string;
  readonly tagline: I18nText;
  readonly summary: I18nText;
  readonly capabilities: I18nList;
  readonly facts: readonly { readonly label: I18nText; readonly value: I18nText }[];
  /** Brand colour used for the product's accent rule and glow. */
  readonly accent: string;
}

/** The one company. Its products hang off it rather than sitting beside it. */
export interface Company {
  readonly name: string;
  readonly fullName: string;
  readonly logo: LogoName;
  readonly domain: string;
  readonly url: string;
  readonly role: I18nText;
  readonly founded: string;
  readonly city: I18nText;
  readonly summary: I18nText;
  readonly products: readonly Product[];
}

export interface CommunityItem {
  readonly role: I18nText;
  readonly org: string;
  readonly orgUrl?: string;
  readonly period: I18nText;
  readonly detail: I18nText;
}
