import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileAlt } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsPage from "../components/ProjectsPage";
import SkillsPage from "../components/SkillsPage";
import ExperiencePage from "../components/ExperiencePage";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <HeroSection />
      <AboutMeSection />
      <ExperiencePage />
      <ProjectsPage />
      <SkillsPage />

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Get in Touch</h2>
        
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/yohannan-woldesemayat/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>

          <a href="mailto:yohannanwol@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>yohannanwol@gmail.com</span>
          </a>

          <a href="https://github.com/Yohannan42" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+1 3476700750</span>
          </div>

          <a href="https://docs.google.com/document/d/1vWgN7sjOA9Qwwstz4IgcVyJIWURGx4BcZOgLt8f7uJs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaFileAlt className="contact-icon" />
            <span>View Resume</span>
          </a>
        </div>
      </section>

      {/* Back to Top Button */}
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Home;
