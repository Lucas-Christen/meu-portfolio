// src/App.tsx

import React, { useState, useEffect, lazy } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

// Importe as novas páginas
const HomePage = lazy(() => import("./pages/HomePage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // O preloader só deve aparecer na página inicial
  useEffect(() => {
    if (location.pathname !== '/' || sessionStorage.getItem("preloaderShown")) {
      setShowPreloader(false);
    } else {
      sessionStorage.setItem("preloaderShown", "true");
      const timer = setTimeout(() => setShowPreloader(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <Preloader isVisible={showPreloader} />
      
      {!showPreloader && (
        <Layout activeSection={activeSection}>
          <Routes>
            <Route path="/" element={<HomePage setActiveSection={setActiveSection} />} />
            <Route path="/curriculo" element={<ResumePage />} />
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;
