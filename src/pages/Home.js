import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import ProjectsPage from '../components/ProjectsPage';
import SkillsPage from '../components/SkillsPage';
import ExperiencePage from '../components/ExperiencePage';
import Section from '../components/shared/Section';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <HeroSection />
      
      <div className="space-y-24">
        <AboutMeSection />
        <ExperiencePage />
        <ProjectsPage />
        <SkillsPage />

        <Section id="contact" className="py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/yohannan-woldesemayat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/5 rounded-full 
                  hover:bg-blue-50 dark:hover:bg-white/10 transition-colors group"
              >
                <FaLinkedin className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-900 dark:text-white">LinkedIn</span>
              </a>

              <a
                href="mailto:yohannanwol@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/5 rounded-full 
                  hover:bg-red-50 dark:hover:bg-white/10 transition-colors group"
              >
                <FaEnvelope className="text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-900 dark:text-white">Email</span>
              </a>

              <a
                href="https://github.com/Yohannan42"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/5 rounded-full 
                  hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group"
              >
                <FaGithub className="text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
                <span className="text-gray-900 dark:text-white">GitHub</span>
              </a>

              <a
                href="https://docs.google.com/document/d/1dzJ32qAheveoV8nLK4OhiQtuMOglBT9ltf3HAe16rmI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/5 rounded-full 
                  hover:bg-green-50 dark:hover:bg-white/10 transition-colors group"
              >
                <FaFileAlt className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-900 dark:text-white">Resume</span>
              </a>
            </div>
          </div>
        </Section>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-colors z-50
            ${isDark 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-white text-blue-600 hover:bg-blue-50'}`}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
