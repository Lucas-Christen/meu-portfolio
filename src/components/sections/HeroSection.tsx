import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaDownload } from 'react-icons/fa';import StatCard from '../ui/StatCard';
import { useTranslation } from 'react-i18next'; // 1. Importe o hook

const HeroSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const { t } = useTranslation(); // 2. Inicialize o hook
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
    <section id="home" ref={ref} className="min-h-screen flex items-center ...">
      {/* ... */}
      <div className="container-custom px-4 relative z-10">
        <div className="text-center">
          <motion.div /* ... */ >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            {/* 3. Use a função t() para traduzir */}
            <span className="text-text-secondary text-sm font-mono">{t('hero.statusBar')}</span>
          </motion.div>
          <motion.h1 /* ... */ >
            <span className="text-accent">{t('hero.title1')}</span>
            <br />
            <span className="text-accent">{t('hero.title2')}</span>
          </motion.h1>
          <motion.p /* ... */ >
            <span className="text-text-primary font-semibold">{t('hero.subtitle')}</span>
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
          <motion.div /* ... */ >
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
      {/* ... */}
    </section>
  );
};
export default HeroSection;