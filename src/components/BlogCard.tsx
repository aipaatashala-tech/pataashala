import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  const rotations = [-1, 0.5, -0.5, 1, 0];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card 
          className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 border-2 border-border overflow-hidden group"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <CardHeader className="pb-2">
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              {post.category}
            </Badge>
            <h2 className="font-hand text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
