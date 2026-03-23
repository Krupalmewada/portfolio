import { useEffect, useState } from "react";
import "../style/navbar.css";

import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineWrench,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export default function Navbar() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "projects", "skills", "education", "contact"];

      let current = "";

      sections.forEach((sec) => {
        const element = document.getElementById(sec);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (window.scrollY >= top - 200) {
            current = sec;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* INTRO */}
        <a
          href="#intro"
          className={`nav-item ${active === "intro" ? "active" : ""}`}
        >
          <HiOutlineHome />
        </a>

        {/* PROJECTS */}
        <a
          href="#projects"
          className={`nav-item ${active === "projects" ? "active" : ""}`}
        >
          <HiOutlineFolder />
        </a>

        {/* SKILLS */}
        <a
          href="#skills"
          className={`nav-item ${active === "skills" ? "active" : ""}`}
        >
          <HiOutlineWrench />
        </a>
        <a
          href="#education"
          className={`nav-item ${active === "education" ? "active" : ""}`}
        >
          <HiOutlineAcademicCap />
        </a>

        {/* CONTACT */}
        <a
          href="#contact"
          className={`nav-item ${active === "contact" ? "active" : ""}`}
        >
          <HiOutlineEnvelope />
        </a>
      </div>
    </nav>
  );
}
