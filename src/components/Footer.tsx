// src/components/Footer.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Lucas-Christen', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/lucas-f-christen-69327a21b/', color: 'hover:text-blue-400' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:lucas.f.christen@outlook.com', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-background-secondary border-t border-primary/20">
      <div className="container-custom px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-text-secondary">
              © {currentYear} <span className="text-text-primary font-semibold">Lucas Fernandes Christen</span>. {t('footer.copyright')}
            </p>
            <p className="text-text-secondary text-sm mt-1">
              {t('footer.subtitle')}
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-text-secondary transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-8 pt-6 border-t border-primary/10"
        >
          <p className="text-text-secondary text-sm flex items-center justify-center space-x-2">
            <span>{t('footer.madeWith')}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-primary" size={14} />
            </motion.div>
            <span>{t('footer.andCoffee')}</span>
            <span className="text-accent">☕</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
