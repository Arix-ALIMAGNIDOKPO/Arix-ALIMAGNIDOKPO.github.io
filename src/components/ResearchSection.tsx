import React from 'react';
import { Award, BookOpen, Users, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import brusselsImage from '../assets/WhatsApp Image 2025-06-15 à 02.46.40_1cd266d6.jpg';

const ResearchSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      title: "€20,000 Research Grant",
      titleFr: "Bourse de Recherche de 20 000€",
      description: "ARES-Belgium funded project on automated scheduling systems using constraint programming",
      descriptionFr: "Projet financé par ARES-Belgique sur les systèmes de planification automatisée utilisant la programmation par contraintes",
      icon: "💰",
      year: "2024-2025",
      image: brusselsImage,
      imageAlt: "Équipe de recherche à Bruxelles"
    },
    {
      title: "Deep Learning Indaba 2024",
      titleFr: "Deep Learning Indaba 2024",
      description: "Participant at Africa's largest AI conference in Dakar, Senegal",
      descriptionFr: "Participant à la plus grande conférence IA d'Afrique à Dakar, Sénégal",
      icon: "🌍",
      year: "2024",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Conférence Deep Learning Indaba"
    },
    {
      title: "SENIA 2024 Hackathon",
      titleFr: "Hackathon SENIA 2024",
      description: "2nd Place for Alodometo - Multimodal AI for Fon language",
      descriptionFr: "2ème Place pour Alodometo - IA Multimodale pour la langue Fon",
      icon: "🥈",
      year: "2024",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Hackathon SENIA 2024"
    },
    {
      title: "Teckbot Robotics Challenge",
      titleFr: "Défi Robotique Teckbot",
      description: "1st Place for autonomous waste collection robot",
      descriptionFr: "1ère Place pour robot autonome de collecte de déchets",
      icon: "🥇",
      year: "2024",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Défi Robotique Teckbot"
    }
  ];

  const researchAreas = [
    {
      title: t('nlpLowResource'),
      description: t('nlpDescription'),
      color: "from-blue-600 to-blue-700"
    },
    {
      title: t('aiSocialGood'),
      description: t('aiSocialDescription'),
      color: "from-green-600 to-green-700"
    },
    {
      title: t('ethicalAI'),
      description: t('ethicalDescription'),
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="research" className="w-full px-4 md:px-12 py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl md:rounded-3xl p-6 md:p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl">
              <div className="space-y-4 md:space-y-6">
                {/* Research Visualization */}
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
                  <div className="text-sm md:text-base mb-4 text-purple-300 font-medium">{t('researchAreas')}</div>
                  <div className="grid grid-cols-1 gap-3">
                    {researchAreas.map((area, index) => (
                      <div key={index} className={`bg-gradient-to-r ${area.color} rounded-lg p-3 hover:scale-105 transition-transform duration-300`}>
                        <div className="text-sm md:text-base font-semibold">{area.title}</div>
                        <div className="text-xs md:text-sm opacity-80">{area.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Awards showcase */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6">
                  <div className="text-sm md:text-base font-semibold text-gray-800 mb-3">{t('recentAchievements')}</div>
                  <div className="space-y-2">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-center justify-between text-xs md:text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <span className="font-medium">{(t('language') === 'fr' ? achievement.titleFr : achievement.title).split(' ').slice(0, 2).join(' ')}</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-lg">{achievement.icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 flex items-center flex-wrap">
              <span>{t('researchImpact')}</span>
              <span className="ml-3 text-4xl md:text-5xl">🔬</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              {t('researchDescription')}
            </p>
            
            <div className="space-y-6 md:space-y-8 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/95 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={achievement.image} 
                          alt={achievement.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-bold text-gray-800 text-sm md:text-base leading-tight">
                          {t('language') === 'fr' ? achievement.titleFr : achievement.title}
                        </div>
                        <div className="text-2xl md:text-3xl ml-2 group-hover:animate-bounce flex-shrink-0">
                          {achievement.icon}
                        </div>
                      </div>
                      
                      <div className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2">
                        {t('language') === 'fr' ? achievement.descriptionFr : achievement.description}
                      </div>
                      
                      <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {achievement.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <a 
                href="/cv-arix-alimagnidokpo.pdf" 
                download
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <Download size={16} className="mr-2" />
                {t('downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;