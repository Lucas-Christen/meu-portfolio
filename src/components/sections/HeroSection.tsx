import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaCode } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const stats = [
    { label: 'Projetos Concluídos', value: 15, icon: FaRocket },
    { label: 'Anos de Experiência', value: 3, icon: FaChartLine },
    { label: 'Tecnologias Dominadas', value: 12, icon: FaCode },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC0000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container-custom px-4 relative z-10">
        <div className="text-center">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-background-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-mono">Sistema Operacional: Lucas Christen v3.0</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-text-primary">Lucas Fernandes</span>
            <br />
            <span className="gradient-text">Christen</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto"
          >
            Desenvolvedor Full-Stack | Engenheiro de Dados | 
            <span className="text-accent font-semibold"> Especialista em Sistemas Automotivos de Alta Performance</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-background-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="text-accent text-2xl" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-1">{stat.value}+</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="btn-primary group"
            >
              Ver Projetos
              <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-secondary group"
            >
              Contato
              <FaChartLine className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
