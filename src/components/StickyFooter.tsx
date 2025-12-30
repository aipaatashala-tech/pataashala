import { motion } from 'framer-motion';
import { footerLinks } from '@/data/categories';

export const StickyFooter = () => {
  return (
    <motion.footer 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t-2 border-border"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {footerLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              className="flex items-center gap-2 px-3 py-2 font-hand text-lg text-foreground/80 hover:text-foreground transition-colors relative group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="hidden sm:inline">{link.title}</span>
              
              {/* Underline on hover */}
              <motion.div 
                className="absolute bottom-1 left-2 right-2 h-0.5 bg-foreground/40 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Sketch border top */}
      <svg 
        className="absolute -top-2 left-0 right-0 w-full h-3 text-border" 
        viewBox="0 0 1440 12" 
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M0 6 Q180 2, 360 6 T720 6 T1080 6 T1440 6" />
      </svg>
    </motion.footer>
  );
};
