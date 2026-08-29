import type {
  Award,
  CommunityItem,
  I18nList,
  I18nText,
  Project,
  ResearchItem,
  Role,
  SkillGroup,
  Study,
  Venture,
} from './types';

export const INTRO: I18nText = {
  en: 'I am Arix — an AI and NLP engineer based in Cotonou. I lead AI work at Benin’s Ministry of Foreign Affairs and I run AIDA, where we build voice and document intelligence for African languages.',
  fr: 'Je suis Arix — ingénieur IA et NLP basé à Cotonou. Je pilote les projets d’IA au Ministère des Affaires Étrangères du Bénin et je dirige AIDA, où nous construisons l’intelligence vocale et documentaire pour les langues africaines.',
};

export const MISSION: I18nText = {
  en: 'In Africa, the digital divide is first a language divide. My work is to close it — with models that hear, read and write the languages people actually speak.',
  fr: 'En Afrique, la fracture numérique est d’abord une fracture linguistique. Mon travail consiste à la refermer — avec des modèles qui entendent, lisent et écrivent les langues que les gens parlent vraiment.',
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
/* Ventures                                                            */
/* ------------------------------------------------------------------ */

export const VENTURES: readonly Venture[] = [
  {
    name: 'AIDA',
    domain: 'aida.bj',
    url: 'https://aida.bj/',
    role: { en: 'Founder & CEO', fr: 'Fondateur & CEO' },
    summary: {
      en: 'Artificial Intelligence for the Development of Africa. Founded in 2022 in Cotonou, AIDA designs AI products rooted in Africa — voice and document intelligence built for the languages and the institutions of the continent.',
      fr: 'Artificial Intelligence for the Development of Africa. Fondée en 2022 à Cotonou, AIDA conçoit des produits d’intelligence artificielle ancrés en Afrique — intelligence vocale et documentaire pensée pour les langues et les institutions du continent.',
    },
    tags: ['Cotonou, BJ', 'Since 2022', 'AI products'],
  },
  {
    name: 'Ayoka',
    domain: 'ayoka.aida.bj',
    url: 'https://ayoka.aida.bj/',
    role: { en: 'Product', fr: 'Produit' },
    summary: {
      en: 'A high-accuracy voice API for African languages. Ayoka provides speech-to-text and text-to-speech for Fon, Yoruba, French and English, targeting 98% accuracy on African languages.',
      fr: 'Une API vocale haute précision pour les langues africaines. Ayoka propose la transcription (speech-to-text) et la synthèse (text-to-speech) pour le Fon, le Yoruba, le français et l’anglais, avec une précision visée de 98 % sur les langues africaines.',
    },
    tags: ['Speech-to-Text', 'Text-to-Speech', 'Fon', 'Yoruba', 'Web API'],
  },
  {
    name: 'Sovrean',
    domain: 'sovrean.aida.bj',
    url: 'https://sovrean.aida.bj/',
    role: { en: 'Product', fr: 'Produit' },
    summary: {
      en: 'Sovereign document intelligence. Sovrean ingests, structures, classifies and makes documents queryable through OCR, grounded chat and assisted transformations — deployable in the cloud, on-premise, or inside the client’s own infrastructure.',
      fr: 'Intelligence documentaire souveraine. Sovrean ingère, structure, classe et rend interrogeables vos documents via OCR, chat borné et transformations assistées — en cloud, on-premise ou directement chez le client.',
    },
    tags: ['OCR', 'RAG', 'Document AI', 'On-premise'],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const ROLES: readonly Role[] = [
  {
    org: 'AIDA',
    orgUrl: 'https://aida.bj/',
    title: { en: 'Founder & CEO', fr: 'Fondateur & CEO' },
    kind: { en: 'Startup', fr: 'Startup' },
    start: '2022-01',
    end: null,
    // aida.bj states the founding year, not the month.
    precision: 'year',
    summary: {
      en: 'Building an African AI company around two products: Ayoka for speech, Sovrean for documents.',
      fr: 'Construction d’une entreprise d’IA africaine autour de deux produits : Ayoka pour la voix, Sovrean pour les documents.',
    },
    highlights: {
      en: [
        'Set the product and research direction for Ayoka — speech-to-text and text-to-speech for Fon, Yoruba, French and English.',
        'Defined Sovrean’s sovereign deployment model: cloud, on-premise, or hosted inside the client’s own infrastructure.',
        'Lead the team, the technical architecture and the commercial roadmap.',
      ],
      fr: [
        'Définition de la direction produit et recherche d’Ayoka — transcription et synthèse vocale pour le Fon, le Yoruba, le français et l’anglais.',
        'Conception du modèle de déploiement souverain de Sovrean : cloud, on-premise ou hébergement dans l’infrastructure du client.',
        'Pilotage de l’équipe, de l’architecture technique et de la feuille de route commerciale.',
      ],
    },
    stack: ['Speech', 'NLP', 'RAG', 'Product'],
  },
  {
    org: 'Ministry of Foreign Affairs of Benin',
    orgUrl: 'https://diplomatie.gouv.bj',
    title: { en: 'AI Developer & Project Lead', fr: 'Développeur IA & Chef de projet' },
    kind: { en: 'Government', fr: 'Gouvernement' },
    start: '2025-05',
    end: null,
    summary: {
      en: 'Leading the rollout of an internal, AI-powered strategic intelligence capability for Beninese diplomacy.',
      fr: 'Pilotage du déploiement d’un dispositif interne de veille stratégique fondé sur l’IA au service de la diplomatie béninoise.',
    },
    highlights: {
      en: [
        'Designed and built a diplomatic document management platform: validation workflow, analytics, diplomatic style assistant and decision support.',
        'Analysed epass.bj data to streamline online passport renewal for Beninese citizens abroad.',
        'Built Power BI dashboards tracking consular services — passport renewal, consular registration, powers of attorney, laissez-passer.',
        'Produced reporting and decision-grade analysis for Benin’s embassies abroad.',
        'Analysed tradux.gouv.bj data to monitor official translation and authentication.',
      ],
      fr: [
        'Conception et développement d’une plateforme de gestion documentaire diplomatique : workflow de validation, analytics, assistant de style diplomatique et aide à la décision.',
        'Analyse des données d’epass.bj pour optimiser le renouvellement en ligne des passeports des Béninois de l’étranger.',
        'Construction de tableaux de bord Power BI de suivi des services consulaires — renouvellement de passeport, immatriculation consulaire, procuration, laissez-passer.',
        'Production de reportings et d’analyses décisionnelles pour les ambassades du Bénin à l’étranger.',
        'Analyse des données de tradux.gouv.bj pour le suivi de la traduction et de l’authentification officielles.',
      ],
    },
    stack: ['Python', 'NLP', 'Power BI', 'Product'],
  },
  {
    org: 'Ministry of Foreign Affairs of Benin',
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
    org: 'ICT Consulting',
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
/* Skills — mirrors the stacked cards of the reference layout          */
/* ------------------------------------------------------------------ */

export const SKILLS: readonly SkillGroup[] = [
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
      en: 'BSc in Computer Science, Artificial Intelligence track',
      fr: 'Licence en Informatique, spécialisation Intelligence Artificielle',
    },
    school: 'Université d’Abomey-Calavi (IFRI)',
    schoolUrl: 'https://uac.bj',
    period: { en: 'Sep 2022 — Dec 2025', fr: 'Sep. 2022 — Déc. 2025' },
    grade: { en: 'With honours', fr: 'Mention Bien' },
    notes: {
      en: [
        'Class representative for the AI track (2022–2025).',
        'Coordinator of the AI & Internet of Things club (2023–2025).',
      ],
      fr: [
        'Délégué de promotion pour la filière Intelligence Artificielle (2022–2025).',
        'Coordinateur du club d’Intelligence Artificielle et Internet des Objets (2023–2025).',
      ],
    },
  },
  {
    degree: { en: 'Scientific Baccalaureate, Series D', fr: 'Baccalauréat Scientifique, Série D' },
    school: 'Collège Catholique Père Aupiais, Cotonou',
    period: { en: 'Sep 2016 — Jun 2022', fr: 'Sep. 2016 — Juin 2022' },
    grade: { en: 'With honours', fr: 'Mention Bien' },
    notes: { en: [], fr: [] },
  },
];

export const AWARDS: readonly Award[] = [
  {
    rank: { en: '2nd prize', fr: '2e prix' },
    title: {
      en: 'Alodometo — multimodal Fon ⇄ French translation',
      fr: 'Alodometo — traduction multimodale Fon ⇄ français',
    },
    event: 'Hackathon Bénin IA Multimodale et Multilingue (SENIA)',
    date: { en: 'May 2024', fr: 'Mai 2024' },
    year: '2024',
    summary: {
      en: 'A digital-inclusion solution translating between French and Fon across text and speech, so that people who cannot read French are not locked out of digital services.',
      fr: 'Une solution d’inclusion numérique qui traduit entre le français et le Fon, à l’écrit comme à l’oral, pour que ceux qui ne lisent pas le français ne soient pas exclus des services numériques.',
    },
  },
  {
    rank: { en: '1st prize', fr: '1er prix' },
    title: {
      en: 'Autonomous waste collection and sorting robot',
      fr: 'Robot autonome de collecte et de tri des déchets',
    },
    event: 'Tekbot Robotics Challenge',
    date: { en: 'Jan 2024', fr: 'Jan. 2024' },
    year: '2024',
    summary: {
      en: 'An autonomous robot that finds, collects and sorts waste using computer vision.',
      fr: 'Un robot autonome qui repère, collecte et trie les déchets grâce à la vision par ordinateur.',
    },
    links: [{ label: 'trc.tekbot.io', href: 'https://trc.tekbot.io', external: true }],
  },
  {
    rank: { en: '1st prize', fr: '1er prix' },
    title: {
      en: 'AI-assisted medical appointment scheduling',
      fr: 'Planification de rendez-vous médicaux assistée par IA',
    },
    event: 'Hackathon Deep Learning IndabaX Benin',
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
      en: 'Project Lead — Pôle Sud, Benin · funded by ARES Belgium (EUR 20,000)',
      fr: 'Chef de projet — Pôle Sud, Bénin · financé par l’ARES Belgique (20 000 EUR)',
    },
    period: { en: 'Oct 2024 — May 2025', fr: 'Oct. 2024 — Mai 2025' },
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
      en: 'BSc thesis — Université d’Abomey-Calavi · case study: Ministry of Foreign Affairs',
      fr: 'Mémoire de licence — Université d’Abomey-Calavi · cas du Ministère des Affaires Étrangères',
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
    name: { en: 'Tomato leaf disease detection', fr: 'Détection de maladies foliaires de la tomate' },
    year: '2024',
    tags: ['YOLOv8', 'Computer Vision', 'Python'],
    summary: {
      en: 'Real-time detection of tomato leaf disease, so growers can act on what is actually happening in the field.',
      fr: 'Détection en temps réel des maladies foliaires de la tomate, pour que les producteurs agissent sur ce qui se passe réellement au champ.',
    },
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/Tomato-Leaf-Disease-Detection-using-Yolov8',
  },
  {
    name: { en: 'Benin public-services assistant', fr: 'Assistant des services publics béninois' },
    year: '2025',
    tags: ['NLP', 'RAG', 'Python'],
    summary: {
      en: 'A retrieval-augmented chatbot letting citizens ask about Benin’s public services in plain language.',
      fr: 'Un chatbot à génération augmentée par récupération qui permet aux citoyens d’interroger les services publics béninois en langage naturel.',
    },
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics',
  },
  {
    name: { en: 'IFRI AI chatbot', fr: 'Chatbot IA de l’IFRI' },
    year: '2025',
    tags: ['NLP', 'RAG', 'Python'],
    summary: {
      en: 'A conversational assistant answering questions about IFRI, the AI institute where I studied.',
      fr: 'Un assistant conversationnel qui répond aux questions sur l’IFRI, l’institut où j’ai étudié.',
    },
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/IFRI-AI-Chatbot',
  },
  {
    name: {
      en: 'Chronic kidney disease stage prediction',
      fr: 'Prédiction du stade de la maladie rénale chronique',
    },
    year: '2025',
    tags: ['Machine Learning', 'Healthcare', 'Python'],
    summary: {
      en: 'A clinical decision-support model predicting the stage of chronic kidney disease from patient data.',
      fr: 'Un modèle d’aide au diagnostic prédisant le stade d’évolution de la maladie rénale chronique à partir de données cliniques.',
    },
  },
  {
    name: {
      en: 'Math summer camp platform',
      fr: 'Plateforme des camps d’été de mathématiques',
    },
    year: '2026',
    tags: ['TypeScript', 'Education'],
    summary: {
      en: 'The registration and organisation platform behind Benin’s mathematics summer camps for secondary-school students.',
      fr: 'La plateforme d’inscription et d’organisation derrière les camps d’été de mathématiques pour collégiens au Bénin.',
    },
    repo: 'https://github.com/Arix-ALIMAGNIDOKPO/math-summer-camp-platform',
  },
];

export const COMMUNITY: readonly CommunityItem[] = [
  {
    role: { en: 'AI Instructor', fr: 'Instructeur en Intelligence Artificielle' },
    org: 'AI & IoT Club, IFRI — Université d’Abomey-Calavi',
    period: { en: 'Jan 2024 — May 2025', fr: 'Jan. 2024 — Mai 2025' },
    detail: {
      en: 'Ran weekly workshops on AI and machine learning.',
      fr: 'Animation d’ateliers hebdomadaires sur l’IA et l’apprentissage automatique.',
    },
  },
  {
    role: { en: 'Instructor — AI tools for diplomacy', fr: 'Instructeur — outils d’IA en diplomatie' },
    org: 'Ministry of Foreign Affairs of Benin',
    orgUrl: 'https://diplomatie.gouv.bj',
    period: { en: 'Mar 2024 — May 2025', fr: 'Mar. 2024 — Mai 2025' },
    detail: {
      en: 'Designed and delivered an 8-session programme for the Directorate-General of External Relations.',
      fr: 'Conception et animation d’une formation en 8 sessions pour la Direction Générale des Relations Extérieures.',
    },
  },
  {
    role: { en: 'Local organiser', fr: 'Organisateur local' },
    org: 'Deep Learning IndabaX Benin',
    period: { en: '2025', fr: '2025' },
    detail: {
      en: 'Organised the Benin edition of the continent’s largest machine-learning gathering.',
      fr: 'Organisation de l’édition béninoise du plus grand rassemblement d’apprentissage automatique du continent.',
    },
  },
  {
    role: { en: 'Speaker', fr: 'Intervenant' },
    org: 'Benin Workshop on Artificial Intelligence (BWAI), Cotonou',
    period: { en: 'Nov 2024', fr: 'Nov. 2024' },
    detail: {
      en: 'Talk on building a speech translation model for local languages, with Fongbe as the case study.',
      fr: 'Intervention sur le développement d’un modèle de traduction vocale pour les langues locales, cas du Fongbe.',
    },
  },
  {
    role: { en: 'Participant', fr: 'Participant' },
    org: 'Deep Learning Indaba — Kigali, Rwanda',
    period: { en: 'Aug 2025', fr: 'Août 2025' },
    detail: {
      en: 'The continent’s flagship machine-learning conference.',
      fr: 'La conférence phare d’apprentissage automatique du continent.',
    },
  },
  {
    role: { en: 'Participant', fr: 'Participant' },
    org: 'Deep Learning Indaba — Dakar, Senegal',
    period: { en: 'Sep 2024', fr: 'Sep. 2024' },
    detail: {
      en: 'The continent’s flagship machine-learning conference.',
      fr: 'La conférence phare d’apprentissage automatique du continent.',
    },
  },
  {
    role: { en: 'Developer & communications', fr: 'Développeur & communication' },
    org: 'FRIARE Africa',
    orgUrl: 'https://friare.org',
    period: { en: 'Sep 2023 — Present', fr: 'Sep. 2023 — Aujourd’hui' },
    detail: {
      en: 'Projects and communication for responsible AI in Africa.',
      fr: 'Projets et actions de communication pour une IA responsable en Afrique.',
    },
  },
  {
    role: { en: 'Training commission coordinator', fr: 'Coordinateur de la commission formation' },
    org: 'Isheero',
    orgUrl: 'https://isheero.com',
    period: { en: 'Oct 2023 — Present', fr: 'Oct. 2023 — Aujourd’hui' },
    detail: {
      en: 'Planning and running training programmes and workshops.',
      fr: 'Planification, organisation et animation de programmes et d’ateliers de formation.',
    },
  },
  {
    role: { en: 'Volunteer', fr: 'Bénévole' },
    org: 'Benin Mathematics Summer Camps (IMAC Benin)',
    period: { en: 'Feb 2025 — Present', fr: 'Fév. 2025 — Aujourd’hui' },
    detail: {
      en: 'An intensive mathematics camp for secondary-school students, with an introduction to technology.',
      fr: 'Un camp intensif de mathématiques pour collégiens, avec une introduction aux nouvelles technologies.',
    },
  },
];
