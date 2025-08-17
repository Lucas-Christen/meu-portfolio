import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Telefone',
      value: '+55 (15) 99670-6256',
      link: 'tel:+5515996706256'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'lucas.f.christen@outlook.com',
      link: 'mailto:lucas.f.christen@outlook.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'lucas-f-christen-69327a21b',
      link: 'https://www.linkedin.com/in/lucas-f-christen-69327a21b/'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Lucas-Christen',
      link: 'https://github.com/Lucas-Christen'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localização',
      value: 'Ponta Grossa, PR - Brasil',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background-primary">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Interessado em projetos automotivos, telemetria ou desenvolvimento de sistemas de alta performance? 
            Entre em contato para discutirmos possíveis colaborações.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Informações de Contato
              </h3>
              <p className="text-text-secondary mb-8">
                Estou sempre aberto a novas oportunidades e colaborações. 
                Especialmente interessado em projetos relacionados a sistemas automotivos, 
                telemetria e desenvolvimento de soluções de alta performance.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-background-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <info.icon className="text-2xl text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-text-primary font-medium">{info.label}</div>
                    <div className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-background-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-text-primary mb-3">
                Disponibilidade
              </h4>
              <div className="space-y-2 text-text-secondary">
                <div className="flex justify-between">
                  <span>Projetos Freelance:</span>
                  <span className="text-accent font-medium">Disponível</span>
                </div>
                <div className="flex justify-between">
                  <span>Colaborações:</span>
                  <span className="text-accent font-medium">Aberto</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultoria:</span>
                  <span className="text-accent font-medium">Sob Consulta</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-background-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-primary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-primary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background-primary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="Sobre o que gostaria de conversar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-primary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto ou proposta..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' && (
                  <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                )}
                <span>
                  {submitStatus === 'loading' ? 'Enviando...' : 
                   submitStatus === 'success' ? 'Mensagem Enviada!' : 
                   submitStatus === 'error' ? 'Erro ao Enviar' : 'Enviar Mensagem'}
                </span>
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Obrigado! Sua mensagem foi enviada com sucesso.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  Erro ao enviar mensagem. Tente novamente.
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
