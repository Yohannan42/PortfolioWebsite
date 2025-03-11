import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LevelPage from "./LevelPage"; // Import LevelPage component

export default function AboutMeSection() {
  const canvasRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const numLines = 20;
    const baseSpeed = 0.5;
    const thickness = 4.5;
    let lines = Array.from({ length: numLines }, () => ({
      x1: Math.random() * window.innerWidth,
      y1: Math.random() * window.innerHeight,
      x2: Math.random() * window.innerWidth,
      y2: Math.random() * window.innerHeight,
      dx: (Math.random() * 2 - 1) * baseSpeed,
      dy: (Math.random() * 2 - 1) * baseSpeed,
    }));

    const updateLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";
      ctx.lineWidth = thickness;

      lines.forEach((line) => {
        line.x1 += line.dx;
        line.y1 += line.dy;
        line.x2 += line.dx;
        line.y2 += line.dy;
        if (line.x1 < 0 || line.x1 > canvas.width || line.x2 < 0 || line.x2 > canvas.width) line.dx *= -1;
        if (line.y1 < 0 || line.y1 > canvas.height || line.y2 < 0 || line.y2 > canvas.height) line.dy *= -1;

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      requestAnimationFrame(updateLines);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    updateLines();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_rgba(0,0,0,1))]"></div>
      </div>

      {/* Neon Lines */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      {/* About Me Content */}
      <motion.div
        className="relative z-10 p-10 bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 w-[80%] max-w-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 className="text-5xl font-bold text-blue-400 glow-text" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          About Me
        </motion.h2>

        {/* Type-in Effect */}
        <motion.p className="mt-4 text-lg tracking-wide leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold flex flex-wrap justify-center">
          {"Hi, I’m Yohannan Woldesemayat, a recent Computer Science graduate from Fordham University with a passion for full-stack development and scalable software solutions. I have experience building and optimizing backend systems, developing RESTful APIs, and implementing secure authentication mechanisms using Node.js, Express, and MongoDB. My skill set extends to frontend development, where I have worked with React, TypeScript, and Redux to create responsive user interfaces. Beyond professional experience, I have completed multiple independent projects in machine learning and software engineering, as well as certifications in full-stack development, demonstrating my ability to solve complex problems and adapt to new technologies. I am eager to contribute to innovative tech solutions and continue expanding my expertise."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="mr-2">
                {word.split("").map((char, j) => (
                  <motion.span key={j} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: (i + j) * 0.03 }} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
        </motion.p>
      </motion.div>

      {/* Clickable Level 1 Image */}
      <motion.img
        src="/models/locked1.png"
        alt="Level Icon"
        className="about-icon"
        style={{ width: "150px", height: "auto", cursor: "pointer" }}
        onClick={() => setIsModalOpen(true)}
      />

      {/* Level 1 Pop-Up */}
      {isModalOpen && (
        <div className="modal-overlay">
          <motion.div className="modal-content" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>✖ Close</button>
            <LevelPage onClose={() => setIsModalOpen(false)} />
          </motion.div>
        </div>
      )}
    </section>
  );
}
