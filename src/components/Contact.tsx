import React from 'react';
import { Linkedin as LinkedIn, Github, Mail, Globe, MapPin, Calendar, BookOpen, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="about" className="w-full px-6 md:px-12 py-20 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Let's collaborate
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          Interested in AI research, collaboration opportunities, or discussing technology for social impact? I'd love to connect!
        </p>
        
        <a href="mailto:arixalim@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 mb-16 inline-block">
          Get in touch
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
              Research Interests
            </div>
            <div className="text-gray-600">NLP • Ethical AI • Low-resource Languages</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-2">
              <MapPin size={16} className="mr-2" />
              Current Focus
            </div>
            <div className="text-gray-600">AI for Diplomacy • Government Innovation</div>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <div className="font-semibold text-gray-800 flex items-center justify-center mb-2">
              <Users size={16} className="mr-2" />
              Community
            </div>
            <div className="text-gray-600">FRIARE Africa • Isheero • AI Education</div>
          </div>
        </div>

        <div className="bg-white/30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Current Position</h3>
          <div className="text-gray-700">
            <div className="font-semibold">AI Developer & Project Lead</div>
            <div>Ministry of Foreign Affairs of Benin</div>
            <div className="text-sm text-gray-600 mt-2">May 2025 - Present</div>
            <div className="text-sm mt-2">Leading strategic intelligence tool development with AI integration, focusing on NLP, LLMs, and security architecture.</div>
          </div>
        </div>

        <div className="bg-white/30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
          <div className="text-gray-700">
            <div className="font-semibold">Bachelor's in Computer Science</div>
            <div>Specialization in Artificial Intelligence and Applications</div>
            <div>University of Abomey-Calavi, Benin</div>
            <div className="text-sm text-gray-600 mt-2">Sept 2022 - Dec 2025 (Expected)</div>
            <div className="text-sm mt-2">Student representative for AI promotion (2022-2025)</div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600">
          Portfolio built with <span className="text-blue-600 font-medium">React & Tailwind CSS</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
