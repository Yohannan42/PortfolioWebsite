import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMeSection from "./components/AboutMeSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HeroSection from "./components/HeroSection";
import LevelPage from "./components/LevelPage";
import LevelTwoPage from "./components/LevelTwoPage";
import ProjectsPage from "./components/ProjectsPage"; 
import SkillsPage from "./components/SkillsPage"; 
import ExperiencePage from "./components/ExperiencePage"; 
import ProjectListPage from "./components/ProjectListPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/level-page" element={<LevelPage />} />
        <Route path="/level-2" element={<LevelTwoPage />} />
        <Route path="/projects" element={<ProjectsPage />} /> 
        <Route path="/projects-list" element={<ProjectListPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
