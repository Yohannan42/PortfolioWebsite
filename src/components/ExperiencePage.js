import React, { useState } from 'react';
import Section from './shared/Section';
import Card from './shared/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaTasks, FaTools, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    company: 'Goozam Technologies Inc.',
    role: 'Junior Software Developer',
    period: 'July 2025 - December 2025',
    description: 'Contributing to backend services and test-driven development to enhance delivery quality and speed.',
    achievements: [
      'Improved a cross-border money transfer system by cleaning up the request flow and caching exchange rate data, and reduced transfer delays by about 20%.',
      'Contributed to improving a backend service that optimized and accelerated client service deployment by 25%, supporting faster delivery of client platforms.',
      'Developed and automated JUnit test scripts, increasing code coverage by 16% and improving the efficiency of our development pipeline for custom client applications.'
    ],
    technologies: ['Java', 'JavaScript', 'JUnit', 'Spring Boot', 'CI/CD'],
    location: 'MD',
    type: 'Full-time'
  },
  {
    company: 'Goozam Technologies Inc.',
    role: 'Software Developer Intern',
    period: 'November 2024 - June 2025',
    description: 'As a Software Developer Intern at Goozam Technologies, I collaborate with cross-functional teams to develop and maintain full-stack applications, focusing on credit scoring systems and banking modules.',
    achievements: [
      'Collaborated with management, departments, and IT teams to identify end-user requirements and specifications.',
      'Implemented Agile methodologies via careful planning and reduced software development time by 25%.',
      'Designed flowcharts to create new software programs and worked with lead software developers and engineers in an adaptive DevOps environment. Participated in sprint planning to adhere to code development standards.',
      'Troubleshot, debugged, and maintained a full-stack credit score app, optimizing its Express backend and React frontend for cloud efficiency. Integrated Machine learning models to predict loan likelihood and suggest personalized loan amounts.'
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
      'Used JavaScript to build RESTFUL API endpoints using Node.js and Express to handle CRUD operations for events, service providers, and companies, enhancing backend functionality and reducing 20% deployment time for a management platform.',
      'Debugged backend using Postman and improved server-side performance, reducing backend errors by 30%.',
      'Implemented secure password update functionality, integrating frontend and backend components for service provider accounts, using CORS policies and structured API routes to safeguard data.',
      'Enhanced UI interactivity by developing reusable React components and optimizing data handling with React hooks.'
    ],
    technologies: ['JavaScript', 'Java', 'Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'TypeScript'],
    location: 'Remote, VA',
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
      'Built a React-based movie search application, focusing on user interaction and API integration.',
      'Developed a full-stack application for book reviews with authentication and user flow design.',
      'Gained experience deploying applications on IBM Cloud and working with Docker.',
      'Created a budget management tool to help users track and manage financial data effectively.',
      'Improved problem-solving skills through debugging and testing.'
    ],
    projects: [
      {
        title: 'Movie Search Application',
        description: 'Built a React-based movie search application, focusing on user interaction and API integration.'
      },
      {
        title: 'Book Reviews Application',
        description: 'Developed a full-stack application for book reviews with authentication and user flow design.'
      },
      {
        title: 'IBM Cloud & Docker',
        description: 'Gained experience deploying applications on IBM Cloud and working with Docker.'
      },
      {
        title: 'Budget Management Tool',
        description: 'Created a budget management tool to help users track and manage financial data effectively.'
      },
      {
        title: 'Debugging & Testing',
        description: 'Improved problem-solving skills through debugging and testing.'
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
