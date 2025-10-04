import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PortfolioManager from '../components/PortfolioManager';
import portfolioData from '../data/portfolioData';

const Portfolio = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showManager, setShowManager] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState(portfolioData);
  const [loading, setLoading] = useState(false);

  // Load artworks from localStorage or use default portfolio data
  useEffect(() => {
    const savedArtworks = localStorage.getItem('portfolio-artworks');
    if (savedArtworks) {
      try {
        const parsed = JSON.parse(savedArtworks);
        if (parsed && parsed.length > 0) {
          setPortfolioItems(parsed);
        } else {
          setPortfolioItems(portfolioData);
        }
      } catch (error) {
        console.error('Error parsing saved artworks:', error);
        setPortfolioItems(portfolioData);
      }
    } else {
      // Use the portfolio data directly if no saved artworks
      setPortfolioItems(portfolioData);
    }
  }, []);

  // Update portfolio when artworks change
  useEffect(() => {
    const handleStorageChange = () => {
      const savedArtworks = localStorage.getItem('portfolio-artworks');
      if (savedArtworks) {
        setPortfolioItems(JSON.parse(savedArtworks));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'digital', label: 'Digital Art' },
    { id: 'mixed', label: 'Mixed Media' },
    { id: 'photography', label: 'Photography' },
    { id: 'painting', label: 'Painting' }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);


  // Show loading state
  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-muted">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Portfolio</h1>
            <p className="text-base md:text-xl text-muted max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              A collection of works exploring contemporary themes through various mediums
            </p>
            <button
              onClick={() => navigate('/portfolio-manager')}
              className="btn-primary text-sm md:text-base py-3 px-6"
            >
              Manage Portfolio
            </button>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                  filter === category.id
                    ? 'bg-white text-charcoal'
                    : 'bg-white/10 text-muted hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-square bg-white/5 rounded-lg overflow-hidden mb-4 group-hover:bg-white/10 transition-all duration-300 hover:shadow-lg relative">
                    <img 
                      src={item.thumbnail || item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.svg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/30 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted text-sm group-hover:text-muted transition-colors duration-300">{item.medium}, {item.year}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl max-h-[95vh] bg-charcoal rounded-xl overflow-hidden shadow-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="aspect-video bg-white/5 overflow-hidden">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 md:p-8">
                <h3 className="text-xl md:text-3xl font-serif font-semibold mb-2 md:mb-3">{selectedImage.title}</h3>
                <p className="text-base md:text-lg text-muted mb-3 md:mb-4">{selectedImage.medium}, {selectedImage.year}</p>
                {selectedImage.caption && (
                  <p className="text-muted mb-6 leading-relaxed">
                    {selectedImage.caption}
                  </p>
                )}
                {selectedImage.description && (
                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {selectedImage.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedImage.tags && selectedImage.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted">
                  Press ESC or click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Manager Modal */}
      <AnimatePresence>
        {showManager && (
          <PortfolioManager onClose={() => setShowManager(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
