import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DoodleDecorations } from '@/components/DoodleDecorations';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Learning Hub | Usage Guidelines</title>
        <meta name="description" content="Read Learning Hub's terms and conditions. Understand our website usage policies, user responsibilities, intellectual property rights, and more." />
        <link rel="canonical" href="/terms" />
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
                📜 Terms & Conditions
              </motion.h1>
              <p className="font-hand text-xl text-muted-foreground">
                Last updated: December 30, 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Agreement */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  By accessing and using Learning Hub ("the Website"), you agree to be bound by these Terms and
                  Conditions ("Terms"). If you disagree with any part of these terms, you may not access the Website.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms apply to all visitors, users, and others who access or use the Website. We reserve
                  the right to update or modify these Terms at any time without prior notice.
                </p>
              </motion.section>

              {/* Use License */}
              <motion.section
                className="sketch-card p-8 bg-sticky-blue/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">2. Use License</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Permission is granted to temporarily access and use the materials on Learning Hub for personal,
                  non-commercial educational purposes. This is the grant of a license, not a transfer of title.
                </p>
                <h3 className="font-hand text-2xl text-foreground mt-4 mb-3">Under this license, you may NOT:</h3>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Modify or copy the materials for commercial purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Use the materials for any commercial purpose or public display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Attempt to decompile or reverse engineer any software on the Website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Remove any copyright or proprietary notations from the materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✗</span>
                    <span>Transfer the materials to another person or "mirror" on any other server</span>
                  </li>
                </ul>
              </motion.section>

              {/* User Responsibilities */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  When using our Website, you agree to:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Provide accurate information when required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Use the Website only for lawful purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Respect intellectual property rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Not engage in any activity that disrupts the Website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Not attempt to gain unauthorized access to any part of the Website</span>
                  </li>
                </ul>
              </motion.section>

              {/* Intellectual Property */}
              <motion.section
                className="sketch-card p-8 bg-sticky-yellow/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Website and its original content, features, and functionality are and will remain the
                  exclusive property of Learning Hub and its licensors. This includes:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Text content and articles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Graphics, logos, and icons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Website design and layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Code and software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Audio and video content</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  The Website is protected by copyright, trademark, and other laws. Our trademarks may not
                  be used without prior written consent.
                </p>
              </motion.section>

              {/* Third-Party Links */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">5. Third-Party Links</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our Website may contain links to third-party websites or services that are not owned or
                  controlled by Learning Hub. We have no control over, and assume no responsibility for:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>The content, privacy policies, or practices of any third-party websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Any damage or loss caused by your use of third-party services</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  We strongly advise you to read the terms and privacy policies of any third-party sites
                  you visit.
                </p>
              </motion.section>

              {/* Content Accuracy */}
              <motion.section
                className="sketch-card p-8 bg-sticky-green/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">6. Content Accuracy</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We strive to provide accurate and up-to-date information. However:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Content is provided for educational purposes only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We do not warrant the completeness or accuracy of any information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Technology and best practices change rapidly, and some content may become outdated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>You should verify information before making decisions based on it</span>
                  </li>
                </ul>
              </motion.section>

              {/* User-Generated Content */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">7. User-Generated Content</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you submit comments, suggestions, or other content to the Website:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>You grant us a non-exclusive, royalty-free license to use, modify, and publish your content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>You represent that you own or have the right to share such content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Your content must not violate any laws or infringe on others' rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We reserve the right to remove any content at our discretion</span>
                  </li>
                </ul>
              </motion.section>

              {/* Disclaimer */}
              <motion.section
                className="sketch-card p-8 bg-sticky-pink/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Warranties of merchantability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Fitness for a particular purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Non-infringement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Accuracy, reliability, or availability of content</span>
                  </li>
                </ul>
              </motion.section>

              {/* Limitation of Liability */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-foreground/80 leading-relaxed">
                  In no event shall Learning Hub, its directors, employees, partners, or affiliates be liable
                  for any indirect, incidental, special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from
                  your access to or use of (or inability to access or use) the Website.
                </p>
              </motion.section>

              {/* Governing Law */}
              <motion.section
                className="sketch-card p-8 bg-sticky-orange/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">10. Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms shall be governed and construed in accordance with applicable laws, without
                  regard to its conflict of law provisions. Our failure to enforce any right or provision
                  of these Terms will not be considered a waiver of those rights.
                </p>
              </motion.section>

              {/* Changes */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">11. Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material,
                  we will provide notice prior to any new terms taking effect. What constitutes a material change
                  will be determined at our sole discretion. By continuing to access or use our Website after
                  any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </motion.section>

              {/* Contact */}
              <motion.section
                className="sketch-card p-8 bg-sticky-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">12. Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">

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
              transition={{ delay: 1.5 }}
            >
              <p className="font-hand text-center text-muted-foreground mb-4">More Pages</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-primary hover:underline font-hand">About Us</Link>
                <Link to="/contact" className="text-primary hover:underline font-hand">Contact Us</Link>
                <Link to="/privacy-policy" className="text-primary hover:underline font-hand">Privacy Policy</Link>
                <Link to="/disclaimer" className="text-primary hover:underline font-hand">Disclaimer</Link>
              </div>
            </motion.nav>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Terms;
