import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * AD PLACEHOLDER COMPONENT - GOOGLE ADSENSE INTEGRATION
 * 
 * This component renders actual Google AdSense ad units.
 * Publisher ID: ca-pub-6435345827965097
 * 
 * TO ADD NEW AD SLOTS:
 * 1. Go to Google AdSense dashboard
 * 2. Create a new ad unit
 * 3. Copy the data-ad-slot value
 * 4. Add it to the adSlots object below
 * 
 * SUPPORTED AD TYPES:
 * - banner: Horizontal banner ads (header/footer)
 * - sidebar: Vertical sidebar ads (300x250)
 * - inline: Between content sections
 * - square: Square format ads (300x250)
 * - leaderboard: Wide horizontal ads (728x90)
 * - skyscraper: Tall vertical ads (160x600)
 */

type AdType = 'banner' | 'sidebar' | 'inline' | 'square' | 'leaderboard' | 'skyscraper';
type AdPosition = 'header' | 'footer' | 'sidebar' | 'content' | 'between-sections';

interface AdPlaceholderProps {
  type: AdType;
  position: AdPosition;
  className?: string;
  showLabel?: boolean;
  id?: string;
}

// Ad format configurations for different ad types
const adFormats: Record<AdType, { format: string; style: React.CSSProperties }> = {
  banner: { 
    format: 'horizontal', 
    style: { display: 'block', width: '100%', height: '90px' } 
  },
  sidebar: { 
    format: 'rectangle', 
    style: { display: 'block', width: '300px', height: '250px' } 
  },
  inline: { 
    format: 'fluid', 
    style: { display: 'block', width: '100%', height: '120px' } 
  },
  square: { 
    format: 'rectangle', 
    style: { display: 'block', width: '300px', height: '250px' } 
  },
  leaderboard: { 
    format: 'horizontal', 
    style: { display: 'block', width: '728px', maxWidth: '100%', height: '90px' } 
  },
  skyscraper: { 
    format: 'vertical', 
    style: { display: 'block', width: '160px', height: '600px' } 
  },
};

// Declare adsbygoogle for TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export const AdPlaceholder = ({ 
  type, 
  position, 
  className, 
  showLabel = false,
  id 
}: AdPlaceholderProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const formatConfig = adFormats[type];
  
  useEffect(() => {
    // Push ad to AdSense when component mounts
    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div
      id={id || `ad-${position}-${type}`}
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        'min-h-[90px]',
        className
      )}
      data-ad-type={type}
      data-ad-position={position}
      role="complementary"
      aria-label={`Advertisement - ${position} ${type}`}
    >
      {/* Google AdSense Ad Unit */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={formatConfig.style}
        data-ad-client="ca-pub-6435345827965097"
        data-ad-slot="" /* Add your ad slot ID from AdSense dashboard */
        data-ad-format={formatConfig.format}
        data-full-width-responsive="true"
      />
      
      {/* Optional label for development/debugging */}
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 pointer-events-none">
          <p className="text-muted-foreground/60 text-xs">
            {type} • {position}
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * HEADER AD BANNER
 * Best for: Leaderboard ads (728x90) or responsive banners
 */
export const HeaderAd = ({ className }: { className?: string }) => (
  <div className={cn('w-full flex justify-center py-2 bg-background/50', className)}>
    <AdPlaceholder type="leaderboard" position="header" />
  </div>
);

/**
 * FOOTER AD BANNER
 * Best for: Banner ads, affiliate promotions
 */
export const FooterAd = ({ className }: { className?: string }) => (
  <div className={cn('w-full flex justify-center py-4', className)}>
    <AdPlaceholder type="banner" position="footer" />
  </div>
);

/**
 * SIDEBAR AD CONTAINER
 * Best for: Square ads (300x250), skyscraper ads (160x600)
 */
export const SidebarAds = ({ className }: { className?: string }) => (
  <aside 
    className={cn('space-y-4 sticky top-4', className)}
    aria-label="Sidebar advertisements"
  >
    <AdPlaceholder type="square" position="sidebar" id="sidebar-ad-1" />
    <AdPlaceholder type="square" position="sidebar" id="sidebar-ad-2" />
  </aside>
);

/**
 * INLINE CONTENT AD
 * Best for: Between paragraphs, after headings
 */
export const InlineAd = ({ className }: { className?: string }) => (
  <div className={cn('my-6 flex justify-center', className)}>
    <AdPlaceholder type="inline" position="content" />
  </div>
);

/**
 * BETWEEN SECTIONS AD
 * Best for: Between major content sections
 */
export const SectionAd = ({ className }: { className?: string }) => (
  <div className={cn('my-8 py-4 flex justify-center', className)}>
    <AdPlaceholder type="banner" position="between-sections" />
  </div>
);
