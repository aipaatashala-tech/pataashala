import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * AD SIDEBAR COMPONENT - GOOGLE ADSENSE
 * 
 * A dedicated sidebar for displaying multiple ad units.
 * This component is designed to be sticky and follow the user as they scroll.
 * 
 * Publisher ID: ca-pub-6435345827965097
 * 
 * TO CONFIGURE:
 * 1. Create ad units in your AdSense dashboard
 * 2. Copy the data-ad-slot values
 * 3. Update each ins element with your slot IDs
 */

// Declare adsbygoogle for TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSidebarProps {
  className?: string;
  showOnMobile?: boolean;
}

const SidebarAdUnit = ({ id, label }: { id: string; label: string }) => {
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

  return (
    <div className="sketch-card tape-effect relative mt-6 bg-card">
      <div className="absolute -top-3 -right-2 rotate-3 bg-yellow-200 px-2 py-0.5 shadow-sm">
        <p className="font-hand text-xs font-bold text-yellow-900">{label}</p>
      </div>
      <div className="flex justify-center overflow-hidden rounded-sm bg-white/50">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '300px', height: '250px' }}
          data-ad-client="ca-pub-6435345827965097"
          data-ad-slot="7308105727"
          data-ad-format="rectangle"
          id={id}
        />
      </div>
    </div>
  );
};

export const AdSidebar = ({ className, showOnMobile = false }: AdSidebarProps) => {
  return (
    <motion.aside
      className={cn(
        showOnMobile ? 'block' : 'hidden lg:block',
        'w-full lg:w-[300px] lg:min-w-[300px]',
        className
      )}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      aria-label="Advertisement sidebar"
    >
      <div className="sticky top-4 space-y-6">
        {/* Primary Sidebar Ad - Best performing position */}
        <SidebarAdUnit id="sidebar-primary" label="Sponsored" />

        {/* Secondary Sidebar Ad */}
        <SidebarAdUnit id="sidebar-secondary" label="Featured" />

        {/* Promotional Section - Can be used for affiliate offers */}
        <div className="rounded-xl bg-primary/5 p-4 border border-primary/20">
          <p className="font-hand text-lg text-foreground mb-2">📚 Special Offer</p>
          <p className="text-sm text-muted-foreground mb-3">
            Premium learning resources and exclusive deals.
          </p>
          {/* This can be replaced with an affiliate banner */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100px' }}
            data-ad-client="ca-pub-6435345827965097"
            data-ad-slot="7308105727"
            data-ad-format="fluid"
          />
        </div>
      </div>
    </motion.aside>
  );
};
