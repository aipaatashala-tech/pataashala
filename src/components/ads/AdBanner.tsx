import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * AD BANNER COMPONENT
 * 
 * Full-width banner ads for header and footer positions.
 * Supports multiple ad formats and is fully responsive.
 * 
 * HOW TO INTEGRATE REAL ADS:
 * 
 * 1. GOOGLE ADSENSE:
 *    Replace the placeholder div with:
 *    ```
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>
 *    <ins class="adsbygoogle"
 *         style="display:block"
 *         data-ad-client="ca-pub-XXXXXXXX"
 *         data-ad-slot="XXXXXXXXXX"
 *         data-ad-format="horizontal"
 *         data-full-width-responsive="true"></ins>
 *    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
 *    ```
 * 
 * 2. AFFILIATE BANNERS:
 *    Replace with affiliate network's provided HTML/image code
 * 
 * 3. CUSTOM ADS:
 *    Replace with your own promotional content
 */

interface AdBannerProps {
  variant?: 'header' | 'footer' | 'inline';
  className?: string;
  animate?: boolean;
}

export const AdBanner = ({ 
  variant = 'header', 
  className,
  animate = true 
}: AdBannerProps) => {
  const variantStyles = {
    header: 'bg-muted/30 border-b border-border/50',
    footer: 'bg-muted/20 border-t border-border/50',
    inline: 'bg-card/50 border border-border/30 rounded-lg my-6',
  };

  const content = (
    <div 
      className={cn(
        'w-full py-3 px-4',
        variantStyles[variant],
        className
      )}
    >
      <div className="container mx-auto">
        {/* 
          AD CONTENT CONTAINER
          Replace this entire div with your actual ad code
        */}
        <div 
          className={cn(
            'mx-auto flex items-center justify-center',
            'border-2 border-dashed border-muted-foreground/20 rounded-lg',
            'bg-background/50',
            variant === 'header' ? 'h-[90px] max-w-[728px]' : '',
            variant === 'footer' ? 'h-[90px] max-w-[728px]' : '',
            variant === 'inline' ? 'h-[120px]' : ''
          )}
          data-ad-slot={`banner-${variant}`}
          aria-label={`${variant} advertisement banner`}
        >
          <div className="text-center">
            <p className="text-muted-foreground/50 text-sm">
              📢 Advertisement Banner
            </p>
            <p className="text-muted-foreground/30 text-xs mt-1">
              {variant === 'header' && '728x90 Leaderboard'}
              {variant === 'footer' && '728x90 Footer Banner'}
              {variant === 'inline' && 'Responsive Inline Ad'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: variant === 'header' ? -20 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};
