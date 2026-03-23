import "../style/projects.css";
import study from "../assets/study.jpg";
import sustain from "../assets/sustain.jpg";
import campus from "../assets/campus.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
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
