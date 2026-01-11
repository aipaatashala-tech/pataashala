import { motion } from 'framer-motion';
import { AdPlaceholder } from './AdPlaceholder';

/**
 * AD SIDEBAR COMPONENT
 * 
 * A dedicated sidebar for displaying multiple ad units.
 * This component is designed to be sticky and follow the user as they scroll.
 * 
 * HOW TO CUSTOMIZE:
 * 1. Add/remove AdPlaceholder components as needed
 * 2. Adjust spacing with gap-* classes
 * 3. Modify sticky positioning with top-* value
 * 
 * RESPONSIVE BEHAVIOR:
 * - Hidden on mobile (< lg breakpoint)
 * - Shows as sidebar on desktop
 * - Consider using inline ads for mobile instead
 */

interface AdSidebarProps {
  className?: string;
  showOnMobile?: boolean;
}

export const AdSidebar = ({ className, showOnMobile = false }: AdSidebarProps) => {
  return (
    <motion.aside
      className={`
        ${showOnMobile ? 'block' : 'hidden lg:block'}
        w-full lg:w-[300px] lg:min-w-[300px]
        ${className}
      `}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      aria-label="Advertisement sidebar"
    >
      <div className="sticky top-4 space-y-6">
        {/* 
          PRIMARY SIDEBAR AD
          Best performing position - place premium ads here
        */}
        <div className="rounded-xl bg-card/50 p-3 border border-border/50">
          <p className="text-xs text-muted-foreground mb-2 font-hand">Sponsored</p>
          <AdPlaceholder type="square" position="sidebar" id="sidebar-primary" />
        </div>

        {/* 
          SECONDARY SIDEBAR AD
          Good for affiliate promotions or secondary ad networks
        */}
        <div className="rounded-xl bg-card/50 p-3 border border-border/50">
          <p className="text-xs text-muted-foreground mb-2 font-hand">Featured</p>
          <AdPlaceholder type="square" position="sidebar" id="sidebar-secondary" />
        </div>

        {/* 
          PROMOTIONAL SIDEBAR AD
          Perfect for: Newsletter signups, course promotions, affiliate offers
        */}
        <div className="rounded-xl bg-primary/5 p-4 border border-primary/20">
          <p className="font-hand text-lg text-foreground mb-2">📚 Special Offer</p>
          <p className="text-sm text-muted-foreground mb-3">
            Placeholder for promotional content or affiliate offers.
          </p>
          <div className="bg-muted/30 rounded-lg p-3 text-center text-xs text-muted-foreground">
            [Affiliate Banner Placeholder]
          </div>
        </div>
      </div>
    </motion.aside>
  );
};
