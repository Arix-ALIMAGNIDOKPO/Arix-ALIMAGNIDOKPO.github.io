import type { Locale } from '@/data/types';

/**
 * Every user-facing string that is not content lives here, so a missing
 * translation is a type error rather than a surprise on the page.
 */
export const UI = {
  en: {
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.education': 'Education',
    'nav.ventures': 'AIDA',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.home': 'Home',

    'lang.switch': 'Language',
    'lang.en': 'En',
    'lang.fr': 'Fr',
    'lang.toFrench': 'Lire en français',
    'lang.toEnglish': 'Read in English',

    'theme.toggle': 'Switch between light and dark',
    'theme.light': 'Light',
    'theme.dark': 'Dark',

    'hero.line1': 'AI & NLP',
    'hero.line2': 'Engineer',
    'hero.cta': 'My company',
    'hero.ctaAria': 'Jump to AIDA',
    'hero.cv': 'Download CV',

    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Email',
    'social.aida': 'aida.bj',

    'articles.label': 'Articles',
    'articles.readMore': 'Read more',
    'articles.readingTime': 'min read',
    'articles.all': 'All articles',
    'articles.empty': 'The first article is being written. Come back soon.',
    'articles.prev': 'Previous article',
    'articles.next': 'Next article',
    'articles.back': 'Back to articles',
    'articles.published': 'Published',
    'articles.updated': 'Updated',
    'articles.tags': 'Tags',
    'articles.rss': 'RSS feed',
    'articles.index.title': 'Articles',
    'articles.index.intro':
      'Notes on natural language processing, African languages, and building AI that has to work outside the lab.',
    'articles.toc': 'On this page',
    'articles.otherLanguage': 'This article is also available in French.',

    'about.label': 'About',
    'about.skillsNote': 'Some of the tools, topics and stacks I work with',
    'about.skillsHeading': 'What I work with',
    'about.portraitAlt': 'Portrait of Arix ALIMAGNIDOKPO',

    'work.label': 'Work',
    'work.total': 'Professional experience',
    'work.present': 'Present',

    'ventures.label': 'AIDA',
    'ventures.company': 'The company',
    'ventures.products': 'The products',
    'ventures.productCount': 'Two products',
    'ventures.visit': 'Visit',
    'ventures.founded': 'Founded',
    'ventures.based': 'Based in',
    'ventures.logoAlt': 'logo',

    'awards.label': 'Awards',

    'research.label': 'Research',
    'research.areas': 'Research areas',

    'projects.label': 'Open source',
    'projects.featured': 'Pick of the bunch',
    'projects.repo': 'View the code',
    'projects.noRepo': 'Private repository',
    'projects.more': 'Everything else on GitHub',

    'education.label': 'Education',
    'education.current': 'Current',

    'community.label': 'Community',
    'community.ongoing': 'Ongoing',
    'community.past': 'Past',

    'contact.label': 'Contact',
    'contact.emailMe': 'Write to me',
    'contact.basedIn': 'Based in',

    'footer.builtWith': 'Built with Astro. No trackers, no cookies, no third-party scripts.',
    'footer.rights': 'All rights reserved.',

    '404.title': 'Page not found',
    '404.body': 'That page does not exist, or it no longer does.',
    '404.home': 'Back to the homepage',
  },

  fr: {
    'nav.about': 'À propos',
    'nav.work': 'Parcours',
    'nav.education': 'Formation',
    'nav.ventures': 'AIDA',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Aller au contenu',
    'nav.menu': 'Menu',
    'nav.home': 'Accueil',

    'lang.switch': 'Langue',
    'lang.en': 'En',
    'lang.fr': 'Fr',
    'lang.toFrench': 'Lire en français',
    'lang.toEnglish': 'Read in English',

    'theme.toggle': 'Basculer entre le mode clair et le mode sombre',
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',

    'hero.line1': 'Ingénieur',
    'hero.line2': 'IA & NLP',
    'hero.cta': 'Mon entreprise',
    'hero.ctaAria': 'Aller à AIDA',
    'hero.cv': 'Télécharger le CV',

    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Email',
    'social.aida': 'aida.bj',

    'articles.label': 'Articles',
    'articles.readMore': 'Lire',
    'articles.readingTime': 'min de lecture',
    'articles.all': 'Tous les articles',
    'articles.empty': 'Le premier article est en cours d’écriture. Revenez bientôt.',
    'articles.prev': 'Article précédent',
    'articles.next': 'Article suivant',
    'articles.back': 'Retour aux articles',
    'articles.published': 'Publié le',
    'articles.updated': 'Mis à jour le',
    'articles.tags': 'Mots-clés',
    'articles.rss': 'Flux RSS',
    'articles.index.title': 'Articles',
    'articles.index.intro':
      'Des notes sur le traitement du langage naturel, les langues africaines, et la construction d’une IA qui doit fonctionner hors du laboratoire.',
    'articles.toc': 'Sur cette page',
    'articles.otherLanguage': 'Cet article est aussi disponible en anglais.',

    'about.label': 'À propos',
    'about.skillsNote': 'Quelques outils, sujets et stacks avec lesquels je travaille',
    'about.skillsHeading': 'Ce avec quoi je travaille',
    'about.portraitAlt': 'Portrait d’Arix ALIMAGNIDOKPO',

    'work.label': 'Parcours',
    'work.total': 'Expérience professionnelle',
    'work.present': 'Aujourd’hui',

    'ventures.label': 'AIDA',
    'ventures.company': 'L’entreprise',
    'ventures.products': 'Les produits',
    'ventures.productCount': 'Deux produits',
    'ventures.visit': 'Visiter',
    'ventures.founded': 'Fondée en',
    'ventures.based': 'Basée à',
    'ventures.logoAlt': 'logo',

    'awards.label': 'Distinctions',

    'research.label': 'Recherche',
    'research.areas': 'Domaines de recherche',

    'projects.label': 'Open source',
    'projects.featured': 'Le projet à retenir',
    'projects.repo': 'Voir le code',
    'projects.noRepo': 'Dépôt privé',
    'projects.more': 'Tout le reste sur GitHub',

    'education.label': 'Formation',
    'education.current': 'En cours',

    'community.label': 'Communauté',
    'community.ongoing': 'En cours',
    'community.past': 'Passé',

    'contact.label': 'Contact',
    'contact.emailMe': 'M’écrire',
    'contact.basedIn': 'Basé à',

    'footer.builtWith': 'Construit avec Astro. Aucun traceur, aucun cookie, aucun script tiers.',
    'footer.rights': 'Tous droits réservés.',

    '404.title': 'Page introuvable',
    '404.body': 'Cette page n’existe pas, ou n’existe plus.',
    '404.home': 'Retour à l’accueil',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof UI)['en'];
