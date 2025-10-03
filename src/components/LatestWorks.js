import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LatestWorks = ({ limit = 6 }) => {
  // Portfolio images for latest works section
  const latestWorks = [
    {
      id: 'feature-1',
      image: `${process.env.PUBLIC_URL}/images/feature-1.png`,
      title: 'Feature 1',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'feature-2',
      image: `${process.env.PUBLIC_URL}/images/feature-2.png`,
      title: 'Self Portrait',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'feature-3',
      image: `${process.env.PUBLIC_URL}/images/feature-3.png`,
      title: 'Feature 3',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'hybrid',
      image: `${process.env.PUBLIC_URL}/images/hybrid.png`,
      title: 'Hybrid',
      medium: 'Mixed Media',
      year: '2024',
      category: 'mixed'
    },
    {
      id: 'rebirth',
      image: `${process.env.PUBLIC_URL}/images/rebirth.png`,
      title: 'Rebirth',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'speaknone',
      image: `${process.env.PUBLIC_URL}/images/speaknone.png`,
      title: 'Speak None',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'tanned',
      image: `${process.env.PUBLIC_URL}/images/tanned.png`,
      title: 'Tanned',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'which',
      image: `${process.env.PUBLIC_URL}/images/which.png`,
      title: 'Which',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'skull-portfolio1',
      image: `${process.env.PUBLIC_URL}/images/skull-portfolio1.png`,
      title: 'Skull Study',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    },
    {
      id: 'who-portfolio2',
      image: `${process.env.PUBLIC_URL}/images/who-portfolio2.png`,
      title: 'Who',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital'
    }
  ];

  // Take only the specified limit
  const displayedWorks = latestWorks.slice(0, limit);

  return (
    <section className="py-20 bg-dark-grey">
      <div className="container-max section-padding">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-semibold mb-4">Latest Works</h2>
          <p className="text-muted text-lg">Recent pieces from my portfolio</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayedWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden group-hover:bg-white/10 transition-colors duration-300">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.svg`;
                  }}
                />
              </div>
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
  );
};

export default LatestWorks;
