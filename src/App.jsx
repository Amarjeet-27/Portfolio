import "./App.css";
import { useState, useEffect, Suspense } from "react";
import config from "./config/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import AchievementsSection from "./components/AchievementsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const sections = [
    { id: "home", name: "Home" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "certifications", name: "Certifications" },
    { id: "achievements", name: "Achievements" },
    { id: "education", name: "Education" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.pageYOffset > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <Navbar sections={sections} onNav={scrollTo} contact={config.contact} />
      <main>
        <Hero config={config} onPrimary={scrollTo} />
        <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
          <ExperienceTimeline experience={config.experience} />
          <ProjectsSection projects={config.projects} />
          <SkillsSection
            skills={config.skills}
            softSkills={config.softSkills}
          />
          <CertificationsSection certifications={config.certifications} />
          <AchievementsSection achievements={config.achievements} />
          <EducationSection education={config.education} />
        </Suspense>
      </main>
      <Footer contact={config.contact} />
      {showTop && (
        <button
          onClick={() => scrollTo("home")}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 px-5 py-3 bg-cyan-600 text-white rounded-full"
        >
          ↑
        </button>
      )}
    </div>
  );
}
