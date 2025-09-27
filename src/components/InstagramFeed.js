import React from 'react';
import { motion } from 'framer-motion';
import { useInstagramPosts } from '../hooks/useInstagram';

const InstagramFeed = ({ limit = 6 }) => {
  const { posts, loading, error } = useInstagramPosts(limit);

  if (loading) {
    return (
      <div className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-muted">Loading latest works...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <div className="text-center">
            <p className="text-muted">Unable to load Instagram feed</p>
          </div>
        </div>
      </div>
    );
  }

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
          <p className="text-muted text-lg">Recent posts from Instagram</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.slice(0, limit).map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden group-hover:bg-white/10 transition-colors duration-300">
                <img 
                  src={post.thumbnail || post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/_ras.juan_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
