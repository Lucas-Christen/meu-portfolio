import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaServer, FaDatabase, FaChartLine, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Sobre o <span className="gradient-text">Sistema</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Engenheiro de Performance com foco em otimização de sistemas e análise de dados em tempo real
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-text-primary">
                Especialista em Performance & Telemetria
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Com mais de 5 anos de experiência em desenvolvimento Full-Stack, especializei-me em 
                <span className="text-accent"> otimização de performance</span> e 
                <span className="text-accent"> sistemas de telemetria avançada</span>. 
                Minha expertise inclui monitoramento em tempo real, análise preditiva e 
                implementação de soluções escaláveis.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Trabalho com tecnologias modernas como React, Node.js, Python e ferramentas de 
                observabilidade como Prometheus, Grafana e ELK Stack. Foco em entregar 
                <span className="text-accent"> soluções robustas</span> que garantem 
                <span className="text-accent"> alta disponibilidade</span> e 
                <span className="text-accent"> performance excepcional</span>.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <FaServer className="text-accent" size={20} />
                <span className="text-text-primary font-medium">Backend Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaDatabase className="text-accent" size={20} />
                <span className="text-text-primary font-medium">Data Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaChartLine className="text-accent" size={20} />
                <span className="text-text-primary font-medium">Performance Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCode className="text-accent" size={20} />
                <span className="text-text-primary font-medium">Full-Stack Development</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Status Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-background-primary rounded-xl p-8 border border-accent/20 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Status Operacional
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-sm font-medium">SISTEMA OPERACIONAL</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    <AnimatedNumber value={99} suffix="%" />
                  </div>
                  <div className="text-text-secondary text-sm">Performance Score</div>
                </div>
                <div className="bg-background-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    <AnimatedNumber value={150} suffix="ms" />
                  </div>
                  <div className="text-text-secondary text-sm">Response Time</div>
                </div>
                <div className="bg-background-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    <AnimatedNumber value={1000} suffix="+" />
                  </div>
                  <div className="text-text-secondary text-sm">Requests/sec</div>
                </div>
                <div className="bg-background-secondary rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    <AnimatedNumber value={50} suffix="+" />
                  </div>
                  <div className="text-text-secondary text-sm">Projects Delivered</div>
                </div>
              </div>

              {/* System Status */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Frontend Stack</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 text-sm">ONLINE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Backend Services</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 text-sm">ONLINE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Database</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 text-sm">ONLINE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Monitoring</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 text-sm">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
