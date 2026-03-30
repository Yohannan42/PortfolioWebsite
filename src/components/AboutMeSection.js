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
      title: 'Software Developer',
      description: 'Building high-quality, user-focused applications with clean code and modern JavaScript.'
    },
    {
      icon: <FaServer className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'Full Stack & Backend',
      description: 'Designing robust APIs and scalable systems with Node.js, Express, MongoDB, and React.'
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
            Using a technical foundation to think strategically about product, prioritize what matters, and help teams build things users actually love. Passionate about turning complex problems into simple, impactful solutions through data driven thinking and a deep understanding of user needs. With an eagerness to solve problems and interact with people, I am driven to understand user needs and create solutions that genuinely make a difference.
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
              I started my journey with a curiosity for how things work, not just technically, but why things are built the way they are and who they are built for. What began as a fascination with building software quickly evolved into a deeper passion for understanding the people behind the screen and the problems worth solving in the first place.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Working across full stack applications and Agile environments gave me a unique lens. I stopped seeing products as just code and started seeing them as solutions to real human problems. The questions that excited me most were always about impact. Who does this help? Does it actually solve the right problem? How do we know it is working?
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              That shift is what drew me toward product management. I believe the best products come from teams that obsess over user needs, make decisions grounded in data, and never lose sight of the problem they set out to solve. I bring a technical foundation that helps me collaborate with engineers, combined with a genuine drive to understand users and build things that make a real difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I am not thinking about product, you will find me engaging with product communities, attending industry events, and continuously learning what it takes to build products people truly love.
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
