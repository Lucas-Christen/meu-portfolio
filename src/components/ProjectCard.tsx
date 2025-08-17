import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  demoUrl
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group bg-background-secondary rounded-xl overflow-hidden border border-accent/20 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
          <div className="flex space-x-4">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-background-primary p-3 rounded-full hover:bg-accent-orange transition-colors duration-300"
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background-primary text-accent p-3 rounded-full hover:bg-accent hover:text-background-primary transition-colors duration-300"
              >
                <FaGithub size={16} />
              </motion.a>
            )}
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-orange text-background-primary p-3 rounded-full hover:bg-accent transition-colors duration-300"
              >
                <FaPlay size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-2 text-xs text-text-secondary">
          <div className="text-center">
            <div className="text-accent font-bold">100%</div>
            <div>Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-accent font-bold">150ms</div>
            <div>Response</div>
          </div>
          <div className="text-center">
            <div className="text-accent font-bold">A+</div>
            <div>Performance</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
