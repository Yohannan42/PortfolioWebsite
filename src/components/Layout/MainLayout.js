import React from 'react';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const MainLayout = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300
      ${isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}
    >
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 py-8 max-w-7xl"
      >
        {children}
      </motion.main>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 opacity-20 transition-opacity duration-300
          ${isDark ? 'bg-gradient-radial from-blue-900/20 to-transparent' : 'bg-gradient-radial from-blue-100/20 to-transparent'}`}
        />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full transition-colors duration-300
              ${isDark ? 'bg-blue-500/10' : 'bg-blue-200/20'}`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainLayout; 