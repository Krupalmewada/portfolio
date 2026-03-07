import "../style/projects.css";
import { FaRobot } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-grid">
        <div className="project-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="project-icon">
                <FaRobot />
              </div>
              <h3>AI Study Buddy</h3>
              <div className="project-skills">
                <span>Java</span>
                <span>Android Studio</span>
                <span>OpenAI</span>
              </div>
            </div>

            <div className="card-back">
              <p>
                AI-Powered Study Assistant app that helps students manage
                documents, generate quizzes automatically and create revision
                notes using AI.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="project-icon">
                <FaLeaf />
              </div>
              <h3>SustAIn</h3>
              <div className="project-skills">
                <span>Dart</span>
                <span>Flutter</span>
                <span>Android Studio</span>
              </div>
            </div>

            <div className="card-back">
              <p>
                Mobile-first app that reduces food waste using AI by scanning
                grocery receipts, tracking food inventory and suggesting
                recipes.
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="project-icon">
                <FaUsers />
              </div>

              <h3>Campus Community Bridge</h3>
              <div className="project-skills">
                <span>Figma</span>
              </div>
            </div>

            <div className="card-back">
              <p>
                Platform connecting university students with local businesses
                and attractions around Brantford to increase engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
