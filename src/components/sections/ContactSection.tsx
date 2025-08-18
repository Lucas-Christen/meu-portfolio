import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaCheck, FaClock } from 'react-icons/fa';

interface ContactMethod {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  action: string;
  href: string;
  gradient: string;
  responseTime: string;
  availability: 'online' | 'busy' | 'offline';
}

const contactMethods: ContactMethod[] = [
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    title: 'WhatsApp Business',
    subtitle: 'Resposta Imediata',
    description: 'Para discussões rápidas e alinhamento de projetos',
    action: 'Iniciar Conversa',
    href: 'https://wa.me/5542999887766?text=Olá%20Lucas,%20vim%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
    gradient: 'from-green-500/20 to-green-600/10',
    responseTime: '~5 min',
    availability: 'online'
  },
  {
    id: 'email',
    icon: FaEnvelope,
    title: 'Email Executivo',
    subtitle: 'Proposta Detalhada',
    description: 'Para briefings completos e documentação técnica',
    action: 'Enviar Email',
    href: 'mailto:lucas.f.christen@outlook.com?subject=Proposta%20de%20Projeto%20-%20Portfolio&body=Olá%20Lucas,%0D%0A%0D%0AGostaria%20de%20discutir%20um%20projeto:%0D%0A%0D%0A[Descreva%20seu%20projeto]%0D%0A%0D%0AObrigado!',
    gradient: 'from-blue-500/20 to-blue-600/10',
    responseTime: '~2 horas',
    availability: 'online'
  },
  {
    id: 'linkedin',
    icon: FaLinkedin,
    title: 'LinkedIn Premium',
    subtitle: 'Networking Profissional',
    description: 'Para conexões estratégicas e oportunidades',
    action: 'Conectar',
    href: 'https://www.linkedin.com/in/lucas-f-christen-69327a21b/',
    gradient: 'from-blue-600/20 to-blue-700/10',
    responseTime: '~1 dia',
    availability: 'online'
  },
  {
    id: 'github',
    icon: FaGithub,
    title: 'GitHub',
    subtitle: 'Colaboração Técnica',
    description: 'Para discussões sobre código e colaborações open source',
    action: 'Ver Perfil',
    href: 'https://github.com/Lucas-Christen',
    gradient: 'from-gray-500/20 to-gray-600/10',
    responseTime: '~4 horas',
    availability: 'online'
  }
];

const ContactSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Estados para gerenciar o formulário (mantendo sua lógica original)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    if (isInView) {
      setActiveSection('contact');
    }
  }, [isInView, setActiveSection]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mantendo sua lógica original do Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');

    const json = JSON.stringify({
      ...formData,
      access_key: "a89d23c4-72ad-471b-8646-75043dbed169",
      subject: `Nova mensagem de ${formData.name} do seu Portfólio`,
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setResultMessage('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResultMessage('Ocorreu um erro. Tente novamente.');
      }
    } catch (error) {
      setResultMessage('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMethodClick = (method: ContactMethod) => {
    window.open(method.href, '_blank');
  };

  const handleMouseMove = (e: React.MouseEvent, cardRef: React.RefObject<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const availabilityColors = {
    online: 'bg-green-400',
    busy: 'bg-yellow-400',
    offline: 'bg-gray-400'
  };

  const availabilityLabels = {
    online: 'Disponível',
    busy: 'Ocupado',
    offline: 'Offline'
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-background-primary/50 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-mono">Disponível para novos projetos</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Vamos <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Construir</span> Juntos
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            Escolha o canal ideal para iniciarmos uma conversa sobre seu próximo projeto.
            <br />Cada método foi otimizado para diferentes tipos de colaboração.
          </p>
        </motion.div>

        {/* Quick Contact Methods */}
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
                onClick={() => handleMethodClick(method)}
                className="group relative cursor-pointer"
              >
                <div className={`relative h-full bg-gradient-to-br ${method.gradient} backdrop-blur-sm border border-primary/20 rounded-xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/30`}>
                  {/* Hover Effect */}
                  <div 
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(220, 0, 0, 0.1), transparent 40%)`,
                    }}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${availabilityColors[method.availability]} ${method.availability === 'online' ? 'animate-pulse' : ''}`}></div>
                    <span className="text-xs text-text-secondary">{availabilityLabels[method.availability]}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mb-3 group-hover:bg-accent/30 transition-colors duration-300">
                        <method.icon className="text-accent text-xl" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-primary mb-1">{method.title}</h3>
                      <p className="text-accent font-medium text-sm mb-2">{method.subtitle}</p>
                      <p className="text-text-secondary text-xs leading-relaxed">{method.description}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <FaClock className="text-text-secondary text-xs" />
                          <span className="text-xs text-text-secondary">{method.responseTime}</span>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="flex items-center justify-between text-accent group/btn"
                      >
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

        {/* Traditional Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Ou envie uma mensagem direta
            </h3>
            <p className="text-text-secondary">
              Prefere um contato mais formal? Use o formulário abaixo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-xl font-bold text-text-primary mb-6">Informações de Contato</h4>
                <div className="space-y-4">
                  <motion.a 
                    href="mailto:lucas.f.christen@outlook.com" 
                    whileHover={{ x: 4 }}
                    className="flex items-center p-4 bg-background-primary/30 rounded-xl border border-primary/10 hover:border-accent/30 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                      <FaEnvelope className="text-accent" />
                    </div>
                    <div>
                      <div className="text-text-primary font-medium">Email</div>
                      <div className="text-text-secondary text-sm">lucas.f.christen@outlook.com</div>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="https://www.linkedin.com/in/lucas-f-christen-69327a21b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center p-4 bg-background-primary/30 rounded-xl border border-primary/10 hover:border-accent/30 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                      <FaLinkedin className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-text-primary font-medium">LinkedIn</div>
                      <div className="text-text-secondary text-sm">Perfil Profissional</div>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="https://github.com/Lucas-Christen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center p-4 bg-background-primary/30 rounded-xl border border-primary/10 hover:border-accent/30 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-500/30 transition-colors">
                      <FaGithub className="text-gray-400" />
                    </div>
                    <div>
                      <div className="text-text-primary font-medium">GitHub</div>
                      <div className="text-text-secondary text-sm">Repositórios e Projetos</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Response Time Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="text-center p-4 bg-background-primary/20 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="text-2xl font-bold text-accent mb-1">~5min</div>
                  <div className="text-text-secondary text-xs">Tempo médio de resposta</div>
                </div>
                <div className="text-center p-4 bg-background-primary/20 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-text-secondary text-xs">Taxa de resposta</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form - Enhanced but keeping original functionality */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-background-primary/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Seu nome" 
                    required 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="w-full bg-background-secondary/50 border border-primary/20 rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="seu@email.com" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="w-full bg-background-secondary/50 border border-primary/20 rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    placeholder="Conte-me sobre seu projeto..." 
                    required 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="w-full bg-background-secondary/50 border border-primary/20 rounded-xl p-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent to-primary text-white font-bold py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <FaEnvelope />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                {resultMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-xl ${
                      resultMessage.includes('sucesso') 
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {resultMessage.includes('sucesso') && <FaCheck />}
                      <span className="font-medium">{resultMessage}</span>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;