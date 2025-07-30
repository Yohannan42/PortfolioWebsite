import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaLock, FaUnlock } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const InteractiveResume = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const { isDark } = useTheme();

  const handleDoorClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        setIsDoorOpen(true);
        setTimeout(() => {
          window.open('https://docs.google.com/document/d/1vWgN7sjOA9Qwwstz4IgcVyJIWURGx4BcZOgLt8f7uJs/edit?usp=sharing', '_blank');
          setIsOpening(false);
          setIsDoorOpen(false);
        }, 1000);
      }, 1500);
    }
  };

  return (
    <div className="relative w-48 h-48 mx-auto cursor-pointer" onClick={handleDoorClick}>
      {/* Door Frame */}
      <motion.div
        className={`absolute inset-0 rounded-xl border-4 ${
          isDark 
            ? 'border-blue-400 bg-gray-800' 
            : 'border-blue-600 bg-white'
        }`}
        animate={{
          scale: isOpening ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Door */}
        <motion.div
          className={`absolute inset-0 rounded-lg ${
            isDark 
              ? 'bg-gray-700' 
              : 'bg-gray-100'
          }`}
          animate={{
            rotateY: isDoorOpen ? 45 : 0,
            x: isDoorOpen ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Lock Icon */}
          <motion.div
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            animate={{
              scale: isOpening ? [1, 0.8, 1.2, 0] : 1,
              rotate: isOpening ? [0, -45, 45, 90] : 0,
            }}
            transition={{ duration: 1 }}
          >
            {isOpening ? (
              <FaUnlock className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            ) : (
              <FaLock className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            )}
          </motion.div>

          {/* Character pulling the door */}
          <motion.img
            src="/models/level1.png"
            alt="Character"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16"
            animate={{
              x: isOpening ? [-10, 20, 0] : 0,
              rotate: isOpening ? [0, -10, 10, 0] : 0,
            }}
            transition={{ duration: 1.5 }}
          />

          {/* Resume Icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: isOpening ? [1, 1.2, 0.8, 1] : 1,
              rotate: isOpening ? [0, -10, 10, 0] : 0,
            }}
          >
            <FaFileAlt className={`w-12 h-12 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: isOpening
            ? [
                '0 0 10px rgba(59, 130, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.7)',
                '0 0 30px rgba(59, 130, 246, 0.9)',
                '0 0 10px rgba(59, 130, 246, 0.5)',
              ]
            : '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
        transition={{ duration: 1.5 }}
      />

      {/* Label */}
      <motion.div
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}
        animate={{
          y: isOpening ? [0, -5, 5, 0] : 0,
        }}
      >
        Click to view resume
      </motion.div>
    </div>
  );
};

export default InteractiveResume; 