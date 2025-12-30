import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { StickyFooter } from '@/components/StickyFooter';
import { DoodleDecorations } from '@/components/DoodleDecorations';
import { categories } from '@/data/categories';

const Index = () => {
  return (
    <div className="min-h-screen relative paper-texture">
      {/* Background decorations */}
      <DoodleDecorations />

      {/* Hero Section */}
      <HeroSection />

      {/* Main content */}
      <main className="container mx-auto px-4 md:px-8 pb-32 relative z-10">
        {/* Divider doodle */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px flex-1 max-w-[100px] bg-border" />
          <span className="font-hand text-2xl text-muted-foreground">Categories</span>
          <div className="h-px flex-1 max-w-[100px] bg-border" />
        </motion.div>

        {/* Category Sections */}
        {categories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}

        {/* End doodle */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-hand text-3xl text-muted-foreground">
            ✏️ Happy Learning! ✏️
          </span>
          <motion.svg 
            className="w-48 h-8 mx-auto mt-4 text-muted-foreground/40"
            viewBox="0 0 200 32" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M10 16 Q50 8, 100 16 T190 16" />
            <circle cx="10" cy="16" r="4" fill="currentColor" opacity="0.3" />
            <circle cx="190" cy="16" r="4" fill="currentColor" opacity="0.3" />
          </motion.svg>
        </motion.div>
      </main>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  );
};

export default Index;
