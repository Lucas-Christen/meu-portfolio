import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaRocket, FaCar, FaChartLine, FaUsers, FaTrophy, FaCode, FaBolt, FaDatabase, FaMedal, FaGraduationCap } from 'react-icons/fa';

interface AchievementMetric {
  label: string;
  value: string;
  description: string;
  impact: string;
  icon: React.ElementType;
  period: string;
}

interface TechnicalSkill {
  name: string;
  years: number;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
  context: string;
}

interface MajorProject {
  title: string;
  organization: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  businessImpact: string;
  confidential?: boolean;
}

const RealisticResumePage: React.FC = () => {
  useTranslation();

  // Conquistas mensuráveis reais
  const realAchievements: AchievementMetric[] = [
    {
      label: "Team Transformation",
      value: "25th → 13th",
      description: "FSAE Brazil Competition Ranking",
      impact: "First competition since 2018",
      icon: FaTrophy,
      period: "6 months"
    },
    {
      label: "Budget Efficiency",
      value: "R$ 6.000",
      description: "Complete electric prototype budget",
      impact: "94% cost reduction vs 1st place (R$100k+)",
      icon: FaRocket,
      period: "2024"
    },
    {
      label: "Team Leadership",
      value: "42 members",
      description: "Multi-disciplinary team management",
      impact: "Engineering, Marketing, Admin divisions",
      icon: FaUsers,
      period: "2024"
    },
    {
      label: "Process Automation",
      value: "4 → 1.5 months",
      description: "Client database project acceleration",
      impact: "62% time reduction via Excel automation",
      icon: FaChartLine,
      period: "Recent"
    }
  ];

  // Stack técnico real com contexto
  const realTechnicalStack: { [key: string]: TechnicalSkill[] } = {
    "Core Programming (6+ years)": [
      { name: "Python (Scikit-learn, NumPy, Pandas)", years: 4, level: "Advanced", context: "ML models, data analysis, telemetry systems" },
      { name: "C/C++", years: 6, level: "Advanced", context: "Started 2018, embedded systems, automotive" },
      { name: "SQL", years: 3, level: "Advanced", context: "Database optimization, client data analysis" }
    ],
    "Web Development": [
      { name: "React.js + TypeScript", years: 2, level: "Advanced", context: "Portfolio, telemetry dashboards" },
      { name: "HTML/CSS", years: 3, level: "Advanced", context: "Full-stack applications" },
      { name: "Node.js", years: 2, level: "Intermediate", context: "Backend APIs, automation tools" }
    ],
    "Data & Machine Learning": [
      { name: "Data Analysis & Visualization", years: 3, level: "Advanced", context: "Real-time telemetry, F1 predictions" },
      { name: "PySpark", years: 1, level: "Intermediate", context: "Large dataset processing" },
      { name: "Machine Learning", years: 2, level: "Intermediate", context: "Accident prediction, race results" }
    ],
    "Automotive & IoT": [
      { name: "Real-time Telemetry Systems", years: 2, level: "Expert", context: "FSAE, LMP3, autonomous vehicles" },
      { name: "Embedded Systems", years: 3, level: "Advanced", context: "ESP32, sensor integration" },
      { name: "Battery Management Systems", years: 1, level: "Advanced", context: "Li-ion pack design, BMS repair" }
    ]
  };

  // Projetos principais com detalhes reais
  const majorProjects: MajorProject[] = [
    {
      title: "Real-time Racing Telemetry System",
      organization: "UTForce E-Racing FSAE",
      duration: "2023 - Present",
      description: "Developed scalable telemetry system supporting 4-30+ sensors with configurable data collection frequency for electric racing prototype.",
      technologies: ["Python", "HTML", "LoRa Network", "Real-time Data Processing"],
      achievements: [
        "Flexible sensor architecture (4-30+ sensors supported)",
        "Configurable data collection frequency",
        "Real-time accident detection via temperature anomalies",
        "Currently in production use by team"
      ],
      businessImpact: "Enabled team's first competition participation since 2018, contributing to 13th place finish",
      confidential: false
    },
    {
      title: "Professional Racing Data Analysis",
      organization: "Confidential Client",
      duration: "2024",
      description: "Developed real-time data analysis system for LMP3 race car during track sessions.",
      technologies: ["Python", "Real-time Processing", "Automotive Sensors"],
      achievements: [
        "Real-time data processing during 3-lap sessions",
        "Professional motorsport environment",
        "Confidential project for racing team"
      ],
      businessImpact: "Performance optimization insights for professional racing operations",
      confidential: true
    },
    {
      title: "F1 Race Results Prediction ML Model",
      organization: "Personal Project",
      duration: "2024",
      description: "Machine learning model for Formula 1 race result prediction using FastF1 API historical data.",
      technologies: ["Python", "Scikit-learn", "FastF1 API", "Machine Learning"],
      achievements: [
        "Historical data analysis and feature engineering",
        "Predictive modeling implementation",
        "Performance validation against actual results"
      ],
      businessImpact: "Demonstrates ML capabilities in motorsport analytics domain",
      confidential: false
    },
    {
      title: "Autonomous Vehicle Accident Prevention",
      organization: "GSA (Automotive Systems Group)",
      duration: "2025 - Present",
      description: "Developing ML model for accident prediction in autonomous vehicles using gait pattern analysis.",
      technologies: ["Python", "Machine Learning", "Sensor Data Analysis", "Predictive Modeling"],
      achievements: [
        "Real-time gait pattern analysis",
        "Accident prediction algorithm development",
        "Partnership with automotive research group"
      ],
      businessImpact: "Advancing autonomous vehicle safety through predictive analytics",
      confidential: false
    }
  ];

  // Certificações e educação em progresso
  const currentCertifications = [
    {
      name: "AWS Cloud Practitioner",
      status: "In Progress",
      provider: "Alura",
      expected: "2025"
    },
    {
      name: "Google Cloud Engineer",
      status: "Planned",
      provider: "Alura",
      expected: "2025"
    }
  ];

  return (
    <div className="bg-background-primary text-text-primary">
      <div className="container-custom section-padding">
        {/* Professional Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-bold">Lucas Fernandes Christen</h1>
          <p className="text-lg sm:text-xl text-accent font-mono mt-2">
            Full-Stack Developer & Automotive Data Engineering Specialist
          </p>
          <p className="text-base text-text-secondary mt-2">
            Software Engineering Student | 6+ Years Programming Experience | Racing Telemetry Expert
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-6 text-sm">
            <span className="bg-background-secondary px-4 py-2 rounded-full">📍 Ponta Grossa, PR - Brazil</span>
            <span className="bg-background-secondary px-4 py-2 rounded-full">🌐 Fluent English, B1 French</span>
            <span className="bg-background-secondary px-4 py-2 rounded-full">🏎️ Motorsport Data Specialist</span>
          </div>
          <a 
            href="/CVPTBR.pdf" 
            download="LucasChristen_CV.pdf"
            className="btn-primary group mt-8 inline-flex items-center"
          >
            Download Professional CV
            <FaDownload className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h2 className="titulo-secao text-center mb-10">Key Professional Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realAchievements.map((achievement, index) => (
              <motion.div 
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-secondary border border-primary/20 rounded-xl p-6 text-center"
              >
                <achievement.icon className="text-accent text-3xl mx-auto mb-3" />
                <p className="font-title text-2xl font-bold text-text-primary mb-1">{achievement.value}</p>
                <p className="font-mono text-sm text-text-secondary mb-2">{achievement.label}</p>
                <p className="text-xs text-text-secondary mb-3">{achievement.description}</p>
                <div className="border-t border-primary/10 pt-3">
                  <p className="text-xs text-accent font-medium">{achievement.impact}</p>
                  <p className="text-xs text-text-secondary mt-1">({achievement.period})</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-20">
          <h2 className="titulo-secao text-center mb-12">Technical Expertise & Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(realTechnicalStack).map(([category, skills], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-background-secondary border border-primary/20 rounded-xl p-6"
              >
                <h3 className="font-title text-xl font-bold text-accent mb-4">{category}</h3>
                <div className="space-y-4">
                  {skills.map(skill => (
                    <div key={skill.name} className="border-b border-primary/10 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-body text-text-primary font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-text-secondary">{skill.years}y</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                            skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                            skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary">{skill.context}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Major Projects */}
        <div className="mb-20">
          <h2 className="titulo-secao text-center mb-12">Major Projects & Impact</h2>
          <div className="space-y-8">
            {majorProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background-secondary border border-primary/20 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="font-title text-2xl font-bold text-text-primary mb-2 flex items-center">
                      {project.title}
                      {project.confidential && (
                        <span className="ml-3 text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">
                          Confidential
                        </span>
                      )}
                    </h3>
                    <p className="text-accent font-medium">{project.organization} • {project.duration}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <FaCode className="text-accent text-xl" />
                    {project.organization.includes('UTForce') && <FaCar className="text-accent text-xl" />}
                    {project.title.includes('ML') && <FaBolt className="text-accent text-xl" />}
                  </div>
                </div>
                <p className="text-text-secondary mb-6">{project.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-text-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
                  <p className="text-accent font-semibold mb-1">Business Impact:</p>
                  <p className="text-text-secondary text-sm">{project.businessImpact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-background-primary text-xs text-accent px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-20">
          <h2 className="titulo-secao text-center mb-12">Education & Professional Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Education */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-background-secondary border border-primary/20 rounded-xl p-6"
            >
              <h3 className="font-title text-xl font-bold text-accent mb-4 flex items-center">
                <FaGraduationCap className="mr-3" />
                Current Education
              </h3>
              <div className="space-y-4">
                <div className="border-b border-primary/10 pb-3">
                  <h4 className="font-semibold text-text-primary">Software Engineering</h4>
                  <p className="text-text-secondary text-sm">Unicesumar • 2025 - Present</p>
                </div>
                <div className="border-b border-primary/10 pb-3">
                  <h4 className="font-semibold text-text-primary">Systems Analysis & Development</h4>
                  <p className="text-text-secondary text-sm">UTFPR • 2025 - Present</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">French Intensive (B1 Level)</h4>
                  <p className="text-text-secondary text-sm">UTFPR • Graduated 2023</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications in Progress */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-background-secondary border border-primary/20 rounded-xl p-6"
            >
              <h3 className="font-title text-xl font-bold text-accent mb-4 flex items-center">
                <FaMedal className="mr-3" />
                Certifications in Progress
              </h3>
              <div className="space-y-4">
                {currentCertifications.map((cert, i) => (
                  <div key={cert.name} className="border-b border-primary/10 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-text-primary">{cert.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        cert.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">{cert.provider} • Expected {cert.expected}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <p className="text-xs text-accent">🎯 Actively pursuing cloud certifications to complement hands-on experience</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-8 text-center"
        >
          <h2 className="titulo-secao mb-6">Professional Profile</h2>
          <p className="texto-corpo max-w-4xl mx-auto">
            <strong>Software Engineering Student</strong> with <strong>6+ years of programming experience</strong> and proven leadership in high-performance automotive environments. 
            Specialized in <strong>real-time telemetry systems</strong> and <strong>data-driven solutions</strong> for motorsport applications. 
            Demonstrated ability to deliver results under pressure, evidenced by transforming a dormant racing team into competition-ready in 6 months 
            while maintaining exceptional budget efficiency. Currently expanding expertise in cloud technologies and machine learning 
            to bridge automotive engineering with modern data platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">6+ Years</div>
              <div className="text-sm text-text-secondary">Programming Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">42 Members</div>
              <div className="text-sm text-text-secondary">Team Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">Motorsport</div>
              <div className="text-sm text-text-secondary">Data Specialist</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RealisticResumePage;
