import React from 'react';
import { TFunction } from 'i18next';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export interface ContactMethod {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  action: string;
  href: string;
  gradient: string; // Manteremos para referência, mas não usaremos
  availability: 'online' | 'busy' | 'offline';
}

// Função que gera os dados dos cards de contato já traduzidos
export const getContactMethods = (t: TFunction): ContactMethod[] => [
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    title: t('contact.cards.whatsapp.title'),
    subtitle: t('contact.cards.whatsapp.subtitle'),
    description: t('contact.cards.whatsapp.description'),
    action: t('contact.cards.whatsapp.action'),
    href: 'https://wa.me/5515996706256?text=Olá%20Lucas,%20vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
    gradient: 'from-green-500/20 to-green-600/10',
    availability: 'online'
  },
  {
    id: 'email',
    icon: FaEnvelope,
    title: t('contact.cards.email.title'),
    subtitle: t('contact.cards.email.subtitle'),
    description: t('contact.cards.email.description'),
    action: t('contact.cards.email.action'),
    href: 'mailto:lucas.f.christen@outlook.com?subject=Proposta%20de%20Projeto%20-%20Portfolio&body=Olá%20Lucas,...',
    gradient: 'from-blue-500/20 to-blue-600/10',
    availability: 'online'
  },
  {
    id: 'linkedin',
    icon: FaLinkedin,
    title: t('contact.cards.linkedin.title'),
    subtitle: t('contact.cards.linkedin.subtitle'),
    description: t('contact.cards.linkedin.description'),
    action: t('contact.cards.linkedin.action'),
    href: 'https://www.linkedin.com/in/lucas-f-christen-69327a21b/',
    gradient: 'from-blue-600/20 to-blue-700/10',
    availability: 'online'
  },
  {
    id: 'github',
    icon: FaGithub,
    title: t('contact.cards.github.title'),
    subtitle: t('contact.cards.github.subtitle'),
    description: t('contact.cards.github.description'),
    action: t('contact.cards.github.action'),
    href: 'https://github.com/Lucas-Christen',
    gradient: 'from-gray-500/20 to-gray-600/10',
    availability: 'online'
  }
];

// Função que gera as legendas de disponibilidade já traduzidas
export const getAvailabilityLabels = (t: TFunction) => ({
  online: t('contact.availability.online'),
  busy: t('contact.availability.busy'),
  offline: t('contact.availability.offline')
});