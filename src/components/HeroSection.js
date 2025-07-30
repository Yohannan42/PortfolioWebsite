import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 animate-gradient"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          {/* Profile Image - Always Visible */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <img
              src="/models/BudgetAllocation/Yoo.png"
              alt="Yohannan Woldesemayat"
              className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 blur-sm"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slideDown">
            Yohannan Woldesemayat
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-slideUp">
            Full Stack Developer & Cloud Engineer
          </p>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 animate-fadeIn">
            Building scalable applications and solving complex problems with modern technologies.
            Passionate about creating efficient, user-friendly solutions that make a difference.
          </p>

          <div className="flex justify-center gap-6 mb-12 animate-fadeIn">
            <a
              href="https://github.com/Yohannan42"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yohannan-woldesemayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:yohannanwol@gmail.com"
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="flex justify-center gap-4 animate-slideUp">
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-transparent border-2 border-blue-600 text-white rounded-full hover:bg-blue-600/20 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
