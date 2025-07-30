import React, { useState } from 'react';
import Section from './shared/Section';
import Card from './shared/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaTasks, FaTools, FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';

const experiences = [
  {
    company: 'Goozam Technologies Inc.',
    role: 'Software Developer Intern',
    period: 'November 2024 - Present',
    description: 'As a Software Developer Intern at Goozam Technologies, I collaborate with cross-functional teams to develop and maintain full-stack applications, focusing on credit scoring systems and banking modules.',
    achievements: [
      'Collaborated with management, departments and IT teams to identify end-user requirements and specifications.',
      'Implemented Agile methodologies via careful planning; reduced software development time by 35%.',
      'Designed flowcharts to create new software programs and worked with lead software developers and engineers in an adaptive DevOps environment. Participated in sprint planning to adhere to code development standards.',
      'Troubleshot, debugged, and maintained a full-stack credit score app, optimizing its Express backend and React frontend for cloud efficiency. Integrated ML models to predict loan likelihood and suggest personalized loan amounts.',
      'Developed and deployed core banking system modules for budget management using React. Engineered and managed CI/CD pipelines with Tekton within a DevOps framework, significantly accelerating product delivery.'
    ],
    technologies: ['React', 'Express', 'Node.js', 'Machine Learning', 'Tekton', 'DevOps', 'Agile'],
    location: 'MD',
    type: 'Internship'
  },
  {
    company: 'Entitled',
    role: 'Backend Engineer Intern',
    period: 'September 2024 - February 2025',
    description: 'As a Backend Engineer Intern at Entitled, I contributed to the development and optimization of an event platform, ensuring seamless user experiences and efficient data processing.',
    achievements: [
      'Built and tested scalable RESTful APIs using Node.js, Express, and MongoDB, designing efficient CRUD operations for event management, service providers, and user accounts while integrating third-party APIs to enhance platform functionality.',
      'Optimized MongoDB queries to improve API response times by 30-40%, reduced database load, and implemented indexing strategies, pagination, and filtering features to handle large datasets effectively.',
      'Developed secure authentication mechanisms, including JWT-based authentication and session management, implemented password encryption and account protection measures.',
      'Enhanced role-based access control (RBAC) to restrict user permissions and protect sensitive data.',
      'Strengthened authentication security by implementing advanced password encryption and secure authentication protocols, reducing security vulnerabilities by 50%.',
      'Utilized Postman for API testing and debugging, improved server-side validation to prevent inconsistencies.',
      'Refactored API responses to provide better error messages and debugging insights, reducing critical backend errors by 40%.',
      'Developed and integrated React components for dynamic user interactions, improved state management using Redux.',
      'Implemented responsive UI updates for enhanced real-time interactions.',
      'Integrated logging and monitoring tools for better debugging and system performance tracking.',
      'Implemented rate limiting and caching strategies to optimize backend load.',
      'Improved server efficiency by refactoring code for cleaner and more maintainable logic.'
    ],
    technologies: ['JavaScript', 'Java', 'Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'TypeScript'],
    location: 'Remote',
    type: 'Internship'
  },
  {
    company: 'Virtual Experience Programs',
    role: 'Software Engineering Virtual Programs',
    period: 'July 2024',
    description: 'Participated in virtual experience programs with leading tech companies, gaining hands-on experience in real-world software engineering challenges.',
    sections: [
      {
        title: 'Verizon Cloud Computing Job Simulation',
        achievements: [
          'Tested Verizon\'s VPN for cloud-native compliance using command-line Python.',
          'Researched security strategies for cloud applications and presented findings in a technical PowerPoint presentation.',
          'Developed insights into cloud computing infrastructure, security models, and best practices.'
        ]
      },
      {
        title: 'Goldman Sachs Software Engineering Virtual Experience',
        achievements: [
          'Used Hashcat to analyze password security and identify weaknesses in outdated hashing algorithms.',
          'Recommended security improvements, including stronger encryption methods and extended password policies.',
          'Authored a professional security memo outlining critical vulnerabilities and mitigation strategies.'
        ]
      }
    ],
    technologies: ['Python', 'Cloud Security', 'Hashcat', 'VPN Testing'],
    location: 'Virtual',
    type: 'Virtual Experience'
  },
  {
    company: 'IBM',
    role: 'Full-Stack JavaScript Developer Professional Certificate',
    period: '2024',
    description: 'Completed comprehensive full-stack development certification, working on multiple real-world projects and gaining hands-on experience with modern web technologies.',
    achievements: [
      'Developed a React-based movie search application with API integration and Redux state management.',
      'Built a full-stack MERN application for online book reviews with JWT authentication.',
      'Implemented cloud deployments using IBM Cloud and containerization with Docker.',
      'Created a budget management application with real-time financial tracking.',
      'Mastered DevOps practices including Docker, Kubernetes, and CI/CD pipelines.',
      'Developed proficiency in debugging, testing, and cloud integration.'
    ],
    projects: [
      {
        title: 'Movie Search Application',
        description: 'Developed a React-based frontend with API integration to dynamically fetch and display movie data. Implemented Redux for state management and optimized API requests.'
      },
      {
        title: 'Online Book Review System',
        description: 'Designed a full-stack MERN application, developing a Node.js & Express backend with MongoDB, integrated secure JWT authentication, and created a responsive UI with React.'
      },
      {
        title: 'Cloud Deployment & CI/CD Pipelines',
        description: 'Deployed applications on IBM Cloud, containerized services using Docker, managed orchestration with Kubernetes, and automated workflows with Tekton CI/CD pipelines.'
      },
      {
        title: 'Budget Management App',
        description: 'Built a React-based budget application, incorporating frontend state management, dynamic UI components, and secure API communication for real-time financial tracking.'
      }
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes'],
    location: 'Online',
    type: 'Certification'
  }
];

const ExperiencePage = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  return (
    <Section className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Professional Journey</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My experience in software development, engineering, and professional growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative ${index !== 0 ? 'mt-8' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />

              <Card 
                className={`w-11/12 md:w-5/6 mx-auto transform transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  expandedExp === index ? 'bg-white/10' : ''
                }`}
                onClick={() => setExpandedExp(expandedExp === index ? null : index)}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FaBriefcase className="text-blue-400" />
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-blue-400">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaCalendar className="text-blue-400" />
                        {exp.period}
                      </div>
                      <p className="text-gray-400">{exp.location} • {exp.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-300">{exp.description}</p>

                  <AnimatePresence>
                    {expandedExp === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 pt-4"
                      >
                        {/* Achievements Section */}
                        {exp.achievements && (
                          <div>
                            <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                              <FaTasks className="text-blue-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Special Sections (for Virtual Experience) */}
                        {exp.sections && exp.sections.map((section, sIndex) => (
                          <div key={sIndex} className="border-t border-white/10 pt-4">
                            <h4 className="text-lg font-semibold text-white mb-3">
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Projects Section */}
                        {exp.projects && (
                          <div className="border-t border-white/10 pt-4">
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Key Projects
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {exp.projects.map((project, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="bg-white/5 rounded-lg p-4"
                                >
                                  <h5 className="text-blue-400 font-semibold mb-2">{project.title}</h5>
                                  <p className="text-gray-300 text-sm">{project.description}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies Section */}
                        <div className="border-t border-white/10 pt-4">
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            <FaTools className="text-blue-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Links Section */}
                        {exp.links && (
                          <div className="border-t border-white/10 pt-4">
                            <div className="flex flex-wrap gap-4">
                              {exp.links.map((link, i) => (
                                <motion.a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  {link.icon}
                                  <span>{link.label}</span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    className="w-full flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                  >
                    {expandedExp === index ? (
                      <>
                        <span>Show Less</span>
                        <FaChevronUp />
                      </>
                    ) : (
                      <>
                        <span>Show More</span>
                        <FaChevronDown />
                      </>
                    )}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperiencePage;
