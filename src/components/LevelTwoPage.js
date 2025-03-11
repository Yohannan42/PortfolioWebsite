import React from "react";
import { motion } from "framer-motion";

export default function LevelTwoPage({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="level-two-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <h1 className="text-4xl text-white font-bold">Life Outside the Terminal 😁</h1>
        <p className="text-lg text-gray-300 mt-4">
  Outside of work, I’m usually hitting tennis balls, lifting weights, or making questionable attempts at new guitar riffs. Music has always been a creative escape for me—whether it's on the guitar or keyboard, I love getting lost in melodies. Tennis and the gym keep me moving, and while I may not be the next Federer, I do enjoy the challenge.
</p>

<p className="text-lg text-gray-300 mt-4">
  When I’m not playing, I’m probably watching soccer, passionately analyzing every play like I’m the coach (even though no one asked), and suffering as a Manchester United fan. It’s a true test of patience and emotional resilience, but I stick around, hoping for the occasional glimpse of greatness—or at least a game where we don’t concede in the first 10 minutes.
</p>

<p className="text-lg text-gray-300 mt-4">
  Beyond work and hobbies, I’ve also had the opportunity to take on leadership roles and contribute to causes I care about. At Fordham University, I served as Senior Representative for the International Student Association and Treasurer for the Caribbean and African Student Association, where I worked on organizing events, managing budgets, and helping create a stronger sense of community.
</p>

<p className="text-lg text-gray-300 mt-4">
  Giving back is something I genuinely care about. I’ve volunteered at POTS Bronx, helping support essential services for those in need, and contributed to the Mathios Wondu Cancer Society, working to raise awareness and resources for cancer patients. These experiences have reminded me that impact isn’t just about what we build, but also about the communities we support and the connections we make along the way.
</p>
      </motion.div>
    </div>
  );
}

