import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importe suas traduções
import ptTranslation from './locales/pt/translation.json';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador do usuário
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão caso a detecção falhe
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
  });

export default i18n;