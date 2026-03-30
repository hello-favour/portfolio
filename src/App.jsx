import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechBanner from "./components/TechBanner";
import SectionDivider from "./components/SectionDivider";
import CursorGlow from "./components/CursorGlow";
import NoiseOverlay from "./components/NoiseOverlay";

export default function App() {
  return (
    <>
      <CursorGlow />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <TechBanner />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
