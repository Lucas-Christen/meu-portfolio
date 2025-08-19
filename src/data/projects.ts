// src/data/projects.ts

import { TFunction } from 'i18next';

// Estrutura unificada para todos os projetos
export interface Project {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  businessImpact: string;
  confidential?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

// Função única que retorna todos os projetos no novo formato
export const getProjects = (t: TFunction): Project[] => [
    {
      id: "telemetry",
      title: t('projects.telemetry.title'),
      organization: t('projects.telemetry.organization'),
      duration: t('projects.telemetry.duration'),
      description: t('projects.telemetry.description'),
      technologies: ["Python", "HTML", "LoRa Network", "Real-time Data Processing", "PySide6"],
      achievements: t('projects.telemetry.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.telemetry.businessImpact'),
      confidential: false,
      githubUrl: "https://github.com/Lucas-Christen/Telemetria-Christen-UTFORCE",
      demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_engineering-formulasae-telemetry-activity-7339752358114971650-3ZmA"
    },
    {
      id: "captain",
      title: t('projects.captain.title'),
      organization: t('projects.captain.organization'),
      duration: t('projects.captain.duration'),
      description: t('projects.captain.description'),
      technologies: ["Team Leadership", "Project Management", "Electrical Systems", "High Voltage", "BMS"],
      achievements: t('projects.captain.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.captain.businessImpact'),
      confidential: false,
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "https://sites.google.com/alunos.utfpr.edu.br/portfolio-lucas-f-christen/projetos-de-extens%C3%A3o/utforce-e-racing-f-sae?authuser=0"
    },
    {
      id: "f1-prediction",
      title: t('projects.f1Prediction.title'),
      organization: t('projects.f1Prediction.organization'),
      duration: t('projects.f1Prediction.duration'),
      description: t('projects.f1Prediction.description'),
      technologies: ["Python", "Scikit-learn", "FastF1 API", "Machine Learning"],
      achievements: t('projects.f1Prediction.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.f1Prediction.businessImpact'),
      confidential: false,
      githubUrl: "https://github.com/Lucas-Christen"
    },
    {
      id: "autonomous-vehicle",
      title: t('projects.autonomousVehicle.title'),
      organization: t('projects.autonomousVehicle.organization'),
      duration: t('projects.autonomousVehicle.duration'),
      description: t('projects.autonomousVehicle.description'),
      technologies: ["Python", "Machine Learning", "Sensor Data Analysis", "Predictive Modeling"],
      achievements: t('projects.autonomousVehicle.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.autonomousVehicle.businessImpact'),
      confidential: false
    },
    {
      id: "tires",
      title: t('projects.tires.title'),
      organization: t('projects.tires.organization'),
      duration: t('projects.tires.duration'),
      description: t('projects.tires.description'),
      technologies: ["PySide6", "Python", "Motorsport", "Data Analysis", "Desktop App"],
      achievements: t('projects.tires.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.tires.businessImpact'),
      confidential: false,
      githubUrl: "https://github.com/Lucas-Christen"
    },
    {
      id: "commandCenter",
      title: t('projects.commandCenter.title'),
      organization: t('projects.commandCenter.organization'),
      duration: t('projects.commandCenter.duration'),
      description: t('projects.commandCenter.description'),
      technologies: ["Electron.js", "Node.js", "React", "Desktop App", "JavaScript"],
      achievements: t('projects.commandCenter.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.commandCenter.businessImpact'),
      confidential: false,
      githubUrl: "https://github.com/Lucas-Christen",
      demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_engenhariadesoftware-desenvolvimento-electronjs-activity-7336073492301287426-FJ2u"
    },
    {
      id: "pokemon",
      title: t('projects.pokemon.title'),
      organization: t('projects.pokemon.organization'),
      duration: t('projects.pokemon.duration'),
      description: t('projects.pokemon.description'),
      technologies: ["Ionic", "Angular", "TypeScript", "Data Analysis", "RxJS", "Full Stack"],
      achievements: t('projects.pokemon.achievements', { returnObjects: true }) as string[],
      businessImpact: t('projects.pokemon.businessImpact'),
      confidential: false,
      githubUrl: "https://github.com/Lucas-Christen/Pokemon-App",
      demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_dataanalysis-fullstackdeveloper-typescript-activity-7342710051637293056-CJiu"
    }
  ];
