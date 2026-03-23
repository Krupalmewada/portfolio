import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../style/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>

      <p className="contact-desc">Let's build something together.</p>

      <div className="contact-buttons">
        <a
          href="mailto:krupalmewada0107@gmail.com"
          className="contact-main-btn"
        >
          <HiOutlineMail />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/Krupalmewada"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/krupal-mewada/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
