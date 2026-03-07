import "../style/edu.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section className="edu" id="edu">
      <p className="section-subtitle">ACADEMIC BACKGROUND</p>
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <h3>Master of Applied Computing</h3>
          <p className="edu-field">Computer Science</p>
          <p className="edu-school">Wilfrid Laurier University</p>
          <span className="edu-year">2024 – 2026</span>
        </div>

        <div className="education-card">
          <div className="edu-icon">
            <FaUniversity />
          </div>
          <h3>Bachelor of Technology</h3>
          <p className="edu-field">Computer Engineering</p>
          <p className="edu-school">LJ University</p>
          <span className="edu-year">2020 – 2024</span>
        </div>
      </div>
    </section>
  );
}
