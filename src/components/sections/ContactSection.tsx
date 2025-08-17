import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection: React.FC<{ setActiveSection: (id: string) => void }> = ({ setActiveSection }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Estados para gerenciar o formulário
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');

    const json = JSON.stringify({
      ...formData,
      access_key: "a89d23c4-72ad-471b-8646-75043dbed169", // <-- COLE SUA CHAVE AQUI
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
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setResultMessage('Ocorreu um erro. Tente novamente.');
      }
    } catch (error) {
      setResultMessage('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input type="text" name="name" id="name" placeholder="Seu Nome" required value={formData.name} onChange={handleInputChange} className="w-full bg-background-primary/50 border border-primary/20 rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Seu Email" required value={formData.email} onChange={handleInputChange} className="w-full bg-background-primary/50 border border-primary/20 rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea name="message" id="message" rows={5} placeholder="Sua Mensagem" required value={formData.message} onChange={handleInputChange} className="w-full bg-background-primary/50 border border-primary/20 rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {resultMessage && <p className="text-center text-sm mt-4">{resultMessage}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;