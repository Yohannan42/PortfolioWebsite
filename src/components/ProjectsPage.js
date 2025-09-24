import React, { useState } from 'react';
import Section from './shared/Section';
import Card from './shared/Card';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'loan-prediction-app',
    title: 'Loan Prediction App',
    description: 'Containerized full‑stack app with ML microservice predicting approval and loan amounts.',
    image: '/models/BudgetAllocation/Screenshot 2025-03-10 at 10.28.38 PM.png',
    technologies: ['React', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT']
  },
  {
    id: 'sportsvault',
    title: 'SportsVault',
    description: 'Real‑time sports betting dashboard with league hubs, fixtures, P2P, and social.',
    image: '/models/BudgetAllocation/Sportsvault.png',
    technologies: ['React', 'TypeScript', 'Vite', 'wouter', 'Tailwind CSS', 'shadcn/ui', 'Express']
  },
  {
    id: 'bexshelf',
    title: 'BexShelf',
    description: 'Personal knowledge & creativity hub: books, journals, writing, tasks, notes, vision boards, goals.',
    image: '/models/BudgetAllocation/BexShelf.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Express', 'JWT']
  },
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
  
];

const ProjectsPage = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    // Open modal for all projects
    setOpenProjectId(projectId);
  };

  const closeModal = () => setOpenProjectId(null);

  const loanDetail = (
    <div className="space-y-6 text-gray-200">
      <p>
        A full‑stack loan prediction web app that combines a React frontend, an Express/Node.js API,
        a FastAPI machine‑learning microservice, and PostgreSQL—fully containerized with Docker and orchestrated via docker‑compose.
        It features JWT authentication, a protected dashboard, and real‑time ML predictions using trained scikit‑learn models.
      </p>
      <div>
        <h4 className="text-white font-semibold mb-2">Tech Stack</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Languages</strong>: JavaScript (ES6+), Python 3.10</li>
          <li><strong>Frontend</strong>: React (CRA), React Router, Context API; Nginx reverse proxy/static server</li>
          <li><strong>Backend API</strong>: Node.js, Express</li>
          <li><strong>ML Service</strong>: FastAPI, scikit‑learn, pandas, numpy, joblib</li>
          <li><strong>Database</strong>: PostgreSQL</li>
          <li><strong>Auth/Security</strong>: JWT (with expiration), middleware guards</li>
          <li><strong>DevOps/Infra</strong>: Docker, docker‑compose, multi‑container setup, env variables</li>
          <li><strong>Web server</strong>: Nginx</li>
          <li><strong>Misc</strong>: Uvicorn ASGI, Starlette</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Core Features</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>JWT auth flow with protected React routes and Express middleware</li>
          <li>Prediction workflow: validate → call ML API → classification/regression → persist</li>
          <li>State management with Context API and PrivateRoute</li>
          <li>PostgreSQL persistence for users and prediction history</li>
          <li>One‑command multi‑container deployment via Docker Compose</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Architecture</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>React → Node/Express (REACT_APP_API_URL)</li>
          <li>Node/Express → PostgreSQL and FastAPI ML service (internal Docker network)</li>
          <li>FastAPI runs trained scikit‑learn models and serves predictions</li>
          <li>Nginx serves React build and proxies traffic inside the frontend container</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Portfolio Highlights</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Separate Node API and Python ML microservice with clean interfaces</li>
          <li>End‑to‑end ML integration with real trained models (joblib)</li>
          <li>Security best practices with JWT and server‑side guards</li>
          <li>Scalable, maintainable architecture with independent services</li>
        </ul>
      </div>
    </div>
  );

  const sportsvaultDetail = (
    <div className="space-y-4 text-gray-200">
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-2">Highlight</h4>
        <p className="text-sm">
          Real‑time sports dashboard with league hubs, live + 7‑day fixtures, bet slip, and favorites. Built mobile‑first with React/TypeScript and a secure Express proxy to API‑Football.
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-4 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-1">Role</h4>
          <p>Full‑stack React/TypeScript</p>
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">What it includes</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Live games and upcoming fixtures (7 days)</li>
          <li>League hubs with Overview/Live/Upcoming</li>
          <li>Bet slip and Bet Builder, favorites</li>
          <li>In‑app API config and i18n</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">Tech</h4>
        <p className="text-sm">React 18, TypeScript, Vite, Tailwind, shadcn/ui, wouter, Express proxy</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">Architecture</h4>
        <p className="text-sm">React client calls a Node/Express proxy → API‑Football; normalized models and localStorage API config; lightweight routing with wouter; state via contexts/hooks.</p>
      </div>
    </div>
  );

  const bexshelfDetail = (
    <div className="space-y-4 text-gray-200">
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-2">Highlight</h4>
        <p className="text-sm">A secure, personal workspace for reading, journaling, writing, tasks, notes, vision boards, and reading goals. Built for everyday use.</p>
      </div>
      <div className="grid md:grid-cols-1 gap-4 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-1">Role</h4>
          <p>Full‑stack React/TypeScript</p>
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">What it includes</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Books: upload/read PDFs, progress & stats</li>
          <li>Journals & Writing Studio with focused editor</li>
          <li>Tasks Kanban (drag‑and‑drop)</li>
          <li>Notes & quick notes with pin/search</li>
          <li>Vision boards by month, image uploads</li>
          <li>Annual reading goals tracking</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">Tech</h4>
        <p className="text-sm">React 18, TypeScript, Vite, Tailwind, shadcn/ui, React Router, React Query, Express, JWT</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">Architecture</h4>
        <p className="text-sm">Client talks to an Express API; JSON storage + uploads. Routes are protected with JWT; each user sees only their data.</p>
      </div>
    </div>
  );

  // Concise details for remaining projects
  const budgetDetail = (
    <div className="space-y-3 text-gray-200">
      <h4 className="text-white font-semibold">Overview</h4>
      <p className="text-sm">Personal finance app with budgets, categories, and analytics for spending trends.</p>
      <h4 className="text-white font-semibold">Features</h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Create/edit budgets and categories</li>
        <li>Track expenses with charts</li>
        <li>Auth and secure user data</li>
      </ul>
      <h4 className="text-white font-semibold">Tech</h4>
      <p className="text-sm">React, Node/Express, MongoDB, Charting libs</p>
    </div>
  );

  const planpalDetail = (
    <div className="space-y-3 text-gray-200">
      <h4 className="text-white font-semibold">Overview</h4>
      <p className="text-sm">Task manager with calendar, mood tracking, and productivity insights.</p>
      <h4 className="text-white font-semibold">Features</h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Tasks with due dates and labels</li>
        <li>Calendar view and reminders</li>
        <li>Mood tracker with insights</li>
      </ul>
      <h4 className="text-white font-semibold">Tech</h4>
      <p className="text-sm">React, TypeScript, Firebase, Tailwind</p>
    </div>
  );

  const splitDetail = (
    <div className="space-y-3 text-gray-2 00">
      <h4 className="text-white font-semibold">Overview</h4>
      <p className="text-sm">Group expense splitter with real‑time totals and settle‑up flows.</p>
      <h4 className="text-white font-semibold">Features</h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Add bills, participants, and tips</li>
        <li>Real‑time split and balances</li>
        <li>Export/share summaries</li>
      </ul>
      <h4 className="text-white font-semibold">Tech</h4>
      <p className="text-sm">React, Socket.io, Node, MongoDB</p>
    </div>
  );

  const musicDetail = (
    <div className="space-y-3 text-gray-200">
      <h4 className="text-white font-semibold">Overview</h4>
      <p className="text-sm">ML‑driven recommendations using listening history and Spotify metadata.</p>
      <h4 className="text-white font-semibold">Features</h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Model training and evaluation</li>
        <li>User preference tuning</li>
        <li>Playlist suggestion</li>
      </ul>
      <h4 className="text-white font-semibold">Tech</h4>
      <p className="text-sm">Python, TensorFlow, Spotify API, Flask</p>
    </div>
  );

  const dataminingDetail = (
    <div className="space-y-3 text-gray-200">
      <h4 className="text-white font-semibold">Overview</h4>
      <p className="text-sm">Data mining analyses with statistical models and visualizations.</p>
      <h4 className="text-white font-semibold">Features</h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Feature engineering and model selection</li>
        <li>Evaluation with cross‑validation</li>
        <li>Plots for insights</li>
      </ul>
      <h4 className="text-white font-semibold">Tech</h4>
      <p className="text-sm">Python, Pandas, Scikit‑learn, Matplotlib</p>
    </div>
  );

  const bookDetail = (
    <div className="space-y-3 text-gray-200">
      <h4 className="text-white font-semibold">Overview</h4>
      <p className="text-sm">Full‑stack platform for book reviews with auth and rating system.</p>
      <h4 className="text-white font-semibold">Features</h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>User auth and profiles</li>
        <li>Create/read reviews and ratings</li>
        <li>Browse and search catalog</li>
      </ul>
      <h4 className="text-white font-semibold">Tech</h4>
      <p className="text-sm">React, Node/Express, MongoDB, JWT</p>
    </div>
  );

  const detailsById = {
    'loan-prediction-app': loanDetail,
    'sportsvault': sportsvaultDetail,
    'bexshelf': bexshelfDetail,
    'budget-allocation-app': budgetDetail,
    'planpal-task-management': planpalDetail,
    'bill-splitter-app': splitDetail,
    'music-recommendation-engine': musicDetail,
    'data-mining-project': dataminingDetail,
    'book-review-platform': bookDetail,
  };

  return (
    <Section className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing various technologies and solutions
          </p>
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
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="space-y-4">
                  {/* Project Media */}
                  {project.id !== 'loan-prediction-app' ? (
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
                  ) : (
                    <div className="rounded-lg aspect-video bg-gradient-to-br from-gray-800 to-gray-700 border border-white/10 flex items-center justify-center text-gray-300">
                      <span className="text-sm">Loan Prediction App</span>
                    </div>
                  )}

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      View details
                    </button>
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

        <AnimatePresence>
          {openProjectId && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-w-4xl w-full bg-gray-900 text-white rounded-2xl p-6 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const current = projects.find(p => p.id === openProjectId);
                  return (
                    <>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold">{current?.title}</h3>
                        <button onClick={closeModal} className="text-gray-300 hover:text-white">✕</button>
                      </div>
                      {openProjectId !== 'loan-prediction-app' && current?.image && (
                        <img src={current.image} alt={current.title} className="w-full rounded-lg mb-6" />
                      )}
                      {detailsById[openProjectId]}
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default ProjectsPage;
