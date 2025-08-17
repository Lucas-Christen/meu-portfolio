import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveSection('contact');
    }
  }, [isInView, setActiveSection]);

  return (
    <section id="contact" ref={ref} className="section-padding bg-background-secondary">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Estou aberto a novas oportunidades e colaborações. Vamos construir algo incrível juntos.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">Informações de Contato</h3>
            <div className="space-y-4">
              <a href="mailto:lucas.f.christen@outlook.com" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                <FaEnvelope className="mr-3 text-accent" />
                lucas.f.christen@outlook.com
              </a>
              <a href="https://www.linkedin.com/in/lucas-f-christen-69327a21b/" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                <FaLinkedin className="mr-3 text-accent" />
                LinkedIn
              </a>
              <a href="https://github.com/Lucas-Christen" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                <FaGithub className="mr-3 text-accent" />
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.form
            action="https://formspree.io/f/SEU_ENDPOINT_AQUI" // Lembre-se de substituir pelo seu endpoint
            method="POST"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input type="text" name="name" id="name" placeholder="Seu Nome" required className="w-full bg-background-primary/50 border border-primary/20 rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Seu Email" required className="w-full bg-background-primary/50 border border-primary/20 rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea name="message" id="message" rows={5} placeholder="Sua Mensagem" required className="w-full bg-background-primary/50 border border-primary/20 rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Enviar Mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;