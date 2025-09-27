import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageUpload from './ImageUpload';
import portfolioData from '../data/portfolioData';

const PortfolioManager = ({ onClose }) => {
  const [artworks, setArtworks] = useState(portfolioData);
  const [showUpload, setShowUpload] = useState(false);
  const [editingArtwork, setEditingArtwork] = useState(null);

  // Load artworks from localStorage on component mount
  useEffect(() => {
    const savedArtworks = localStorage.getItem('portfolio-artworks');
    if (savedArtworks) {
      setArtworks(JSON.parse(savedArtworks));
    }
  }, []);

  // Save artworks to localStorage whenever artworks change
  useEffect(() => {
    localStorage.setItem('portfolio-artworks', JSON.stringify(artworks));
  }, [artworks]);

  const handleAddArtwork = (newArtwork) => {
    setArtworks(prev => [newArtwork, ...prev]);
    setShowUpload(false);
  };

  const handleEditArtwork = (artwork) => {
    setEditingArtwork(artwork);
    setShowUpload(true);
  };

  const handleDeleteArtwork = (artworkId) => {
    if (window.confirm('Are you sure you want to delete this artwork?')) {
      setArtworks(prev => prev.filter(artwork => artwork.id !== artworkId));
    }
  };

  const handleUpdateArtwork = (updatedArtwork) => {
    setArtworks(prev => 
      prev.map(artwork => 
        artwork.id === updatedArtwork.id ? updatedArtwork : artwork
      )
    );
    setShowUpload(false);
    setEditingArtwork(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-charcoal rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-semibold">Portfolio Manager</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setShowUpload(true)}
              className="btn-primary"
            >
              Add New Artwork
            </button>
            <button
              onClick={onClose}
              className="btn-secondary"
            >
              Close
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img
                  src={artwork.thumbnail || artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{artwork.title}</h3>
                <p className="text-muted text-sm mb-2">{artwork.medium}, {artwork.year}</p>
                <p className="text-xs text-muted mb-4 line-clamp-2">{artwork.caption}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditArtwork(artwork)}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteArtwork(artwork.id)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {artworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No artworks yet. Add your first piece!</p>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {showUpload && (
          <ImageUpload
            onImageAdd={editingArtwork ? handleUpdateArtwork : handleAddArtwork}
            onClose={() => {
              setShowUpload(false);
              setEditingArtwork(null);
            }}
            editingArtwork={editingArtwork}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioManager;
