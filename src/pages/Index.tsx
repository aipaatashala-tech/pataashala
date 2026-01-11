import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { StickyFooter } from '@/components/StickyFooter';
import { DoodleDecorations } from '@/components/DoodleDecorations';
import { categories } from '@/data/categories';
import { AdBanner, AdSidebar, SectionAd } from '@/components/ads';

/**
 * INDEX PAGE WITH AD PLACEMENTS
 * 
 * Ad positions on this page:
 * 1. Header banner - Below hero section
 * 2. Sidebar - Right side on desktop (sticky)
 * 3. Between sections - Every 2 categories
 * 4. Footer banner - Above sticky footer
 * 
 * TO ENABLE REAL ADS:
 * 1. Import your ad network's script in index.html
 * 2. Replace AdPlaceholder components with real ad units
 * 3. See src/components/ads/AdPlaceholder.tsx for integration guide
 */

const Index = () => {
  return (
    <div className="min-h-screen relative paper-texture">
      {/* Background decorations */}
      <DoodleDecorations />

      {/* Hero Section */}
      <HeroSection />

      {/* 
        HEADER AD BANNER
        Best performing position after hero content
        Recommended: Google AdSense Leaderboard (728x90)
      */}
      <AdBanner variant="header" className="mt-4" />

      {/* Main content with sidebar layout */}
      <div className="container mx-auto px-4 md:px-8 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <main className="flex-1">
            {/* Divider doodle */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8 mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-px flex-1 max-w-[100px] bg-border" />
              <span className="font-hand text-2xl text-muted-foreground">Categories</span>
              <div className="h-px flex-1 max-w-[100px] bg-border" />
            </motion.div>

            {/* Category Sections with inline ads */}
            {categories.map((category, index) => (
              <div key={category.id}>
                <CategorySection category={category} index={index} />
                
                {/* 
                  BETWEEN SECTIONS AD
                  Shows after every 2 categories
                  Good for: Native ads, content recommendation widgets
                */}
                {(index + 1) % 2 === 0 && index < categories.length - 1 && (
                  <SectionAd />
                )}
              </div>
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

          {/* 
            SIDEBAR ADS
            Sticky sidebar with multiple ad units
            Hidden on mobile, visible on desktop (lg+)
            Best for: Square ads (300x250), promotional content
          */}
          <AdSidebar className="mt-16" />
        </div>
      </div>

      {/* 
        FOOTER AD BANNER
        Shows before sticky footer
        Good for: Affiliate banners, promotional content
      */}
      <div className="pb-20">
        <AdBanner variant="footer" />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  );
};

export default Index;
