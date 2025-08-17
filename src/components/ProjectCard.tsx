import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';

// Defina a interface para o objeto do projeto
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 overflow-hidden h-full flex flex-col"
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(220, 0, 0, 0.15), transparent 40%)',
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-background-secondary text-xs text-accent font-mono py-1 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-primary/10">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <FaGithub size={20} />
          </a>
          {project.demoUrl && project.demoUrl !== "#" && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <FaVideo size={20} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;