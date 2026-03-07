import "../style/navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "edu", "skills", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about">About</a>
          {activeSection === "about" && <span className="dot"></span>}
        </li>

        <li className={activeSection === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
          {activeSection === "projects" && <span className="dot"></span>}
        </li>

        <li className={activeSection === "edu" ? "active" : ""}>
          <a href="#edu">Education</a>
          {activeSection === "edu" && <span className="dot"></span>}
        </li>

        <li className={activeSection === "skills" ? "active" : ""}>
          <a href="#skills">Skills</a>
          {activeSection === "skills" && <span className="dot"></span>}
        </li>

        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
          {activeSection === "contact" && <span className="dot"></span>}
        </li>
      </ul>
    </nav>
  );
}
