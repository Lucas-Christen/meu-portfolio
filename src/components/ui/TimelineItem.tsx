// src/components/ui/TimelineItem.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItemData } from '../../data/resumeData';

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      {/* --- Card de Conteúdo --- */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={`w-full md:w-[calc(50%-2.5rem)] bg-background-secondary border border-primary/20 p-6 rounded-xl shadow-lg`}
      >
        <p className="text-sm font-mono text-primary mb-2">{item.date}</p>
        <h3 className="text-xl font-title font-bold text-text-primary mb-1">{item.title}</h3>
        <p className="text-md font-body font-semibold text-accent mb-3">{item.subtitle}</p>
        <p className="text-sm font-body text-text-secondary">{item.description}</p>
      </motion.div>

      {/* --- Ícone na Linha do Tempo --- */}
      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-background-primary rounded-full border-2 border-accent flex items-center justify-center">
        <item.icon className="text-accent text-xl" />
      </div>
    </div>
  );
};

export default TimelineItem;
