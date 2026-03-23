import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import "./style/main.css";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <Hero />
        </aside>

        {/* RIGHT CONTENT */}
        <main className="content">
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
