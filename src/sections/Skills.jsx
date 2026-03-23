import "../style/skills.css";

import {
  FaReact,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiPython,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiAndroidstudio,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: FaReact, name: "React" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaJava, name: "Java" },
    { icon: SiPython, name: "Python" },
    { icon: SiFlutter, name: "Flutter" },
    { icon: SiDart, name: "Dart" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiAndroidstudio, name: "Android Studio" },
    { icon: FaFigma, name: "Figma" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div className="skill-card" key={index}>
              <Icon className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
