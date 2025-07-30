import React, { useState } from 'react';
import Section from './shared/Section';
import Card from './shared/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaJava, FaPython, FaJs } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaJs className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    skills: [
      { name: 'JavaScript', projects: ['Portfolio Website', 'Task Manager', 'Budget App', 'E-commerce Platform'] },
      { name: 'Java', projects: ['Backend Services', 'API Development', 'Enterprise Applications'] },
      { name: 'Python', projects: ['Data Mining', 'Machine Learning', 'Automation Scripts', 'AI Applications'] },
      { name: 'TypeScript', projects: ['Budget App', 'Data Dashboard', 'Full-stack Applications'] },
    ],
  },
  {
    title: 'Frontend Development',
    icon: <FaReact className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: 'React', projects: ['Portfolio Website', 'Task Manager', 'E-commerce Platform'] },
      { name: 'Next.js', projects: ['Blog Platform', 'Real-time Chat'] },
      { name: 'Tailwind CSS', projects: ['Portfolio Website', 'Admin Dashboard'] },
      { name: 'HTML/CSS', projects: ['Responsive Websites', 'UI Components'] },
    ],
  },
  {
    title: 'Backend Development',
    icon: <FaNodeJs className="w-8 h-8 text-green-600 dark:text-green-400" />,
    skills: [
      { name: 'Node.js', projects: ['REST API', 'Authentication Service'] },
      { name: 'MongoDB', projects: ['User Database', 'Content Management'] },
      { name: 'Express', projects: ['E-commerce Backend', 'API Gateway'] },
      { name: 'PostgreSQL', projects: ['Data Analytics', 'User Management'] },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaAws className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
    skills: [
      { name: 'AWS', projects: ['Serverless Apps', 'Cloud Storage'] },
      { name: 'Docker', projects: ['Container Orchestration', 'Microservices'] },
      { name: 'CI/CD', projects: ['Automated Deployment', 'Testing Pipeline'] },
      { name: 'Kubernetes', projects: ['Container Management', 'Scaling'] },
    ],
  },
  {
    title: 'Machine Learning & Data',
    icon: <FaPython className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: 'TensorFlow', projects: ['Music Recommendation', 'Predictive Analytics'] },
      { name: 'Pandas', projects: ['Data Analysis', 'Statistical Modeling'] },
      { name: 'Scikit-learn', projects: ['Machine Learning Models', 'Data Mining'] },
      { name: 'Matplotlib', projects: ['Data Visualization', 'Analytics Reports'] },
    ],
  },
];

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { isDark } = useTheme();

  return (
    <Section className="relative min-h-screen">
      {/* Background with theme support */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      }`}></div>

      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Technical Skills</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my technical expertise and project experience across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              onHoverStart={() => setHoveredCategory(categoryIndex)}
              onHoverEnd={() => setHoveredCategory(null)}
            >
              <Card className="h-full bg-white/80 dark:bg-white/5">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="cursor-pointer group"
                        onClick={() => setSelectedSkill({ ...skill, category: category.title })}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: hoveredCategory === categoryIndex ? '100%' : '0%' }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                            className={`h-full rounded-full ${
                              isDark 
                                ? 'bg-blue-500' 
                                : 'bg-blue-600'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Details Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`w-full max-w-md p-6 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-2xl`}
                onClick={e => e.stopPropagation()}
              >
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedSkill.name}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Category: {selectedSkill.category}
                  </p>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Projects:
                    </h4>
                    <ul className="space-y-1">
                      {selectedSkill.projects.map((project, index) => (
                        <li
                          key={index}
                          className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          • {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default SkillsPage;
