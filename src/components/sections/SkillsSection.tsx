import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaDatabase, FaServer, FaChartLine, FaCode,
  FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaDocker
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostgresql, SiTensorflow, SiScikitlearn, 
  SiPandas, SiNumpy, SiStreamlit, SiArduino, SiRaspberrypi
} from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programação & Dados",
      skills: [
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
        { name: "SQL", icon: FaDatabase, color: "text-blue-700" },
        { name: "C++", icon: FaCode, color: "text-blue-800" },
      ]
    },
    {
      title: "Machine Learning & Data Science",
      skills: [
        { name: "PySpark", icon: FaChartLine, color: "text-orange-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-600" },
        { name: "Pandas", icon: SiPandas, color: "text-blue-500" },
        { name: "NumPy", icon: SiNumpy, color: "text-blue-600" },
        { name: "Streamlit", icon: SiStreamlit, color: "text-red-500" },
      ]
    },
    {
      title: "Sistemas & IoT",
      skills: [
        { name: "Telemetria", icon: FaServer, color: "text-purple-500" },
        { name: "Arduino", icon: SiArduino, color: "text-blue-600" },
        { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-red-600" },
        { name: "Sistemas Elétricos", icon: FaCode, color: "text-yellow-500" },
        { name: "IMU", icon: FaChartLine, color: "text-green-500" },
        { name: "LoRa", icon: FaServer, color: "text-blue-500" },
        { name: "Shell Scripting", icon: FaCode, color: "text-green-600" },
        { name: "Git", icon: FaGithub, color: "text-gray-700" },
      ]
    },
    {
      title: "Ferramentas & DevOps",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-700" },
        { name: "Análise de Dados", icon: FaChartLine, color: "text-purple-500" },
        { name: "Visualização", icon: FaChartLine, color: "text-pink-500" },
        { name: "Modelagem Preditiva", icon: FaChartLine, color: "text-indigo-500" },
        { name: "Coleta de Dados", icon: FaDatabase, color: "text-teal-500" },
        { name: "Pré-processamento", icon: FaCode, color: "text-cyan-500" },
        { name: "Machine Learning", icon: FaChartLine, color: "text-orange-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="container-custom px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              className="bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background-secondary/30 border border-primary/10 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <skill.icon 
                      className={`text-2xl ${skill.color} group-hover:text-accent transition-colors duration-300`} 
                    />
                    <span className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Especialização em Sistemas Automotivos
            </h3>
            <p className="text-text-secondary mb-6 max-w-3xl mx-auto">
              Experiência única em desenvolvimento de sistemas de telemetria em tempo real, 
              análise de dados de performance e otimização de veículos de competição. 
              Especialista em transformar dados complexos em insights acionáveis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-text-secondary">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-text-secondary">Projetos Automotivos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">42</div>
                <div className="text-text-secondary">Membros Liderados</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
