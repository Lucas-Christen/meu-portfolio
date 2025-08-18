// src/components/MobileMenu.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Definindo os tipos para as props que o componente receberá
interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: { href: string; label: string }[];
  languages: string[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, navLinks, languages }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Fecha o menu ao trocar de idioma
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  // Variantes de animação para o menu (efeito de fade in e slide from top)
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  // Variantes de animação para cada item do menu
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background-primary/95 backdrop-blur-sm"
        >
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container-custom px-4 mx-auto pt-24 flex flex-col items-center justify-center h-full"
          >
            {/* Links de Navegação */}
            <nav className="flex flex-col items-center space-y-6 mb-12">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  variants={itemVariants}
                  className="text-3xl font-title text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Divisor */}
            <motion.div variants={itemVariants} className="w-16 h-px bg-primary/20 mb-12"></motion.div>

            {/* Seletor de Idiomas */}
            <motion.div variants={itemVariants} className="flex items-center space-x-6">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`font-body uppercase transition-colors duration-300 text-lg ${
                    i18n.language.startsWith(lang)
                      ? 'text-accent font-bold'
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
