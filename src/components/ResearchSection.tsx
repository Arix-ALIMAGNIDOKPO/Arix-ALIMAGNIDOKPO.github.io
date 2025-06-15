import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import brusselsImage from '../assets/WhatsApp Image 2025-06-15 à 02.46.40_1cd266d6.jpg';
import indabaImage from '../assets/WhatsApp Image 2025-06-15 à 03.24.40_7986c49f.jpg';
import seniaImage from '../assets/WhatsApp Image 2025-06-15 à 03.25.08_c79de833.jpg';
import tekbotImage from '../assets/WhatsApp Image 2025-06-15 à 03.25.46_d4b0f088.jpg';

const ResearchSection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      location: "Brussels, Belgium",
      links: {
        report: "https://drive.google.com/file/d/1-Gvfhg6tx0iJ2oLRCVQDFB3oLtd_2TlI/view?usp=sharing"
      }
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
      location: "Cotonou, Benin",
      links: {
        article: "https://asin.bj/article/18/hackathon-challenge-multimodal-multilingue-benin-laureats-competition-presentiel-connus/"
      }
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
      location: "Cotonou, Benin",
      links: {
        video: "https://www.instagram.com/reel/C16igYCtHJl/"
      }
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

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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

        {/* Achievements Section - Full Width */}
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

                  {/* Links */}
                  {achievement.links && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {achievement.links.report && (
                        <a href={achievement.links.report} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                          <ExternalLink size={14} className="mr-1" />
                          {t('language') === 'fr' ? 'Rapport' : 'Report'}
                        </a>
                      )}
                      {achievement.links.article && (
                        <a href={achievement.links.article} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                          <ExternalLink size={14} className="mr-1" />
                          {t('language') === 'fr' ? 'Article' : 'Article'}
                        </a>
                      )}
                      {achievement.links.video && (
                        <a href={achievement.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-all duration-300 hover:underline">
                          <ExternalLink size={14} className="mr-1" />
                          {t('language') === 'fr' ? 'Vidéo' : 'Video'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Achievement Image - Clickable with better face visibility */}
              <div 
                className="w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 relative cursor-pointer"
                onClick={() => openImageModal(achievement.image)}
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Click indicator */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <ExternalLink size={24} className="text-gray-700" />
                  </div>
                </div>
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="text-lg font-semibold">{achievement.imageAlt}</div>
                    {achievement.location && (
                      <div className="text-sm opacity-90">{achievement.location}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchSection;