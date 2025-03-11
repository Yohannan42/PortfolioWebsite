import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExperiencePage() {
  const navigate = useNavigate();

  return (
    <div className="experience-wrapper"> {/* Ensures blue neon background */}
      <div className="experience-section">
        <div className="experience-container">
          <h1 className="experience-title glow-text">My Experience</h1>

          {/* Experience List */}
          <div className="experience-grid">
            <div className="experience-card neon-border relative">
              {/* Title and Company Website Link */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Backend Engineer Intern - Entitled</h3>
                <a
                  href="https://be-entitled.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Visit Company Website
                </a>
              </div>

              <p>
                As a Backend Engineer Intern at Entitled, I contributed to the development 
                and optimization of an event platform, ensuring seamless user experiences and 
                efficient data processing. My work involved building and testing RESTful APIs using 
                Node.js, Express, and MongoDB, implementing secure authentication mechanisms, and 
                optimizing database queries for improved performance and scalability. Additionally, 
                I gained full-stack experience by working on React, TypeScript, and Redux, where 
                I improved user interfaces, state management, and API integrations. 
              </p>

              <ul className="mt-4">
                <li>🔹 Built and tested scalable RESTful APIs using Node.js, Express, and MongoDB, designing efficient CRUD operations for event management, service providers, and user accounts while integrating third-party APIs to enhance platform functionality.</li>
                <li>🔹 Optimized MongoDB queries to improve API response times by 30-40%, reduced database load, and implemented indexing strategies, pagination, and filtering features to handle large datasets effectively.</li>
                <li>🔹 Developed secure authentication mechanisms, including JWT-based authentication and session management, implemented password encryption and account protection measures, and enhanced role-based access control (RBAC) to restrict user permissions and protect sensitive data.</li>
                <li>🔹 Strengthened authentication security by implementing advanced password encryption and secure authentication protocols, reducing security vulnerabilities by 50% and ensuring safer user logins.</li>
                <li>🔹 Utilized Postman for API testing and debugging, improved server-side validation to prevent inconsistencies, and refactored API responses to provide better error messages and debugging insights, reducing critical backend errors by 60%.</li>
                <li>🔹 Developed and integrated React components for dynamic user interactions, improved state management using Redux to ensure smoother data flow between frontend and backend, and implemented responsive UI updates for enhanced real-time interactions.</li>
                <li>🔹 Integrated logging and monitoring tools for better debugging and system performance tracking, implemented rate limiting and caching strategies to optimize backend load, and improved server efficiency by refactoring code for cleaner and more maintainable logic.</li>
                <li>🔹 Improved API error handling, enhanced debugging processes, and strengthened security measures to ensure a more stable and reliable platform while reducing inconsistencies and improving system scalability.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
