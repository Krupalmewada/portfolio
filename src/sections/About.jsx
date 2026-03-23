import "../style/about.css";

export default function About() {
  return (
    <section id="intro" className="about">
      <p className="about-label">INTRODUCTION</p>

      <h2 className="about-heading">
        Crafting intelligent solutions through
        <span> modern development </span>
        and thoughtful design.
      </h2>

      <p className="about-text">
        I'm Krupal, a Full Stack Developer. I have recently completed my
        Master’s in Applied Computing at Wilfrid Laurier University, where I
        worked on projects involving mobile app development, web development,
        AI-powered applications, data analysis, and distributed systems.
      </p>

      <div className="about-buttons">
        <a href="#contact" className="btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
}
