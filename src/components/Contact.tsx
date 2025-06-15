import React from 'react';
import { Linkedin as LinkedIn, Github, Mail, Globe, MapPin, Calendar, BookOpen, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="about" className="w-full px-6 md:px-12 py-20 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Collaborons ensemble
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          Intéressé par la recherche en IA, les opportunités de collaboration, ou discuter de technologie pour l'impact social ? J'aimerais échanger avec vous !
        </p>
        
        <a href="mailto:arixalim@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 mb-16 inline-block">
          Contactez-moi
        </a>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://linkedin.com/in/alimagnidokpo" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex flex-col items-center">
            <LinkedIn size={24} />
            <span className="text-sm mt-1">LinkedIn</span>
          </a>
          <a href="https://github.com/arix-alimagnidokpo" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex flex-col items-center">
            <Github size={24} />
            <span className="text-sm mt-1">GitHub</span>
          </a>
          <a href="mailto:arixalim@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex flex-col items-center">
            <Mail size={24} />
            <span className="text-sm mt-1">Email</span>
          </a>
          <a href="https://arix-alimagnidokpo.github.io" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex flex-col items-center">
            <Globe size={24} />
            <span className="text-sm mt-1">Portfolio</span>
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm">
          <div className="bg-white/50 rounded-lg p-4">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-2">
              <BookOpen size={16} className="mr-2" />
              Intérêts de Recherche
            </div>
            <div className="text-gray-600">NLP • IA Éthique • Langues à Faibles Ressources</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-2">
              <MapPin size={16} className="mr-2" />
              Focus Actuel
            </div>
            <div className="text-gray-600">IA pour la Diplomatie • Innovation Gouvernementale</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-2">
              <Users size={16} className="mr-2" />
              Communauté
            </div>
            <div className="text-gray-600">FRIARE Africa • Masakhane • IMAC Bénin • Isheero</div>
          </div>
        </div>

        <div className="bg-white/30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Poste Actuel</h3>
          <div className="text-gray-700">
            <div className="font-semibold">AI Developer & Project Lead</div>
            <div>Ministère des Affaires Étrangères du Bénin</div>
            <div className="text-sm text-gray-600 mt-2">Mai 2025 - Présent</div>
            <div className="text-sm mt-2">Direction du développement d'outils d'intelligence stratégique avec intégration IA, focus sur NLP, LLMs, et architecture de sécurité.</div>
          </div>
        </div>

        <div className="bg-white/30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Formation</h3>
          <div className="text-gray-700">
            <div className="font-semibold">Licence en Informatique</div>
            <div>Spécialisation en Intelligence Artificielle et Applications</div>
            <div>Université d'Abomey-Calavi, Bénin</div>
            <div className="text-sm text-gray-600 mt-2">Sept 2022 - Déc 2025 (Prévu)</div>
            <div className="text-sm mt-2">Représentant étudiant pour la promotion de l'IA (2022-2025)</div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600">
          Portfolio construit avec <span className="text-blue-600 font-medium">React & Tailwind CSS</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;