import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaDownload } from 'react-icons/fa';
import StatCard from '../ui/StatCard';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('home');
    }
  }, [isInView, setActiveSection]);

  const stats = [
    { label: t('hero.stat1'), value: '12+', icon: FaRocket },
    { label: t('hero.stat2'), value: '42+', icon: FaUsers },
    { label: t('hero.stat3'), value: '5+', icon: FaChartLine },
  ];

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background-primary">
      {/* --- Efeitos de fundo --- */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1A1A1A 0%, #0A0A0A 70%)'
        }}
      />
      {/* --- Conteúdo Principal --- */}
      <div className="container-custom px-4 relative z-10">
        <div className="text-center">
          
          {/* --- Status Bar --- */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-background-secondary/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-mono">{t('hero.statusBar')}</span>
          </motion.div>

          {/* --- Título Principal --- */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            // ATUALIZADO AQUI: Usando a classe de componente
            className="titulo-secao mb-6 text-5xl md:text-8xl"
          >
            <span className="text-accent">{t('hero.title1')}</span>
            <br />
            <span className="text-accent">{t('hero.title2')}</span>
          </motion.h1>
          
          {/* --- Subtítulo --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            // ATUALIZADO AQUI: Usando a classe de componente
            className="subtitulo-secao mb-12 text-5xl md:text-2xl"
          >
            {/* O <span> interno é para manter o negrito específico, o que é ótimo */}
            <span className="font-semibold text-text-primary">{t('hero.subtitle')}</span>
          </motion.p>
          
          {/* --- Cards de Estatísticas --- */}
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
          
          {/* --- Botões de Ação --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="btn-primary group">
              {t('hero.buttonProjects')}
              <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/CVPTBR.pdf" download className="btn-secondary group">
              {t('hero.buttonCV')}
              <FaDownload className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* --- Indicador de Scroll --- */}
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