import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ResearchSection from './components/ResearchSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorkSection />
      <ResearchSection />
      <Contact />
    </div>
  );
}

export default App;
