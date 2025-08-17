import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/lucaschristen',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/lucaschristen',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:lucas@example.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-background-secondary border-t border-text-secondary/20">
      <div className="container-custom px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-text-secondary text-sm"
          >
            © {currentYear} Lucas Christen. Todos os direitos reservados.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-text-secondary transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2 text-text-secondary text-sm"
          >
            <span>Feito com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" size={14} />
            </motion.div>
            <span>por Lucas Christen</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
