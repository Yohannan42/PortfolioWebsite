import React, { useState } from "react";
import { motion } from "framer-motion";
import LevelTwoPage from "./LevelTwoPage"; 

export default function LevelPage() {
  const [isLevelTwoOpen, setIsLevelTwoOpen] = useState(false);

  // Function to close Level 2 and return to Level 1
  const handleCloseLevelTwo = () => {
    setIsLevelTwoOpen(false);
  };

  return (
    <div className="level-page flex flex-col items-center text-center pb-16">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8" // Increased margin to push the title above the paragraph
      >
        <h1 className="text-5xl font-bold text-white glow-text">My Journey in Tech</h1>
      </motion.div>

      {/* Animated Paragraph - Now Clearly Below the Title */}
      <motion.div
        className="level-text max-w-3xl text-lg text-white leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>
          I have hands-on experience in backend and full-stack development, specializing in JavaScript, Node.js, Express, and MongoDB during my Backend Engineer Internship at Entitled. My expertise extends to debugging APIs with Postman, optimizing server-side logic, and implementing DevOps practices such as containerization with Docker and Kubernetes. 
          I developed API endpoints for event management, service providers, and user authentication, improving response times by 30-40% through database indexing and query optimization. Additionally, I implemented secure authentication mechanisms using JWT and password encryption, reducing security vulnerabilities. 
        </p>
        <p className="mt-4">
        I developed a React-based movie search application, integrating asynchronous API calls, Redux for state management, and dynamic UI updates to enhance user experience and performance. Additionally, I built a Machine Learning Web App using Streamlit and Python, incorporating Logistic Regression and Random Forest models for real-time classification, leveraging scikit-learn for model training, hyperparameter tuning, and evaluation. Through these projects and earning the IBM Full-Stack JavaScript Developer Professional Certificate, I strengthened my expertise in frontend development, API integration, cloud deployment, and performance optimization, ensuring the ability to build scalable, secure, and high-performance applications.
        </p>
      </motion.div>

            {/* Clickable Level 2 Image */}
            <motion.img
        src="/models/locked2.png"
        alt="Level 2 Icon"
        className="level2-icon cursor-pointer mt-30"
         // Increased margin-top to move it further down
        onClick={() => setIsLevelTwoOpen(true)}
        whileHover={{
          rotate: [0, -20, 20, -30, 30, -40, 40, -50, 50, 0], // Stronger Shake Effect
        }}
        whileTap={{ rotate: -100 }} // Rotates 100 degrees downward when clicked
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Level 2 Modal Pop-Up */}
      {isLevelTwoOpen && (
        <div className="modal-overlay">
          <motion.div
            className="level-two-modal" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <LevelTwoPage onClose={handleCloseLevelTwo} />
          </motion.div>
        </div>
      )}
    </div>
  );
}
