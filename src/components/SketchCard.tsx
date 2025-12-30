import { motion } from 'framer-motion';
import type { SiteLink } from '@/data/categories';

interface SketchCardProps {
  link: SiteLink;
  index: number;
}

const colorClasses = {
  yellow: 'bg-sticky-yellow',
  pink: 'bg-sticky-pink',
  blue: 'bg-sticky-blue',
  green: 'bg-sticky-green',
  orange: 'bg-sticky-orange',
};

const rotations = [-2, 1.5, -1, 2, -1.5, 0.5];

export const SketchCard = ({ link, index }: SketchCardProps) => {
  const rotation = rotations[index % rotations.length];
  const colorClass = colorClasses[link.color || 'yellow'];

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative block p-5 cursor-pointer
        ${colorClass}
        shadow-sticky
        transition-all duration-200
      `}
      style={{
        borderRadius: '3px 8px 5px 10px',
        rotate: `${rotation}deg`,
      }}
      initial={{ opacity: 0, y: 20, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Tape effect */}
      <div 
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4 bg-accent/60 rounded-sm"
        style={{ transform: `translateX(-50%) rotate(${-rotation * 0.5}deg)` }}
      />
      
      {/* Icon */}
      <span className="text-3xl mb-2 block">{link.icon}</span>
      
      {/* Title */}
      <h4 className="font-hand text-xl font-bold text-foreground mb-1 leading-tight">
        {link.title}
      </h4>
      
      {/* Description */}
      <p className="font-body text-sm text-foreground/70 leading-snug">
        {link.description}
      </p>

      {/* Doodle corner */}
      <svg 
        className="absolute bottom-2 right-2 w-5 h-5 text-foreground/20"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.a>
  );
};
