import React from 'react';
import { Linkedin as LinkedIn, Github, Mail, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full px-6 md:px-12 py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-4xl md:text-5xl font-serif italic text-gray-800">
          Arix Alimagnidokpo
        </div>
        
        <nav className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Projects</a>
            <a href="#research" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Research</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">About</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/in/alimagnidokpo" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <LinkedIn size={20} />
            </a>
            <a href="https://github.com/arix-alimagnidokpo" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="mailto:arixalim@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <Mail size={20} />
            </a>
            <a href="https://arix-alimagnidokpo.github.io" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <Globe size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
