import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Section from './shared/Section';
import Card from './shared/Card';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const projects = {
  'To-Do List App: PlanPal': {
    title: 'PlanPal - Task Management App',
    description: 'A modern task management application with features like task categorization, due dates, and progress tracking.',
    images: [
      '/models/Todolist/Task.png',
      '/models/Todolist/CalendarView.png',
      '/models/Todolist/moodPlanpal.png'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Task categorization and filtering',
      'Calendar integration',
      'Progress tracking',
      'Mobile responsive design'
    ],
    links: {
      github: 'https://github.com/yourusername/planpal',
      live: 'https://planpal-demo.herokuapp.com'
    }
  },
  'Budget Allocation App': {
    title: 'Budget Allocation & Expense Tracker',
    description: 'A comprehensive budget management system with expense tracking and financial analytics.',
    images: [
      '/models/BudgetAllocation/BudgetApp.png',
      '/models/BudgetAllocation/Budgetallocation.png'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: [
      'Expense categorization',
      'Budget planning',
      'Financial reports',
      'Multi-currency support'
    ],
    links: {
      github: 'https://github.com/yourusername/budget-app',
      live: 'https://budget-app-demo.herokuapp.com'
    }
  },
  // Add more projects here
};

const ProjectListPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const projectParam = queryParams.get('project');

  useEffect(() => {
    if (projectParam && projects[projectParam]) {
      setSelectedProject(projects[projectParam]);
    }
  }, [projectParam]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <Section className="min-h-screen">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">{selectedProject.title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {selectedProject.description}
              </p>
            </div>

            {/* Image Carousel */}
            <div className="relative group">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technologies */}
              <Card>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FaCode className="text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Technologies</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Features */}
              <Card>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FaServer className="text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Key Features</h2>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-4">
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
              <a
                href={selectedProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="text-center text-gray-400">
            Select a project to view details
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default ProjectListPage;
    