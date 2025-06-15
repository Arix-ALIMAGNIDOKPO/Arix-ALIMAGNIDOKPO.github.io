import React from 'react';
import { Award, BookOpen, Users, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import brusselsImage from '../assets/WhatsApp Image 2025-06-15 à 02.46.40_1cd266d6.jpg';
import indabaImage from '../assets/WhatsApp Image 2025-06-15 à 03.24.40_7986c49f.jpg';
import seniaImage from '../assets/WhatsApp Image 2025-06-15 à 03.25.08_c79de833.jpg';
import tekbotImage from '../assets/WhatsApp Image 2025-06-15 à 03.25.46_d4b0f088.jpg';

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
      imageAlt: "Équipe de recherche à Bruxelles",
      location: "Brussels, Belgium"
    },
    {
      title: "Deep Learning Indaba 2024",
      titleFr: "Deep Learning Indaba 2024",
      description: "Participant at Africa's largest AI conference in Dakar, Senegal",
      descriptionFr: "Participant à la plus grande conférence IA d'Afrique à Dakar, Sénégal",
      icon: "🌍",
      year: "2024",
      image: indabaImage,
      imageAlt: "Deep Learning Indaba 2024 - Dakar, Sénégal",
      location: "Dakar, Senegal"
    },
    {
      title: "SENIA 2024 Hackathon",
      titleFr: "Hackathon SENIA 2024",
      description: "2nd Place for Alodometo - Multimodal AI for Fon language",
      descriptionFr: "2ème Place pour Alodometo - IA Multimodale pour la langue Fon",
      icon: "🥈",
      year: "2024",
      image: seniaImage,
      imageAlt: "Équipe SENIA 2024 Hackathon",
      location: "Cotonou, Benin"
    },
    {
      title: "Teckbot Robotics Challenge",
      titleFr: "Défi Robotique Teckbot",
      description: "1st Place for autonomous waste collection robot",
      descriptionFr: "1ère Place pour robot autonome de collecte de déchets",
      icon: "🥇",
      year: "2024",
      image: tekbotImage,
      imageAlt: "Teckbot Robotics Challenge 2024",
      location: "Cotonou, Benin"
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
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center flex-wrap">
            <span>{t('researchImpact')}</span>
            <span className="ml-3 text-4xl md:text-5xl animate-pulse">🔬</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            {t('researchDescription')}
          </p>

          {/* Research Areas Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {researchAreas.map((area, index) => (
              <div key={index} className={`bg-gradient-to-r ${area.color} rounded-xl p-4 md:p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className="text-base md:text-lg font-bold mb-2">{area.title}</div>
                <div className="text-sm md:text-base opacity-90">{area.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Achievements List */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-blue-100/50">
                  {/* Achievement Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-bold text-gray-800 text-lg md:text-xl leading-tight">
                          {t('language') === 'fr' ? achievement.titleFr : achievement.title}
                        </div>
                        <div className="text-3xl md:text-4xl ml-4 group-hover:animate-bounce flex-shrink-0">
                          {achievement.icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {achievement.year}
                        </div>
                        {achievement.location && (
                          <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            📍 {achievement.location}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        {t('language') === 'fr' ? achievement.descriptionFr : achievement.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievement Image */}
                  <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 relative">
                    <img 
                      src={achievement.image} 
                      alt={achievement.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 text-white w-full">
                        <div className="text-sm font-semibold">{achievement.imageAlt}</div>
                        {achievement.location && (
                          <div className="text-xs opacity-90">{achievement.location}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Research Visualization */}
          <div className="order-1 lg:order-2 sticky top-8">
            <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl md:rounded-3xl p-6 md:p-8 transform hover:rotate-1 transition-transform duration-500 shadow-xl hover:shadow-2xl">
              <div className="space-y-6 md:space-y-8">
                {/* Research Dashboard */}
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
                  <div className="text-lg md:text-xl mb-6 text-purple-300 font-bold flex items-center">
                    <span className="mr-2">📊</span>
                    {t('researchAreas')}
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {researchAreas.map((area, index) => (
                      <div key={index} className={`bg-gradient-to-r ${area.color} rounded-lg p-4 hover:scale-105 transition-transform duration-300`}>
                        <div className="text-base md:text-lg font-semibold mb-1">{area.title}</div>
                        <div className="text-sm md:text-base opacity-80">{area.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Stats Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8">
                  <div className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="mr-2">🏆</span>
                    {t('recentAchievements')}
                  </div>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{achievement.icon}</span>
                          <div>
                            <div className="font-medium text-sm md:text-base text-gray-800">
                              {(t('language') === 'fr' ? achievement.titleFr : achievement.title).split(' ').slice(0, 3).join(' ')}
                            </div>
                            <div className="text-xs text-gray-500">{achievement.year}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a 
                    href="/cv-arix-alimagnidokpo.pdf" 
                    download
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    <Download size={18} className="mr-2" />
                    {t('downloadCV')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;