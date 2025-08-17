import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Sistema de Telemetria UTForce E-Racing",
      description: "Desenvolvimento completo da interface gráfica do aplicativo de telemetria de dados para carros de corrida. Sistema de coleta e transmissão de dados em tempo real via rede LoRa para análise e predição.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "HTML", "Telemetria", "LoRa", "Tempo Real"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "#"
    },
    {
      title: "Sistema de Bateria de Íons de Lítio",
      description: "Desenvolvimento do sistema de bateria inteligente para protótipo elétrico Fórmula SAE. Inclui monitoramento de temperatura, tensão e otimização de performance.",
      image: "/api/placeholder/400/250",
      tags: ["Sistemas Elétricos", "Baterias", "IoT", "Monitoramento"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "#"
    },
    {
      title: "Aplicativo de Otimização Porsche Cup",
      description: "Desenvolvimento de aplicativos especializados para otimização de setups de carros em colaboração com engenheiro de corrida. Análise de desempenho e tomada de decisão baseada em dados.",
      image: "/api/placeholder/400/250",
      tags: ["React.js", "Análise de Dados", "Performance", "Setup"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "#"
    },
    {
      title: "IMU - Unidade de Medição Inercial",
      description: "Desenvolvimento da nova IMU para projeto em parceria com a Renault. Foco na geração de dados para futuras análises e modelos preditivos.",
      image: "/api/placeholder/400/250",
      tags: ["IMU", "Sensores", "Renault", "Modelos Preditivos"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "#"
    },
    {
      title: "Dashboard de Performance FSAE",
      description: "Interface de visualização e análise de dados de telemetria em tempo real. Contribuiu para elevação da equipe da 25ª para a 13ª posição no ranking geral do Brasil.",
      image: "/api/placeholder/400/250",
      tags: ["Dashboard", "FSAE", "Análise", "Performance"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "#"
    },
    {
      title: "Sistema de Diagnóstico Automotivo",
      description: "Sistema inteligente para diagnósticos e reparos baseado em dados de telemetria. Monitoramento de sistemas elétricos e mecânicos em tempo real.",
      image: "/api/placeholder/400/250",
      tags: ["Diagnóstico", "Manutenção", "IoT", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "#"
    }
  ];

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
            Projetos <span className="gradient-text">Automotivos</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Experiência em desenvolvimento de sistemas de alta performance para competições automotivas e aplicações industriais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Lucas-Christen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Ver Mais Projetos no GitHub
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
