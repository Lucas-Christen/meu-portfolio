import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDownload, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';
import AnimatedNumber from '../ui/AnimatedNumber'; // Importação do novo componente

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-7 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 w-full aspect-[3/4] relative"
          >
            <img 
              src="/images/profile.jpg" // Lembre-se de substituir pela sua foto
              alt="Lucas Christen"
              className="rounded-xl border-2 border-primary/20 w-full h-full object-cover shadow-2xl"
            />
          </motion.div>

          <div className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl font-bold mb-8 text-text-primary text-center"
            >
              A Interseção entre a Pista e o Código
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6 text-text-secondary text-lg leading-relaxed"
            >
              <p>
                Minha carreira é definida por uma busca incansável por <span className="text-accent font-semibold">performance</span>. Aprendi no automobilismo que a vitória está nos detalhes, nos dados e na capacidade de inovar sob pressão. Hoje, aplico essa mesma mentalidade para construir software.
              </p>
              <p>
                Como Desenvolvedor Full-Stack e Engenheiro de Dados, minha missão é criar as ferramentas que transformam <span className="text-accent font-semibold">dados complexos em vantagem competitiva</span>. Eu não apenas analiso os dados — eu construo os sistemas de ponta a ponta que os coletam, processam e revelam a performance oculta que leva ao sucesso.
              </p>
            </motion.div>
             <motion.a
                href="/CVPTBR.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="btn-primary group mt-10 inline-flex items-center"
              >
                Download CV
                <FaDownload className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
          </div>
          
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2"
          >
             <div 
              className="group relative bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 overflow-hidden"
            >
              <div 
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(220, 0, 0, 0.15), transparent 40%)',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-text-primary text-center">
                  Minha Abordagem em Números
                </h3>
                <div className="space-y-6 divide-y divide-primary/10">
                  <div className="flex items-center pt-4 first:pt-0">
                    <div className="relative mr-4">
                      <FaUsers className="text-accent text-3xl" />
                      <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md animate-pulse"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary"><AnimatedNumber value={42} />+</div>
                      <div className="text-text-secondary text-sm">Membros Liderados no Projeto FSAE</div>
                    </div>
                  </div>
                  <div className="flex items-center pt-4">
                    <div className="relative mr-4">
                      <FaTrophy className="text-accent text-3xl" />
                      <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md animate-pulse delay-200"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary"><AnimatedNumber value={12} /></div>
                      <div className="text-text-secondary text-sm">Posições Avançadas no Ranking</div>
                    </div>
                  </div>
                  <div className="flex items-center pt-4">
                    <div className="relative mr-4">
                      <FaGlobe className="text-accent text-3xl" />
                      <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md animate-pulse delay-400"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary"><AnimatedNumber value={6} /></div>
                      <div className="text-text-secondary text-sm">Idiomas para Comunicação Global</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
