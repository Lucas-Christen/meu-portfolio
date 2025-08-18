import React, { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

// Lazy loading das seções para melhor performance
const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

const App: React.FC = () => {
  const { t } = useTranslation();
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Se o preloader já foi mostrado nesta sessão, não mostra de novo
    if (sessionStorage.getItem("preloaderShown")) {
      setShowPreloader(false);
    } else {
      sessionStorage.setItem("preloaderShown", "true");
      // Garante que o preloader fique visível por um tempo mínimo
      const timer = setTimeout(() => setShowPreloader(false), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Componente Helmet para controlar o <head> da página dinamicamente */}
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        {/* Você pode adicionar outras meta tags aqui também */}
      </Helmet>

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