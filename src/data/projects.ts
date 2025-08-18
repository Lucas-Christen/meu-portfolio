// src/data/projects.ts

import { TFunction } from 'i18next';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  demoUrl?: string;
}

export const getProjects = (t: TFunction): Project[] => [
  {
    title: t('projects.items.telemetry.title'),
    description: t('projects.items.telemetry.description'),
    image: "/images/projects/telemetry.jpg", 
    tags: t('projects.items.telemetry.tags', { returnObjects: true }) as string[], // CORREÇÃO AQUI
    liveUrl: "#",
    githubUrl: "https://github.com/Lucas-Christen/Telemetria-Christen-UTFORCE",
    demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_engineering-formulasae-telemetry-activity-7339752358114971650-3ZmA"
  },
  {
    title: t('projects.items.captain.title'),
    description: t('projects.items.captain.description'),
    image: "/images/projects/captain.jpg",
    tags: t('projects.items.captain.tags', { returnObjects: true }) as string[], // CORREÇÃO AQUI
    liveUrl: "#",
    githubUrl: "https://github.com/Lucas-Christen",
    demoUrl: "https://sites.google.com/alunos.utfpr.edu.br/portfolio-lucas-f-christen/projetos-de-extens%C3%A3o/utforce-e-racing-f-sae?authuser=0"
  },
  {
    title: t('projects.items.tires.title'),
    description: t('projects.items.tires.description'),
    image: "/images/projects/tires.jpg",
    tags: t('projects.items.tires.tags', { returnObjects: true }) as string[], // CORREÇÃO AQUI
    liveUrl: "#",
    githubUrl: "https://github.com/Lucas-Christen",
    demoUrl: "#"
  },
  {
    title: t('projects.items.commandCenter.title'),
    description: t('projects.items.commandCenter.description'),
    image: "/images/projects/command-center.jpg",
    tags: t('projects.items.commandCenter.tags', { returnObjects: true }) as string[], // CORREÇÃO AQUI
    liveUrl: "#",
    githubUrl: "https://github.com/Lucas-Christen",
    demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_engenhariadesoftware-desenvolvimento-electronjs-activity-7336073492301287426-FJ2u"
  },
  {
    title: t('projects.items.pokemon.title'),
    description: t('projects.items.pokemon.description'),
    image: "/images/projects/pokemon.jpg",
    tags: t('projects.items.pokemon.tags', { returnObjects: true }) as string[], // CORREÇÃO AQUI
    liveUrl: "#",
    githubUrl: "https://github.com/Lucas-Christen/Pokemon-App",
    demoUrl: "https://www.linkedin.com/posts/lucas-fernandes-christen-69327a21b_dataanalysis-fullstackdeveloper-typescript-activity-7342710051637293056-CJiu"
  },
  {
    title: t('projects.items.webTelemetry.title'),
    description: t('projects.items.webTelemetry.description'),
    image: "/images/projects/web-telemetry.jpg",
    tags: t('projects.items.webTelemetry.tags', { returnObjects: true }) as string[], // CORREÇÃO AQUI
    liveUrl: "#",
    githubUrl: "https://github.com/Lucas-Christen/Analise-de-dados-Telemetria",
    demoUrl: "#"
  }
];