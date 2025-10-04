import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  // Shop data with pricing and details
  const shopArtworks = [
    {
      id: 'feature-1-shop',
      title: 'Feature 1',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital',
      image: `${process.env.PUBLIC_URL}/images/feature-1.png`,
      thumbnail: `${process.env.PUBLIC_URL}/images/feature-1.png`,
      description: 'A digital exploration of contemporary themes through innovative visual techniques. This piece represents the intersection of traditional artistic principles and modern digital expression.',
      price: 150,
      currency: 'USD',
      dimensions: 'Digital (3000x3000px)',
      format: 'High-resolution digital file',
      availability: 'Available',
      tags: ['digital art', 'contemporary', 'experimental', 'form', 'composition']
    },
    {
      id: 'hybrid-shop',
      title: 'Hybrid',
      medium: 'Mixed Media',
      year: '2024',
      category: 'mixed',
      image: `${process.env.PUBLIC_URL}/images/hybrid.png`,
      thumbnail: `${process.env.PUBLIC_URL}/images/hybrid.png`,
      description: 'A mixed media piece exploring the intersection of different artistic approaches and techniques. This work combines various elements to create a unique visual language that challenges traditional boundaries.',
      price: 250,
      currency: 'USD',
      dimensions: 'Mixed Media',
      format: 'High-resolution digital file + process documentation',
      availability: 'Available',
      tags: ['mixed media', 'hybrid', 'techniques', 'visual language', 'intersection']
    },
    {
      id: 'rebirth-shop',
      title: 'Rebirth',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital',
      image: `${process.env.PUBLIC_URL}/images/rebirth.png`,
      thumbnail: `${process.env.PUBLIC_URL}/images/rebirth.png`,
      description: 'A digital exploration of transformation and renewal through contemporary art practices. This piece examines themes of personal growth and the cyclical nature of change.',
      price: 180,
      currency: 'USD',
      dimensions: 'Digital (3000x3000px)',
      format: 'High-resolution digital file',
      availability: 'Available',
      tags: ['digital art', 'rebirth', 'transformation', 'renewal', 'growth']
    },
    {
      id: 'speaknone-shop',
      title: 'Speak None',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital',
      image: `${process.env.PUBLIC_URL}/images/speaknone.png`,
      thumbnail: `${process.env.PUBLIC_URL}/images/speaknone.png`,
      description: 'A digital piece exploring themes of silence, communication, and expression. This artwork examines the power of non-verbal communication and the weight of words left unspoken.',
      price: 120,
      currency: 'USD',
      dimensions: 'Digital (3000x3000px)',
      format: 'High-resolution digital file',
      availability: 'Available',
      tags: ['digital art', 'silence', 'communication', 'expression', 'non-verbal']
    },
    {
      id: 'tanned-shop',
      title: 'Tanned',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital',
      image: `${process.env.PUBLIC_URL}/images/tanned.png`,
      thumbnail: `${process.env.PUBLIC_URL}/images/tanned.png`,
      description: 'A digital exploration of color, texture, and visual warmth. This artwork focuses on warm tones and textural elements to create visual depth and emotional resonance.',
      price: 140,
      currency: 'USD',
      dimensions: 'Digital (3000x3000px)',
      format: 'High-resolution digital file',
      availability: 'Available',
      tags: ['digital art', 'color', 'texture', 'warmth', 'visual depth']
    },
    {
      id: 'which-shop',
      title: 'Which',
      medium: 'Digital Art',
      year: '2024',
      category: 'digital',
      image: `${process.env.PUBLIC_URL}/images/which.png`,
      thumbnail: `${process.env.PUBLIC_URL}/images/which.png`,
      description: 'A digital piece exploring choice, decision-making, and the complexity of options. This artwork examines the weight of decisions and the paths not taken.',
      price: 160,
      currency: 'USD',
      dimensions: 'Digital (3000x3000px)',
      format: 'High-resolution digital file',
      availability: 'Available',
      tags: ['digital art', 'choice', 'decision', 'options', 'complexity']
    }
  ];

  const handlePurchase = (artwork) => {
    setSelectedArtwork(artwork);
    setShowContactForm(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your preferred contact method
    // For now, we'll create a mailto link
    const subject = `Purchase Inquiry: ${selectedArtwork.title}`;
    const body = `Hi Juan-Ridge,

I'm interested in purchasing "${selectedArtwork.title}" for $${selectedArtwork.price}.

Please let me know about:
- Payment methods
- Delivery options
- Any additional information needed

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:juanridge@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Close the form
    setShowContactForm(false);
    setSelectedArtwork(null);
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">
              Shop
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
              Original digital artworks available for purchase. Each piece comes with a high-resolution digital file and certificate of authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Grid */}
      <section className="py-12 md:py-20 bg-charcoal">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-square bg-white/5 overflow-hidden">
                  <img
                    src={artwork.thumbnail || artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
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
                  <p className="text-muted text-sm mb-4">{artwork.dimensions}</p>
                  
                  <p className="text-white/80 text-sm mb-4 line-clamp-3">
                    {artwork.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm font-medium">
                      {artwork.availability}
                    </span>
                    <button
                      onClick={() => handlePurchase(artwork)}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Information */}
      <section className="py-12 md:py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-white">
              Purchase Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">What You Get</h3>
                <ul className="text-muted space-y-2 text-left">
                  <li>• High-resolution digital file (3000x3000px)</li>
                  <li>• Certificate of authenticity</li>
                  <li>• Personal use rights</li>
                  <li>• Print-ready format</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Payment Options</h3>
                <ul className="text-muted space-y-2 text-left">
                  <li>• PayPal</li>
                  <li>• Bank Transfer</li>
                  <li>• Cryptocurrency (Bitcoin/Ethereum)</li>
                  <li>• Contact for other options</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">How to Purchase</h3>
              <p className="text-muted mb-4">
                Click "Purchase" on any artwork to contact Juan-Ridge directly. All purchases include 
                personal consultation and custom delivery options.
              </p>
              <Link to="/contact" className="btn-secondary">
                Contact for Custom Commissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && selectedArtwork && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-charcoal rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
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
            
            <form onSubmit={handleContactSubmit}>
              <p className="text-muted text-sm mb-4">
                Clicking "Contact Juan-Ridge" will open your email client with a pre-filled message.
              </p>
              
              <button
                type="submit"
                className="btn-primary w-full mb-4"
              >
                Contact Juan-Ridge
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setShowContactForm(false);
                  setSelectedArtwork(null);
                }}
                className="btn-secondary w-full"
              >
                Cancel
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Shop;
