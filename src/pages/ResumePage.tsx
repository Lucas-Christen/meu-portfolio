// src/pages/ResumePage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaLanguage } from 'react-icons/fa';
import { getResumeData } from '../data/resumeData';
import TimelineItem from '../components/ui/TimelineItem';

const ResumePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { attributes, timeline, proficiencies, equipment, languages } = getResumeData(t);

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-bold">{t('resume.characterName')}</h1>
          <p className="text-lg sm:text-xl text-primary font-mono mt-2">{t('resume.characterClass')}</p>
          <div className="mt-4 text-text-secondary flex justify-center gap-4 flex-wrap">
            <span>{t('resume.race')}</span>
            <span>|</span>
            <span>{t('resume.alignment')}</span>
          </div>
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

        {/* --- Perícias e Proficiências --- */}
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
                      <skill.icon className="text-primary text-lg mr-3 flex-shrink-0" />
                      <span className="font-body text-text-secondary">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- NOVA SEÇÃO: Idiomas --- */}
        <div className="mb-20">
            <h2 className="titulo-secao text-center mb-12">{t('resume.languages.title')}</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {languages.map((lang, index) => (
                    <motion.div
                        key={lang.level}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-background-secondary border border-primary/10 rounded-xl p-6"
                    >
                        <h3 className="font-mono text-lg font-bold text-accent mb-3">{lang.level}</h3>
                        <ul className="space-y-1">
                            {lang.languages.map(l => <li key={l} className="text-text-secondary">{l}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
        
        {/* --- Equipamentos (Inventário) --- */}
        <div className="mb-20">
            <h2 className="titulo-secao text-center mb-12">{t('resume.equipment.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {equipment.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-background-secondary border border-primary/10 rounded-xl p-6 text-center"
                    >
                        <item.icon className="text-accent text-4xl mx-auto mb-4" />
                        <h3 className="font-title text-xl font-bold text-text-primary">{item.name}</h3>
                        <p className="text-text-secondary text-sm">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- Timeline de Carreira (Jornada e Conquistas) --- */}
        <div>
          <h2 className="titulo-secao text-center mb-12">{t('resume.timelineTitle')}</h2>
          <div className="relative flex flex-col gap-12 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-primary/20">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
        
        {/* --- História do Personagem (Backstory) --- */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="titulo-secao mb-8">{t('resume.backstory.title')}</h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                className="texto-corpo italic"
            >
                "{t('resume.backstory.content')}"
            </motion.p>
        </div>

      </div>
    </div>
  );
};

export default ResumePage;