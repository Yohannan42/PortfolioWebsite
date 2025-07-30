import React from 'react';
import Section from './shared/Section';
import Card from './shared/Card';
import { FaCode, FaServer, FaCloud, FaLaptopCode, FaFileAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const AboutMeSection = () => {
  const { isDark } = useTheme();
  
  const highlights = [
    {
      icon: <FaCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'Full Stack Development',
      description: 'Building complete web applications with React, Node.js, and modern JavaScript frameworks.'
    },
    {
      icon: <FaServer className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'Backend Engineering',
      description: 'Developing robust APIs and server-side applications with Express, MongoDB, and Python.'
    },
    {
      icon: <FaCloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'DevOps & Cloud',
      description: 'Deploying applications with Docker, CI/CD pipelines, and cloud platforms like AWS.'
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'Machine Learning',
      description: 'Integrating ML models for predictive analytics and intelligent application features.'
    }
  ];

  return (
    <Section className="relative">
      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with a strong foundation in full-stack development and a keen interest in creating innovative solutions. My journey in tech has been driven by curiosity and a desire to build applications that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="transform hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-white/5"
            >
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-white/5">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I started my programming journey with a curiosity for how things work on the web. From building simple HTML pages to developing complex full-stack applications, I've always been fascinated by the process of turning ideas into functional software.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My experience spans from creating responsive user interfaces to designing scalable backend systems. I've worked on projects ranging from task management applications to credit scoring systems with machine learning integration. Each project has taught me something new about clean code, efficient algorithms, and the importance of user experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving into the latest developments in software engineering. I believe in continuous learning and staying adaptable in this ever-evolving field.
            </p>
          </div>
        </Card>

        <div className="text-center">
          <a
            href="https://docs.google.com/document/d/1dzJ32qAheveoV8nLK4OhiQtuMOglBT9ltf3HAe16rmI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full 
              hover:bg-blue-700 transition-all transform hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <FaFileAlt className="text-xl" />
            <span>View Resume</span>
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 opacity-30 ${
          isDark ? 'bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900' 
          : 'bg-gradient-to-b from-blue-50 via-white to-blue-50'
        }`}></div>
      </div>
    </Section>
  );
};

export default AboutMeSection;
