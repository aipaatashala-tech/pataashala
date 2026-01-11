import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * AD BANNER COMPONENT - GOOGLE ADSENSE
 * 
 * Full-width banner ads for header and footer positions.
 * Uses actual Google AdSense ad units.
 * 
 * Publisher ID: ca-pub-6435345827965097
 * 
 * TO CONFIGURE:
 * 1. Create ad units in your AdSense dashboard
 * 2. Copy the data-ad-slot values
 * 3. Update the adSlots object below with your slot IDs
 */

// Declare adsbygoogle for TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

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
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  const variantStyles = {
    header: 'bg-muted/30 border-b border-border/50',
    footer: 'bg-muted/20 border-t border-border/50',
    inline: 'bg-card/50 border border-border/30 rounded-lg my-6',
  };

  const adStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: variant === 'inline' ? '120px' : '90px',
    maxWidth: '728px',
  };

  const content = (
    <div 
      className={cn(
        'w-full py-3 px-4',
        variantStyles[variant],
        className
      )}
    >
      <div className="container mx-auto flex justify-center">
        {/* Google AdSense Banner Ad Unit */}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={adStyle}
          data-ad-client="ca-pub-6435345827965097"
          data-ad-slot="7308105727"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
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
