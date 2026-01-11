import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DoodleDecorations } from '@/components/DoodleDecorations';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Learning Hub | How We Protect Your Data</title>
        <meta name="description" content="Read Learning Hub's privacy policy. Learn how we collect, use, and protect your personal information. Your privacy and data security are our priority." />
        <link rel="canonical" href="/privacy-policy" />
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
                🔒 Privacy Policy
              </motion.h1>
              <p className="font-hand text-xl text-muted-foreground">
                Last updated: December 30, 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📋 Introduction</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Welcome to Learning Hub ("we," "our," or "us"). We are committed to protecting your personal
                  information and your right to privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this
                  privacy policy, please do not access the site.
                </p>
              </motion.section>

              {/* Information We Collect */}
              <motion.section
                className="sketch-card p-8 bg-sticky-blue/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📊 Information We Collect</h2>

                <h3 className="font-hand text-2xl text-foreground mt-6 mb-3">Personal Information</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Fill out our contact form (name, email address)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Subscribe to our newsletter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Leave comments on our blog posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Participate in surveys or promotions</span>
                  </li>
                </ul>

                <h3 className="font-hand text-2xl text-foreground mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Browser type and version</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Operating system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Pages visited and time spent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Referring website addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>IP address (anonymized)</span>
                  </li>
                </ul>
              </motion.section>

              {/* How We Use Your Information */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">🎯 How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-3 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span><strong>Provide and improve our services:</strong> To deliver content and resources that match your interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span><strong>Respond to inquiries:</strong> To reply to your questions and provide support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span><strong>Send communications:</strong> To send newsletters and updates (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span><strong>Analytics:</strong> To understand how users interact with our website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span><strong>Legal compliance:</strong> To comply with legal obligations</span>
                  </li>
                </ul>
              </motion.section>

              {/* Cookies */}
              <motion.section
                className="sketch-card p-8 bg-sticky-yellow/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">🍪 Cookies and Tracking Technologies</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website.
                  Cookies are small files stored on your device that help us:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Remember your preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Analyze website traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Understand user behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Deliver relevant advertisements (if applicable)</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may
                  affect certain features of our website.
                </p>
              </motion.section>

              {/* Third-Party Services */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">🔗 Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our website may contain links to third-party websites and services. We may also use
                  third-party services including:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Google Analytics:</strong> For website analytics and traffic analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Google AdSense:</strong> For displaying advertisements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Social Media Platforms:</strong> For sharing content</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  These third parties have their own privacy policies, and we encourage you to review them.
                </p>
              </motion.section>

              {/* Data Security */}
              <motion.section
                className="sketch-card p-8 bg-sticky-green/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">🛡️ Data Security</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your
                  personal information, including:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>SSL/TLS encryption for data transmission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Secure hosting infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Regular security assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Limited access to personal data</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to
                  protect your information, we cannot guarantee absolute security.
                </p>
              </motion.section>

              {/* Your Rights */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">⚖️ Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Right to Access:</strong> Request a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Right to Rectification:</strong> Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Right to Erasure:</strong> Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Right to Object:</strong> Object to processing of your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Right to Portability:</strong> Request transfer of your data</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  To exercise any of these rights, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
                </p>
              </motion.section>

              {/* Children's Privacy */}
              <motion.section
                className="sketch-card p-8 bg-sticky-pink/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">👶 Children's Privacy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please contact us, and we will
                  take steps to delete such information.
                </p>
              </motion.section>

              {/* Changes to Policy */}
              <motion.section
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📝 Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage
                  you to review this Privacy Policy periodically for any changes.
                </p>
              </motion.section>

              {/* Contact */}
              <motion.section
                className="sketch-card p-8 bg-sticky-orange/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4">📞 Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
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
              transition={{ delay: 1.3 }}
            >
              <p className="font-hand text-center text-muted-foreground mb-4">More Pages</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-primary hover:underline font-hand">About Us</Link>
                <Link to="/contact" className="text-primary hover:underline font-hand">Contact Us</Link>
                <Link to="/terms" className="text-primary hover:underline font-hand">Terms & Conditions</Link>
                <Link to="/disclaimer" className="text-primary hover:underline font-hand">Disclaimer</Link>
              </div>
            </motion.nav>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
