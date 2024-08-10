import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import HeroSection from "./Components/HeroSection/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
