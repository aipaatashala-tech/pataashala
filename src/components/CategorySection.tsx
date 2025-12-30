import { motion } from 'framer-motion';
import type { Category } from '@/data/categories';
import { SketchCard } from './SketchCard';

interface CategorySectionProps {
  category: Category;
  index: number;
}

export const CategorySection = ({ category, index }: CategorySectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className="py-16 md:py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Section header */}
      <motion.div 
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl md:text-5xl animate-bounce-gentle">{category.emoji}</span>
          <h2 className="font-hand text-4xl md:text-5xl lg:text-6xl font-bold text-foreground sketch-underline">
            {category.title}
          </h2>
        </div>
        <p className="font-body text-lg md:text-xl text-muted-foreground ml-16 md:ml-20">
          {category.description}
        </p>
      </motion.div>

      {/* Doodle arrow */}
      <svg 
        className="absolute left-4 md:left-8 top-32 w-12 h-20 text-muted-foreground/40 hidden lg:block"
        viewBox="0 0 50 80" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M25 0 C25 30, 5 40, 25 60 S45 75, 25 80" />
        <path d="M15 70 L25 80 L35 70" />
      </svg>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {category.links.map((link, linkIndex) => (
          <SketchCard key={link.id} link={link} index={linkIndex} />
        ))}
      </div>

      {/* Decorative doodle */}
      <svg 
        className="absolute -right-4 bottom-10 w-24 h-24 text-muted-foreground/20 hidden md:block"
        viewBox="0 0 100 100" 
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.3" />
      </svg>
    </motion.section>
  );
};
