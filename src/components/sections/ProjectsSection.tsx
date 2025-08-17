import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects'; // Certifique-se que o caminho está correto

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-background-primary">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Projetos <span className="text-accent">em Destaque</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Uma seleção de trabalhos que demonstram minha paixão por resolver problemas complexos com tecnologia e dados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // O componente ProjectCard agora recebe 'project' e 'index' como props
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
            Ver Mais no GitHub
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