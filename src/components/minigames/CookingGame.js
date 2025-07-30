import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils, FaCheck, FaTimes, FaClock, FaFire } from 'react-icons/fa';

const ingredients = [
  { id: 'tomato', name: 'Tomato', color: 'red-500', points: 100 },
  { id: 'lettuce', name: 'Lettuce', color: 'green-500', points: 100 },
  { id: 'cheese', name: 'Cheese', color: 'yellow-500', points: 150 },
  { id: 'meat', name: 'Meat', color: 'orange-500', points: 200 },
  { id: 'spice', name: 'Magic Spice', color: 'purple-500', points: 300 }
];

const recipes = [
  {
    name: 'Bug-free Burger',
    ingredients: ['meat', 'lettuce', 'tomato', 'cheese'],
    bonus: 500
  },
  {
    name: 'Stack Overflow Salad',
    ingredients: ['lettuce', 'tomato', 'spice'],
    bonus: 300
  },
  {
    name: 'Binary Bytes',
    ingredients: ['meat', 'cheese', 'spice'],
    bonus: 400
  }
];

// Mock ingredient sequence for easier gameplay
const mockSequence = [
  { id: 'meat', position: 200 },
  { id: 'lettuce', position: 400 },
  { id: 'tomato', position: 300 },
  { id: 'cheese', position: 500 },
  { id: 'spice', position: 250 },
];

const CookingGame = ({ onComplete, isDark }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [cookingProgress, setCookingProgress] = useState([]);
  const [fallingIngredients, setFallingIngredients] = useState([]);
  const [particles, setParticles] = useState([]);
  const [combo, setCombo] = useState(0);

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
    // Spawn ingredients using mock sequence
    const spawnInterval = setInterval(() => {
      if (!gameOver && fallingIngredients.length < 4) {
        const nextIndex = fallingIngredients.length % mockSequence.length;
        const mockIngredient = mockSequence[nextIndex];
        const ingredient = ingredients.find(i => i.id === mockIngredient.id);
        
        if (ingredient) {
          const newIngredient = {
            ...ingredient,
            id: Date.now(),
            x: mockIngredient.position,
            speed: 3 // Slower speed for easier catching
          };
          setFallingIngredients(prev => [...prev, newIngredient]);
        }
      }
    }, 2000); // Longer interval between spawns

    return () => clearInterval(spawnInterval);
  }, [fallingIngredients, gameOver]);

  useEffect(() => {
    // Set random recipe if none active
    if (!currentRecipe && !gameOver) {
      setCurrentRecipe(recipes[Math.floor(Math.random() * recipes.length)]);
    }
  }, [currentRecipe, gameOver]);

  const createParticles = (x, y, color) => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      angle: (Math.PI * 2 * i) / 8,
      color
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1000);
  };

  const catchIngredient = (ingredient) => {
    setFallingIngredients(prev => 
      prev.filter(ing => ing.id !== ingredient.id)
    );

    // Check if ingredient is needed for current recipe
    if (currentRecipe && currentRecipe.ingredients[cookingProgress.length] === ingredient.id) {
      const points = ingredient.points * (1 + combo * 0.2);
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
      setCookingProgress(prev => [...prev, ingredient.id]);
      createParticles(event.clientX, event.clientY, `#${ingredient.color}`);

      // Check if recipe is complete
      if (cookingProgress.length + 1 === currentRecipe.ingredients.length) {
        // Recipe complete!
        setScore(prev => prev + currentRecipe.bonus * (1 + combo * 0.2));
        setCookingProgress([]);
        setCurrentRecipe(null);
        createParticles(window.innerWidth / 2, window.innerHeight / 2, '#FFD700');
      }
    } else {
      // Wrong ingredient
      setCombo(0);
      createParticles(event.clientX, event.clientY, '#FF0000');
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl border-2 border-emerald-500/30">
      {/* Game UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        <div className={`px-4 py-2 rounded-lg ${
          isDark ? 'bg-gray-800/80' : 'bg-white/80'
        } backdrop-blur-sm flex items-center gap-4`}>
          <div className="flex items-center gap-2">
            <FaUtensils className="text-emerald-500" />
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
            <FaFire className="text-orange-500" />
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Combo: x{combo}
            </span>
          </div>
        </div>

        {/* Current Recipe */}
        {currentRecipe && (
          <div className={`px-4 py-2 rounded-lg ${
            isDark ? 'bg-gray-800/80' : 'bg-white/80'
          } backdrop-blur-sm`}>
            <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {currentRecipe.name}
            </h4>
            <div className="flex gap-2 mt-1">
              {currentRecipe.ingredients.map((ing, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full ${
                    cookingProgress[index] 
                      ? 'bg-green-500' 
                      : `bg-${ingredients.find(i => i.id === ing).color}`
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Falling Ingredients */}
      <AnimatePresence>
        {fallingIngredients.map(ingredient => (
          <motion.div
            key={ingredient.id}
            initial={{ y: -50, x: ingredient.x }}
            animate={{ y: 600 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: ingredient.speed, ease: "linear" }}
            onClick={() => catchIngredient(ingredient)}
            className={`absolute cursor-pointer transform hover:scale-110 transition-transform
              text-${ingredient.color}`}
          >
            <div className={`p-3 rounded-full bg-${ingredient.color}/20`}>
              <FaUtensils className="text-3xl" />
            </div>
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
              Kitchen Closed!
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {score >= 2000 ? 'Master Chef Achievement!' : 'Keep Practicing!'}
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
    </div>
  );
};

export default CookingGame; 