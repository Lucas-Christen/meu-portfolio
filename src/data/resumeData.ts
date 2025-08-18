// src/data/resumeData.ts

import { TFunction } from 'i18next';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaBrain, FaBolt, FaFistRaised, FaHandshake, FaBookOpen, FaUniversity, FaTools, FaShieldAlt, FaScroll, FaMugHot } from 'react-icons/fa';
import { SiScikitlearn, SiPandas, SiEspressif, SiTailwindcss } from "react-icons/si";

// Estrutura para os atributos
export interface Attribute {
  name: string; value: number; modifier: string; description: string; icon: React.ElementType;
}

// Estrutura para os itens da timeline
export interface TimelineItemData {
  type: 'work' | 'education'; date: string; title: string; subtitle: string; description: string; icon: React.ElementType;
}

// NOVA ESTRUTURA: Para as perícias/habilidades
export interface ProficiencyCategory {
  title: string;
  skills: { name: string; icon: React.ElementType }[];
}

export const getResumeData = (t: TFunction) => {
  
  const attributes: Attribute[] = [
    // ... (seus atributos permanecem os mesmos)
    { name: t('resume.attributes.strength.name'), value: 15, modifier: "+2", description: t('resume.attributes.strength.description'), icon: FaFistRaised },
    { name: t('resume.attributes.dexterity.name'), value: 17, modifier: "+3", description: t('resume.attributes.dexterity.description'), icon: FaReact },
    { name: t('resume.attributes.constitution.name'), value: 14, modifier: "+2", description: t('resume.attributes.constitution.description'), icon: FaDatabase },
    { name: t('resume.attributes.intelligence.name'), value: 18, modifier: "+4", description: t('resume.attributes.intelligence.description'), icon: FaBrain },
    { name: t('resume.attributes.wisdom.name'), value: 16, modifier: "+3", description: t('resume.attributes.wisdom.description'), icon: FaPython },
    { name: t('resume.attributes.charisma.name'), value: 16, modifier: "+3", description: t('resume.attributes.charisma.description'), icon: FaHandshake },
  ];

  const timeline: TimelineItemData[] = (t('resume.timeline', { returnObjects: true }) as any[]).map(item => ({
    ...item,
    icon: item.type === 'work' ? FaBolt : FaUniversity
  }));
  
  // NOVA SEÇÃO: Dados para as perícias
  const proficiencies: ProficiencyCategory[] = [
    { title: t('resume.proficiencies.backend.title'), skills: [
        { name: 'Python', icon: FaPython }, { name: 'Node.js', icon: FaNodeJs }, { name: 'SQL', icon: FaDatabase }
    ]},
    { title: t('resume.proficiencies.data.title'), skills: [
        { name: 'Scikit-learn', icon: SiScikitlearn }, { name: 'PySpark', icon: FaBrain }, { name: 'Pandas', icon: SiPandas }
    ]},
    { title: t('resume.proficiencies.frontend.title'), skills: [
        { name: 'React', icon: FaReact }, { name: 'TypeScript', icon: FaBookOpen }, { name: 'Tailwind CSS', icon: SiTailwindcss }
    ]},
    { title: t('resume.proficiencies.embedded.title'), skills: [
        { name: 'IoT', icon: FaBolt }, { name: 'ESP32', icon: SiEspressif }, { name: 'Raspberry Pi', icon: FaTools }
    ]}
  ];

  return { attributes, timeline, proficiencies };
};
