import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Sistema de Telemetria IoT para Fórmula SAE",
      description: "Sistema IoT completo para telemetria em tempo real, utilizando ESP32 e LoRa no veículo e uma estação base com Raspberry Pi e Flask API para processamento e armazenamento de dados em MySQL. A interface gráfica multiplataforma foi desenvolvida em Python com PySide6 (Qt) para visualização e análise de performance.",
      image: "/api/placeholder/400/250", // Sugestão: Troque por uma foto da placa ou um screenshot do dashboard
      tags: ["IoT", "ESP32", "LoRa", "Raspberry Pi", "Python", "Flask", "PySide6"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen/Telemetria-Christen-UTFORCE", // Ajuste para o repositório específico do projeto
      demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_engineering-formulasae-telemetry-activity-7339752358114971650-3ZmA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdkBk8B1sCMYVsVi1kTQ859iLyx22phA2g" // Sugestão: Link para um vídeo de demonstração
    },
    {
      title: "Capitão e Engenheiro de Sistemas (UTForce E-Racing)",
      description: "Liderei a construção do protótipo de carro elétrico, sendo responsável pelo sistema de alta tensão, diagnóstico e reparo do BMS (Battery Management System), e pela montagem e integração geral. Garanti um patrocínio estratégico para componentes essenciais, culminando na entrega de um veículo totalmente funcional.",
      image: "/api/placeholder/400/250", // Sugestão: Troque por uma foto do carro ou da equipe
      tags: ["Liderança de Equipe", "Gestão de Projetos", "Sistemas Elétricos", "Alta Tensão", "BMS", "Diagnóstico de Falhas"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "https://sites.google.com/alunos.utfpr.edu.br/portfolio-lucas-f-christen/projetos-de-extens%C3%A3o/utforce-e-racing-f-sae?authuser=0" // Sugestão: Link para um vídeo do carro funcionando
    },
    {
      title: "Sistema de Gerenciamento de Pneus (Motorsport)",
      description: "Aplicação desktop (PySide6) para gerenciamento de pneus e análise de setup em motorsport. O sistema calcula correções de pressão, exporta relatórios e visualiza a distribuição de rigidez do carro com heatmaps, auxiliando na tomada de decisão estratégica.",
      image: "/api/placeholder/400/250", // Sugestão: Troque por um screenshot do heatmap ou da interface
      tags: ["PySide6", "Python", "Motorsport", "Análise de Dados", "Desktop App"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen", // Ajuste para o repositório específico do projeto
      demoUrl: "#" // Sugestão: Link para um vídeo de demonstração
    },
    {
      title: "Central de Comando Pessoal",
      description: "Aplicativo de produtividade desktop multiplataforma (Win/Mac/Linux) com arquitetura modular, construído com Electron.js, Node.js e React. Inclui módulos de finanças, tarefas, metas com gamificação e saúde, com gráficos dinâmicos e notificações nativas.",
      image: "/api/placeholder/400/250", // Sugestão: Troque por um GIF ou screenshot do app
      tags: ["Electron.js", "Node.js", "React", "Desktop App", "JavaScript"],
      liveUrl: "#", // Sugestão: Link para a página de releases/download no GitHub
      githubUrl: "https://github.com/Lucas-Christen", // Ajuste para o repositório específico do projeto, se houver
      demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_engenhariadesoftware-desenvolvimento-electronjs-activity-7336073492301287426-FJ2u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdkBk8B1sCMYVsVi1kTQ859iLyx22phA2g" // Sugestão: Link para um vídeo de demonstração no YouTube/Vimeo
    },
    {
      title: "Sistema de Análise de Dados Pokémon",
      description: "Aplicação Full Stack (Ionic/Angular) que transforma uma Pokédex em uma plataforma de análise de dados. Coleta e processa métricas de 1000+ Pokémon, incluindo estatísticas, metadados e comportamento do usuário, utilizando webhooks customizados, cache LRU e streaming de dados com RxJS para otimização de UX em tempo real.",
      image: "/api/placeholder/400/250",
      tags: ["Ionic", "Angular", "TypeScript", "Análise de Dados", "RxJS", "Full Stack"],
      liveUrl: "#",
      githubUrl: "https://github.com/Lucas-Christen/Pokemon-App",
      demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_dataanalysis-fullstackdeveloper-typescript-activity-7342710051637293056-CJiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdkBk8B1sCMYVsVi1kTQ859iLyx22phA2g"
    },
    {
      title: "Dashboard de Telemetria Web",
      description: "Aplicação web para análise e visualização de dados de telemetria em tempo real, com backend em Python/Flask e frontend interativo construído com HTML, CSS, JavaScript e Chart.js para gráficos dinâmicos.",
      image: "/api/placeholder/400/250", // Sugestão: Troque por um screenshot do dashboard
      tags: ["Flask", "Python", "JavaScript", "Chart.js", "HTML/CSS"],
      liveUrl: "#", // Sugestão: Link para a aplicação ao vivo
      githubUrl: "https://github.com/Lucas-Christen/Analise-de-dados-Telemetria", // Ajuste para o repositório específico do projeto
      demoUrl: "#" // Sugestão: Link para um vídeo de demonstração
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
            Projetos <span className="gradient-text">Finalizados</span>
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
            className="btn-primary group flex items-center"
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
