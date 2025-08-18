// src/components/sections/ContactSection.tsx

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaCheck } from 'react-icons/fa';
import { getContactMethods, getAvailabilityLabels, ContactMethod } from '../../data/contact';

const ContactSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const contactMethods = getContactMethods(t);
  const availabilityLabels = getAvailabilityLabels(t);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [resultStatus, setResultStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (isInView) {
      setActiveSection('contact');
    }
  }, [isInView, setActiveSection]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');
    setResultStatus(null);

    const json = JSON.stringify({
      ...formData,
      access_key: "SUA_CHAVE_DE_ACESSO_AQUI",
      subject: `Nova mensagem de ${formData.name} do seu Portfólio`,
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setResultMessage(t('contact.form.success'));
        setResultStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResultMessage(t('contact.form.error'));
        setResultStatus('error');
      }
    } catch (error) {
      setResultMessage(t('contact.form.error'));
      setResultStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const availabilityColors = {
    online: 'bg-green-400',
    busy: 'bg-yellow-400',
    offline: 'bg-gray-400'
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-background-primary/50 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-mono">{t('contact.statusBadge')}</span>
          </motion.div>
          <h2 className="titulo-secao">
            {/* ALTERAÇÃO AQUI: Trocado o span de gradiente por um span de cor sólida */}
            <Trans i18nKey="contact.title" components={{ gradient: <span className="text-accent" /> }} />
          </h2>
          <p className="subtitulo-secao mt-4 whitespace-pre-line">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            return (
              <motion.div
                key={method.id}
                ref={cardRef}
                onMouseMove={(e) => {
                  if (!cardRef.current) return;
                  const rect = cardRef.current.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  cardRef.current.style.setProperty('--mouse-x', `${x}px`);
                  cardRef.current.style.setProperty('--mouse-y', `${y}px`);
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => window.open(method.href, '_blank')}
                className="group relative cursor-pointer"
              >
                <div className={`relative h-full bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/30`}>
                  <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(220, 0, 0, 0.1), transparent 40%)` }} />
                  <div className="absolute top-4 right-4 flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${availabilityColors[method.availability]} ${method.availability === 'online' ? 'animate-pulse' : ''}`}></div>
                    <span className="text-xs text-text-secondary">{availabilityLabels[method.availability]}</span>
                  </div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mb-3 group-hover:bg-accent/30 transition-colors duration-300">
                        <method.icon className="text-accent text-xl" />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-1 font-title">{method.title}</h3>
                      <p className="text-accent font-medium text-sm mb-2">{method.subtitle}</p>
                      <p className="text-text-secondary text-xs leading-relaxed">{method.description}</p>
                    </div>
                    <div className="mt-auto">
                      <motion.div whileHover={{ x: 2 }} className="flex items-center justify-between text-accent group/btn pt-3 border-t border-primary/10">
                        <span className="text-sm font-medium">{method.action}</span>
                        <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-3 font-title">{t('contact.formTitle')}</h3>
            <p className="text-text-secondary">{t('contact.formSubtitle')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-background-primary/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">{t('contact.form.nameLabel')}</label>
                <input type="text" name="name" id="name" placeholder={t('contact.form.namePlaceholder')} required value={formData.name} onChange={handleInputChange} className="w-full bg-background-secondary/50 border border-primary/20 rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">{t('contact.form.emailLabel')}</label>
                <input type="email" name="email" id="email" placeholder={t('contact.form.emailPlaceholder')} required value={formData.email} onChange={handleInputChange} className="w-full bg-background-secondary/50 border border-primary/20 rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">{t('contact.form.messageLabel')}</label>
                <textarea name="message" id="message" rows={5} placeholder={t('contact.form.messagePlaceholder')} required value={formData.message} onChange={handleInputChange} className="w-full bg-background-secondary/50 border border-primary/20 rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none" />
              </div>
              {/* ALTERAÇÃO AQUI: Removido 'bg-gradient-to-r from-accent to-primary' e adicionado 'bg-accent' */}
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-accent text-white font-bold py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{t('contact.form.buttonSubmitting')}</span>
                  </>
                ) : (
                  <>
                    <FaEnvelope />
                    <span>{t('contact.form.button')}</span>
                  </>
                )}
              </motion.button>
              {resultMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-xl ${resultStatus === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {resultStatus === 'success' && <FaCheck />}
                    <span className="font-medium">{resultMessage}</span>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;