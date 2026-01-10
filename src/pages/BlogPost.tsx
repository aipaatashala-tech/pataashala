import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Home, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { AuthorCard } from '@/components/AuthorCard';
import { FAQSection } from '@/components/FAQSection';
import { BlogCard } from '@/components/BlogCard';
import { StickyFooter } from '@/components/StickyFooter';
import { DoodleDecorations } from '@/components/DoodleDecorations';
import { Badge } from '@/components/ui/badge';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "author": { "@type": "Person", "name": post.author.name },
    "datePublished": post.publishedDate,
    "dateModified": post.updatedDate,
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen relative paper-texture">
        <DoodleDecorations />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary flex items-center gap-1">
              <Home className="w-4 h-4" /> Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate">{post.title}</span>
          </nav>

          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="font-hand text-3xl md:text-4xl text-foreground mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <span>{post.author.avatar}</span> {post.author.name}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" /> {tag}
                </Badge>
              ))}
            </div>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="prose prose-slate dark:prose-invert max-w-none
              prose-headings:font-hand prose-headings:text-foreground
              prose-p:text-muted-foreground prose-li:text-muted-foreground
              prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/<h2>/g, '</p><h2>').replace(/<h3>/g, '</p><h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />

          <FAQSection faqs={post.faqs} />
          <AuthorCard author={post.author} />

          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="font-hand text-2xl text-foreground mb-6">📖 Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPosts.map((related, i) => (
                  <BlogCard key={related.id} post={related} index={i} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </article>

        <StickyFooter />
      </div>
    </>
  );
};

export default BlogPost;
