import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFileAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-white overflow-hidden">
      {/* Resume & GitHub Links */}
      <div className="absolute top-6 right-8 flex space-x-6 z-20">
        <a
          href="https://docs.google.com/document/d/1vWgN7sjOA9Qwwstz4IgcVyJIWURGx4BcZOgLt8f7uJs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          <FaFileAlt className="text-white text-lg" />
          <span className="text-white font-medium">Resume</span>
        </a>

        <a
          href="https://github.com/yourusername/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <FaGithub className="text-white text-lg" />
          <span className="text-white font-medium">GitHub</span>
        </a>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_rgba(0,0,0,1))]"></div>
      </div>

      {/* Floating Neon Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 opacity-30 blur-3xl rounded-full"
            style={{
              width: `${30 + i * 20}px`,
              height: `${30 + i * 20}px`,
              top: `${10 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Profile Image */}
      <motion.img
        src="/models/BudgetAllocation/Yoo.png"
        alt="Profile"
        className="relative z-10 w-60 h-80 object-cover rounded-lg shadow-lg border-4 border-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 p-10 bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg border border-gray-800 mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-blue-400 glow-text mt-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I'm <span className="text-blue-500">Yohannan Woldesemayat</span> 👋
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-gray-300 tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Backend Engineer | Full-Stack Developer
        </motion.p>

        <div className="mt-6 w-1/2 h-1 rounded-full bg-blue-500 opacity-50 animate-pulse"></div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 text-lg font-medium flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="animate-bounce">↓ Scroll Down ↓</span>
        <div className="w-24 h-1 bg-blue-500 opacity-70 mt-2"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
