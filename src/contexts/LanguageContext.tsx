import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    home: 'Accueil',
    projects: 'Projets',
    research: 'Recherche',
    about: 'À propos',
    
    // Hero
    heroDescription: 'AI Developer passionné par le NLP pour les langues à faibles ressources et les applications d\'IA éthique. Je construis des technologies qui comblent les écarts culturels et autonomisent les communautés africaines.',
    currentPosition: 'Actuellement AI Developer & Project Lead @',
    ministry: 'Ministère des Affaires Étrangères du Bénin',
    downloadCV: 'Télécharger CV',
    
    // Tags
    nlpResearch: 'Recherche NLP',
    aiForGood: 'IA pour le Bien Social',
    lowResourceLang: 'Langues à Faibles Ressources',
    govInnovation: 'Innovation Gouvernementale',
    
    // Projects
    featuredProjects: 'Projets Phares',
    projectsDescription: 'Des hackathons gagnants aux initiatives gouvernementales d\'IA, je construis des solutions qui rendent la technologie accessible et impactante pour les communautés africaines.',
    viewAllProjects: 'Voir Tous les Projets sur GitHub',
    demo: 'Démo',
    website: 'Site Web',
    article: 'Article',
    video: 'Vidéo',
    
    // Research
    researchImpact: 'Recherche & Impact',
    researchDescription: 'Passionné par la recherche en IA, je travaille à combler le fossé entre la recherche de pointe et les applications concrètes pour les communautés africaines. Mon travail se concentre sur rendre l\'IA accessible, éthique et culturellement pertinente.',
    researchAreas: 'Domaines de Recherche',
    recentAchievements: 'Réalisations Récentes',
    completePortfolio: 'Portfolio Complet',
    
    // Contact
    letsCollaborate: 'Collaborons ensemble',
    contactDescription: 'Intéressé par la recherche en IA, les opportunités de collaboration, ou discuter de technologie pour l\'impact social ? J\'aimerais échanger avec vous !',
    getInTouch: 'Contactez-moi',
    researchInterests: 'Intérêts de Recherche',
    currentFocus: 'Focus Actuel',
    community: 'Communauté',
    currentPositionTitle: 'Poste Actuel',
    education: 'Formation',
    builtWith: 'Portfolio construit avec',
    
    // Position details
    aiDeveloper: 'AI Developer & Project Lead',
    ministryFull: 'Ministère des Affaires Étrangères du Bénin',
    positionPeriod: 'Mai 2025 - Présent',
    positionDescription: 'Direction du développement d\'outils d\'intelligence stratégique avec intégration IA, focus sur NLP, LLMs, et architecture de sécurité.',
    
    // Education details
    bachelorCS: 'Licence en Informatique',
    aiSpecialization: 'Spécialisation en Intelligence Artificielle et Applications',
    university: 'Université d\'Abomey-Calavi, Bénin',
    educationPeriod: 'Sept 2022 - Déc 2025 (Prévu)',
    studentRep: 'Représentant étudiant pour la promotion de l\'IA (2022-2025)',
    
    // Research areas
    nlpLowResource: 'NLP pour Langues à Faibles Ressources',
    nlpDescription: 'Fon, Yoruba, et autres langues africaines',
    aiSocialGood: 'IA pour le Bien Social',
    aiSocialDescription: 'Applications Agriculture, Santé, Éducation',
    ethicalAI: 'IA Éthique & Responsable',
    ethicalDescription: 'Atténuation des biais et équité dans les systèmes IA',
    
    // Focus areas
    aiDiplomacy: 'IA pour la Diplomatie',
    communityList: 'FRIARE Africa • Masakhane • IMAC Bénin • Isheero',
    researchInterestsList: 'NLP • IA Éthique • Langues à Faibles Ressources'
  },
  en: {
    // Header
    home: 'Home',
    projects: 'Projects',
    research: 'Research',
    about: 'About',
    
    // Hero
    heroDescription: 'AI Developer passionate about NLP for low-resource languages and ethical AI applications. Building technology that bridges cultural gaps and empowers African communities.',
    currentPosition: 'Currently AI Developer & Project Lead @',
    ministry: 'Ministry of Foreign Affairs of Benin',
    downloadCV: 'Download CV',
    
    // Tags
    nlpResearch: 'NLP Research',
    aiForGood: 'AI for Social Good',
    lowResourceLang: 'Low-Resource Languages',
    govInnovation: 'Government Innovation',
    
    // Projects
    featuredProjects: 'Featured Projects',
    projectsDescription: 'From winning hackathons to leading government AI initiatives, I build solutions that make technology accessible and impactful for African communities.',
    viewAllProjects: 'View All Projects on GitHub',
    demo: 'Demo',
    website: 'Website',
    article: 'Article',
    video: 'Video',
    
    // Research
    researchImpact: 'Research & Impact',
    researchDescription: 'Passionate about AI research, I work to bridge the gap between cutting-edge research and real-world applications for African communities. My work focuses on making AI accessible, ethical, and culturally relevant.',
    researchAreas: 'Research Focus Areas',
    recentAchievements: 'Recent Achievements',
    completePortfolio: 'Complete Portfolio',
    
    // Contact
    letsCollaborate: 'Let\'s collaborate',
    contactDescription: 'Interested in AI research, collaboration opportunities, or discussing technology for social impact? I\'d love to connect!',
    getInTouch: 'Get in touch',
    researchInterests: 'Research Interests',
    currentFocus: 'Current Focus',
    community: 'Community',
    currentPositionTitle: 'Current Position',
    education: 'Education',
    builtWith: 'Portfolio built with',
    
    // Position details
    aiDeveloper: 'AI Developer & Project Lead',
    ministryFull: 'Ministry of Foreign Affairs of Benin',
    positionPeriod: 'May 2025 - Present',
    positionDescription: 'Leading strategic intelligence tool development with AI integration, focusing on NLP, LLMs, and security architecture.',
    
    // Education details
    bachelorCS: 'Bachelor\'s in Computer Science',
    aiSpecialization: 'Specialization in Artificial Intelligence and Applications',
    university: 'University of Abomey-Calavi, Benin',
    educationPeriod: 'Sept 2022 - Dec 2025 (Expected)',
    studentRep: 'Student representative for AI promotion (2022-2025)',
    
    // Research areas
    nlpLowResource: 'NLP for Low-Resource Languages',
    nlpDescription: 'Fon, Yoruba, and other African languages',
    aiSocialGood: 'AI for Social Good',
    aiSocialDescription: 'Agriculture, Health, Education applications',
    ethicalAI: 'Ethical & Responsible AI',
    ethicalDescription: 'Bias mitigation and fairness in AI systems',
    
    // Focus areas
    aiDiplomacy: 'AI for Diplomacy',
    communityList: 'FRIARE Africa • Masakhane • IMAC Benin • Isheero',
    researchInterestsList: 'NLP • Ethical AI • Low-resource Languages'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};