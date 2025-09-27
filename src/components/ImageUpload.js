import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageUpload = ({ onImageAdd, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    medium: 'Digital Art',
    year: new Date().getFullYear().toString(),
    category: 'digital',
    caption: '',
    description: '',
    dimensions: '',
    tags: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    
    try {
      // Create a unique ID for the artwork
      const id = `artwork-${Date.now()}`;
      
      // In a real application, you would upload the file to a server
      // For now, we'll create a local URL
      const imageUrl = URL.createObjectURL(selectedFile);
      const thumbnailUrl = imageUrl; // In real app, you'd create a thumbnail
      
      const newArtwork = {
        id,
        title: formData.title,
        medium: formData.medium,
        year: formData.year,
        category: formData.category,
        image: imageUrl,
        thumbnail: thumbnailUrl,
        caption: formData.caption,
        description: formData.description,
        dimensions: formData.dimensions,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };

      onImageAdd(newArtwork);
      
      // Reset form
      setFormData({
        title: '',
        medium: 'Digital Art',
        year: new Date().getFullYear().toString(),
        category: 'digital',
        caption: '',
        description: '',
        dimensions: '',
        tags: ''
      });
      setSelectedFile(null);
      setPreview(null);
      
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
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
        className="bg-charcoal rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-semibold">Add New Artwork</h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Artwork Image *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
              required
            />
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-w-xs h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Medium *</label>
              <select
                name="medium"
                value={formData.medium}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                required
              >
                <option value="Digital Art">Digital Art</option>
                <option value="Photography">Photography</option>
                <option value="Mixed Media">Mixed Media</option>
                <option value="Painting">Painting</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Drawing">Drawing</option>
                <option value="Printmaking">Printmaking</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Year *</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                min="2000"
                max={new Date().getFullYear() + 1}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                required
              >
                <option value="digital">Digital Art</option>
                <option value="photography">Photography</option>
                <option value="mixed">Mixed Media</option>
                <option value="painting">Painting</option>
                <option value="sculpture">Sculpture</option>
                <option value="drawing">Drawing</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Caption</label>
            <textarea
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="Brief description for the artwork..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Detailed Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="More detailed description of the artwork, techniques used, inspiration..."
            />
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Dimensions</label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                placeholder="e.g., 24x18 inches, 1920x1080px"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                placeholder="tag1, tag2, tag3 (comma separated)"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isUploading || !selectedFile}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Adding Artwork...' : 'Add Artwork'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ImageUpload;
