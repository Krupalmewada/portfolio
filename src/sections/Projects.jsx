import "../style/projects.css";
import study from "../assets/study.jpg";
import sustain from "../assets/sustain.jpg";
import campus from "../assets/campus.png";
import Insurance from "../assets/insurance.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
        <div className="project-item">
          <div className="project-image">
            <img src={Insurance} alt="Insurance" />

            <div className="project-info">
              <h3>ClaimTrack — Insurance Claims Dashboard</h3>

              <p>
                A responsive, enterprise-style insurance claims management
                dashboard built as a frontend portfolio project. It demonstrates
                real-world React patterns including multi-user authentication,
                protected routing, per-user data isolation, dark/light theming,
                and full form validation — all without a backend.
              </p>

              <div className="project-tech">
                <span>javascript</span>
                <span>css</span>
                <span>html</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={study} alt="AI Study Buddy" />

            <div className="project-info">
              <h3>AI Study Buddy</h3>

              <p>
                AI powered study assistant that generates quizzes, summaries and
                flashcards from uploaded documents.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node</span>
                <span>OpenAI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img src={sustain} alt="Sustain" />

            <div className="project-info">
              <h3>SustAin</h3>

              <p>
                Mobile-first app that reduces food waste using AI by scanning
                grocery receipts, tracking food inventory and suggesting
                recipes.
              </p>

              <div className="project-tech">
                <span>Dart</span>
                <span>Flutter</span>
                <span>Android Studio</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={campus} alt="Campus" />

            <div className="project-info">
              <h3>Capmpus Comunity Bridge</h3>

              <p>
                Platform connecting university students with local businesses
                and attractions around Brantford to increase engagement.
              </p>

              <div className="project-tech">
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
