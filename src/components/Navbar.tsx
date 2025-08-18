// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu
import MobileMenu from './MobileMenu'; // Importa o novo componente

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Previne o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#home', label: t('navbar.home') },
    { href: '#about', label: t('navbar.about') },
    { href: '#skills', label: t('navbar.expertise') },
    { href: '#projects', label: t('navbar.projects') },
    { href: '#contact', label: t('navbar.contact') },
  ];

  const languages = ['pt', 'en', 'es', 'fr'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-background-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-custom px-4 mx-auto flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-accent font-title">
            LC
          </a>

          {/* Menu para Desktop (escondido em telas pequenas) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-6 bg-primary/20 mx-2"></div>
            <div className="flex items-center space-x-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`font-body uppercase transition-colors duration-300 text-sm ${
                    i18n.language.startsWith(lang)
                      ? 'text-accent font-bold'
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Botão Hamburger (visível apenas em telas pequenas) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Renderiza o Menu Mobile */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        navLinks={navLinks} 
        languages={languages} 
      />
    </>
  );
};

export default Navbar;
