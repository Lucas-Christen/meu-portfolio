import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Expertise' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ];

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
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;