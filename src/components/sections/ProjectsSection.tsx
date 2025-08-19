// src/components/sections/ProjectsSection.tsx

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { getProjects, Project } from '../../data/projects'; // Importando a estrutura e função unificadas
import { useTranslation, Trans } from 'react-i18next';
import { FaGithub, FaVideo, FaLock, FaArrowRight } from 'react-icons/fa';

const ProjectsSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const { t, i18n } = useTranslation(); // Obtenha a instância i18n para monitorar a mudança de idioma
  const projects = getProjects(t);
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('projects');
    }
  }, [isInView, setActiveSection]);

  // Efeito para atualizar o projeto selecionado quando o idioma muda
  useEffect(() => {
    if (selectedProject) {
      // Encontra o projeto correspondente na lista recém-traduzida
      const updatedSelectedProject = projects.find(p => p.id === selectedProject.id);
      // Atualiza o estado com os dados traduzidos
      setSelectedProject(updatedSelectedProject || projects[0]);
    }
  }, [i18n.language]); // A dependência agora é a mudança de idioma

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

        <div className="flex flex-col lg:flex-row gap-8 min-h-[550px]">
          {/* Lista de Projetos (Seletores) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 flex flex-col gap-2"
          >
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative border-l-4 ${
                  selectedProject?.id === project.id
                    ? 'bg-background-secondary border-accent shadow-lg'
                    : 'bg-background-secondary/50 border-transparent hover:bg-background-secondary hover:border-primary'
                }`}
              >
                <h3 className="font-bold text-text-primary">{project.title}</h3>
                <p className="text-sm text-text-secondary">{project.organization}</p>
                {project.confidential && <FaLock className="absolute top-4 right-4 text-amber-400" title="Confidential Project" />}
              </button>
            ))}
          </motion.div>

          {/* Detalhes do Projeto Selecionado */}
          <div className="lg:w-2/3 relative">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background-secondary border border-primary/20 rounded-xl p-8 h-full flex flex-col"
                >
                  <h3 className="font-title text-2xl font-bold text-text-primary mb-2">{selectedProject.title}</h3>
                  <p className="text-accent font-medium mb-4">{selectedProject.organization} • {selectedProject.duration}</p>
                  
                  <p className="text-text-secondary mb-6 flex-grow">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                          <span className="text-text-secondary">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-4 mb-6">
                    <p className="text-accent font-semibold mb-1">Business Impact:</p>
                    <p className="text-text-secondary text-sm">{selectedProject.businessImpact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="bg-background-primary text-xs text-accent font-mono py-1 px-3 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-primary/10">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="Demo Video">
                        <FaVideo size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
            {t('projects.buttonMore', 'See More on GitHub')}
            <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
