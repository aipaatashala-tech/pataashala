import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DoodleDecorations } from '@/components/DoodleDecorations';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since we're not connecting to a backend, just show a success message
    toast({
      title: "Message Received! ✉️",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Learning Hub | Get in Touch With Our Team</title>
        <meta name="description" content="Have questions or feedback? Contact the Learning Hub team. We're here to help with your learning journey. Reach out via our contact form or email." />
        <link rel="canonical" href="/contact" />
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
                ✉️ Contact Us
              </motion.h1>
              <p className="font-hand text-xl text-muted-foreground">
                We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.section 
                className="sketch-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-hand text-2xl text-foreground mb-6 flex items-center gap-2">
                  📝 Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-hand text-lg text-foreground mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg font-hand focus:outline-none focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-hand text-lg text-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg font-hand focus:outline-none focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-hand text-lg text-foreground mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg font-hand focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a topic...</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="suggestion">Content Suggestion</option>
                      <option value="bug">Report an Issue</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-hand text-lg text-foreground mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg font-hand focus:outline-none focus:border-primary resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground font-hand text-lg rounded-lg border-2 border-border hover:scale-[1.02] transition-transform"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message 📨
                  </motion.button>
                </form>
              </motion.section>

              {/* Contact Info */}
              <div className="space-y-6">
                <motion.section 
                  className="sketch-card p-8 bg-sticky-blue/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="font-hand text-2xl text-foreground mb-4 flex items-center gap-2">
                    📬 Other Ways to Reach Us
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <h3 className="font-hand text-lg text-foreground">Email</h3>
                        <p className="text-foreground/70">contact@learninghub.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <h3 className="font-hand text-lg text-foreground">Social Media</h3>
                        <p className="text-foreground/70">Follow us for updates and tips</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📺</span>
                      <div>
                        <h3 className="font-hand text-lg text-foreground">YouTube</h3>
                        <p className="text-foreground/70">Video tutorials and guides</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                <motion.section 
                  className="sketch-card p-8 bg-sticky-yellow/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="font-hand text-2xl text-foreground mb-4 flex items-center gap-2">
                    ⏰ Response Time
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We typically respond to all inquiries within <strong>24-48 hours</strong>. 
                    For urgent matters, please mention "URGENT" in your subject line.
                  </p>
                </motion.section>

                <motion.section 
                  className="sketch-card p-8 bg-sticky-green/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="font-hand text-2xl text-foreground mb-4 flex items-center gap-2">
                    💡 Before You Contact Us
                  </h2>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Check our <Link to="/blog" className="text-primary hover:underline">Blog</Link> for tutorials and guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Review our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for data questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Read our <Link to="/terms" className="text-primary hover:underline">Terms</Link> for usage guidelines</span>
                    </li>
                  </ul>
                </motion.section>
              </div>
            </div>

            {/* FAQ Section */}
            <motion.section 
              className="mt-12 sketch-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="font-hand text-3xl text-foreground mb-6 flex items-center gap-2">
                ❓ Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg border-2 border-border">
                  <h3 className="font-hand text-xl text-foreground mb-2">How can I suggest a new resource?</h3>
                  <p className="text-foreground/70">Use the contact form above and select "Content Suggestion" as the subject. We review all suggestions!</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border-2 border-border">
                  <h3 className="font-hand text-xl text-foreground mb-2">Can I contribute to Learning Hub?</h3>
                  <p className="text-foreground/70">Yes! We welcome guest authors and collaborators. Select "Collaboration" in the contact form to discuss.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border-2 border-border">
                  <h3 className="font-hand text-xl text-foreground mb-2">Is Learning Hub free to use?</h3>
                  <p className="text-foreground/70">Yes, all our resources and content are completely free. We believe in accessible education for everyone.</p>
                </div>
              </div>
            </motion.section>

            {/* Navigation Links */}
            <motion.nav 
              className="mt-12 pt-8 border-t-2 border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="font-hand text-center text-muted-foreground mb-4">More Pages</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-primary hover:underline font-hand">About Us</Link>
                <Link to="/privacy-policy" className="text-primary hover:underline font-hand">Privacy Policy</Link>
                <Link to="/terms" className="text-primary hover:underline font-hand">Terms & Conditions</Link>
                <Link to="/blog" className="text-primary hover:underline font-hand">Blog</Link>
              </div>
            </motion.nav>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default ContactUs;
