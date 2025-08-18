// src/data/expertise.ts

import { FaServer, FaChartLine, FaCode, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { TFunction } from 'i18next';

export interface ExpertiseItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  tech: string[];
}

export const getExpertiseData = (t: TFunction): ExpertiseItem[] => [
  {
    id: 'full-stack',
    icon: FaCode,
    title: t('expertise.tabs.fullstack_title'),
    description: t('expertise.tabs.fullstack_desc'),
    tech: ['React.js', 'Node.js', 'Python', 'Flask', 'SQL', 'Docker'] // Nomes próprios não precisam de tradução
  },
  {
    id: 'data-engineering',
    icon: FaChartLine,
    title: t('expertise.tabs.data_title'),
    description: t('expertise.tabs.data_desc'),
    tech: ['Scikit-learn', 'PySpark', 'PANDAS', 'MongoDB', 'Machine Learning'] // Nomes próprios não precisam de tradução
  },
  {
    id: 'iot',
    icon: FaServer,
    title: t('expertise.tabs.iot_title'),
    description: t('expertise.tabs.iot_desc'),
    // CORREÇÃO APLICADA AQUI
    tech: [
      t('expertise.tech.iot1'), // 'Telemetria' agora é traduzível
      'ESP32', 
      'Raspberry Pi', 
      'LoRa', 
      'C++', 
      'Electron.js'
    ]
  },
  {
    id: 'leadership',
    icon: FaUsers,
    title: t('expertise.tabs.leadership_title'),
    description: t('expertise.tabs.leadership_desc'),
    // CORREÇÃO APLICADA AQUI
    tech: [
      t('expertise.tech.leadership1'),
      t('expertise.tech.leadership2'),
      t('expertise.tech.leadership3'),
      t('expertise.tech.leadership4'),
      t('expertise.tech.leadership5'),
      t('expertise.tech.leadership6'),
    ]
  }
];