import "../style/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";
import noise from "../assets/noise.jpg";

export default function Hero() {
  return (
    <aside className="hero">
      <div className="hero-card" style={{ "--noise": `url(${noise})` }}>
        <img src={profile} alt="profile" className="profile-img" />

        <h3>Krupal Mewada</h3>

        <p className="role">Full Stack Developer</p>

        <p className="location">Canada</p>

        <div className="socials">
          <a href="https://github.com/Krupalmewada" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/krupal-mewada/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:krupalmewada1017@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <button className="talk-btn">
          <a href="#contact">Let's Talk</a>
        </button>
      </div>
    </aside>
  );
}
