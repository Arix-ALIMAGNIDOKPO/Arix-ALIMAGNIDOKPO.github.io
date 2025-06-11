import React from 'react';
import { Award, BookOpen, Users, ExternalLink } from 'lucide-react';

const ResearchSection = () => {
  const achievements = [
    {
      title: "€20,000 Research Grant",
      description: "ARES-Belgium funded project on automated scheduling systems using constraint programming",
      icon: "💰",
      year: "2024-2025"
    },
    {
      title: "Deep Learning Indaba 2024",
      description: "Participant at Africa's largest AI conference in Dakar, Senegal",
      icon: "🌍",
      year: "2024"
    },
    {
      title: "SENIA 2024 Hackathon",
      description: "2nd Place for Alodometo - Multimodal AI for Fon language",
      icon: "🥈",
      year: "2024"
    },
    {
      title: "Teckbot Robotics Challenge",
      description: "1st Place for autonomous waste collection robot",
      icon: "🥇",
      year: "2024"
    }
  ];

  const researchAreas = [
    {
      title: "NLP for Low-Resource Languages",
      description: "Fon, Yoruba, and other African languages",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "AI for Social Good",
      description: "Agriculture, Health, Education applications",
      color: "from-green-600 to-green-700"
    },
    {
      title: "Ethical & Responsible AI",
      description: "Bias mitigation and fairness in AI systems",
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="research" className="w-full px-6 md:px-12 py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                {/* Research Visualization */}
                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                  <div className="text-sm mb-4 text-purple-300">Research Focus Areas</div>
                  <div className="grid grid-cols-1 gap-3">
                    {researchAreas.map((area, index) => (
                      <div key={index} className={`bg-gradient-to-r ${area.color} rounded-lg p-3`}>
                        <div className="text-sm font-semibold">{area.title}</div>
                        <div className="text-xs opacity-80">{area.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Awards showcase */}
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-sm font-semibold text-gray-800 mb-3">Recent Achievements</div>
                  <div className="space-y-2">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span>{achievement.title.split(' ')[0]} {achievement.title.split(' ')[1]}</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{achievement.icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center">
              Research & Impact <span className="ml-3">🔬</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bridging the gap between cutting-edge AI research and real-world applications for African communities. My work focuses on making AI accessible, ethical, and culturally relevant.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl mt-1">{achievement.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{achievement.title}</div>
                    <div className="text-gray-600 text-sm">{achievement.description}</div>
                    <div className="text-blue-600 text-xs font-medium">{achievement.year}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://scholar.google.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center">
                <BookOpen size={18} className="mr-2" />
                View Publications
              </a>
              <a href="https://arix-alimagnidokpo.github.io" className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center">
                <ExternalLink size={18} className="mr-2" />
                Research Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;