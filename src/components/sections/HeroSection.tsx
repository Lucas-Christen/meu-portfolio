import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaDownload } from 'react-icons/fa';
import StatCard from '../ui/StatCard'; // Importação do novo componente

const HeroSection: React.FC = () => {
  const stats = [
    { label: 'Posições Avançadas (Ranking FSAE)', value: '12+', icon: FaRocket },
    { label: 'Membros Liderados (UTForce)', value: '42+', icon: FaUsers },
    { label: 'Projetos de Dados & IoT', value: '5+', icon: FaChartLine },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background-primary">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1A1A1A 0%, #0A0A0A 70%)'
        }}
      />

      <div className="container-custom px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-background-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-mono">Sistema Operacional: Lucas Christen v3.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-accent">Lucas Fernandes</span>
            <br />
            <span className="text-accent">Christen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto"
          >
            <span className="text-text-primary font-semibold">Desenvolvedor Full-Stack | Engenheiro de Dados |  Especialista em Sistemas Automotivos de Alta Performance</span>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                index={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

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
              href="/CVPTBR.pdf"
              download
              className="btn-secondary group"
            >
              Download CV
              <FaDownload className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-accent rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;