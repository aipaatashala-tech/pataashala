import { motion } from 'framer-motion';

export const DoodleDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left side decorations */}
      <motion.div 
        className="absolute left-4 top-1/4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <svg className="w-32 h-32 text-foreground" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M64 10 L64 118 M10 64 L118 64" strokeDasharray="4 4" />
          <circle cx="64" cy="64" r="50" strokeDasharray="8 4" />
          <circle cx="64" cy="64" r="25" />
        </svg>
      </motion.div>

      {/* Right side decorations */}
      <motion.div 
        className="absolute right-8 top-1/3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <svg className="w-24 h-24 text-foreground" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="8" width="80" height="80" rx="4" strokeDasharray="6 4" />
          <line x1="8" y1="48" x2="88" y2="48" />
          <line x1="48" y1="8" x2="48" y2="88" />
        </svg>
      </motion.div>

      {/* Bottom left spiral */}
      <motion.div 
        className="absolute left-16 bottom-1/4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <svg className="w-20 h-20 text-foreground" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M40 40 Q50 40, 50 30 Q50 20, 40 20 Q25 20, 25 35 Q25 55, 45 55 Q65 55, 65 35 Q65 10, 35 10" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Top right star cluster */}
      <motion.div 
        className="absolute right-20 top-1/5 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        <svg className="w-16 h-16 text-sticky-yellow" viewBox="0 0 64 64" fill="currentColor" opacity="0.5">
          <polygon points="32,4 38,24 58,24 42,38 48,58 32,46 16,58 22,38 6,24 26,24" />
        </svg>
      </motion.div>

      {/* Scattered dots */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-foreground/10 rounded-full"
            style={{
              left: `${10 + (i * 7) % 85}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
