import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Importe

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const { t, i18n } = useTranslation(); // Use o hook
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('navbar.home') },
    { href: '#about', label: t('navbar.about') },
    { href: '#skills', label: t('navbar.expertise') },
    { href: '#projects', label: t('navbar.projects') },
    { href: '#contact', label: t('navbar.contact') },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.nav /* ... */>
      <div className="container-custom px-4 mx-auto flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-accent">LC</a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} /* ... */>
              {link.label}
            </a>
          ))}
          {/* Seletor de Idioma */}
          <div className="flex space-x-2">
             <button onClick={() => changeLanguage('pt')} className={`font-mono text-sm ${i18n.language === 'pt' ? 'text-accent' : 'text-text-secondary'}`}>PT</button>
             <button onClick={() => changeLanguage('en')} className={`font-mono text-sm ${i18n.language === 'en' ? 'text-accent' : 'text-text-secondary'}`}>EN</button>
             <button onClick={() => changeLanguage('es')} className={`font-mono text-sm ${i18n.language === 'es' ? 'text-accent' : 'text-text-secondary'}`}>ES</button>
             <button onClick={() => changeLanguage('fr')} className={`font-mono text-sm ${i18n.language === 'fr' ? 'text-accent' : 'text-text-secondary'}`}>FR</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;