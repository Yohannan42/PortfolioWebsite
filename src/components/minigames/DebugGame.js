import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBug, FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const mockBugs = [
  { x: 100, y: 100, type: 'normal', speed: 1.5 },
  { x: 300, y: 200, type: 'golden', speed: 2 },
  { x: 500, y: 150, type: 'normal', speed: 1 },
  { x: 200, y: 300, type: 'golden', speed: 1.8 },
];

const DebugGame = ({ onComplete, isDark }) => {
  const [bugs, setBugs] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [combo, setCombo] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Timer
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prev => prev - 1);
      } else {
        setGameOver(true);
        // Make it easier to pass
        if (score >= 500) {
          onComplete(score);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, score, onComplete]);

  useEffect(() => {
    // Spawn bugs using mock data
    const spawnBug = () => {
      if (bugs.length < 5 && !gameOver) {
        const mockBug = mockBugs[Math.floor(Math.random() * mockBugs.length)];
        const newBug = {
          id: Date.now(),
          x: mockBug.x + (Math.random() * 100 - 50), // Add some randomness
          y: mockBug.y + (Math.random() * 100 - 50),
          type: mockBug.type,
          speed: mockBug.speed
        };
        setBugs(prev => [...prev, newBug]);
      }
    };

    const interval = setInterval(spawnBug, 1500); // Slower spawn rate
    return () => clearInterval(interval);
  }, [bugs, gameOver]);

  const createParticles = (x, y, color) => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      angle: (Math.PI * 2 * i) / 10,
      color
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1000);
  };

  const catchBug = (bugId, bugType) => {
    const points = bugType === 'golden' ? 150 : 100;
    const bonusPoints = Math.floor(combo * 0.5) * points;
    setScore(prev => prev + points + bonusPoints);
    setCombo(prev => prev + 1);
    setBugs(prev => prev.filter(bug => bug.id !== bugId));
    createParticles(
      event.clientX,
      event.clientY,
      bugType === 'golden' ? '#FFD700' : '#4CAF50'
    );
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl border-2 border-blue-500/30">
      {/* Game UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        <div className={`px-4 py-2 rounded-lg ${
          isDark ? 'bg-gray-800/80' : 'bg-white/80'
        } backdrop-blur-sm flex items-center gap-4`}>
          <div className="flex items-center gap-2">
            <FaBug className="text-green-500" />
            <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {score}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {timeLeft}s
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Combo: x{combo}
            </span>
          </div>
        </div>
      </div>

      {/* Bugs */}
      <AnimatePresence>
        {bugs.map(bug => (
          <motion.div
            key={bug.id}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: 1,
              rotate: 360,
              x: [bug.x, bug.x + Math.sin(Date.now() / 1000) * 50],
              y: [bug.y, bug.y + Math.cos(Date.now() / 1000) * 50]
            }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{
              duration: 0.5,
              x: { duration: bug.speed, repeat: Infinity, ease: "linear" },
              y: { duration: bug.speed, repeat: Infinity, ease: "linear" }
            }}
            onClick={() => catchBug(bug.id, bug.type)}
            className={`absolute cursor-pointer transform hover:scale-110 transition-transform
              ${bug.type === 'golden' ? 'text-yellow-500' : 'text-green-500'}`}
            style={{ left: bug.x, top: bug.y }}
          >
            <FaBug className="text-3xl" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Particles */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              x: Math.cos(particle.angle) * 100,
              y: Math.sin(particle.angle) * 100,
              scale: 0,
              opacity: 0
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>

      {/* Game Over Screen */}
      {gameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30"
        >
          <div className={`p-8 rounded-xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } text-center space-y-4`}>
            <h3 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Game Over!
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {score >= 1000 ? 'Challenge Complete!' : 'Try Again!'}
            </p>
            <p className={`text-xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Score: {score}
            </p>
            <div className="flex justify-center gap-4">
              {score >= 1000 ? (
                <FaCheck className="text-4xl text-green-500" />
              ) : (
                <FaTimes className="text-4xl text-red-500" />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DebugGame; 