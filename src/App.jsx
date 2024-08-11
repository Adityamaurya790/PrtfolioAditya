import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import HeroSection from "./Components/HeroSection/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default App;
