import "../style/skills.css";
import { useEffect } from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiAndroidstudio,
} from "react-icons/si";

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    const items = document.querySelectorAll(".skill-box");
    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="skills" className="skills">
      <p className="section-subtitle">TECHNOLOGIES & TOOLS</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-box">
          <FaReact />
          <span>React</span>
        </div>
        <div className="skill-box">
          <SiJavascript />
          <span>JavaScript</span>
        </div>
        <div className="skill-box">
          <FaHtml5 />
          <span>HTML</span>
        </div>
        <div className="skill-box">
          <FaCss3Alt />
          <span>CSS</span>
        </div>
        <div className="skill-box">
          <FaJava />
          <span>Java</span>
        </div>
        <div className="skill-box">
          <FaPython />
          <span>Python</span>
        </div>
        <div className="skill-box">
          <SiFlutter />
          <span>Flutter</span>
        </div>
        <div className="skill-box">
          <SiDart />
          <span>Dart</span>
        </div>
        <div className="skill-box">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className="skill-box">
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div className="skill-box">
          <FaDocker />
          <span>Docker</span>
        </div>
        <div className="skill-box">
          <SiAndroidstudio />
          <span>Android Studio</span>
        </div>
      </div>
    </section>
  );
}
