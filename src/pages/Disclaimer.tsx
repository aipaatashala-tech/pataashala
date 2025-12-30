import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DoodleDecorations } from '@/components/DoodleDecorations';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Learning Hub | Important Information</title>
        <meta name="description" content="Read Learning Hub's disclaimer. Understand our limitations of liability, affiliate disclosure, and important notices about the educational content we provide." />
        <link rel="canonical" href="/disclaimer" />
      </Helmet>

      <div className="min-h-screen relative paper-texture">
        <DoodleDecorations />
        
        <main className="container mx-auto px-4 md:px-8 py-16 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h1 
                className="font-hand text-5xl md:text-6xl text-foreground mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ⚠️ Disclaimer
              </motion.h1>
              <p className="font-hand text-xl text-muted-foreground">
                Last updated: December 30, 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* General Disclaimer */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📋 General Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The information provided on Learning Hub ("the Website") is for general informational and 
                  educational purposes only. All information on the Website is provided in good faith, 
                  however, we make no representation or warranty of any kind, express or implied, regarding 
                  the accuracy, adequacy, validity, reliability, availability, or completeness of any 
                  information on the Website.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Under no circumstance shall we have any liability to you for any loss or damage of any 
                  kind incurred as a result of the use of the Website or reliance on any information 
                  provided on the Website. Your use of the Website and your reliance on any information 
                  on the Website is solely at your own risk.
                </p>
              </motion.section>

              {/* Educational Content */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-yellow/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📚 Educational Content Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The educational content on this Website, including but not limited to tutorials, guides, 
                  articles, and resources, is intended for learning purposes only. Please understand that:
                </p>
                <ul className="space-y-3 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Technology evolves rapidly, and some information may become outdated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Code examples are provided for educational purposes and may require modification for production use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Best practices and recommendations may vary based on specific use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We do not guarantee specific learning outcomes or career results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Content should be supplemented with official documentation and other resources</span>
                  </li>
                </ul>
              </motion.section>

              {/* No Professional Advice */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">💼 No Professional Advice</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Website does not provide:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Professional or certified training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Legal, financial, or career advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Guaranteed job placement or employment assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Certified credentials or degrees</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  For professional advice, please consult with appropriate licensed professionals in your 
                  jurisdiction.
                </p>
              </motion.section>

              {/* External Links */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-blue/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">🔗 External Links Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Website may contain links to external websites that are not provided or maintained by 
                  or in any way affiliated with Learning Hub. Please note that:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We have no control over the content and nature of these sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Links do not imply endorsement of the linked websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>External sites may have different privacy policies and terms</span>
                  </li>
                </ul>
              </motion.section>

              {/* Affiliate Disclosure */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">💰 Affiliate Disclosure</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Website may contain affiliate links. This means we may earn a commission if you click 
                  on a link and make a purchase. This comes at no additional cost to you.
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Affiliate relationships do not influence our content recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We only recommend products and services we believe are valuable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Your support through affiliate links helps us maintain the Website</span>
                  </li>
                </ul>
              </motion.section>

              {/* Advertising Disclaimer */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-green/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📢 Advertising Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  This Website may display advertisements provided by third-party advertising networks, 
                  including Google AdSense.
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Advertisements are served by third parties and not by Learning Hub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We do not endorse the products or services advertised</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Ad content is determined by the advertising network based on various factors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Clicking on ads is at your own discretion and risk</span>
                  </li>
                </ul>
              </motion.section>

              {/* Testimonials */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">💬 Testimonials Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Any testimonials or success stories on this Website are individual experiences and do not 
                  guarantee that all users will achieve the same results. Individual results may vary based 
                  on numerous factors including prior knowledge, time invested, and personal circumstances.
                </p>
              </motion.section>

              {/* Fair Use */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-pink/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📖 Fair Use Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  This Website may contain copyrighted material the use of which has not always been 
                  specifically authorized by the copyright owner. We make such material available for 
                  educational purposes. This constitutes a "fair use" of any such copyrighted material as 
                  provided for in applicable copyright law.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  If you wish to use copyrighted material from this Website for purposes that go beyond 
                  "fair use," you must obtain permission from the copyright owner.
                </p>
              </motion.section>

              {/* Errors and Omissions */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">🔍 Errors and Omissions</h2>
                <p className="text-foreground/80 leading-relaxed">
                  While we strive to ensure that information on this Website is correct, we do not warrant 
                  the accuracy or completeness of the materials. The Website may contain typographical 
                  errors, technical inaccuracies, or outdated information. We reserve the right to make 
                  changes, corrections, and improvements at any time without notice.
                </p>
              </motion.section>

              {/* Views Expressed */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-orange/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">💭 Views Expressed</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Any views or opinions represented in this Website are personal and belong solely to the 
                  Website owner and do not represent those of any organization, employer, or company the 
                  owner may be affiliated with, unless explicitly stated.
                </p>
              </motion.section>

              {/* Contact */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📞 Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have any questions or concerns about this Disclaimer, please contact us:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>📧</span>
                    <span>Email: legal@learninghub.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📝</span>
                    <span>Contact Form: <Link to="/contact" className="text-primary hover:underline">Click here</Link></span>
                  </li>
                </ul>
              </motion.section>
            </div>

            {/* Navigation Links */}
            <motion.nav 
              className="mt-12 pt-8 border-t-2 border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <p className="font-hand text-center text-muted-foreground mb-4">More Pages</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-primary hover:underline font-hand">About Us</Link>
                <Link to="/contact" className="text-primary hover:underline font-hand">Contact Us</Link>
                <Link to="/privacy-policy" className="text-primary hover:underline font-hand">Privacy Policy</Link>
                <Link to="/terms" className="text-primary hover:underline font-hand">Terms & Conditions</Link>
              </div>
            </motion.nav>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Disclaimer;
