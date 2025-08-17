import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Lucas-Christen',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/lucas-f-christen-69327a21b/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:lucas.f.christen@outlook.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-background-secondary border-t border-primary/20">
      <div className="container-custom px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-text-secondary">
              © {currentYear} <span className="text-text-primary font-semibold">Lucas Fernandes Christen</span>. 
              Todos os direitos reservados.
            </p>
            <p className="text-text-secondary text-sm mt-1">
              Desenvolvedor Full-Stack | Engenheiro de Dados | Especialista em Sistemas Automotivos
            </p>
          </div>

          {/* Social Links */}
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

        {/* Made with Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-8 pt-6 border-t border-primary/10"
        >
          <p className="text-text-secondary text-sm flex items-center justify-center space-x-2">
            <span>Feito com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-primary" size={14} />
            </motion.div>
            <span>e muito café</span>
            <span className="text-accent">☕</span>
          </p>
          <p className="text-text-secondary text-xs mt-2">
            Tecnologias: React, TypeScript, Tailwind CSS, Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
