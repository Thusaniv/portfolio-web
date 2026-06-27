import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ResearchSection from "./components/ResearchSection";
import Education from "./components/Education";
import Certifications from "./components/certifications";
import Contact from "./components/Contact";
import { Design } from "./components/designs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050810]/40">
      <Navbar />
      <div className="container mt-16 mx-auto px-6 md:px-12 pt-4 pb-16 relative z-2">
        <HeroSection />

        <AboutSection />
        <Skills />
        <ResearchSection />
        <ProjectsSection />
        <Education />
        <Certifications />
        <Design />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}