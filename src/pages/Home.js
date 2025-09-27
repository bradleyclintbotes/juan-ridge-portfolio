import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';
import ImageSlideshow from '../components/ImageSlideshow';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background - Gallery Style with Slideshow */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-grey to-charcoal">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Auto-slideshow background on the left */}
          <div className="absolute left-0 top-0 w-1/2 h-full">
            <ImageSlideshow />
          </div>
        </div>
        
        {/* Hero Content - Right Side with Black Background */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-black flex items-center justify-center">
          <div className="text-center px-8 max-w-lg">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white"
            >
              Juan-Ridge Isaacs
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted mb-8"
            >
              Visual Artist & Student
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted mb-12 leading-relaxed"
            >
              Exploring contemporary themes through mixed media, digital art, and experimental forms. 
              A student artist pushing boundaries and creating meaningful connections through visual storytelling.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-semibold mb-4">Featured Works</h2>
            <p className="text-muted text-lg">A selection of recent pieces</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured works with portfolio images */}
            {[
              {
                id: 1,
                image: 'https://i.imgur.com/azbvlL9.jpg',
                title: 'Feature 1',
                medium: 'Digital Art',
                year: '2024'
              },
              {
                id: 2,
                image: 'https://i.imgur.com/8gSTZcw.jpg',
                title: 'Hybrid',
                medium: 'Mixed Media',
                year: '2024'
              },
              {
                id: 3,
                image: 'https://i.imgur.com/6AgfaXY.jpg',
                title: 'Rebirth',
                medium: 'Digital Art',
                year: '2024'
              }
            ].map((work) => (
              <motion.div 
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: work.id * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-white/5 rounded-lg overflow-hidden mb-4 group-hover:bg-white/10 transition-colors duration-300">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{work.title}</h3>
                <p className="text-muted text-sm">{work.medium}, {work.year}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed limit={6} />
    </div>
  );
};

export default Home;
