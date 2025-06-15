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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Photo de profil */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <img 
                src={profileImage} 
                alt="Arix Alimagnidokpo" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decoration autour de la photo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-bounce"></div>
          </div>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto font-light">
          {t('heroDescription')}
          <span className="mx-2 text-2xl">🤖 🌍</span> 
          <br className="hidden sm:block" />
          <span className="text-blue-600 font-medium">Basé à Cotonou, Bénin.</span>
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
            href="/cv-arix-alimagnidokpo.pdf" 
            download
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