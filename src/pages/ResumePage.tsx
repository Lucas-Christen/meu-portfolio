// src/pages/ResumePage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';
import { getResumeData } from '../data/resumeData';
import TimelineItem from '../components/ui/TimelineItem';

const ResumePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  // Agora também pegamos 'proficiencies'
  const { attributes, timeline, proficiencies } = getResumeData(t);

  const cvFile = `/CV_${i18n.language.toUpperCase()}.pdf`;
  const fallbackCv = '/CVPTBR.pdf';

  return (
    <div className="bg-background-primary text-text-primary">
      <div className="container-custom section-padding">
        
        {/* --- Cabeçalho da Ficha --- */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* ... (cabeçalho existente) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-bold">{t('resume.characterName')}</h1>
          <p className="text-lg sm:text-xl text-primary font-mono mt-2">{t('resume.characterClass')}</p>
          <a 
            href={cvFile} 
            download={`LucasChristen_CV_${i18n.language.toUpperCase()}.pdf`}
            onError={(e) => { e.currentTarget.href = fallbackCv }}
            className="btn-primary group mt-8 inline-flex items-center"
          >
            {t('hero.buttonCV')}
            <FaDownload className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* --- Seção de Atributos --- */}
        <div className="mb-20">
          {/* ... (seção de atributos existente) */}
          <h2 className="titulo-secao text-center mb-10">{t('resume.attributes.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {attributes.map((attr, index) => (
              <motion.div 
                key={attr.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-secondary border border-primary/10 rounded-xl p-4 text-center flex flex-col items-center"
              >
                <attr.icon className="text-accent text-3xl mb-2" />
                <p className="font-mono text-sm text-text-secondary">{attr.name}</p>
                <p className="font-title text-4xl font-bold text-text-primary my-1">{attr.value}</p>
                <p className="font-mono text-lg text-primary">{attr.modifier}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- NOVA SEÇÃO: Perícias e Proficiências --- */}
        <div className="mb-20">
          <h2 className="titulo-secao text-center mb-12">{t('resume.proficiencies.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proficiencies.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-background-secondary border border-primary/10 rounded-xl p-6"
              >
                <h3 className="font-title text-xl font-bold text-accent mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="flex items-center">
                      <skill.icon className="text-primary text-lg mr-3" />
                      <span className="font-body text-text-secondary">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Timeline de Carreira (Jornada e Conquistas) --- */}
        <div>
          {/* ... (seção da timeline existente) */}
          <h2 className="titulo-secao text-center mb-12">{t('resume.timelineTitle')}</h2>
          <div className="relative flex flex-col gap-12 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-primary/20">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumePage;
