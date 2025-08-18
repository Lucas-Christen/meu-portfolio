// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // 1. Importe o Provider
import './index.css';
import App from './App.tsx';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Envolva o <App /> com o <HelmetProvider> */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);