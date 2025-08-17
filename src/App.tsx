import React, { useState, useEffect, lazy, Suspense } from "react";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Se já mostramos nesta sessão, pula o preloader
    if (sessionStorage.getItem("preloaderShown")) {
      setShowPreloader(false);
    } else {
      sessionStorage.setItem("preloaderShown", "true");
      // Garante que logo fique visível por pelo menos 2.5s
      const timer = setTimeout(() => setShowPreloader(false), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Preloader isVisible={showPreloader} />

      {!showPreloader && (
        <Layout activeSection={activeSection}>
          <Suspense fallback={<div className="h-screen bg-background-primary" />}>
            <HeroSection setActiveSection={setActiveSection} />
            <AboutSection setActiveSection={setActiveSection} />
            <SkillsSection setActiveSection={setActiveSection} />
            <ProjectsSection setActiveSection={setActiveSection} />
            <ContactSection setActiveSection={setActiveSection} />
          </Suspense>
        </Layout>
      )}
    </>
  );
};

export default App;