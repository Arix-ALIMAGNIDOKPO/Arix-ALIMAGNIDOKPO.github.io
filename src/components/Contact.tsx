import React from 'react';
import { Linkedin as LinkedIn, Github, Mail, MapPin, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full px-4 md:px-12 py-16 md:py-20 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          {t('letsCollaborate')}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
          {t('contactDescription')}
        </p>
        
        <a href="mailto:arixalim@gmail.com" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-16 inline-block shadow-lg hover:shadow-xl">
          {t('getInTouch')}
        </a>
        
        <div className="flex justify-center space-x-6 md:space-x-8 mb-12">
          <a href="https://linkedin.com/in/arix-alimagnidokpo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex flex-col items-center group">
            <div className="p-3 rounded-full bg-white/70 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
              <LinkedIn size={20} />
            </div>
            <span className="text-sm mt-2 font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/Arix-ALIMAGNIDOKPO" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex flex-col items-center group">
            <div className="p-3 rounded-full bg-white/70 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
              <Github size={20} />
            </div>
            <span className="text-sm mt-2 font-medium">GitHub</span>
          </a>
          <a href="mailto:arixalim@gmail.com" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex flex-col items-center group">
            <div className="p-3 rounded-full bg-white/70 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
              <Mail size={20} />
            </div>
            <span className="text-sm mt-2 font-medium">Email</span>
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 text-sm">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-3">
              <BookOpen size={16} className="mr-2 text-blue-600" />
              {t('researchInterests')}
            </div>
            <div className="text-gray-600 leading-relaxed">{t('researchInterestsList')}</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-3">
              <MapPin size={16} className="mr-2 text-blue-600" />
              {t('currentFocus')}
            </div>
            <div className="text-gray-600 leading-relaxed">{t('aiDiplomacy')} • {t('govInnovation')}</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-3">
              <Users size={16} className="mr-2 text-blue-600" />
              {t('community')}
            </div>
            <div className="text-gray-600 leading-relaxed">{t('communityList')}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 md:p-8 text-left hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></div>
              {t('currentPositionTitle')}
            </h3>
            <div className="text-gray-700 space-y-2">
              <div className="font-semibold text-lg">{t('aiDeveloper')}</div>
              <div className="text-blue-600 font-medium">{t('ministryFull')}</div>
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">{t('positionPeriod')}</div>
              <div className="text-sm mt-3 leading-relaxed">{t('positionDescription')}</div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 md:p-8 text-left hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-green-600 to-blue-600 rounded-full mr-3"></div>
              {t('education')}
            </h3>
            <div className="text-gray-700 space-y-2">
              <div className="font-semibold text-lg">{t('bachelorCS')}</div>
              <div className="text-gray-600">{t('aiSpecialization')}</div>
              <div className="text-blue-600 font-medium">{t('university')}</div>
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">{t('educationPeriod')}</div>
              <div className="text-sm mt-3 leading-relaxed">{t('studentRep')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;