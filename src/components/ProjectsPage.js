import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './shared/Section';
import Card from './shared/Card';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'budget-allocation-app',
    title: 'Budget Allocation App',
    description: 'A comprehensive budget management system with expense tracking, financial analytics, and real-time budget monitoring.',
    image: '/models/BudgetAllocation/Budgetallocation.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'planpal-task-management',
    title: 'PlanPal - Task Management',
    description: 'A modern task management application with mood tracking, calendar integration, and productivity analytics.',
    image: '/models/Todolist/Task.png',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS']
  },
  {
    id: 'bill-splitter-app',
    title: 'Bill Splitter App',
    description: 'A collaborative expense splitting application for groups with real-time calculations and payment tracking.',
    image: '/models/BudgetAllocation/BSplitter1.png',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB']
  },
  {
    id: 'music-recommendation-engine',
    title: 'Music Recommendation Engine',
    description: 'An AI-powered music recommendation system using machine learning algorithms and Spotify API integration.',
    image: '/models/BudgetAllocation/musicrec.png',
    technologies: ['Python', 'TensorFlow', 'Spotify API', 'Flask']
  },
  {
    id: 'data-mining-project',
    title: 'Data Mining Project',
    description: 'Advanced data analysis and mining project with statistical modeling and predictive analytics.',
    image: '/models/BudgetAllocation/datamining.png',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib']
  },
  {
    id: 'book-review-platform',
    title: 'Book Review Platform',
    description: 'A full-stack book review and recommendation platform with user authentication and rating system.',
    image: '/models/BudgetAllocation/Bookreview.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    id: 'goldman-sachs-virtual-experience',
    title: 'Goldman Sachs Virtual Experience',
    description: 'Password security analysis project using Hashcat for vulnerability assessment and security recommendations.',
    image: '/models/BudgetAllocation/GoldmanS.png',
    technologies: ['Python', 'Hashcat', 'Security Analysis', 'Cryptography']
  },
  {
    id: 'ibm-full-stack-development',
    title: 'IBM Full Stack Development',
    description: 'Comprehensive full-stack development project with cloud deployment and CI/CD pipeline implementation.',
    image: '/models/BudgetAllocation/Ibm.png',
    technologies: ['React', 'Node.js', 'Docker', 'Kubernetes']
  },
  {
    id: 'verizon-cloud-computing',
    title: 'Verizon Cloud Computing',
    description: 'Cloud-native application testing and VPN compliance verification for enterprise security.',
    image: '/models/BudgetAllocation/VerizonJ.png',
    technologies: ['Python', 'Cloud Security', 'VPN Testing', 'AWS']
  }
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    console.log('Project clicked:', projectId);
    alert(`Clicked on project: ${projectId}`);
    navigate(`/project/${projectId}`);
  };

  return (
    <Section className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing various technologies and solutions
          </p>
          <button 
            onClick={() => {
              console.log('Test button clicked');
              alert('Test button works!');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Test Button
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="h-full group cursor-pointer"
                onClick={() => {
                  console.log('Card clicked for project:', project.id);
                  alert(`Card clicked for project: ${project.id}`);
                  handleProjectClick(project.id);
                }}
              >
                <div className="space-y-4">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                      <div className="text-white text-sm font-medium">
                        Click to view details
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsPage;
