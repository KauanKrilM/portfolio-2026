import IntroAnimation from "./components/intro-animation";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import DataArea from "./sections/data-area";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import MediaStudio from "./sections/media-studio";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import "./styles/global.css";

function App() {
  return (
    <main className="min-h-screen bg-space-950 text-stellar-100">
      <IntroAnimation />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <DataArea />
      <MediaStudio />
      <Contact />
    </main>
  );
}

export default App;
