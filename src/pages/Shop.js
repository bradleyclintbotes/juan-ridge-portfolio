import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Shop = () => {
  console.log('Shop component is rendering'); // Debug log
  
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  // Simple shop data for testing
  const shopArtworks = [
    {
      id: 'feature-1-shop',
      title: 'Feature 1',
      medium: 'Digital Art',
      year: '2024',
      price: 150,
      image: `${process.env.PUBLIC_URL}/images/feature-1.png`,
      description: 'A digital exploration of contemporary themes.'
    },
    {
      id: 'hybrid-shop',
      title: 'Hybrid',
      medium: 'Mixed Media',
      year: '2024',
      price: 250,
      image: `${process.env.PUBLIC_URL}/images/hybrid.png`,
      description: 'A mixed media piece exploring artistic approaches.'
    }
  ];

  const handlePurchase = (artwork) => {
    console.log('Purchase clicked for:', artwork.title);
    setSelectedArtwork(artwork);
    setShowContactForm(true);
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">
              Shop
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
              Original digital artworks available for purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Grid */}
      <section className="py-12 md:py-20 bg-charcoal">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shopArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-square bg-white/5 overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.log('Image failed to load:', artwork.image);
                      e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.svg`;
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{artwork.title}</h3>
                    <span className="text-green-400 font-bold text-lg">${artwork.price}</span>
                  </div>
                  
                  <p className="text-muted text-sm mb-3">{artwork.medium}, {artwork.year}</p>
                  <p className="text-white/80 text-sm mb-4">{artwork.description}</p>
                  
                  <button
                    onClick={() => handlePurchase(artwork)}
                    className="bg-white text-charcoal px-4 py-2 rounded-lg hover:bg-muted hover:text-white transition-colors duration-300"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Information */}
      <section className="py-12 md:py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-white">
              Purchase Information
            </h2>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">How to Purchase</h3>
              <p className="text-muted mb-4">
                Click "Purchase" on any artwork to contact Juan-Ridge directly.
              </p>
              <Link to="/contact" className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                Contact for Custom Commissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && selectedArtwork && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-charcoal rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Purchase {selectedArtwork.title}</h3>
              <button
                onClick={() => {
                  setShowContactForm(false);
                  setSelectedArtwork(null);
                }}
                className="text-muted hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">{selectedArtwork.title}</h4>
                  <p className="text-muted text-sm">{selectedArtwork.medium}, {selectedArtwork.year}</p>
                </div>
                <span className="text-green-400 font-bold text-xl">${selectedArtwork.price}</span>
              </div>
            </div>
            
            <div>
              <p className="text-muted text-sm mb-4">
                Contact Juan-Ridge to complete your purchase.
              </p>
              
              <a
                href={`mailto:juanridge@email.com?subject=Purchase Inquiry: ${selectedArtwork.title}&body=Hi Juan-Ridge, I'm interested in purchasing "${selectedArtwork.title}" for $${selectedArtwork.price}. Please let me know about payment methods and delivery options.`}
                className="bg-white text-charcoal px-4 py-2 rounded-lg hover:bg-muted hover:text-white transition-colors duration-300 w-full block text-center mb-4"
              >
                Contact Juan-Ridge
              </a>
              
              <button
                onClick={() => {
                  setShowContactForm(false);
                  setSelectedArtwork(null);
                }}
                className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;