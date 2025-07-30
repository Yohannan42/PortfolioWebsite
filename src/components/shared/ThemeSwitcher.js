import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-20 right-4 z-50 p-3 rounded-full shadow-lg
        ${isDark ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'}
        hover:scale-110 transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      <span className="sr-only">{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </motion.button>
  );
};

export default ThemeSwitcher; 