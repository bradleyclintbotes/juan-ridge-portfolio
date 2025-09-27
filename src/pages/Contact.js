import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Contact</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Let's connect and discuss art, collaborations, or any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-semibold mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">Get in Touch</h2>
                <p className="text-muted leading-relaxed mb-6">
                  I'm always interested in hearing about new opportunities, collaborations, 
                  and artistic projects. Whether you're a fellow artist, curator, or simply 
                  someone who appreciates contemporary art, I'd love to connect.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Email</h3>
                  <a 
                    href="mailto:juan.ridge@example.com" 
                    className="text-muted hover:text-white transition-colors"
                  >
                    juan.ridge@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Social Media</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://www.instagram.com/_ras.juan_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-muted hover:text-white transition-colors"
                    >
                      Instagram: @_ras.juan_
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Response Time</h3>
                  <p className="text-muted">
                    I typically respond to inquiries within 24-48 hours. 
                    For urgent matters, please mention it in your message.
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Current Availability</h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li>• Open to new collaborations</li>
                  <li>• Available for commissioned work</li>
                  <li>• Interested in group exhibitions</li>
                  <li>• Seeking mentorship opportunities</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-serif font-semibold mb-6">Let's Create Together</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you're interested in commissioning a piece, collaborating on a project, 
              or simply want to discuss art and creativity, I'm always excited to connect with 
              fellow artists and art enthusiasts. Let's explore what we can create together.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
