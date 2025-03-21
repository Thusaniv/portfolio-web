import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/certifications";
import { Skillupdate } from "./components/Skillupdate";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24  mx-auto px-12 py-20">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Education />
        <Certifications />
        <ProjectsSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}