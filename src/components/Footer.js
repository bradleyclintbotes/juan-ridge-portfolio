import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-grey border-t border-white/10"
    >
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artist Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Juan-Ridge Isaacs</h3>
            <p className="text-muted text-sm leading-relaxed">
              Visual artist and student exploring contemporary themes through mixed media and digital art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted hover:text-white transition-colors">About</a></li>
              <li><a href="/portfolio" className="text-muted hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/exhibitions" className="text-muted hover:text-white transition-colors">Exhibitions</a></li>
              <li><a href="/contact" className="text-muted hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-4">Follow</h4>
            <div className="space-y-2">
              <a 
                href="https://www.instagram.com/_ras.juan_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
              <p className="text-muted text-sm">@_ras.juan_</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Juan-Ridge Isaacs. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
