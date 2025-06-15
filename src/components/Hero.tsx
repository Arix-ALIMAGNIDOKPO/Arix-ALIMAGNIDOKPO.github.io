import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="w-full px-6 md:px-12 py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          <span className="font-light text-gray-700">Arix</span>
          <span className="mx-3 text-blue-600">•</span>
          <span className="font-bold">Alimagnidokpo</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          AI Developer passionné par le NLP pour les langues à faibles ressources et les applications d'IA éthique. 
          Je construis des technologies qui comblent les écarts culturels et autonomisent les communautés africaines.
          <span className="mx-2">🤖 🌍</span> 
          Basé à Cotonou, Bénin.
        </p>
        
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Actuellement AI Developer & Project Lead @ <a href="https://diplomatie.gouv.bj" className="text-blue-600 hover:text-blue-700 underline transition-colors duration-200">Ministère des Affaires Étrangères du Bénin</a>
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Recherche NLP</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">IA pour le Bien Social</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Langues à Faibles Ressources</span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Innovation Gouvernementale</span>
        </div>

        <div className="flex justify-center">
          <a 
            href="/cv-arix-alimagnidokpo.pdf" 
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-2" />
            Télécharger CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;