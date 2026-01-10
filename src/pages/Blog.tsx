import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { allBlogPosts } from '@/data/blogPosts';
import { BlogCard } from '@/components/BlogCard';
import { StickyFooter } from '@/components/StickyFooter';
import { DoodleDecorations } from '@/components/DoodleDecorations';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Blog = () => {
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

        <main className="container mx-auto px-4 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </main>

        <StickyFooter />
      </div>
    </>
  );
};

export default Blog;
