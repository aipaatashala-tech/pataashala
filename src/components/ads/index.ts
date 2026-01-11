/**
 * AD COMPONENTS INDEX
 * 
 * This module exports all ad-related components for easy import.
 * 
 * USAGE:
 * import { AdPlaceholder, AdBanner, AdSidebar, HeaderAd, FooterAd, InlineAd } from '@/components/ads';
 * 
 * AD INTEGRATION GUIDE:
 * 
 * 1. GOOGLE ADSENSE SETUP:
 *    a) Sign up at https://www.google.com/adsense
 *    b) Add the AdSense script to index.html <head>
 *    c) Replace AdPlaceholder content with AdSense units
 * 
 * 2. MEDIA.NET SETUP:
 *    a) Sign up at https://www.media.net
 *    b) Get your publisher ID
 *    c) Replace placeholders with Media.net ad units
 * 
 * 3. AFFILIATE NETWORKS:
 *    - Amazon Associates
 *    - ShareASale
 *    - CJ Affiliate
 *    - Impact
 * 
 * 4. DIRECT AD SALES:
 *    - Create custom ad components
 *    - Use image banners with tracking links
 * 
 * BEST PRACTICES:
 * - Don't overload pages with too many ads
 * - Maintain good content-to-ad ratio
 * - Ensure ads don't interfere with user experience
 * - Test ad performance and optimize placements
 * - Follow ad network policies strictly
 */

export { 
  AdPlaceholder, 
  HeaderAd, 
  FooterAd, 
  SidebarAds, 
  InlineAd, 
  SectionAd 
} from './AdPlaceholder';

export { AdBanner } from './AdBanner';
export { AdSidebar } from './AdSidebar';
