import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeadphones, FaCheck, FaTimes, FaClock, FaMusic,
  FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight
} from 'react-icons/fa';

const arrows = [
  { key: 'ArrowUp', icon: FaArrowUp, color: 'blue' },
  { key: 'ArrowDown', icon: FaArrowDown, color: 'green' },
  { key: 'ArrowLeft', icon: FaArrowLeft, color: 'red' },
  { key: 'ArrowRight', icon: FaArrowRight, color: 'yellow' }
];

// Mock beat patterns for easier gameplay
const mockPatterns = [
  { key: 'ArrowUp', position: 200 },
  { key: 'ArrowRight', position: 400 },
  { key: 'ArrowLeft', position: 300 },
  { key: 'ArrowDown', position: 500 },
  { key: 'ArrowUp', position: 250 },
];

const RhythmGame = ({ onComplete, isDark }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(null);
  const [combo, setCombo] = useState(0);
  const [particles, setParticles] = useState([]);
  const [beatQueue, setBeatQueue] = useState([]);
  const [perfectTiming, setPerfectTiming] = useState(false);

  useEffect(() => {
    // Timer
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prev => prev - 1);
      } else {
        setGameOver(true);
        // Make it easier to pass
        if (score >= 1000) {
          onComplete(score);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, score, onComplete]);

  useEffect(() => {
    // Generate beats using mock patterns
    const beatInterval = setInterval(() => {
      if (!gameOver && beatQueue.length < 5) {
        const nextIndex = beatQueue.length % mockPatterns.length;
        const mockBeat = mockPatterns[nextIndex];
        const arrow = arrows.find(a => a.key === mockBeat.key);
        
        if (arrow) {
          const newBeat = {
            id: Date.now(),
            arrow,
            position: mockBeat.position,
            perfect: false
          };
          setBeatQueue(prev => [...prev, newBeat]);
        }
      }
    }, 2000); // Longer interval between beats

    return () => clearInterval(beatInterval);
  }, [beatQueue, gameOver]);

  useEffect(() => {
    // Keyboard listener with more lenient timing
    const handleKeyPress = (event) => {
      if (gameOver) return;

      const pressedKey = event.key;
      const currentArrow = beatQueue[0]?.arrow.key;

      if (pressedKey === currentArrow) {
        const points = perfectTiming ? 150 : 100; // More points for normal hits
        const bonusPoints = Math.floor(combo * 0.3) * points;
        setScore(prev => prev + points + bonusPoints);
        setCombo(prev => prev + 1);
        createParticles(
          beatQueue[0].position,
          window.innerHeight - 150,
          perfectTiming ? '#FFD700' : `#${beatQueue[0].arrow.color}`
        );
        setBeatQueue(prev => prev.slice(1));
      } else if (arrows.some(a => a.key === pressedKey)) {
        // Less penalty for wrong arrows
        setCombo(prev => Math.max(0, prev - 1));
        createParticles(
          beatQueue[0]?.position || window.innerWidth / 2,
          window.innerHeight - 150,
          '#FF0000'
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [beatQueue, combo, gameOver, perfectTiming]);

  const createParticles = (x, y, color) => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      angle: (Math.PI * 2 * i) / 12,
      color
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1000);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl border-2 border-purple-500/30">
      {/* Game UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        <div className={`px-4 py-2 rounded-lg ${
          isDark ? 'bg-gray-800/80' : 'bg-white/80'
        } backdrop-blur-sm flex items-center gap-4`}>
          <div className="flex items-center gap-2">
            <FaHeadphones className="text-purple-500" />
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
            <FaMusic className="text-blue-500" />
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Combo: x{combo}
            </span>
          </div>
        </div>
      </div>

      {/* Beat Highway */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/20 to-transparent" />

      {/* Falling Beats */}
      <AnimatePresence>
        {beatQueue.map((beat, index) => {
          const Icon = beat.arrow.icon;
          return (
            <motion.div
              key={beat.id}
              initial={{ y: -50 }}
              animate={{
                y: [0, 550],
                scale: [1, 1.2, 1]
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 2,
                ease: "linear",
                scale: {
                  duration: 0.2,
                  repeat: Infinity
                }
              }}
              onAnimationComplete={() => {
                if (index === 0) {
                  setBeatQueue(prev => prev.slice(1));
                  setCombo(0);
                }
              }}
              className="absolute"
              style={{ left: beat.position }}
              onUpdate={(latest) => {
                if (index === 0) {
                  setPerfectTiming(latest.y > 500 && latest.y < 520);
                }
              }}
            >
              <div className={`p-4 rounded-full bg-${beat.arrow.color}-500/20
                ${perfectTiming && index === 0 ? 'ring-4 ring-yellow-500' : ''}`}>
                <Icon className={`text-3xl text-${beat.arrow.color}-500`} />
              </div>
            </motion.div>
          );
        })}
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
              x: Math.cos(particle.angle) * 150,
              y: Math.sin(particle.angle) * 150,
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
              Set Complete!
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {score >= 2000 ? 'Epic Performance!' : 'Keep Practicing!'}
            </p>
            <p className={`text-xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Final Score: {score}
            </p>
            <div className="flex justify-center gap-4">
              {score >= 2000 ? (
                <FaCheck className="text-4xl text-green-500" />
              ) : (
                <FaTimes className="text-4xl text-red-500" />
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4">
        {arrows.map(arrow => (
          <div
            key={arrow.key}
            className={`p-2 rounded-lg ${
              isDark ? 'bg-gray-800/80' : 'bg-white/80'
            } backdrop-blur-sm`}
          >
            <arrow.icon className={`text-${arrow.color}-500`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RhythmGame; 