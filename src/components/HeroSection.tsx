import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section 
      ref={ref}
      className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{ opacity }}
    >
      {/* Background doodles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        {/* Floating doodles */}
        <svg className="absolute top-20 left-10 w-16 h-16 text-muted-foreground/20 animate-float" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
        
        <svg className="absolute top-40 right-16 w-12 h-12 text-sticky-pink animate-wobble-slow" viewBox="0 0 48 48" fill="currentColor" opacity="0.3">
          <polygon points="24,4 44,40 4,40" />
        </svg>

        <svg className="absolute bottom-32 left-20 w-20 h-20 text-sticky-blue animate-float" style={{ animationDelay: '0.5s' }} viewBox="0 0 80 80" fill="none">
          <rect x="10" y="10" width="60" height="60" stroke="currentColor" strokeWidth="2" rx="5" />
        </svg>

        <svg className="absolute top-60 left-1/4 w-8 h-8 text-sticky-yellow animate-bounce-gentle" viewBox="0 0 32 32" fill="currentColor" opacity="0.4">
          <path d="M16 2l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" />
        </svg>

        <svg className="absolute bottom-40 right-1/4 w-14 h-14 text-sticky-green animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" />
          <circle cx="28" cy="28" r="12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="text-center z-10 max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Notebook icon */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <span className="text-7xl md:text-8xl">📚</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="font-hand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="block">Learning Hub</span>
          <motion.span 
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted-foreground mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Everything You Need in One Place
          </motion.span>
        </motion.h1>

        {/* Underline doodle */}
        <motion.svg 
          className="w-64 md:w-96 h-4 mx-auto mb-8 text-foreground/40"
          viewBox="0 0 400 16" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
        >
          <motion.path 
            d="M0 8 Q100 2, 200 8 T400 8" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.svg>

        {/* Subtitle */}
        <motion.p 
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Your personal collection of mini-websites for programming, aptitude, databases, AI tools, and more! ✨
        </motion.p>

        {/* Scroll indicator */}
        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <span className="font-hand text-lg text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom wave doodle */}
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-16 text-muted/50" 
        viewBox="0 0 1440 64" 
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M0 32 Q360 0, 720 32 T1440 32" />
      </svg>
    </motion.section>
  );
};
