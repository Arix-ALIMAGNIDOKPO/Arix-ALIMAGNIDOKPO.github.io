import type { Locale } from '@/data/types';

/**
 * Every user-facing string that is not content lives here, so a missing
 * translation is a type error rather than a surprise on the page.
 */
export const UI = {
  en: {
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.ventures': 'Ventures',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.openMenu': 'Open the menu',
    'nav.closeMenu': 'Close the menu',
    'nav.home': 'Home',

    'lang.switch': 'Language',
    'lang.en': 'En',
    'lang.fr': 'Fr',
    'lang.toFrench': 'Lire en français',
    'lang.toEnglish': 'Read in English',

    'hero.line1': 'AI & NLP',
    'hero.line2': 'Engineer',
    'hero.cta': 'Ventures',
    'hero.ctaAria': 'Jump to my ventures',
    'hero.cv': 'Download CV',
    'hero.available': 'Open to research and NLP roles',

    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Email',
    'social.aida': 'aida.bj',

    'articles.label': 'Articles',
    'articles.eyebrow': '… /Writing …',
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
    'articles.notInLocale': 'This article is only available in English.',

    'about.eyebrow': '… /About me …',
    'about.skillsNote': 'Some of the tools, topics and stacks I work with',
    'about.portraitAlt': 'Portrait of Arix ALIMAGNIDOKPO',

    'work.label': 'Work',
    'work.eyebrow': '… /Experience …',
    'work.total': 'Professional experience',
    'work.present': 'Present',
    'work.role': 'Role',
    'work.organisation': 'Organisation',
    'work.period': 'Period',

    'ventures.label': 'Ventures',
    'ventures.eyebrow': '… /What I am building …',
    'ventures.visit': 'Visit',

    'awards.label': 'Awards',
    'awards.eyebrow': '… /Distinctions …',

    'research.label': 'Research',
    'research.eyebrow': '… /Research …',
    'research.areas': 'Research areas',

    'projects.label': 'Open source',
    'projects.eyebrow': '… /Open source …',
    'projects.repo': 'Repository',
    'projects.noRepo': 'Private repository',

    'education.label': 'Education',
    'community.label': 'Community',
    'community.eyebrow': '… /Community …',

    'contact.label': 'Contact',
    'contact.eyebrow': '… /Get in touch …',
    'contact.lead': 'Working on language technology, African NLP, or public-sector AI? I would like to hear about it.',
    'contact.emailMe': 'Write to me',
    'contact.basedIn': 'Based in',

    'footer.builtWith': 'Built with Astro. No trackers, no cookies, no third-party scripts.',
    'footer.source': 'Source code',
    'footer.rights': 'All rights reserved.',

    '404.title': 'Page not found',
    '404.body': 'That page does not exist — or it no longer does.',
    '404.home': 'Back to the homepage',
  },

  fr: {
    'nav.about': 'À propos',
    'nav.work': 'Parcours',
    'nav.ventures': 'Entreprises',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Aller au contenu',
    'nav.menu': 'Menu',
    'nav.openMenu': 'Ouvrir le menu',
    'nav.closeMenu': 'Fermer le menu',
    'nav.home': 'Accueil',

    'lang.switch': 'Langue',
    'lang.en': 'En',
    'lang.fr': 'Fr',
    'lang.toFrench': 'Lire en français',
    'lang.toEnglish': 'Read in English',

    'hero.line1': 'Ingénieur',
    'hero.line2': 'IA & NLP',
    'hero.cta': 'Mes projets',
    'hero.ctaAria': 'Aller à mes entreprises',
    'hero.cv': 'Télécharger le CV',
    'hero.available': 'Ouvert aux postes en recherche et en NLP',

    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Email',
    'social.aida': 'aida.bj',

    'articles.label': 'Articles',
    'articles.eyebrow': '… /Écrits …',
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
    'articles.notInLocale': 'Cet article n’est disponible qu’en français.',

    'about.eyebrow': '… /À propos …',
    'about.skillsNote': 'Quelques outils, sujets et stacks avec lesquels je travaille',
    'about.portraitAlt': 'Portrait d’Arix ALIMAGNIDOKPO',

    'work.label': 'Parcours',
    'work.eyebrow': '… /Expérience …',
    'work.total': 'Expérience professionnelle',
    'work.present': 'Aujourd’hui',
    'work.role': 'Poste',
    'work.organisation': 'Organisation',
    'work.period': 'Période',

    'ventures.label': 'Entreprises',
    'ventures.eyebrow': '… /Ce que je construis …',
    'ventures.visit': 'Visiter',

    'awards.label': 'Distinctions',
    'awards.eyebrow': '… /Distinctions …',

    'research.label': 'Recherche',
    'research.eyebrow': '… /Recherche …',
    'research.areas': 'Domaines de recherche',

    'projects.label': 'Open source',
    'projects.eyebrow': '… /Open source …',
    'projects.repo': 'Dépôt',
    'projects.noRepo': 'Dépôt privé',

    'education.label': 'Formation',
    'community.label': 'Communauté',
    'community.eyebrow': '… /Communauté …',

    'contact.label': 'Contact',
    'contact.eyebrow': '… /Me contacter …',
    'contact.lead':
      'Vous travaillez sur les technologies du langage, le NLP africain ou l’IA dans le secteur public ? J’aimerais en entendre parler.',
    'contact.emailMe': 'M’écrire',
    'contact.basedIn': 'Basé à',

    'footer.builtWith': 'Construit avec Astro. Aucun traceur, aucun cookie, aucun script tiers.',
    'footer.source': 'Code source',
    'footer.rights': 'Tous droits réservés.',

    '404.title': 'Page introuvable',
    '404.body': 'Cette page n’existe pas — ou n’existe plus.',
    '404.home': 'Retour à l’accueil',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof UI)['en'];
