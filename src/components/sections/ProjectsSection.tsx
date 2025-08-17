import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Sistema de Telemetria Avançada",
      description: "Plataforma completa de monitoramento em tempo real com análise preditiva e alertas inteligentes. Implementa coleta de métricas de performance, logs estruturados e visualização em dashboards interativos.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "Prometheus", "Grafana", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Dashboard de Performance",
      description: "Interface moderna para análise de métricas de aplicações web com gráficos interativos, filtros avançados e exportação de relatórios. Foco em UX/UI para facilitar a tomada de decisões.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "API Gateway Otimizada",
      description: "Gateway de API com cache inteligente, rate limiting, autenticação JWT e monitoramento de performance. Implementa load balancing e circuit breaker para alta disponibilidade.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      tags: ["Node.js", "Redis", "Docker", "Kubernetes", "Nginx"],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Sistema de Análise de Logs",
      description: "Plataforma ELK Stack customizada para processamento de logs em tempo real com machine learning para detecção de anomalias e correlação de eventos.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Elasticsearch", "Logstash", "Kibana", "Python", "ML"],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Aplicação E-commerce",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos, gestão de estoque e painel administrativo. Otimizada para performance e SEO.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Chatbot Inteligente",
      description: "Chatbot com processamento de linguagem natural, integração com APIs externas e interface conversacional moderna. Implementa machine learning para melhorar respostas.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      tags: ["Python", "TensorFlow", "React", "WebSocket", "NLP"],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Projetos <span className="gradient-text">Implementados</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Portfólio de soluções desenvolvidas com foco em performance, escalabilidade e experiência do usuário
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Ver Mais Projetos no GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
