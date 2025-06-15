import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/WhatsApp Image 2025-06-15 à 02.26.39_af9588da.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="w-full px-4 md:px-12 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 sm:-top-40 sm:-right-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 sm:-bottom-40 sm:-left-40 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Photo de profil - affichage complet optimisé */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <div className="relative group">
            {/* Cercles décoratifs en arrière-plan */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            
            {/* Photo principale - format rectangulaire pour afficher toute la photo */}
            <div className="relative w-48 aspect-[4/3] sm:w-56 md:w-64 lg:w-72 rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 group-hover:rotate-1">
              <img
                src={profileImage}
                alt="Arix Alimagnidokpo"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 md:object-contain md:object-center"
              />
              {/* Overlay subtil au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Éléments décoratifs flottants */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg animate-bounce delay-100"></div>
            <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-lg animate-bounce delay-300"></div>
            <div className="absolute top-1/3 -right-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute bottom-1/3 -left-6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg animate-bounce delay-500"></div>
          </div>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto font-light">
          {t('heroDescription')}
          <span className="mx-2 text-2xl">🤖 🌍</span> 
          <br className="hidden sm:block" />
          <span className="text-blue-600 font-medium">{t('basedIn')}</span>
        </p>
        
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 font-medium">
          {t('currentPosition')} <a href="https://diplomatie.gouv.bj" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-blue-700">
            {t('ministry')}
          </a>
        </p>

        {/* Tags avec animation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base text-gray-600 mb-10 md:mb-12">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">
            {t('nlpResearch')}
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 transform hover:scale-105">
            {t('aiForGood')}
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium hover:bg-purple-200 transition-all duration-300 transform hover:scale-105">
            {t('lowResourceLang')}
          </span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium hover:bg-orange-200 transition-all duration-300 transform hover:scale-105">
            {t('govInnovation')}
          </span>
        </div>

        {/* CTA Button avec design premium */}
        <div className="flex justify-center">
          <a
            href={`${import.meta.env.BASE_URL}cv-arix-alimagnidokpo.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <Download size={20} className="mr-3 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">{t('downloadCV')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;