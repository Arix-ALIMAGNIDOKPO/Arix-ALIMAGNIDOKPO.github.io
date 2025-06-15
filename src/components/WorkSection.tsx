import React from 'react';
import { ExternalLink, Award, Users, Code, Github } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      title: "Alodometo - Fon Language AI Assistant",
      description: "Multimodal translation system for French-Fon translation supporting text, audio, and image inputs. Designed for digital inclusion of illiterate populations.",
      achievement: "🥈 2nd Place - SENIA 2024 Hackathon",
      tech: ["NLP", "Multimodal AI", "Low-Resource Languages"],
      links: {
        demo: "https://alodometo-demo.example.com",
        article: "https://senia2024-article.example.com"
      }
    },
    {
      title: "Strategic Intelligence Tool for Diplomacy",
      description: "AI-powered strategic intelligence platform integrating NLP and LLMs for the Ministry of Foreign Affairs. Focuses on security, architecture, and hallucination mitigation.",
      achievement: "🏛️ Government Innovation Project",
      tech: ["LLMs", "NLP", "Security", "Government Tech"],
      links: {
        website: "https://diplomatie.gouv.bj"
      }
    },
    {
      title: "FarmAdvisor - AI for Agriculture",
      description: "Decision support system for farmers using AI and IoT sensors. Structured database, facilitated data collection, and implemented AI models for agricultural insights.",
      achievement: "🌱 Agricultural Innovation",
      tech: ["IoT", "Machine Learning", "Agriculture", "Data Science"],
      links: {
        website: "https://farmadvisor.bj"
      }
    },
    {
      title: "Autonomous Waste Collection Robot",
      description: "Computer vision-powered robot for autonomous waste collection and sorting. Implemented movement algorithms, trash detection, and color-based sorting.",
      achievement: "🥇 1st Place - Teckbot Robotics Challenge 2024",
      tech: ["Computer Vision", "Robotics", "Machine Learning"],
      links: {
        website: "https://trc.tekbot.io",
        video: "https://robotics-demo.example.com"
      }
    }
  ];

  return (
    <section id="projects" className="w-full px-6 md:px-12 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            Featured Projects <span className="ml-3">🚀</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From winning hackathons to leading government AI initiatives, I build solutions that make technology accessible and impactful for African communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                <div className="text-2xl ml-4">
                  {project.achievement.includes('1st') ? '🥇' : 
                   project.achievement.includes('2nd') ? '🥈' : 
                   project.achievement.includes('Government') ? '🏛️' : '🌱'}
                </div>
              </div>
              
              <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block mb-4">
                {project.achievement}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.links.demo && (
                  <a href={project.links.demo} className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
                {project.links.website && (
                  <a href={project.links.website} className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <ExternalLink size={16} className="mr-1" />
                    Website
                  </a>
                )}
                {project.links.article && (
                  <a href={project.links.article} className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <ExternalLink size={16} className="mr-1" />
                    Article
                  </a>
                )}
                {project.links.video && (
                  <a href={project.links.video} className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <ExternalLink size={16} className="mr-1" />
                    Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/arix-alimagnidokpo" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
