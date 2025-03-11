import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";

const projects = [
  "To-Do List App: PlanPal",
  "Budget Allocation App",
  "Book Review Backend",
  "Bill-Splitter",
  "Goldman Sachs Software",
  "Verizon Cloud Platform Job Simulation",
  "Music Genre Classification for Music Recommendation",
  "IBM Full-Stack JS Developer Professional Certificate",
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  const handleProjectClick = (projectTitle) => {
    if (
      projectTitle === "Goldman Sachs Software" ||
      projectTitle === "Verizon Cloud Platform Job Simulation"
    ) {
      navigate(`/projects-list?project=Virtual Job Experience Simulations`);
    } else if (projectTitle === "Music Genre Classification for Music Recommendation") {
      navigate(`/projects-list?project=Music Genre Classification for Music Recommendation`);
    } else if (projectTitle === "IBM Full-Stack JS Developer Professional Certificate") {
      navigate(`/projects-list?project=IBM Full-Stack JavaScript Developer Professional Certificate`);
    } else {
      navigate(`/projects-list?project=${encodeURIComponent(projectTitle)}`);
    }
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-section">
        <div className="projects-container">
          <h1 className="projects-title glow-text">My Projects and Certificates</h1>
          <p className="projects-description">
            Here are some of the projects I’ve worked on.
          </p>

          {/* Project Cards */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-wrapper" key={index}>
                <div className="project-card neon-border">
                  {project === "To-Do List App: PlanPal" && (
                    <img 
                      src="/models/Planpal.png"
                      alt="PlanPal Logo"
                      className="project-image"
                    />
                  )}
                  {project === "Budget Allocation App" && (
                    <img 
                      src="/models/BudgetAllocation/BugdetApp.png"
                      alt="Budget Allocation Logo"
                      className="project-image"
                    />
                  )}
                  {project === "Book Review Backend" && (
                    <img 
                      src="/models/BudgetAllocation/BugdetApp.png"
                      alt="Book Review Backend Logo"
                      className="project-image"
                    />
                  )}
                  {project === "Bill-Splitter" && (
                    <img 
                      src="/models/BudgetAllocation/BillSplitter1.png"
                      alt="Bill Splitter Logo"
                      className="project-image"
                    />
                  )}
                  {project === "Goldman Sachs Software" && (
                    <img 
                      src="/models/BudgetAllocation/GoldmanS.png"
                      alt="Goldman Sachs Software Logo"
                      className="project-image"
                    />
                  )}
                  {project === "Verizon Cloud Platform Job Simulation" && (
                    <img 
                      src="/models/BudgetAllocation/VerizonJ.png"
                      alt="Verizon Cloud Platform Logo"
                      className="project-image"
                    />
                  )}
                  {project?.toString().includes("Music Genre Classification") && (
                    <img 
                      src="/models/BudgetAllocation/musicrec.png"
                      alt="Music Genre Classification Logo"
                      className="project-image"
                    />
                  )}
                  {project === "IBM Full-Stack JS Developer Professional Certificate" && (
                    <img 
                      src="/models/BudgetAllocation/Ibm.png"
                      alt="IBM Full-Stack JavaScript Developer Logo"
                      className="project-image"
                    />
                  )}
                </div>
                <h3 
                  className="project-title" 
                  onClick={() => handleProjectClick(project)}
                >
                  {project}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
