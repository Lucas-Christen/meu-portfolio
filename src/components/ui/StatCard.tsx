import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const StatCard: React.FC<{
  icon: React.ElementType;
  value: string;
  label: string;
  index: number;
}> = ({ icon: Icon, value, label, index }) => {
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      className="group relative bg-background-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 overflow-hidden"
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(220, 0, 0, 0.15), transparent 40%)',
        }}
      />
      <div className="relative z-10 text-center">
        <div className="relative inline-block mb-2">
          <Icon className="text-accent text-3xl" />
          <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md animate-pulse"></div>
        </div>
        <div className="text-3xl font-bold text-text-primary mb-1">{value}</div>
        <div className="text-text-secondary text-sm">{label}</div>
      </div>
    </motion.div>
  );
};

export default StatCard;