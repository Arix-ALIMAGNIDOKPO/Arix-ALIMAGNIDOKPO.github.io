import React, { useState } from 'react';
import { Linkedin as LinkedIn, Github, Mail, Globe, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="w-full px-4 md:px-12 py-4 md:py-6 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Nom en italique simple */}
        <div className="text-2xl md:text-3xl font-serif text-gray-900 tracking-wide">
          <span className="italic font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Arix Alimagnidokpo
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('projects')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#research" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('research')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-3 py-1 rounded-full hover:bg-blue-50"
            >
              <Languages size={16} />
              <span className="text-sm font-bold">{language.toUpperCase()}</span>
            </button>
            
            {/* Social Links */}
            <a href="https://linkedin.com/in/alimagnidokpo" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
              <LinkedIn size={18} />
            </a>
            <a href="https://github.com/arix-alimagnidokpo" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
              <Github size={18} />
            </a>
            <a href="mailto:arixalim@gmail.com" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
              <Mail size={18} />
            </a>
            <a href="https://arix-alimagnidokpo.github.io" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
              <Globe size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-2 py-1 rounded-full hover:bg-blue-50"
          >
            <Languages size={14} />
            <span className="text-xs font-bold">{language.toUpperCase()}</span>
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-blue-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      } overflow-hidden`}>
        <div className="px-4 py-6 bg-white border-t border-gray-100 mt-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              {t('home')}
            </a>
            <a 
              href="#projects" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              {t('projects')}
            </a>
            <a 
              href="#research" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              {t('research')}
            </a>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              {t('about')}
            </a>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-center space-x-6">
                <a href="https://linkedin.com/in/alimagnidokpo" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
                  <LinkedIn size={20} />
                </a>
                <a href="https://github.com/arix-alimagnidokpo" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
                  <Github size={20} />
                </a>
                <a href="mailto:arixalim@gmail.com" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
                  <Mail size={20} />
                </a>
                <a href="https://arix-alimagnidokpo.github.io" className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;