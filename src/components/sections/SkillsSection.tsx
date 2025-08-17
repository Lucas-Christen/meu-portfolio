import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaDatabase,
  FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaServer, FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiKubernetes,
  SiPrometheus, SiGrafana, SiElasticsearch, SiKibana, SiNginx
} from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "FastAPI", icon: FaServer, color: "text-green-400" },
        { name: "Express", icon: FaServer, color: "text-gray-400" },
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
        { name: "MySQL", icon: FaDatabase, color: "text-blue-400" },
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "AWS", icon: FaAws, color: "text-yellow-500" },
        { name: "Linux", icon: FaLinux, color: "text-yellow-600" },
        { name: "Nginx", icon: SiNginx, color: "text-green-500" },
      ]
    },
    {
      name: "Monitoring",
      skills: [
        { name: "Prometheus", icon: SiPrometheus, color: "text-red-500" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
        { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-600" },
        { name: "Kibana", icon: SiKibana, color: "text-blue-600" },
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "VS Code", icon: FaCode, color: "text-blue-500" },
        { name: "Postman", icon: FaServer, color: "text-orange-400" },
        { name: "Jira", icon: FaServer, color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Stack <span className="gradient-text">Tecnológica</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para desenvolver soluções de alta performance
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-background-primary rounded-xl p-6 border border-accent/20"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      filter: 'grayscale(0%)',
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background-secondary/50 border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <skill.icon 
                      size={32} 
                      className={`${skill.color} group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0`}
                    />
                    <span className="text-text-secondary text-sm font-medium text-center group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-background-primary rounded-lg p-6 text-center border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-text-secondary">Tecnologias Dominadas</div>
          </div>
          <div className="bg-background-primary rounded-lg p-6 text-center border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-text-secondary">Anos de Experiência</div>
          </div>
          <div className="bg-background-primary rounded-lg p-6 text-center border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-text-secondary">Projetos Concluídos</div>
          </div>
          <div className="bg-background-primary rounded-lg p-6 text-center border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-text-secondary">Taxa de Sucesso</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
