import "../style/hero.css";
import resume from "../assets/resume.pdf";
import profile from "../assets/Me.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <h1>
          Krupal <br /> Mewada.
        </h1>

        <div className="line"></div>

        <div className="socials">
          <a
            href="https://github.com/Krupalmewada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/krupal-mewada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>

      <div className="hero-right">
        <h2>Full Stack Developer</h2>

        <p className="desc">
          I build websites and applications with a creative touch. For me,
          development is not just about code - it's about turning ideas into
          digital experiences where technology and art work together.
        </p>
        <a href={resume} download className="resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}
