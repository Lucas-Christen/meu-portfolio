import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaServer, FaChartLine, FaCode, FaUsers
} from 'react-icons/fa';

// --- Dados das Áreas de Expertise (com descrições aprofundadas) ---
const expertiseData = [
  {
    id: 'full-stack',
    icon: FaCode,
    title: "Desenvolvimento Full-Stack",
    description: "Arquiteto e desenvolvo aplicações de ponta a ponta, desde APIs robustas em Node.js e Python até interfaces reativas com React. Minha experiência se traduz em sistemas como dashboards de telemetria e aplicativos de produtividade multiplataforma, sempre com foco em código limpo, escalabilidade e performance.",
    tech: ['React.js', 'Node.js', 'Python', 'Flask', 'SQL', 'Docker']
  },
  {
    id: 'data-engineering',
    icon: FaChartLine,
    title: "Engenharia & Análise de Dados",
    description: "Sou especialista em todo o ciclo de vida do dado: da aquisição em ambientes de alta complexidade (telemetria) à criação de pipelines de processamento e aplicação de modelos preditivos com Scikit-learn. Transformo dados brutos em dashboards interativos que revelam insights estratégicos.",
    tech: ['Scikit-learn', 'PySpark', 'Pandas', 'MongoDB', 'Machine Learning']
  },
  {
    id: 'iot',
    icon: FaServer,
    title: "Sistemas Embarcados & IoT",
    description: "Projeto e implemento soluções de hardware e software para coleta de dados em tempo real. Tenho experiência prática com ESP32, Raspberry Pi e comunicação LoRa para garantir a integridade e transmissão de dados em ambientes de alta interferência eletromagnética, como o automobilismo.",
    tech: ['Telemetria', 'ESP32', 'Raspberry Pi', 'LoRa', 'C++', 'Electron.js']
  },
  {
    id: 'leadership',
    icon: FaUsers,
    title: "Liderança & Comunicação",
    description: "Liderei uma equipe técnica de 42 membros no projeto Fórmula SAE, alcançando um salto de 12 posições no ranking nacional. Sou adepto da resolução de problemas sob pressão e possuo comunicação eficaz para alinhar objetivos técnicos com a estratégia do projeto em múltiplos idiomas.",
    tech: ['Liderança de Equipes', 'Resolução de Problemas', 'Inglês (Fluente)', 'Francês (B2)', 'Espanhol (B1)', 'Mandarim (Iniciante)']
  }
];

// --- Componente Principal da Seção ---
const SkillsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(expertiseData[0]);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!contentRef.current) return;
    const rect = contentRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    contentRef.current.style.setProperty('--mouse-x', `${x}px`);
    contentRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

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
            Áreas de <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Minha abordagem para construir soluções inovadoras, combinando desenvolvimento de software, análise de dados e engenharia de sistemas.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[450px]">
          {/* Menu Lateral (Abas) */}
          <div className="flex lg:flex-col gap-2">
            {expertiseData.map((item) => (
              <button
                key={item.id}
                className={`relative w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                  selectedTab.id === item.id ? 'bg-background-primary/80' : 'hover:bg-background-primary/50'
                }`}
                onClick={() => setSelectedTab(item)}
              >
                <div className="flex items-center">
                  <item.icon className={`text-2xl mr-4 ${selectedTab.id === item.id ? 'text-accent' : 'text-text-secondary'}`} />
                  <span className={`font-bold ${selectedTab.id === item.id ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {item.title}
                  </span>
                </div>
                {selectedTab.id === item.id && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Painel de Conteúdo com Efeito Spotlight */}
          <div 
            ref={contentRef}
            onMouseMove={handleMouseMove}
            className="flex-1 group bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 relative overflow-hidden"
          >
            <div 
              className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(100, 255, 218, 0.1), transparent 40%)',
              }}
            />
            <AnimatePresence mode="wait">
              {/* Adicionado 'flex flex-col justify-between' para distribuir o conteúdo verticalmente */}
              <motion.div
                key={selectedTab.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative z-10 flex flex-col justify-between"
              >
                {/* Agrupador para a parte superior (título e descrição) */}
                <div>
                  {/* Tamanho do título aumentado */}
                  <h3 className="text-4xl font-bold text-text-primary mb-4">{selectedTab.title}</h3>
                  {/* Tamanho da descrição aumentado e com mais espaçamento entre linhas */}
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">{selectedTab.description}</p>
                </div>
                {/* Agrupador para a parte inferior (tecnologias) */}
                <div>
                  <h4 className="text-md font-semibold text-text-secondary mb-4">Tecnologias principais:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedTab.tech.map(t => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-background-secondary text-sm text-accent font-mono py-2 px-4 rounded-full"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
