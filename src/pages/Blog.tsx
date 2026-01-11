import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { allBlogPosts } from '@/data/blogPosts';
import { BlogCard } from '@/components/BlogCard';
import { StickyFooter } from '@/components/StickyFooter';
import { DoodleDecorations } from '@/components/DoodleDecorations';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AdBanner, AdSidebar, InlineAd } from '@/components/ads';

/**
 * BLOG PAGE WITH AD PLACEMENTS
 * 
 * Ad positions:
 * 1. Header banner - Below page header
 * 2. Inline ads - Between blog post rows (every 6 posts)
 * 3. Sidebar - Right side with sticky ads
 * 4. Footer banner - Bottom of page
 */

const Blog = () => {
  // Split posts into chunks for ad insertion
  const postsPerSection = 6;
  const postChunks: typeof allBlogPosts[] = [];
  for (let i = 0; i < allBlogPosts.length; i += postsPerSection) {
    postChunks.push(allBlogPosts.slice(i, i + postsPerSection));
  }

  return (
    <>
      <Helmet>
        <title>Educational Blog | Free Learning Resources & Study Tips</title>
        <meta name="description" content="Explore our educational blog with study tips, online learning guides, platform comparisons, and resources to help students succeed. Free educational content for all ages." />
        <link rel="canonical" href="/blog" />
      </Helmet>
      
      <div className="min-h-screen relative paper-texture">
        <DoodleDecorations />
        
        <header className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            <span className="font-hand">Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-hand text-4xl md:text-5xl text-foreground mb-4">
              📚 Educational Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover study tips, platform guides, and resources to help you learn effectively online.
            </p>
          </motion.div>
        </header>

        {/* 
          HEADER AD BANNER
          Prime position after header
        */}
        <AdBanner variant="header" />

        <div className="container mx-auto px-4 pb-32">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <main className="flex-1">
              {postChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {chunk.map((post, index) => (
                      <BlogCard 
                        key={post.id} 
                        post={post} 
                        index={chunkIndex * postsPerSection + index} 
                      />
                    ))}
                  </div>
                  
                  {/* 
                    INLINE AD
                    Shows between post sections
                    Good for: Native content ads, related content widgets
                  */}
                  {chunkIndex < postChunks.length - 1 && (
                    <InlineAd className="mb-8" />
                  )}
                </div>
              ))}
            </main>

            {/* 
              SIDEBAR ADS
              Sticky ad sidebar for desktop users
            */}
            <AdSidebar />
          </div>
        </div>

        {/* 
          FOOTER AD BANNER
          Last ad before footer
        */}
        <div className="pb-20">
          <AdBanner variant="footer" />
        </div>

        <StickyFooter />
      </div>
    </>
  );
};

export default Blog;
