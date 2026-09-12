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
    'articles.lead': 'Notes on natural language processing, African languages, and building AI that has to work outside the lab.',
    'articles.toc': 'On this page',
    'articles.otherLanguage': 'This article is also available in French.',

    'about.eyebrow': '… /About me …',
    'about.label': 'About',
    'about.lead': 'An AI and NLP engineer from Cotonou, now doing research in Paris on the languages the field keeps leaving out.',
    'about.skillsNote': 'Some of the tools, topics and stacks I work with',
    'about.skillsHeading': 'What I work with',
    'about.portraitAlt': 'Portrait of Arix ALIMAGNIDOKPO',

    'work.label': 'Work',
    'work.eyebrow': '… /Experience …',
    'work.total': 'Professional experience',
    'work.present': 'Present',
    'work.lead': 'From hackathon prototype to systems running inside a government: where I have worked, and what I shipped there.',

    'ventures.label': 'AIDA',
    'ventures.eyebrow': '… /What I am building …',
    'ventures.lead': 'One company, two products: one teaches machines to hear African languages, the other gives institutions back control of their archives.',
    'ventures.company': 'The company',
    'ventures.products': 'The products',
    'ventures.productCount': 'Two products',
    'ventures.visit': 'Visit',
    'ventures.founded': 'Founded',
    'ventures.based': 'Based in',
    'ventures.logoAlt': 'logo',

    'awards.label': 'Awards',
    'awards.eyebrow': '… /Distinctions …',
    'awards.lead': 'Three competitions, three real problems: language, waste, and access to healthcare.',

    'research.label': 'Research',
    'research.eyebrow': '… /Research …',
    'research.areas': 'Research areas',
    'research.lead': 'Two pieces of work where the research had to end up in production: a constraint solver for a university, and NLP applied to diplomatic correspondence.',

    'projects.label': 'Open source',
    'projects.eyebrow': '… /Open source …',
    'projects.lead': 'Projects built to be used, not just submitted. The code is open.',
    'projects.featured': 'Pick of the bunch',
    'projects.repo': 'View the code',
    'projects.noRepo': 'Private repository',
    'projects.more': 'Everything else on GitHub',

    'education.label': 'Education',
    'education.eyebrow': '… /Education …',
    'education.current': 'Current',
    'education.lead':
      'A degree in AI from Benin, then a research fellowship in Paris. The thread is the same: languages, and the models that fail on them.',

    'community.label': 'Community',
    'community.eyebrow': '… /Community …',
    'community.lead': 'Teaching, organising, and giving back to the ecosystem that trained me.',
    'community.ongoing': 'Ongoing',
    'community.past': 'Past',

    'contact.label': 'Contact',
    'contact.eyebrow': '… /Get in touch …',
    'contact.lead':
      'Working on language technology, African NLP, or public-sector AI? I would like to hear about it.',
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
    'articles.lead': 'Des notes sur le traitement du langage naturel, les langues africaines, et la construction d’une IA qui doit fonctionner hors du laboratoire.',
    'articles.toc': 'Sur cette page',
    'articles.otherLanguage': 'Cet article est aussi disponible en anglais.',

    'about.eyebrow': '… /À propos …',
    'about.label': 'À propos',
    'about.lead': 'Ingénieur IA et NLP venu de Cotonou, aujourd’hui en recherche à Paris sur les langues que la discipline laisse de côté.',
    'about.skillsNote': 'Quelques outils, sujets et stacks avec lesquels je travaille',
    'about.skillsHeading': 'Ce avec quoi je travaille',
    'about.portraitAlt': 'Portrait d’Arix ALIMAGNIDOKPO',

    'work.label': 'Parcours',
    'work.eyebrow': '… /Expérience …',
    'work.total': 'Expérience professionnelle',
    'work.present': 'Aujourd’hui',
    'work.lead': 'Du prototype de hackathon au système en production dans une administration : voici où j’ai travaillé et ce que j’y ai livré.',

    'ventures.label': 'AIDA',
    'ventures.eyebrow': '… /Ce que je construis …',
    'ventures.lead': 'Une entreprise, deux produits : l’un apprend aux machines à entendre les langues africaines, l’autre rend aux institutions le contrôle de leurs archives.',
    'ventures.company': 'L’entreprise',
    'ventures.products': 'Les produits',
    'ventures.productCount': 'Deux produits',
    'ventures.visit': 'Visiter',
    'ventures.founded': 'Fondée en',
    'ventures.based': 'Basée à',
    'ventures.logoAlt': 'logo',

    'awards.label': 'Distinctions',
    'awards.eyebrow': '… /Distinctions …',
    'awards.lead': 'Trois compétitions, trois problèmes réels : la langue, les déchets, l’accès aux soins.',

    'research.label': 'Recherche',
    'research.eyebrow': '… /Recherche …',
    'research.areas': 'Domaines de recherche',
    'research.lead': 'Deux travaux où la recherche devait finir en production : un solveur de contraintes pour une université, et du NLP appliqué à la correspondance diplomatique.',

    'projects.label': 'Open source',
    'projects.eyebrow': '… /Open source …',
    'projects.lead': 'Des projets construits pour être utilisés, pas seulement pour être rendus. Le code est ouvert.',
    'projects.featured': 'Le projet à retenir',
    'projects.repo': 'Voir le code',
    'projects.noRepo': 'Dépôt privé',
    'projects.more': 'Tout le reste sur GitHub',

    'education.label': 'Formation',
    'education.eyebrow': '… /Formation …',
    'education.current': 'En cours',
    'education.lead':
      'Une licence en IA au Bénin, puis une bourse de recherche à Paris. Le fil est le même : les langues, et les modèles qui échouent dessus.',

    'community.label': 'Communauté',
    'community.eyebrow': '… /Communauté …',
    'community.lead': 'Enseigner, organiser, et rendre à l’écosystème qui m’a formé.',
    'community.ongoing': 'En cours',
    'community.past': 'Passé',

    'contact.label': 'Contact',
    'contact.eyebrow': '… /Me contacter …',
    'contact.lead':
      'Vous travaillez sur les technologies du langage, le NLP africain ou l’IA dans le secteur public ? J’aimerais en entendre parler.',
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
