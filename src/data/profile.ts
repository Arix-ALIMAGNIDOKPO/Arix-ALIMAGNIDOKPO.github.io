import type {
  Award,
  CommunityItem,
  Company,
  I18nList,
  I18nText,
  Project,
  ResearchItem,
  Role,
  Study,
} from './types';

export const INTRO: I18nText = {
  en: 'I am Arix, an AI and NLP engineer. I am a student researcher at Université Sorbonne Paris Nord, where an EUR fellowship funds my work on language technology at the LIPN, and I am the founder of AIDA, an AI company building voice and document intelligence for African languages.',
  fr: 'Je suis Arix, ingénieur IA et NLP. Étudiant-chercheur à l’Université Sorbonne Paris Nord, où une bourse EUR finance mon travail sur les technologies du langage au LIPN, et fondateur d’AIDA, une entreprise d’IA qui construit l’intelligence vocale et documentaire pour les langues africaines.',
};

export const MISSION: I18nText = {
  en: 'In Africa, the digital divide is first a language divide. My work is to close it, with models that hear, read and write the languages people actually speak.',
  fr: 'En Afrique, la fracture numérique est d’abord une fracture linguistique. Mon travail consiste à la refermer, avec des modèles qui entendent, lisent et écrivent les langues que les gens parlent vraiment.',
};

/** The one-line "what I am doing right now", shown under the hero. */
export const CURRENT: I18nText = {
  en: 'Student researcher at Université Sorbonne Paris Nord. Founder of AIDA.',
  fr: 'Étudiant-chercheur à l’Université Sorbonne Paris Nord. Fondateur d’AIDA.',
};

export const RESEARCH_AREAS: I18nList = {
  en: [
    'Natural Language Processing',
    'Low-resource & African languages',
    'Speech recognition & synthesis',
    'Ethical and responsible AI',
  ],
  fr: [
    'Traitement automatique du langage naturel',
    'Langues peu dotées et africaines',
    'Reconnaissance et synthèse vocale',
    'Intelligence artificielle éthique et responsable',
  ],
};

/* ------------------------------------------------------------------ */
/* The company and its products                                        */
/* ------------------------------------------------------------------ */

