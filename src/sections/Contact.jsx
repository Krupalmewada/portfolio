import "../style/contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="section-subtitle">GET IN TOUCH</p>
      <h2 className="section-title">Let's Work Together</h2>

      <p className="contact-desc">
        I'm always open to discussing new projects, opportunities, or
        collaborations. Feel free to reach out!
      </p>

      <div className="contact-buttons">
        <a
          href="mailto:krupalmewada0107@gmail.com"
          className="contact-main-btn"
        >
          <FaEnvelope /> Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/krupal-mewada/"
          target="_blank"
          className="contact-btn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Krupalmewada"
          target="_blank"
          className="contact-btn"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
