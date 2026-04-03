import React, { useState } from 'react';
import Section from './shared/Section';
import Card from './shared/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClipboardList, FaChartBar, FaCode } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Product & Methodology',
    icon: <FaClipboardList className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: 'Jira' },
      { name: 'Aha!' },
      { name: 'Agile' },
      { name: 'Scrum' },
      { name: 'PRD writing' },
      { name: 'Project management' },
      { name: 'Product roadmapping' },
    ],
  },
  {
    title: 'Tools & Analysis',
    icon: <FaChartBar className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    skills: [
      { name: 'Office 365 (Excel, PowerPoint)' },
      { name: 'Competitive analysis' },
      { name: 'SaaS metrics (ARR, MRR, NRR)' },
    ],
  },
  {
    title: 'Technical Skills',
    icon: <FaCode className="w-8 h-8 text-green-600 dark:text-green-400" />,
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Git' },
      { name: 'APIs' },
    ],
  },
];

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { isDark } = useTheme();

  return (
    <Section className="relative min-h-screen">
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      }`}></div>

      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-widest">SKILLS</h1>
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
                            transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
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
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedSkill.name}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Category: {selectedSkill.category}
                  </p>
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
