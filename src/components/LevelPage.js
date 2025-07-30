import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './shared/Section';
import Card from './shared/Card';
import { FaLock, FaUnlock, FaTrophy, FaStar } from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    title: 'Frontend Master',
    description: 'Completed 10+ frontend projects with modern technologies',
    icon: <FaStar className="text-yellow-400 w-6 h-6" />,
    points: 500,
    unlocked: true
  },
  {
    id: 2,
    title: 'Backend Guru',
    description: 'Built 5+ scalable backend systems',
    icon: <FaStar className="text-yellow-400 w-6 h-6" />,
    points: 750,
    unlocked: true
  },
  {
    id: 3,
    title: 'Cloud Expert',
    description: 'Deployed and managed cloud infrastructure',
    icon: <FaStar className="text-yellow-400 w-6 h-6" />,
    points: 1000,
    unlocked: false
  }
];

const skills = [
  { name: 'React', level: 90, color: 'blue' },
  { name: 'Node.js', level: 85, color: 'green' },
  { name: 'Python', level: 80, color: 'yellow' },
  { name: 'AWS', level: 75, color: 'orange' },
];

const LevelPage = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Calculate total points from unlocked achievements
    const points = achievements
      .filter(a => a.unlocked)
      .reduce((sum, a) => sum + a.points, 0);
    setTotalPoints(points);
  }, []);

  const handleAchievementClick = (achievement) => {
    setSelectedAchievement(achievement);
    if (achievement.unlocked) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <Section className="relative min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/30 animate-pulse"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Achievement Unlocked</h1>
          <div className="flex items-center justify-center gap-4">
            <FaTrophy className="text-yellow-400 w-8 h-8" />
            <span className="text-2xl font-bold text-yellow-400">{totalPoints} Points</span>
          </div>
        </div>

        {/* Skills Progress */}
        <Card className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Skill Progress</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full rounded-full bg-${skill.color}-500`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={`cursor-pointer transform transition-all duration-300 ${
                achievement.unlocked ? 'hover:scale-105' : 'opacity-75 hover:opacity-100'
              }`}
              onClick={() => handleAchievementClick(achievement)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {achievement.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.points} points</p>
                  </div>
                </div>
                {achievement.unlocked ? (
                  <FaUnlock className="text-green-400 w-5 h-5" />
                ) : (
                  <FaLock className="text-gray-500 w-5 h-5" />
                )}
              </div>
              <p className="mt-3 text-gray-300">{achievement.description}</p>
            </Card>
          ))}
        </div>

        {/* Achievement Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 p-8 rounded-2xl max-w-md w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-center space-y-4">
                  {selectedAchievement.icon}
                  <h3 className="text-2xl font-bold text-white">{selectedAchievement.title}</h3>
                  <p className="text-gray-300">{selectedAchievement.description}</p>
                  <p className="text-yellow-400 font-bold">{selectedAchievement.points} Points</p>
                  {selectedAchievement.unlocked ? (
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <FaUnlock />
                      <span>Unlocked!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <FaLock />
                      <span>Locked</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  top: '50%',
                  left: '50%',
                  scale: 0,
                }}
                animate={{
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  scale: Math.random() * 2 + 1,
                  opacity: 0,
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  ease: 'easeOut',
                }}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default LevelPage;
