import React from 'react';
import { ExternalLink, Award, Users, Code, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WorkSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Alodometo - Fon Language AI Assistant",
      titleFr: "Alodometo - Assistant IA en Langue Fon",
      description: "Multimodal translation system for French-Fon translation supporting text, audio, and image inputs. Designed for digital inclusion of illiterate populations.",
      descriptionFr: "Système de traduction multimodale français-fon supportant texte, audio et images. Conçu pour l'inclusion numérique des populations illettrées.",
      achievement: "🥈 2nd Place - SENIA 2024 Hackathon",
      achievementFr: "🥈 2ème Place - Hackathon SENIA 2024",
      tech: ["NLP", "Multimodal AI", "Low-Resource Languages"],
      techFr: ["NLP", "IA Multimodale", "Langues à Faibles Ressources"],
      links: {
        demo: "https://asin.bj/article/18/hackathon-challenge-multimodal-multilingue-benin-laureats-competition-presentiel-connus/",
        article: "https://lablab.ai/event/benin-multimodal-ai-hackathon/aida/al%C9%94-do-m%C9%9B-t%C9%94-assistant-vocal-multifonctionnel"
      }
    },
    {
      title: "Strategic Intelligence Tool for Diplomacy",
      titleFr: "Outil d'Intelligence Stratégique pour la Diplomatie",
      description: "AI-powered strategic intelligence platform integrating NLP and LLMs for the Ministry of Foreign Affairs. Focuses on security, architecture, and hallucination mitigation.",
      descriptionFr: "Plateforme d'intelligence stratégique alimentée par l'IA intégrant NLP et LLMs pour le Ministère des Affaires Étrangères. Focus sur sécurité, architecture et atténuation des hallucinations.",
      achievement: "🏛️ Government Innovation Project",
      achievementFr: "🏛️ Projet d'Innovation Gouvernementale",
      tech: ["LLMs", "NLP", "Security", "Government Tech"],
      techFr: ["LLMs", "NLP", "Sécurité", "Tech Gouvernementale"],
      links: {}
    },
    {
      title: "FarmAdvisor - AI for Agriculture",
      titleFr: "FarmAdvisor - IA pour l'Agriculture",
      description: "Decision support system for farmers using AI and IoT sensors. Structured database, facilitated data collection, and implemented AI models for agricultural insights.",
      descriptionFr: "Système d'aide à la décision pour agriculteurs utilisant IA et capteurs IoT. Base de données structurée, collecte de données facilitée, et modèles IA pour insights agricoles.",
      achievement: "🌱 Agricultural Innovation",
      achievementFr: "🌱 Innovation Agricole",
      tech: ["IoT", "Machine Learning", "Agriculture", "Data Science"],
      techFr: ["IoT", "Apprentissage Automatique", "Agriculture", "Science des Données"],
      links: {
        website: "https://farmadvisor.bj"
      }
    },
    {
      title: "Autonomous Waste Collection Robot",
      titleFr: "Robot Autonome de Collecte de Déchets",
      description: "Computer vision-powered robot for autonomous waste collection and sorting. Implemented movement algorithms, trash detection, and color-based sorting.",
      descriptionFr: "Robot alimenté par vision par ordinateur pour collecte et tri autonome de déchets. Algorithmes de mouvement, détection de déchets, et tri par couleur implémentés.",
      achievement: "🥇 1st Place - Teckbot Robotics Challenge 2024",
      achievementFr: "🥇 1ère Place - Défi Robotique Teckbot 2024",
      tech: ["Computer Vision", "Robotics", "Machine Learning"],
      techFr: ["Vision par Ordinateur", "Robotique", "Apprentissage Automatique"],
      links: {
        video: "https://www.instagram.com/reel/C16igYCtHJl/"
      }
    }
  ];

  return (
    <section id="projects" className="w-full px-4 md:px-12 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center flex-wrap">
            <span>{t('featuredProjects')}</span>
            <span className="ml-3 text-4xl md:text-5xl">💡</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1 leading-tight">
                  {t('language') === 'fr' ? project.titleFr : project.title}
                </h3>
                <div className="text-2xl md:text-3xl ml-4 group-hover:animate-bounce">
                  {project.achievement.includes('1st') ? '🥇' : 
                   project.achievement.includes('2nd') ? '🥈' : 
                   project.achievement.includes('Government') ? '🏛️' : '🌱'}
                </div>
              </div>
              
              <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block mb-4 font-medium">
                {t('language') === 'fr' ? project.achievementFr : project.achievement}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                {t('language') === 'fr' ? project.descriptionFr : project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {(t('language') === 'fr' ? project.techFr : project.tech).map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                    <ExternalLink size={14} className="mr-1" />
                    {t('demo')}
                  </a>
                )}
                {project.links.website && (
                  <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                    <ExternalLink size={14} className="mr-1" />
                    {t('website')}
                  </a>
                )}
                {project.links.article && (
                  <a href={project.links.article} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                    <ExternalLink size={14} className="mr-1" />
                    {t('article')}
                  </a>
                )}
                {project.links.video && (
                  <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                    <ExternalLink size={14} className="mr-1" />
                    {t('video')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a href="https://github.com/Arix-ALIMAGNIDOKPO" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl">
            <Github size={18} className="mr-2" />
            {t('viewAllProjects')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;