import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaPlay, FaCode } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364ffda' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="text-center">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center items-center space-x-4 text-sm text-text-secondary"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>ONLINE</span>
            </div>
            <span>•</span>
            <span>LUCAS CHRISTEN</span>
            <span>•</span>
            <span>PERFORMANCE ENGINEER</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-text-primary">Dashboard do</span>
            <br />
            <span className="gradient-text">Engenheiro de</span>
            <br />
            <span className="gradient-text">Performance</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto"
          >
            Desenvolvedor Full-Stack & Analista de Dados especializado em 
            <span className="text-accent"> otimização de performance</span> e 
            <span className="text-accent"> telemetria avançada</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="bg-background-secondary/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">5+</div>
              <div className="text-text-secondary text-sm">Anos de Experiência</div>
            </div>
            <div className="bg-background-secondary/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">50+</div>
              <div className="text-text-secondary text-sm">Projetos Entregues</div>
            </div>
            <div className="bg-background-secondary/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
              <div className="text-text-secondary text-sm">Uptime Garantido</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
              onClick={scrollToAbout}
            >
              <FaPlay size={16} />
              <span>Ver Projetos</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <FaCode size={16} />
              <span>Ver Código</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToAbout}
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <FaArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
