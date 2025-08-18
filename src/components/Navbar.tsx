// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // LÓGICA DE SCROLL RESTAURADA
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LÓGICA DE BLOQUEIO DE SCROLL RESTAURADA
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/#home', label: t('navbar.home'), isPageLink: false },
    { href: '/#about', label: t('navbar.about'), isPageLink: false },
    { href: '/#skills', label: t('navbar.expertise'), isPageLink: false },
    { href: '/#projects', label: t('navbar.projects'), isPageLink: false },
    { href: '/curriculo', label: t('navbar.resume'), isPageLink: true },
    { href: '/#contact', label: t('navbar.contact'), isPageLink: false },
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
          <Link to="/" className="text-2xl font-bold text-accent font-title">
            LC
          </Link>

          {/* Menu para Desktop (escondido em telas pequenas) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.isPageLink) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-body font-medium transition-colors duration-300 ${
                      location.pathname === link.href
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-body font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(2) && location.pathname === '/'
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            
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
