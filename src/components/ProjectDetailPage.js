import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectDetails = {
  'budget-allocation-app': {
    title: 'Budget Allocation App',
    description: 'A comprehensive budget management system with expense tracking, financial analytics, and real-time budget monitoring.',
    longDescription: 'This full-stack application helps users manage their personal finances effectively. The system provides real-time budget tracking, expense categorization, and financial analytics to help users make informed financial decisions.',
    image: '/models/BudgetAllocation/Budgetallocation.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    features: [
      'Real-time budget tracking and monitoring',
      'Expense categorization and filtering',
      'Financial analytics and reporting',
      'User authentication and data security',
      'Responsive design for mobile and desktop',
      'Interactive charts and visualizations'
    ],
    challenges: [
      'Implementing real-time data synchronization',
      'Optimizing database queries for large datasets',
      'Creating intuitive user interface for financial data',
      'Ensuring data security and privacy compliance'
    ],
    solutions: [
      'Used WebSocket connections for real-time updates',
      'Implemented database indexing and query optimization',
      'Designed user-friendly interface with clear data visualization',
      'Implemented JWT authentication and data encryption'
    ],
    github: 'https://github.com/Yohannan42/budget-allocation-app',
    live: 'https://budget-app-demo.herokuapp.com'
  },
  'planpal-task-management': {
    title: 'PlanPal - Task Management',
    description: 'A modern task management application with mood tracking, calendar integration, and productivity analytics.',
    longDescription: 'PlanPal is a comprehensive productivity tool that combines traditional task management with mood tracking and calendar integration. The app helps users maintain work-life balance while improving productivity.',
    image: '/models/Todolist/Task.png',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    features: [
      'Task creation and categorization',
      'Mood tracking and analytics',
      'Calendar integration and scheduling',
      'Productivity insights and reports',
      'Real-time collaboration features',
      'Mobile-responsive design'
    ],
    challenges: [
      'Integrating mood tracking with task management',
      'Implementing real-time collaboration',
      'Creating intuitive calendar interface',
      'Optimizing performance for large task lists'
    ],
    solutions: [
      'Designed unified data model for tasks and moods',
      'Used Firebase real-time database for collaboration',
      'Created custom calendar component with drag-and-drop',
      'Implemented virtual scrolling for performance'
    ],
    github: 'https://github.com/Yohannan42/planpal-task-manager',
    live: 'https://planpal-demo.netlify.app'
  },
  'bill-splitter-app': {
    title: 'Bill Splitter App',
    description: 'A collaborative expense splitting application for groups with real-time calculations and payment tracking.',
    longDescription: 'This application simplifies group expenses by providing real-time bill splitting calculations, payment tracking, and expense history. Perfect for roommates, friends, or any group sharing expenses.',
    image: '/models/BudgetAllocation/BSplitter1.png',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    features: [
      'Real-time bill splitting calculations',
      'Group expense management',
      'Payment tracking and history',
      'Multiple payment methods support',
      'Expense categorization',
      'Real-time notifications'
    ],
    challenges: [
      'Implementing real-time calculations',
      'Managing complex group payment scenarios',
      'Ensuring data consistency across users',
      'Creating intuitive group management interface'
    ],
    solutions: [
      'Used Socket.io for real-time updates',
      'Designed flexible payment calculation algorithms',
      'Implemented database transactions for consistency',
      'Created user-friendly group management UI'
    ],
    github: 'https://github.com/Yohannan42/bill-splitter',
    live: 'https://bill-splitter-demo.herokuapp.com'
  },
  'music-recommendation-engine': {
    title: 'Music Recommendation Engine',
    description: 'An AI-powered music recommendation system using machine learning algorithms and Spotify API integration.',
    longDescription: 'This machine learning project analyzes user listening patterns and preferences to provide personalized music recommendations. The system integrates with Spotify API to access user data and provide accurate recommendations.',
    image: '/models/BudgetAllocation/musicrec.png',
    technologies: ['Python', 'TensorFlow', 'Spotify API', 'Flask', 'Pandas'],
    features: [
      'Personalized music recommendations',
      'Machine learning model training',
      'Spotify API integration',
      'User preference analysis',
      'Recommendation accuracy metrics',
      'Web interface for recommendations'
    ],
    challenges: [
      'Processing large datasets of music preferences',
      'Optimizing recommendation algorithms',
      'Integrating with Spotify API securely',
      'Balancing recommendation diversity and accuracy'
    ],
    solutions: [
      'Used efficient data processing with Pandas',
      'Implemented collaborative filtering algorithms',
      'Secured API integration with OAuth 2.0',
      'Applied diversity metrics to recommendations'
    ],
    github: 'https://github.com/Yohannan42/music-recommender',
    live: 'https://music-recommender-demo.herokuapp.com'
  },
  'data-mining-project': {
    title: 'Data Mining Project',
    description: 'Advanced data analysis and mining project with statistical modeling and predictive analytics.',
    longDescription: 'This comprehensive data mining project demonstrates various techniques for extracting insights from large datasets. The project includes data preprocessing, statistical analysis, and predictive modeling.',
    image: '/models/BudgetAllocation/datamining.png',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'NumPy'],
    features: [
      'Data preprocessing and cleaning',
      'Statistical analysis and modeling',
      'Predictive analytics',
      'Data visualization',
      'Feature engineering',
      'Model evaluation and validation'
    ],
    challenges: [
      'Handling missing and inconsistent data',
      'Selecting appropriate algorithms for different datasets',
      'Interpreting complex statistical results',
      'Optimizing model performance'
    ],
    solutions: [
      'Implemented robust data cleaning pipelines',
      'Used cross-validation for model selection',
      'Created comprehensive visualization tools',
      'Applied hyperparameter tuning techniques'
    ],
    github: 'https://github.com/Yohannan42/data-mining-project',
    live: 'https://data-mining-demo.herokuapp.com'
  }
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  console.log('ProjectDetailPage rendered with projectId:', projectId);
  console.log('Available projects:', Object.keys(projectDetails));
  
  const project = projectDetails[projectId];

  if (!project) {
    console.log('Project not found for ID:', projectId);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-4">Project ID: {projectId}</p>
          <button
            onClick={() => navigate('/projects')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors mb-4"
          >
            <FaArrowLeft />
            Back to Projects
          </button>
          
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 max-w-4xl">{project.longDescription}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Features */}
            <div className="p-6 rounded-xl bg-gray-800/50">
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gray-800/50">
                <h2 className="text-xl font-bold text-white mb-4">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-red-400 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gray-800/50">
                <h2 className="text-xl font-bold text-white mb-4">Solutions</h2>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 mt-1">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="p-6 rounded-xl bg-gray-800/50">
              <h2 className="text-xl font-bold text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="p-6 rounded-xl bg-gray-800/50">
              <h2 className="text-xl font-bold text-white mb-4">Project Links</h2>
              <div className="space-y-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub />
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 