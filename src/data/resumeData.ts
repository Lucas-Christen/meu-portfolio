// src/data/resumeData.ts

import { TFunction } from 'i18next';
import { 
  FaPython, FaReact, FaNodeJs, FaDatabase, FaBrain, FaFistRaised, 
  FaHandshake, FaBookOpen, FaUniversity, FaTools, FaShieldAlt, FaScroll, 
  FaMugHot, FaCode, FaGitAlt, FaDocker, FaUsers, FaLanguage, FaHtml5, FaCss3Alt, FaJsSquare, FaCogs
} from 'react-icons/fa';
import { SiScikitlearn, SiPandas, SiEspressif, SiTailwindcss, SiMongodb, SiStreamlit } from "react-icons/si";

// Estrutura para os atributos
export interface Attribute {
  name: string; value: number; modifier: string; description: string; icon: React.ElementType;
}

// Estrutura para os itens da timeline
export interface TimelineItemData {
  type: 'work' | 'education'; date: string; title: string; subtitle: string; description: string; icon: React.ElementType;
}

// ESTRUTURA: Para as perícias/habilidades
export interface ProficiencyCategory {
  title: string;
  skills: { name: string; icon: React.ElementType }[];
}

// ESTRUTURA: Para os equipamentos
export interface EquipmentItem {
  name: string;
  description: string;
  icon: React.ElementType;
}

// NOVA ESTRUTURA: Para os idiomas
export interface LanguageItem {
    level: string;
    languages: string[];
}

export const getResumeData = (t: TFunction) => {
  
  const attributes: Attribute[] = [
    { name: t('resume.attributes.strength.name'), value: 15, modifier: "+2", description: t('resume.attributes.strength.description'), icon: FaFistRaised },
    { name: t('resume.attributes.dexterity.name'), value: 17, modifier: "+3", description: t('resume.attributes.dexterity.description'), icon: FaReact },
    { name: t('resume.attributes.constitution.name'), value: 14, modifier: "+2", description: t('resume.attributes.constitution.description'), icon: FaDatabase },
    { name: t('resume.attributes.intelligence.name'), value: 18, modifier: "+4", description: t('resume.attributes.intelligence.description'), icon: FaBrain },
    { name: t('resume.attributes.wisdom.name'), value: 16, modifier: "+3", description: t('resume.attributes.wisdom.description'), icon: FaPython },
    { name: t('resume.attributes.charisma.name'), value: 16, modifier: "+3", description: t('resume.attributes.charisma.description'), icon: FaHandshake },
  ];

  const timeline: TimelineItemData[] = (t('resume.timeline', { returnObjects: true }) as any[]).map(item => ({
    ...item,
    icon: item.type === 'work' ? FaTools : FaUniversity
  }));
  
  // SEÇÃO ATUALIZADA: Perícias e Proficiências
  const proficiencies: ProficiencyCategory[] = [
    { title: t('resume.proficiencies.programming.title'), skills: [
        { name: 'Python', icon: FaPython }, { name: 'JavaScript', icon: FaJsSquare }, { name: 'Node.js', icon: FaNodeJs }, { name: 'SQL', icon: FaDatabase }, { name: 'C++', icon: FaCode }, { name: 'ShellScripting', icon: FaTools }
    ]},
    { title: t('resume.proficiencies.data.title'), skills: [
        { name: 'Machine Learning', icon: FaBrain }, { name: 'PySpark', icon: FaBrain }, { name: 'Scikit-learn', icon: SiScikitlearn }, { name: 'Pandas & NumPy', icon: FaDatabase }, { name: 'MongoDB', icon: SiMongodb }, { name: 'Telemetria', icon: FaCogs }
    ]},
    { title: t('resume.proficiencies.web.title'), skills: [
        { name: 'React.js', icon: FaReact }, { name: 'HTML', icon: FaHtml5 }, { name: 'CSS', icon: FaCss3Alt }, { name: 'Streamlit', icon: SiStreamlit }
    ]},
    { title: t('resume.proficiencies.management.title'), skills: [
        { name: 'Liderança de Projetos', icon: FaUsers }, { name: 'Resolução de Problemas', icon: FaTools }, { name: 'Trabalho em Equipe', icon: FaHandshake }
    ]}
  ];

  const equipment: EquipmentItem[] = [
    { name: t('resume.equipment.weapon.name'), description: t('resume.equipment.weapon.description'), icon: FaCode },
    { name: 'Escudo', description: 'Git & GitHub', icon: FaGitAlt },
    { name: 'Amuleto', description: 'Docker', icon: FaDocker },
    { name: 'Poções', description: 'Café e Documentação', icon: FaMugHot },
  ];
  
  // NOVA SEÇÃO: Dados para os idiomas
  const languages: LanguageItem[] = [
    { level: t('resume.languages.fluent'), languages: ['Inglês'] },
    { level: t('resume.languages.intermediate'), languages: ['Francês', 'Espanhol'] },
    { level: t('resume.languages.beginner'), languages: ['Mandarim', 'Alemão'] }
  ];

  return { attributes, timeline, proficiencies, equipment, languages };
};