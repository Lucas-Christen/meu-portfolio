// src/components/sections/ProjectsSection.tsx

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { getProjects } from '../../data/projects'; // Importe a nova função
import { useTranslation, Trans } from 'react-i18next'; // Importe os hooks

const ProjectsSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const { t } = useTranslation();
  const projects = getProjects(t); // Obtenha os dados traduzidos
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('projects');
    }
  }, [isInView, setActiveSection]);

  return (
    <section id="projects" ref={ref} className="section-padding bg-background-primary">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="titulo-secao mb-4">
            <Trans
              i18nKey="projects.title"
              components={{
                accent: <span className="text-accent" />,
              }}
            />
          </h2>
          <p className="subtitulo-secao">
            {t('projects.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Lucas-Christen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center"
          >
            {t('projects.buttonMore')}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;