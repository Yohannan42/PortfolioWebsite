import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo"></h1>
      <ul className="nav-links">
        <li><button onClick={() => handleNavigation("home")}>Home</button></li>
        <li><button onClick={() => navigate("/about")}>About</button></li>
        <li><button onClick={() => navigate("/projects")}>Projects</button></li>
        <li><button onClick={() => navigate("/skills")}>Skills</button></li>
        <li><button onClick={() => navigate("/experience")}>Experience</button></li>
        <li><button onClick={() => handleNavigation("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
