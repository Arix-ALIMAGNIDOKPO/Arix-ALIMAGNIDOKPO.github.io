import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="w-full px-6 md:px-12 py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          arix alimagnidokpo.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          AI Developer & Researcher specializing in NLP for low-resource languages and ethical AI applications. 
          Building technology that bridges cultural gaps and empowers African communities.
          <span className="mx-2">🤖 🌍</span> 
          Based in Cotonou, Benin.
        </p>
        
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Currently AI Developer & Project Lead @ <a href="https://diplomatie.gouv.bj" className="text-blue-600 hover:text-blue-700 underline transition-colors duration-200">Ministry of Foreign Affairs of Benin</a>
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">NLP Research</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">AI for Social Good</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Low-Resource Languages</span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Government Innovation</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
