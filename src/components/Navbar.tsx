// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('navbar.home') },
    { href: '#about', label: t('navbar.about') },
    { href: '#skills', label: t('navbar.expertise') }, // Corrigido para 'skills' para bater com o ID da seção
    { href: '#projects', label: t('navbar.projects') },
    { href: '#contact', label: t('navbar.contact') },
  ];

  const languages = ['pt', 'en', 'es', 'fr'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 mx-auto flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-accent">
          LC
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {/* Links de Navegação */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-accent' // Estilo para o link ativo
                  : 'text-text-secondary hover:text-accent' // Estilo para links inativos
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Divisor Vertical */}
          <div className="w-px h-6 bg-primary/20 mx-2"></div>

          {/* Seletor de Idiomas */}
          <div className="flex items-center space-x-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                // A MÁGICA ACONTECE AQUI: Usamos as mesmas classes dos links <a>
                className={`font-medium uppercase transition-colors duration-300 text-sm ${
                  i18n.language.startsWith(lang)
                    ? 'text-accent' // Estilo para o idioma ativo
                    : 'text-text-secondary hover:text-accent' // Estilo para idiomas inativos
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;