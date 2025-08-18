// src/pages/HomePage.tsx

import React, { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// Lazy loading das seções
const HeroSection = lazy(() => import("../components/sections/HeroSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const SkillsSection = lazy(() => import("../components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("../components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

// A interface para as props foi movida para cá
interface HomePageProps {
  setActiveSection: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveSection }) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      
      <Suspense fallback={<div className="h-screen bg-background-primary" />}>
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection setActiveSection={setActiveSection} />
        <SkillsSection setActiveSection={setActiveSection} />
        <ProjectsSection setActiveSection={setActiveSection} />
        <ContactSection setActiveSection={setActiveSection} />
      </Suspense>
    </>
  );
};

export default HomePage;
