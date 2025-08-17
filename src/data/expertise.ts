import { FaServer, FaChartLine, FaCode, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Definindo um tipo para nossos dados para garantir a consistência
export interface ExpertiseItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  tech: string[];
}

export const expertiseData: ExpertiseItem[] = [
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
    tech: ['Liderança de Equipes', 'Resolução de Problemas', 'Inglês (Fluente)', 'Francês (B2)', 'Espanhol (B1)']
  }
];
