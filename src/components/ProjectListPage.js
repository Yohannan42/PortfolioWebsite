import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Projects.css";

const projects = [
  {
    title: "To-Do List App: PlanPal",
    content: (
      <>
        <p>
          PlanPal is a comprehensive To-Do List application designed to enhance personal productivity 
          and task management. Developed with a robust backend using Node.js and Express, and a dynamic 
          frontend powered by React, PlanPal offers users an intuitive platform to organize their daily 
          activities efficiently. PlanPal features an integrated mood tracking system that helps users 
          log their emotional states, offering insights into how mood variations impact productivity. 
          The app also includes a Mood Estimator, which asks guided questions to determine the user’s 
          emotional state and provide better self-awareness. Productivity analytics further enhance the 
          experience by tracking task completion rates and identifying trends, allowing users to evaluate 
          their efficiency over time. With real-time synchronization and an engaging interface, PlanPal 
          uniquely combines task organization, emotional awareness, and productivity insights to help users 
          optimize both their workflow and overall well-being. For more details, check out the GitHub repositories:
        </p>
        <p>
          🔹 <a href="https://github.com/Yohannan42/TodoApp" target="_blank" rel="noopener noreferrer">
            Backend Repository (Node.js & Express)
          </a>
        </p>
        <p>
          🔹 <a href="https://github.com/Yohannan42/Todo-Frontend" target="_blank" rel="noopener noreferrer">
            Frontend Repository (React)
          </a>
        </p>
      </>
    ),
    images: [
      "/models/Todolist/filter.png",
      "/models/Todolist/moodPlanpal.png",
      "/models/Todolist/moodPlanPal1.png",
      "/models/Todolist/productivityS.png",
      "/models/Todolist/stickynote.png",
    ],
  },
  {
    title: "Budget Allocation App",
    content: (
      <>
        <p>
          The <strong>Budget Allocation App</strong> is a dynamic financial tool built with <strong>React</strong> 
          to help users efficiently manage departmental budgets, track expenses, and make real-time budget allocations. 
          The application provides an intuitive interface where users can set a budget, allocate funds to various departments, 
          and monitor spending to ensure financial control. With a <strong>real-time expense tracking system</strong>, 
          users can increase, decrease, or delete expenses using easy-to-use buttons, preventing overspending through built-in validation.
        </p>
        <p>
          The app supports <strong>multiple currencies</strong>, including <strong>USD ($), GBP (£), Euro (€), and INR (₹)</strong>, 
          allowing flexibility for users across different regions. The <strong>Allocation Form</strong> streamlines fund distribution 
          among departments while enforcing budget limits. Additionally, an <strong>Expense Summary & Analytics dashboard</strong> 
          provides insights into total expenses, remaining budget, and spending trends, helping users make informed financial decisions.
        </p>
        <p>
          🔹 <a href="https://github.com/Yohannan42/BudgetAllocation" target="_blank" rel="noopener noreferrer">
            GitHub Repository (React)
          </a>
        </p>
      </>
    ),
    images: [
      "/models/BudgetAllocation/Budgetallocation.png",
    ],
  },
  {
    title: "Book Review Backend",
    content: (
      <>
        <p>
          The <strong>Book Review Backend</strong> is a backend system designed to power book review platforms, 
          allowing users to submit, edit, and manage book reviews efficiently. Built using <strong>Node.js, Express, 
          and MongoDB</strong>, this backend provides a robust API for handling user authentication, review submissions, 
          ratings, and comments. It also includes validation mechanisms to ensure data integrity and security.
        </p>
        <p>
          The API supports <strong>CRUD operations</strong> for managing book reviews and integrates seamlessly with 
          frontend applications. Middleware for authentication and authorization ensures that users can only modify their own 
          reviews, providing a secure and structured platform.
        </p>
        <p>
          🔹 <a href="https://github.com/Yohannan42/BookReviewBackend.git" target="_blank" rel="noopener noreferrer">
            Book Review Backend
          </a>
        </p>
      </>
    ),
},
      {
        title: "Bill-Splitter",
        content: (
          <>
            <p>
              The Bill-Splitter app is designed to simplify shared expenses among groups, ensuring fair and 
              transparent cost distribution. Built using <strong>React</strong> for an interactive frontend this application allows users to input bills, specify participants, and automatically 
              calculate individual shares based on custom rules.
              The app includes features like percentage-based splitting, 
              equal division, and custom allocations, catering to diverse expense-sharing scenarios.
              </p>
            <p>
              With an intuitive design and a focus on usability, <strong>Bill-Splitter</strong> enhances financial transparency and collaboration, 
              making it perfect for roommates, travel groups, and team outings. Future updates will include integration with payment 
              gateways like Stripe or PayPal to enable direct settlements.
            </p>
            <p>
              🔹 <a href="https://github.com/Yohannan42/BillSplitter.git" target="_blank" rel="noopener noreferrer">
                GitHub Repository (Full-Stack)
              </a>
            </p>
          </>
        ),
        images: [
          "/models/BudgetAllocation/BSplitter2.png",
          "/models/BudgetAllocation/BSplitter1.png",
         

        ],
        
      },
      {
        title: "Virtual Job Experience Simulations",
        content: (
          <>
  

  <h3 className="certificates-subtitle" style={{ fontSize: "1.2rem",fontWeight: "bold", color: "#ffffff", textShadow: "0 0 10px rgba(59, 130, 246, 1)", textTransform: "uppercase", marginTop: "20px"}}>Verizon Cloud Computing Job Simulation – Forage (March 2025)</h3>
  <p>
    Gained hands-on experience in cloud security, VPN testing, and evaluating cloud-native principles such as redundancy, 
    resiliency, and least-privilege. This program provided real-world exposure to cloud architecture and security best practices.

  </p>
  <ul>
    <li>✅ Tested Verizon’s VPN for cloud-native compliance using command-line Python.</li>
    <li>✅ Researched security strategies for cloud applications and presented findings in a technical PowerPoint presentation.</li>
    <li>✅ Developed insights into cloud computing infrastructure, security models, and best practices.</li>
  </ul>

  <h3 className="certificates-subtitle" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#ffffff"}}>Goldman Sachs Software Engineering Virtual Experience – Forage (March 2025)</h3>
  <p>
    Completed a cybersecurity-focused job simulation as a governance analyst, assessing IT security risks and proposing security 
    enhancements. Strengthened my understanding of encryption techniques, vulnerability assessment, and governance policies.
  </p>
  <ul>
    <li>✅ Used Hashcat to analyze password security and identify weaknesses in outdated hashing algorithms.</li>
    <li>✅ Recommended security improvements, including stronger encryption methods and extended password policies.</li>
    <li>✅ Authored a professional security memo outlining critical vulnerabilities and mitigation strategies.</li>
  </ul>

</>

        ),
    },
    {
      title: "Music Genre Classification for Music Recommendation",
      content: (
        <>
          <p>
          This project explores music genre classification using machine learning and the WEKA data mining tool to improve music recommendation systems. The goal was to train a model capable of predicting a song's genre based on its attributes, enhancing personalized music recommendations.

Using the ABSounds dataset, which includes 130+ musical attributes, the research applied Decision Tree (J48) and Random Forest algorithms for classification. The study leveraged WEKA to preprocess data, train models, and analyze performance metrics such as accuracy, recall, and F-measure.

The research demonstrated that Random Forest achieved 76.47% accuracy, while the J48 Pruned Tree classifier performed at 95.88% accuracy, validating the effectiveness of machine learning for automatic genre classification. The findings contribute to advancing music information retrieval and enhancing automated recommendation systems.
          </p>
        </>
      ),
      images: [
        "/models/BudgetAllocation/datamining.png",
        "/models/BudgetAllocation/datamining1.png",
      ],
  },
  {
    title: "IBM Full-Stack JavaScript Developer Professional Certificate",
    content: (
      <>
        <p>
        Through the IBM Full-Stack JavaScript Developer Professional Certificate, I gained hands-on experience in building, testing, and deploying full-stack applications using JavaScript, React, Node.js, Express, and MongoDB. This certification involved multiple projects that strengthened my skills in backend API development, frontend UI design, and cloud deployment. Additionally, I explored DevOps practices, including containerization with Docker, orchestration with Kubernetes, and CI/CD automation, ensuring smooth and reliable deployments. This certification helped me refine my debugging, testing, and cloud integration skills, preparing me to build robust, scalable applications.
        </p>
        
        {/* Key Projects & Technologies Used */}
        <h2 className="certificates-subtitle" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", textShadow: "0 0 10px rgba(59, 130, 246, 1)", textTransform: "uppercase", marginTop: "20px" }}>
  Key Projects & Technologies Used:
</h2>
          <ul className="certificates-list" style={{ fontSize: "1.2rem"}}>
            <li>
              <strong>🎬 Movie Search Application:</strong> Developed a React-based frontend with API integration to dynamically fetch and 
              display movie data. Implemented Redux for state management and optimized API requests.
            </li>
            <li>
              <strong>📚 Online Book Review System:</strong> Designed a full-stack MERN application, developing a Node.js & Express backend 
              with MongoDB, integrated secure JWT authentication, and created a responsive UI with React.
            </li>
            <li>
              <strong>☁️ Cloud Deployment & CI/CD Pipelines:</strong> Deployed applications on IBM Cloud, containerized services using Docker, 
              managed orchestration with Kubernetes, and automated workflows with Tekton CI/CD pipelines.
            </li>
            <li>
              <strong>💰 Budget Management App:</strong> Built a React-based budget application, incorporating frontend state management, 
              dynamic UI components, and secure API communication for real-time financial tracking.
            </li>
          </ul>
      </>
    ),
},
    ];
    

    export default function ProjectListPage() {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const targetProject = queryParams.get("project");
    
      const projectRefs = useRef({});
    
      useEffect(() => {
        if (targetProject && projectRefs.current[targetProject]) {
          projectRefs.current[targetProject].scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, [targetProject]);
    
      return (
        <div className="projects-list-wrapper">
          <div className="oval-container">
            <div className="oval"></div>
            <div className="oval"></div>
            <div className="oval"></div>
          </div>
    
          <h1 className="projects-list-title">Projects List</h1>
    
          <div className="projects-list-content">
            {projects.map((project, index) => (
              <div
                className="project-section"
                key={index}
                ref={(el) => (projectRefs.current[project.title] = el)}
              >
                <h2 className="project-heading">{project.title}</h2>
                <p className="project-description">{project.content}</p>
    
                {/* Render images for To-Do List App */}
                {project.images && (
                  <div className="project-images-container">
                    {project.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image} alt={project.title} className="project-image" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    