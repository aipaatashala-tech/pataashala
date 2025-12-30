import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DoodleDecorations } from '@/components/DoodleDecorations';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Learning Hub | Your Trusted Educational Resource</title>
        <meta name="description" content="Learn about Learning Hub, our mission to provide free educational resources for programming, aptitude, databases, and AI tools. Meet our team and discover our story." />
        <link rel="canonical" href="/about" />
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
                ✏️ About Us
              </motion.h1>
              <p className="font-hand text-xl text-muted-foreground">
                Your trusted companion on the journey of learning
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Our Story Section */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4 flex items-center gap-2">
                  📖 Our Story
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Welcome to <strong>Learning Hub</strong> – your one-stop destination for quality educational resources. 
                  We started this platform with a simple mission: to make learning accessible, enjoyable, and effective for everyone.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  What began as a personal collection of learning resources has grown into a comprehensive hub 
                  serving thousands of learners worldwide. We curate, create, and organize educational content 
                  that helps you master new skills efficiently.
                </p>
              </motion.section>

              {/* Mission Section */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-yellow/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4 flex items-center gap-2">
                  🎯 Our Mission
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We believe that education should be:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-foreground/80"><strong>Accessible:</strong> Free resources available to anyone, anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-foreground/80"><strong>Organized:</strong> Well-structured content that saves you time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-foreground/80"><strong>Practical:</strong> Real-world skills you can apply immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-foreground/80"><strong>Engaging:</strong> Learning that's actually enjoyable</span>
                  </li>
                </ul>
              </motion.section>

              {/* What We Offer */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4 flex items-center gap-2">
                  🚀 What We Offer
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-sticky-blue/20 rounded-lg border-2 border-border">
                    <h3 className="font-hand text-xl mb-2">💻 Programming</h3>
                    <p className="text-foreground/70 text-sm">Tutorials, projects, and coding practice for all skill levels</p>
                  </div>
                  <div className="p-4 bg-sticky-pink/20 rounded-lg border-2 border-border">
                    <h3 className="font-hand text-xl mb-2">🧠 Aptitude & Quant</h3>
                    <p className="text-foreground/70 text-sm">Logical reasoning, math skills, and problem-solving guides</p>
                  </div>
                  <div className="p-4 bg-sticky-green/20 rounded-lg border-2 border-border">
                    <h3 className="font-hand text-xl mb-2">🗄️ Databases & SQL</h3>
                    <p className="text-foreground/70 text-sm">Database design, SQL queries, and data management</p>
                  </div>
                  <div className="p-4 bg-sticky-orange/20 rounded-lg border-2 border-border">
                    <h3 className="font-hand text-xl mb-2">🤖 AI Tools</h3>
                    <p className="text-foreground/70 text-sm">Guides for ChatGPT, AI art, machine learning, and more</p>
                  </div>
                </div>
              </motion.section>

              {/* Our Values */}
              <motion.section 
                className="sketch-card p-8 bg-sticky-green/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4 flex items-center gap-2">
                  💎 Our Values
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-hand text-xl text-foreground">Quality Over Quantity</h3>
                    <p className="text-foreground/70">We carefully curate every resource to ensure it meets our high standards.</p>
                  </div>
                  <div>
                    <h3 className="font-hand text-xl text-foreground">Community First</h3>
                    <p className="text-foreground/70">We listen to our learners and continuously improve based on feedback.</p>
                  </div>
                  <div>
                    <h3 className="font-hand text-xl text-foreground">Continuous Learning</h3>
                    <p className="text-foreground/70">We stay updated with the latest trends to bring you relevant content.</p>
                  </div>
                </div>
              </motion.section>

              {/* Author/Team Info */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="font-hand text-3xl text-foreground mb-4 flex items-center gap-2">
                  👋 Meet the Team
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-border flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="font-hand text-2xl text-foreground">Learning Hub Team</h3>
                    <p className="text-foreground/70 mb-2">Educators, Developers & Content Creators</p>
                    <p className="text-foreground/80 text-sm">
                      Our passionate team of educators and developers work together to create 
                      the best learning experience for you. We're constantly adding new resources 
                      and improving existing ones.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.section 
                className="text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="font-hand text-2xl text-foreground mb-4">Ready to Start Learning?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/" 
                    className="px-6 py-3 bg-primary text-primary-foreground font-hand text-lg rounded-lg border-2 border-border hover:scale-105 transition-transform"
                  >
                    Explore Resources
                  </Link>
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-card text-foreground font-hand text-lg rounded-lg border-2 border-border hover:scale-105 transition-transform"
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.section>
            </div>

            {/* Navigation Links */}
            <motion.nav 
              className="mt-12 pt-8 border-t-2 border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="font-hand text-center text-muted-foreground mb-4">More Pages</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/privacy-policy" className="text-primary hover:underline font-hand">Privacy Policy</Link>
                <Link to="/terms" className="text-primary hover:underline font-hand">Terms & Conditions</Link>
                <Link to="/disclaimer" className="text-primary hover:underline font-hand">Disclaimer</Link>
                <Link to="/blog" className="text-primary hover:underline font-hand">Blog</Link>
              </div>
            </motion.nav>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
