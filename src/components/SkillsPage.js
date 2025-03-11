import React from "react";
import { useNavigate } from "react-router-dom";

export default function SkillsPage() {
  const navigate = useNavigate();

  return (
    <div className="skills-wrapper">
      <div className="skills-section">
        <div className="skills-container">
          <h1 className="skills-title glow-text">My Skills</h1>
          

          {/* Skills Categories */}
          <div className="skills-category">
            <h2 className="category-title">🖥️ Programming Languages</h2>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skills-category">
            <h2 className="category-title">⚡ Frontend Technologies</h2>
            <ul className="skills-list">
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          <div className="skills-category">
            <h2 className="category-title">🔧 Backend & Databases</h2>
            <ul className="skills-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            
            </ul>
          </div>

          <div className="skills-category">
            <h2 className="category-title">☁️ DevOps & Tools</h2>
            <ul className="skills-list">
              <li>Docker & Kubernetes</li>
              <li>Git & GitHub</li>
              <li>CI/CD (Jenkins, Tekton)</li>
              <li>AWS (EC2)</li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
}
