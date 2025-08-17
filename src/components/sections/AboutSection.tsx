import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaServer, FaDatabase, FaChartLine, FaCode } from 'react-icons/fa';

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Python', level: 95, icon: FaCode },
    { name: 'React.js', level: 90, icon: FaCode },
    { name: 'SQL', level: 88, icon: FaDatabase },
    { name: 'Machine Learning', level: 85, icon: FaChartLine },
    { name: 'Telemetria', level: 92, icon: FaServer },
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-text-primary"
            >
              Sobre Mim
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-text-secondary"
            >
              <p>
                Desenvolvedor Full-Stack e Analista de Dados com uma <span className="text-accent font-semibold">paixão por otimizar performance</span>, 
                seja em carros de corrida ou em código. Minha experiência única combina o desenvolvimento de sistemas de 
                telemetria em tempo real com a criação de modelos preditivos e aplicações web.
              </p>
              
              <p>
                Atualmente, foco em <span className="text-accent font-semibold">transformar dados complexos em soluções de software</span> 
                que geram resultados mensuráveis. Especialista em sistemas automotivos de alta performance, 
                com experiência em equipes de competição como UTForce E-Racing FSAE.
              </p>

              <p>
                Minha jornada inclui liderança de equipes de 42 membros, desenvolvimento de sistemas de bateria de íons de lítio, 
                e criação de interfaces gráficas para aplicações de telemetria em tempo real.
              </p>
            </motion.div>

            {/* Skills Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Principais Habilidades</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <skill.icon className="text-accent text-lg" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">{skill.name}</span>
                        <span className="text-accent font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background-primary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Operational Status */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background-primary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-primary text-center">
              Status Operacional
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  <AnimatedNumber value={42} />
                </div>
                <div className="text-text-secondary">Membros Liderados</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  <AnimatedNumber value={25} />
                </div>
                <div className="text-text-secondary">→ 13ª Posição</div>
                <div className="text-sm text-text-secondary">Ranking FSAE Brasil</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  <AnimatedNumber value={99} suffix="%" />
                </div>
                <div className="text-text-secondary">Performance Garantida</div>
              </div>
            </div>

            {/* System Status */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Sistema de Telemetria</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">ONLINE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Análise de Dados</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-accent text-sm">ATIVO</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Machine Learning</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary text-sm">PROCESSANDO</span>
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