export const COMPANY: Company = {
  name: 'AIDA',
  fullName: 'Artificial Intelligence for the Development of Africa',
  logo: 'aida',
  domain: 'aida.bj',
  url: 'https://aida.bj/',
  role: { en: 'Founder & CEO', fr: 'Fondateur & CEO' },
  founded: '2022',
  city: { en: 'Cotonou, Benin', fr: 'Cotonou, Bénin' },
  summary: {
    en: 'Founded in Cotonou, AIDA builds the layer the continent is missing. Most of the world’s models were trained on text that Africa never wrote, in languages most Africans do not speak. We build the other half: systems that hear Fon and Yoruba as clearly as they hear French, and that let an institution search its own archives without handing them to anyone.',
    fr: 'Fondée à Cotonou, AIDA construit la couche qui manque au continent. La plupart des modèles du monde ont été entraînés sur des textes que l’Afrique n’a jamais écrits, dans des langues que la plupart des Africains ne parlent pas. Nous construisons l’autre moitié : des systèmes qui entendent le fon et le yoruba aussi clairement que le français, et qui permettent à une institution de fouiller ses propres archives sans les confier à personne.',
  },
  products: [
    {
      name: 'Ayoka',
      logo: 'ayoka',
      domain: 'ayoka.aida.bj',
      url: 'https://ayoka.aida.bj/',
      accent: '#5b6ee1',
      tagline: {
        en: 'The voice API for African languages',
        fr: 'L’API vocale pour les langues africaines',
      },
      summary: {
        en: 'Speech recognition and speech synthesis for languages the big models never learned. Ayoka connects 800 million African speakers to any platform through a single API.',
        fr: 'Reconnaissance et synthèse vocale pour des langues que les grands modèles n’ont jamais apprises. Ayoka connecte 800 millions de locuteurs africains à n’importe quelle plateforme via une seule API.',
      },
      capabilities: {
        en: ['Speech to text', 'Text to speech', 'Tonal language support', 'REST API'],
        fr: ['Parole vers texte', 'Texte vers parole', 'Prise en charge des langues à tons', 'API REST'],
      },
      facts: [
        {
          label: { en: 'Accuracy', fr: 'Précision' },
          value: { en: '98% target', fr: '98 % visés' },
        },
        {
          label: { en: 'Languages', fr: 'Langues' },
          value: { en: '15+, incl. Fon, Yoruba, Wolof', fr: '15+, dont fon, yoruba, wolof' },
        },
        {
          label: { en: 'Integration', fr: 'Intégration' },
          value: { en: '48 hours', fr: '48 heures' },
        },
      ],
    },
    {
      name: 'Sovrean',
      logo: 'sovrean',
      domain: 'sovrean.aida.bj',
      url: 'https://sovrean.aida.bj/',
      accent: '#e0447f',
      tagline: {
        en: 'Sovereign document intelligence',
        fr: 'Intelligence documentaire souveraine',
      },
      summary: {
        en: 'Document management and assisted intelligence for West African organisations. Sovrean ingests, structures and classifies archives, then makes them answerable in plain language. Nothing has to leave the building.',
        fr: 'Gestion documentaire et intelligence assistée pour les organisations d’Afrique de l’Ouest. Sovrean ingère, structure et classe les archives, puis les rend interrogeables en langage naturel. Rien n’a besoin de quitter le bâtiment.',
      },
      capabilities: {
        en: ['OCR on degraded scans', 'Grounded question answering', 'Assisted drafting', 'Validation workflow'],
        fr: ['OCR sur scans dégradés', 'Réponses sourcées', 'Rédaction assistée', 'Workflow de validation'],
      },
      facts: [
        {
          label: { en: 'Deployment', fr: 'Déploiement' },
          value: { en: 'Cloud, on-premise, or client-hosted', fr: 'Cloud, on-premise ou chez le client' },
        },
        {
          label: { en: 'Built for', fr: 'Conçu pour' },
          value: { en: 'West African organisations', fr: 'Organisations ouest-africaines' },
        },
        {
          label: { en: 'Answers', fr: 'Réponses' },
          value: { en: 'Always traced to a source document', fr: 'Toujours tracées à un document source' },
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const ROLES: readonly Role[] = [
  {
    org: { en: 'LIPN, Université Sorbonne Paris Nord', fr: 'LIPN, Université Sorbonne Paris Nord' },
    orgUrl: 'https://lipn.univ-paris13.fr',
    title: { en: 'Student Researcher, EUR Fellow', fr: 'Étudiant-chercheur, boursier EUR' },
    kind: { en: 'Research', fr: 'Recherche' },
    start: '2026-09',
    end: null,
    summary: {
      en: 'Research on language technology at the LIPN, funded by an EUR Graduate School of Research fellowship at Institut Galilée.',
      fr: 'Recherche sur les technologies du langage au LIPN, financée par une bourse EUR (Graduate School of Research) à l’Institut Galilée.',
    },
    highlights: {
      en: [
        'Working on natural language processing, with a focus on languages that lack the data the field takes for granted.',
        'Reading for a Master’s in Computer Science alongside the research work.',
      ],
      fr: [
        'Travaux en traitement automatique du langage, centrés sur les langues privées des données que la discipline tient pour acquises.',
        'Master en informatique mené en parallèle des travaux de recherche.',
      ],
    },
    stack: ['NLP', 'Research', 'Python'],
  },
  {
    org: { en: 'AIDA', fr: 'AIDA' },
    orgUrl: 'https://aida.bj/',
    title: { en: 'Founder & CEO', fr: 'Fondateur & CEO' },
    kind: { en: 'Company', fr: 'Entreprise' },
    start: '2022-01',
    end: null,
    // aida.bj states the founding year, not the month.
    precision: 'year',
    summary: {
      en: 'Founded and lead an African AI company built around two products: Ayoka for speech, Sovrean for documents.',
      fr: 'Fondation et direction d’une entreprise d’IA africaine bâtie autour de deux produits : Ayoka pour la voix, Sovrean pour les documents.',
    },
    highlights: {
      en: [
        'Set the product and research direction for Ayoka, a speech recognition and synthesis API covering Fon, Yoruba, Wolof and more than fifteen African languages.',
        'Defined Sovrean’s sovereign deployment model so that institutions never have to let their archives leave their own infrastructure.',
        'Lead the team, the technical architecture and the commercial roadmap.',
      ],
      fr: [
        'Direction produit et recherche d’Ayoka, une API de reconnaissance et de synthèse vocale couvrant le fon, le yoruba, le wolof et plus de quinze langues africaines.',
        'Conception du modèle de déploiement souverain de Sovrean, pour que les institutions n’aient jamais à laisser leurs archives quitter leur propre infrastructure.',
        'Pilotage de l’équipe, de l’architecture technique et de la feuille de route commerciale.',
      ],
    },
    stack: ['Speech', 'NLP', 'RAG', 'Product'],
  },
  {
    org: { en: 'Ministry of Foreign Affairs of Benin', fr: 'Ministère des Affaires Étrangères du Bénin' },
    orgUrl: 'https://diplomatie.gouv.bj',
    title: { en: 'AI Engineer', fr: 'Ingénieur en IA' },
    kind: { en: 'Government', fr: 'Gouvernement' },
    start: '2025-05',
    // Your CV states this role as ongoing. Set an end date here if it has finished.
    end: null,
    summary: {
      en: 'Led the rollout of an internal, AI-powered strategic intelligence capability for Beninese diplomacy.',
      fr: 'Pilotage du déploiement d’un dispositif interne de veille stratégique fondé sur l’IA au service de la diplomatie béninoise.',
    },
    highlights: {
      en: [
        'Designed and built a diplomatic document management platform: validation workflow, analytics, diplomatic style assistant and decision support.',
        'Analysed epass.bj data to streamline online passport renewal for Beninese citizens abroad.',
        'Built Power BI dashboards tracking consular services: passport renewal, consular registration, powers of attorney, laissez-passer.',
        'Produced reporting and decision-grade analysis for Benin’s embassies abroad.',
        'Analysed tradux.gouv.bj data to monitor official translation and authentication.',
      ],
      fr: [
        'Conception et développement d’une plateforme de gestion documentaire diplomatique : workflow de validation, analytics, assistant de style diplomatique et aide à la décision.',
        'Analyse des données d’epass.bj pour optimiser le renouvellement en ligne des passeports des Béninois de l’étranger.',
        'Construction de tableaux de bord Power BI de suivi des services consulaires : renouvellement de passeport, immatriculation consulaire, procuration, laissez-passer.',
        'Production de reportings et d’analyses décisionnelles pour les ambassades du Bénin à l’étranger.',
        'Analyse des données de tradux.gouv.bj pour le suivi de la traduction et de l’authentification officielles.',
      ],
    },
    stack: ['Python', 'NLP', 'Power BI', 'Product'],
  },
  {
    org: { en: 'Ministry of Foreign Affairs of Benin', fr: 'Ministère des Affaires Étrangères du Bénin' },
    orgUrl: 'https://diplomatie.gouv.bj',
    title: { en: 'Data Analyst Intern', fr: 'Stagiaire en analyse de données' },
    kind: { en: 'Internship', fr: 'Stage' },
    start: '2024-08',
    end: '2025-04',
    summary: {
      en: 'Instrumented Benin’s e-consular services with dashboards and performance indicators. Final grade 18/20, with highest honours.',
      fr: 'Instrumentation des services e-consulaires du Bénin avec des tableaux de bord et des indicateurs de performance. Note de stage 18/20, mention Très bien.',
    },
    highlights: {
      en: [
        'Set up Power BI dashboards for e-consular service monitoring and KPIs.',
        'Ran data analyses on service-public.bj and tradux.gouv.bj.',
      ],
      fr: [
        'Mise en place de tableaux de bord Power BI pour le suivi des services e-consulaires et des indicateurs de performance.',
        'Analyses de données sur service-public.bj et tradux.gouv.bj.',
      ],
    },
    stack: ['Power BI', 'SQL', 'DAX'],
  },
  {
    org: { en: 'ICT Consulting', fr: 'ICT Consulting' },
    orgUrl: 'https://ict-consulting.tech',
    title: { en: 'Data Science Intern', fr: 'Stagiaire en science des données' },
    kind: { en: 'Internship', fr: 'Stage' },
    start: '2024-06',
    end: '2024-08',
    summary: {
      en: 'Prototyped FarmAdvisor, a decision-support product for farmers. Final grade 17/20, with highest honours.',
      fr: 'Prototypage de FarmAdvisor, une solution d’aide à la décision pour les agriculteurs. Note de stage 17/20, mention Très bien.',
    },
    highlights: {
      en: [
        'Contributed to the FarmAdvisor prototype (farmadvisor.bj).',
        'Structured the databases, collected field data through IoT sensors and implemented the AI models.',
      ],
      fr: [
        'Contribution au prototype FarmAdvisor (farmadvisor.bj).',
        'Structuration des bases de données, collecte via capteurs IoT et implémentation des modèles d’IA.',
      ],
    },
    stack: ['Python', 'IoT', 'ML'],
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const SKILLS: readonly {
  readonly label: I18nText;
  readonly items: readonly string[];
  readonly emphasis: 'primary' | 'secondary';
}[] = [
  {
    label: { en: 'AI & NLP', fr: 'IA & NLP' },
    items: [
      'Python',
      'PyTorch',
      'Transformers',
      'Hugging Face',
      'spaCy',
      'Whisper',
      'RAG',
      'LLM fine-tuning',
      'OCR',
    ],
    emphasis: 'primary',
  },
  {
    label: { en: 'Data', fr: 'Données' },
    items: ['Power BI', 'DAX', 'pandas', 'NumPy', 'scikit-learn', 'SQL', 'ETL'],
    emphasis: 'secondary',
  },
  {
    label: { en: 'Engineering', fr: 'Ingénierie' },
    items: ['FastAPI', 'Flask', 'Django', 'TypeScript', 'React', 'PostgreSQL', 'MongoDB', 'REST'],
    emphasis: 'secondary',
  },
  {
    label: { en: 'Ops & Research', fr: 'Ops & Recherche' },
    items: ['Docker', 'Git / CI-CD', 'Linux', 'OR-Tools', 'Constraint programming', 'MLOps'],
    emphasis: 'secondary',
  },
];

/* ------------------------------------------------------------------ */
/* Education, awards, research, community, open source                 */
/* ------------------------------------------------------------------ */

export const EDUCATION: readonly Study[] = [
  {
    degree: {
      en: 'Master’s in Computer Science, and EUR Graduate School of Research fellow',
      fr: 'Master en Informatique, et boursier EUR (Graduate School of Research)',
    },
    school: { en: 'Institut Galilée, Université Sorbonne Paris Nord', fr: 'Institut Galilée, Université Sorbonne Paris Nord' },
    schoolUrl: 'https://www.univ-spn.fr',
    place: { en: 'Paris, France', fr: 'Paris, France' },
    period: { en: 'Since 2026', fr: 'Depuis 2026' },
    notes: {
      en: [
        'Fellowship-funded research on language technology at the LIPN, the computer science laboratory of Université Sorbonne Paris Nord.',
      ],
      fr: [
        'Recherche financée par la bourse sur les technologies du langage au LIPN, le laboratoire d’informatique de l’Université Sorbonne Paris Nord.',
      ],
    },
    current: true,
  },
  {
    degree: {
      en: 'BSc in Computer Science, Artificial Intelligence track',
      fr: 'Licence en Informatique, spécialisation Intelligence Artificielle',
    },
    school: { en: 'Institut de Formation et de Recherche en Informatique, Université d’Abomey-Calavi', fr: 'Institut de Formation et de Recherche en Informatique, Université d’Abomey-Calavi' },
    schoolUrl: 'https://uac.bj',
    place: { en: 'Abomey-Calavi, Benin', fr: 'Abomey-Calavi, Bénin' },
    period: { en: '2022 – 2025', fr: '2022 – 2025' },
    grade: { en: 'With honours', fr: 'Mention Bien' },
    notes: {
      en: [
        'Class representative for the AI track.',
        'Coordinator of the AI and Internet of Things club.',
      ],
      fr: [
        'Délégué de promotion pour la filière Intelligence Artificielle.',
        'Coordinateur du club d’Intelligence Artificielle et Internet des Objets.',
      ],
    },
  },
  {
    degree: { en: 'Scientific Baccalaureate, Series D', fr: 'Baccalauréat Scientifique, Série D' },
    school: { en: 'Collège Catholique Père Aupiais', fr: 'Collège Catholique Père Aupiais' },
    place: { en: 'Cotonou, Benin', fr: 'Cotonou, Bénin' },
    period: { en: '2016 – 2022', fr: '2016 – 2022' },
    grade: { en: 'With honours', fr: 'Mention Bien' },
    notes: { en: [], fr: [] },
  },
];

export const AWARDS: readonly Award[] = [
  {
    rank: { en: '2nd prize', fr: '2e prix' },
    title: {
      en: 'Alodometo, multimodal Fon and French translation',
      fr: 'Alodometo, traduction multimodale fon et français',
    },
    event: { en: 'Hackathon Bénin IA Multimodale et Multilingue (SENIA)', fr: 'Hackathon Bénin IA Multimodale et Multilingue (SENIA)' },
    date: { en: 'May 2024', fr: 'Mai 2024' },
    year: '2024',
    summary: {
      en: 'A digital-inclusion solution translating between French and Fon across text and speech, so that people who cannot read French are not locked out of digital services.',
      fr: 'Une solution d’inclusion numérique qui traduit entre le français et le fon, à l’écrit comme à l’oral, pour que ceux qui ne lisent pas le français ne soient pas exclus des services numériques.',
    },
    links: [
      {
        label: 'Prototype',
        href: 'https://lablab.ai/event/benin-multimodal-ai-hackathon/aida/al%C9%94-do-m%C9%9B-t%C9%94-assistant-vocal-multifonctionnel',
        external: true,
      },
      {
        label: 'Press',
        href: 'https://asin.bj/article/18/hackathon-challenge-multimodal-multilingue-benin-laureats-competition-presentiel-connus/',
        external: true,
      },
    ],
  },
  {
    rank: { en: '1st prize', fr: '1er prix' },
    title: {
      en: 'Autonomous waste collection and sorting robot',
      fr: 'Robot autonome de collecte et de tri des déchets',
    },
    event: { en: 'Tekbot Robotics Challenge', fr: 'Tekbot Robotics Challenge' },
    date: { en: 'Jan 2024', fr: 'Jan. 2024' },
    year: '2024',
    summary: {
      en: 'An autonomous robot that finds, collects and sorts waste using computer vision.',
      fr: 'Un robot autonome qui repère, collecte et trie les déchets grâce à la vision par ordinateur.',
    },
    links: [
      { label: 'Video', href: 'https://www.instagram.com/reel/C16igYCtHJl/', external: true },
      { label: 'trc.tekbot.io', href: 'https://trc.tekbot.io/', external: true },
    ],
  },
  {
    rank: { en: '1st prize', fr: '1er prix' },
    title: {
      en: 'AI-assisted medical appointment scheduling',
      fr: 'Planification de rendez-vous médicaux assistée par IA',
    },
    event: { en: 'Hackathon Deep Learning IndabaX Benin', fr: 'Hackathon Deep Learning IndabaX Bénin' },
    date: { en: 'Dec 2023', fr: 'Déc. 2023' },
    year: '2023',
    summary: {
      en: 'An appointment platform with an AI chatbot that triages and prioritises cases before booking.',
      fr: 'Une plateforme de rendez-vous dotée d’un chatbot IA qui trie et priorise les cas avant la prise de rendez-vous.',
    },
  },
];

export const RESEARCH: readonly ResearchItem[] = [
  {
    title: {
      en: 'Automated thesis-defence scheduling at Université d’Abomey-Calavi',
      fr: 'Système automatisé de planification des soutenances à l’Université d’Abomey-Calavi',
    },
    context: {
      en: 'Project Lead, Pôle Sud Benin · funded by ARES Belgium (EUR 20,000)',
      fr: 'Chef de projet, Pôle Sud Bénin · financé par l’ARES Belgique (20 000 EUR)',
    },
    period: { en: 'Oct 2024 – May 2025', fr: 'Oct. 2024 – Mai 2025' },
    summary: {
      en: 'Modelled defence scheduling as a constraint satisfaction problem and shipped a working scheduler for the university.',
      fr: 'Modélisation de la planification des soutenances comme un problème de satisfaction de contraintes, et livraison d’un planificateur opérationnel pour l’université.',
    },
    highlights: {
      en: [
        'Constraint-programming model of the scheduling problem.',
        'Optimisation of jury availability, room allocation and session sequencing.',
      ],
      fr: [
        'Modélisation du problème de planification par programmation par contraintes.',
        'Optimisation des disponibilités du jury, de l’allocation des salles et de l’organisation des sessions.',
      ],
    },
    links: [
      {
        label: 'Report',
        href: 'https://drive.google.com/file/d/1-Gvfhg6tx0iJ2oLRCQDFB3oLtd_2TlI/view?usp=sharing',
        external: true,
      },
      { label: 'ExamOptim', href: 'https://github.com/Arix-ALIMAGNIDOKPO/ExamOptim', external: true },
      {
        label: 'smart-exam-scheduler',
        href: 'https://github.com/Arix-ALIMAGNIDOKPO/smart-exam-scheduler',
        external: true,
      },
    ],
  },
  {
    title: {
      en: 'An intelligent platform for managing and drafting diplomatic notes verbales',
      fr: 'Plateforme intelligente de gestion et de rédaction assistée des notes verbales',
    },
    context: {
      en: 'BSc thesis, Université d’Abomey-Calavi · case study: Ministry of Foreign Affairs',
      fr: 'Mémoire de licence, Université d’Abomey-Calavi · cas du Ministère des Affaires Étrangères',
    },
    period: { en: '2025', fr: '2025' },
    summary: {
      en: 'Applied NLP to a concrete administrative bottleneck: the drafting, validation and retrieval of diplomatic correspondence. Graded 17.5/20 with highest honours.',
      fr: 'Application du NLP à un goulot d’étranglement administratif concret : la rédaction, la validation et la recherche de la correspondance diplomatique. Évalué 17,5/20, mention Très bien.',
    },
    highlights: { en: [], fr: [] },
  },
];

export const PROJECTS: readonly Project[] = [
  {
    name: {
      en: 'Retrieval assistant for Benin’s public services',
      fr: 'Assistant de recherche pour les services publics béninois',
    },
    year: '2025',
    language: 'Jupyter Notebook',
    outcome: {
      en: 'Every answer cites the official page it came from',
      fr: 'Chaque réponse cite la page officielle dont elle vient',
    },
    summary: {
      en: 'I scraped and chunked the service-public.bj documentation, embedded the passages, and put a retrieval layer in front of the generator so no answer can be invented. A citizen asks what they need to renew a passport in their own words, instead of guessing which of forty pages applies to them.',
      fr: 'J’ai collecté et découpé la documentation de service-public.bj, vectorisé les passages, puis placé une couche de récupération devant le générateur pour qu’aucune réponse ne puisse être inventée. Un citoyen demande ce qu’il faut pour renouveler un passeport avec ses propres mots, au lieu de deviner laquelle des quarante pages le concerne.',
    },
    tags: ['RAG', 'Embeddings', 'Python'],
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics',
  },
  {
    name: {
      en: 'Tomato leaf disease detection with YOLOv8',
      fr: 'Détection de maladies foliaires de la tomate avec YOLOv8',
    },
    year: '2024',
    language: 'Python',
    outcome: {
      en: 'A diagnosis from a phone camera, in the field, without a network',
      fr: 'Un diagnostic depuis un téléphone, au champ, sans réseau',
    },
    summary: {
      en: 'I trained a YOLOv8 detector on annotated leaf images and tuned it for what a grower actually has: a mid-range phone, uneven light, no connection. It localises the affected area rather than labelling the whole photo, which is what tells someone whether to treat one plant or the entire row.',
      fr: 'J’ai entraîné un détecteur YOLOv8 sur des images de feuilles annotées, puis l’ai réglé pour les conditions réelles d’un producteur : téléphone milieu de gamme, lumière inégale, pas de connexion. Il localise la zone atteinte au lieu d’étiqueter la photo entière, ce qui permet de savoir s’il faut traiter un pied ou toute la rangée.',
    },
    tags: ['YOLOv8', 'Computer Vision', 'Edge'],
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/Tomato-Leaf-Disease-Detection-using-Yolov8',
  },
  {
    name: {
      en: 'ExamOptim, a constraint solver for exam timetables',
      fr: 'ExamOptim, un solveur de contraintes pour les plannings d’examens',
    },
    year: '2025',
    language: 'Python',
    outcome: {
      en: 'A university timetable that took weeks, solved in minutes',
      fr: 'Un planning universitaire qui prenait des semaines, résolu en minutes',
    },
    summary: {
      en: 'The engine behind the ARES-funded scheduling project at Université d’Abomey-Calavi. I modelled jury availability, room capacity and session order as one constraint satisfaction problem, solved it with OR-Tools, and exposed it as an API so the registry can re-run it after every change instead of redrawing the grid by hand.',
      fr: 'Le moteur du projet de planification financé par l’ARES à l’Université d’Abomey-Calavi. J’ai modélisé les disponibilités du jury, la capacité des salles et l’ordre des sessions comme un seul problème de satisfaction de contraintes, résolu avec OR-Tools, puis exposé en API pour que la scolarité puisse le relancer à chaque changement au lieu de refaire la grille à la main.',
    },
    tags: ['OR-Tools', 'Constraint programming', 'Flask'],
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/ExamOptim',
  },
  {
    name: {
      en: 'Conversational assistant for IFRI',
      fr: 'Assistant conversationnel pour l’IFRI',
    },
    year: '2025',
    language: 'Python',
    outcome: {
      en: 'The admissions questions the office answers a hundred times a year',
      fr: 'Les questions d’admission auxquelles le secrétariat répond cent fois par an',
    },
    summary: {
      en: 'A retrieval-based assistant for the AI institute where I took my degree. I built the corpus from the institute’s own course catalogue, admission rules and fee schedule, so an applicant gets the requirement that applies to their case rather than a generic paragraph, and the office stops answering the same question by email.',
      fr: 'Un assistant fondé sur la récupération, pour l’institut d’IA où j’ai fait ma licence. J’ai construit le corpus à partir du catalogue de cours, du règlement d’admission et de la grille de frais de l’institut, pour qu’un candidat obtienne la règle qui s’applique à son cas plutôt qu’un paragraphe générique, et que le secrétariat cesse de répondre à la même question par courriel.',
    },
    tags: ['RAG', 'NLP', 'Python'],
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/IFRI-AI-Chatbot',
  },
];

export const COMMUNITY: readonly CommunityItem[] = [
  {
    role: { en: 'Member', fr: 'Membre' },
    org: { en: 'Masakhane', fr: 'Masakhane' },
    orgUrl: 'https://www.masakhane.io/',
    period: { en: 'Ongoing', fr: 'En cours' },
    ongoing: true,
    detail: {
      en: 'The grassroots research community advancing natural language processing for African languages.',
      fr: 'La communauté de recherche ouverte qui fait avancer le traitement automatique des langues africaines.',
    },
  },
  {
    role: { en: 'Developer, communications team', fr: 'Développeur, pôle communication' },
    org: { en: 'FRIARE Africa', fr: 'FRIARE Africa' },
    orgUrl: 'https://friare.org',
    period: { en: 'Since Sep 2023', fr: 'Depuis sep. 2023' },
    ongoing: true,
    detail: {
      en: 'I build the tools and help run the campaigns behind the organisation’s case for responsible AI in Africa.',
      fr: 'Je construis les outils et participe aux campagnes qui portent le plaidoyer de l’organisation pour une IA responsable en Afrique.',
    },
  },
  {
    role: { en: 'Training commission coordinator', fr: 'Coordinateur de la commission formation' },
    org: { en: 'Isheero', fr: 'Isheero' },
    orgUrl: 'https://www.isheero.com/',
    period: { en: 'Since Oct 2023', fr: 'Depuis oct. 2023' },
    ongoing: true,
    detail: {
      en: 'Planning and running training programmes and workshops.',
      fr: 'Planification, organisation et animation de programmes et d’ateliers de formation.',
    },
  },
  {
    role: { en: 'Volunteer', fr: 'Bénévole' },
    org: { en: 'Benin Mathematics Summer Camps, IMAC Benin', fr: 'Camps d’été de mathématiques du Bénin, IMAC Bénin' },
    period: { en: 'Since Feb 2025', fr: 'Depuis fév. 2025' },
    ongoing: true,
    detail: {
      en: 'An intensive mathematics camp for secondary-school students, with an introduction to technology.',
      fr: 'Un camp intensif de mathématiques pour collégiens, avec une introduction aux nouvelles technologies.',
    },
  },
  {
    role: { en: 'Local organiser', fr: 'Organisateur local' },
    org: { en: 'Deep Learning IndabaX Benin', fr: 'Deep Learning IndabaX Bénin' },
    orgUrl: 'https://deeplearningindaba.com/indabax/',
    period: { en: '2025', fr: '2025' },
    detail: {
      en: 'Organised the Benin edition of the continent’s largest machine-learning gathering.',
      fr: 'Organisation de l’édition béninoise du plus grand rassemblement d’apprentissage automatique du continent.',
    },
  },
  {
    role: { en: 'Participant', fr: 'Participant' },
    org: { en: 'Deep Learning Indaba, Kigali, Rwanda', fr: 'Deep Learning Indaba, Kigali, Rwanda' },
    orgUrl: 'https://deeplearningindaba.com/',
    period: { en: 'Aug 2025', fr: 'Août 2025' },
    detail: {
      en: 'The continent’s flagship machine-learning conference.',
      fr: 'La conférence phare d’apprentissage automatique du continent.',
    },
  },
  {
    role: { en: 'AI Instructor', fr: 'Instructeur en Intelligence Artificielle' },
    org: { en: 'AI and IoT Club, IFRI, Université d’Abomey-Calavi', fr: 'Club IA et IoT, IFRI, Université d’Abomey-Calavi' },
    orgUrl: 'https://uac.bj',
    period: { en: 'Jan 2024 – May 2025', fr: 'Jan. 2024 – Mai 2025' },
    detail: {
      en: 'Ran weekly workshops on AI and machine learning.',
      fr: 'Animation d’ateliers hebdomadaires sur l’IA et l’apprentissage automatique.',
    },
  },
  {
    role: { en: 'Instructor, AI tools for diplomacy', fr: 'Instructeur, outils d’IA en diplomatie' },
    org: { en: 'Ministry of Foreign Affairs of Benin', fr: 'Ministère des Affaires Étrangères du Bénin' },
    orgUrl: 'https://diplomatie.gouv.bj',
    period: { en: 'Mar 2024 – May 2025', fr: 'Mar. 2024 – Mai 2025' },
    detail: {
      en: 'Designed and delivered an eight-session programme for the Directorate-General of External Relations.',
      fr: 'Conception et animation d’une formation en huit sessions pour la Direction Générale des Relations Extérieures.',
    },
  },
  {
    role: { en: 'Speaker', fr: 'Intervenant' },
    org: { en: 'Benin Workshop on Artificial Intelligence, Cotonou', fr: 'Benin Workshop on Artificial Intelligence, Cotonou' },
    period: { en: 'Nov 2024', fr: 'Nov. 2024' },
    detail: {
      en: 'Talk on building a speech translation model for local languages, with Fongbe as the case study.',
      fr: 'Intervention sur le développement d’un modèle de traduction vocale pour les langues locales, cas du fongbé.',
    },
  },
  {
    role: { en: 'Participant', fr: 'Participant' },
    org: { en: 'Deep Learning Indaba, Dakar, Senegal', fr: 'Deep Learning Indaba, Dakar, Sénégal' },
    orgUrl: 'https://deeplearningindaba.com/',
    period: { en: 'Sep 2024', fr: 'Sep. 2024' },
    detail: {
      en: 'The continent’s flagship machine-learning conference.',
      fr: 'La conférence phare d’apprentissage automatique du continent.',
    },
  },
];
