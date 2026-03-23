import "../style/edu.css";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section className="edu" id="education">
      <div className="edu-header">
        <p className="edu-subtitle">ACADEMIC BACKGROUND</p>
        <h2 className="edu-title">Education & Thinking Framework</h2>
        <p className="edu-desc">
          My academic journey has shaped how I design, analyze, and build
          intelligent systems that create meaningful digital experiences.
        </p>
      </div>

      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <h3>Master of Applied Computing</h3>
            <p className="edu-field">Computer Science</p>
            <p className="edu-school">Wilfrid Laurier University</p>
          </div>

          <span className="edu-year">2024 – 2026</span>
        </div>

        <div className="edu-item">
          <div className="edu-icon">
            <FaUniversity />
          </div>

          <div className="edu-content">
            <h3>Bachelor of Technology</h3>
            <p className="edu-field">Computer Engineering</p>
            <p className="edu-school">LJ University</p>
          </div>

          <span className="edu-year">2020 – 2024</span>
        </div>
      </div>
    </section>
  );
}
