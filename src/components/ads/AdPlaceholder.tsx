import { cn } from '@/lib/utils';

/**
 * AD PLACEHOLDER COMPONENT
 * 
 * This component creates placeholder containers for advertisements.
 * 
 * HOW TO REPLACE WITH REAL ADS:
 * 1. For Google AdSense: Replace the placeholder content with your AdSense script
 *    Example:
 *    <ins className="adsbygoogle"
 *         style={{ display: 'block' }}
 *         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *         data-ad-slot="XXXXXXXXXX"
 *         data-ad-format="auto"
 *         data-full-width-responsive="true" />
 * 
 * 2. For Affiliate Ads: Replace with your affiliate banner/link code
 * 
 * 3. For Custom Ads: Replace with your custom ad HTML/component
 * 
 * SUPPORTED AD TYPES:
 * - banner: Horizontal banner ads (header/footer)
 * - sidebar: Vertical sidebar ads
 * - inline: Between content sections
 * - square: Square format ads
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

const adSizes: Record<AdType, { width: string; height: string; mobileHeight?: string }> = {
  banner: { width: 'w-full', height: 'h-[90px]', mobileHeight: 'h-[60px]' },
  sidebar: { width: 'w-full', height: 'h-[250px]' },
  inline: { width: 'w-full', height: 'h-[120px]', mobileHeight: 'h-[100px]' },
  square: { width: 'w-full max-w-[300px]', height: 'h-[250px]' },
  leaderboard: { width: 'w-full max-w-[728px]', height: 'h-[90px]', mobileHeight: 'h-[60px]' },
  skyscraper: { width: 'w-[160px]', height: 'h-[600px]' },
};

export const AdPlaceholder = ({ 
  type, 
  position, 
  className, 
  showLabel = true,
  id 
}: AdPlaceholderProps) => {
  const sizes = adSizes[type];
  
  return (
    <div
      id={id || `ad-${position}-${type}`}
      className={cn(
        // Base styles
        'relative border-2 border-dashed border-muted-foreground/30 rounded-lg',
        'bg-muted/20 flex items-center justify-center',
        'transition-all duration-300',
        // Responsive width
        sizes.width,
        // Responsive height - smaller on mobile
        sizes.mobileHeight ? `${sizes.mobileHeight} md:${sizes.height}` : sizes.height,
        className
      )}
      data-ad-type={type}
      data-ad-position={position}
      role="complementary"
      aria-label={`Advertisement placeholder - ${position} ${type}`}
    >
      {/* 
        AD CONTENT AREA
        Replace this entire inner content with your actual ad code
      */}
      <div className="text-center p-4">
        {showLabel && (
          <>
            <p className="text-muted-foreground/60 text-sm font-medium">
              📢 Advertisement
            </p>
            <p className="text-muted-foreground/40 text-xs mt-1">
              {type.charAt(0).toUpperCase() + type.slice(1)} Ad • {position}
            </p>
          </>
        )}
      </div>

      {/* Decorative corner markers for visual structure */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-muted-foreground/20" />
      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-muted-foreground/20" />
      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-muted-foreground/20" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-muted-foreground/20" />
    </div>
  );
};

/**
 * HEADER AD BANNER
 * Best for: Leaderboard ads (728x90) or responsive banners
 * Recommended ad providers: Google AdSense, Media.net
 */
export const HeaderAd = ({ className }: { className?: string }) => (
  <div className={cn('w-full flex justify-center py-2 bg-background/50', className)}>
    <AdPlaceholder type="leaderboard" position="header" />
  </div>
);

/**
 * FOOTER AD BANNER
 * Best for: Banner ads, affiliate promotions
 * Recommended ad providers: Google AdSense, affiliate networks
 */
export const FooterAd = ({ className }: { className?: string }) => (
  <div className={cn('w-full flex justify-center py-4', className)}>
    <AdPlaceholder type="banner" position="footer" />
  </div>
);

/**
 * SIDEBAR AD CONTAINER
 * Best for: Square ads (300x250), skyscraper ads (160x600)
 * Recommended: Multiple ad units stacked
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
 * Recommended: Native ads, in-article ads
 */
export const InlineAd = ({ className }: { className?: string }) => (
  <div className={cn('my-6 flex justify-center', className)}>
    <AdPlaceholder type="inline" position="content" />
  </div>
);

/**
 * BETWEEN SECTIONS AD
 * Best for: Between major content sections
 * Recommended: Larger format ads, promotional banners
 */
export const SectionAd = ({ className }: { className?: string }) => (
  <div className={cn('my-8 py-4 flex justify-center', className)}>
    <AdPlaceholder type="banner" position="between-sections" />
  </div>
);
