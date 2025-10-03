import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of HomeScreen images
  const images = [
    `${process.env.PUBLIC_URL}/images/HomeScreen/cover.png`,
    `${process.env.PUBLIC_URL}/images/HomeScreen/jr.png`,
    `${process.env.PUBLIC_URL}/images/HomeScreen/jrchill.png`,
    `${process.env.PUBLIC_URL}/images/HomeScreen/jrpaint.png`,
    `${process.env.PUBLIC_URL}/images/HomeScreen/jrpose.png`
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundPosition: 'center center'
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slideshow indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
