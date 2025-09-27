import React from 'react';

const ImageTest = () => {
  const testImages = [
    '/images/portfolio/feature-1.png',
    '/images/portfolio/feature-3.png',
    '/images/portfolio/hybrid.png',
    '/images/portfolio/rebirth.png',
    '/images/portfolio/self.png',
    '/images/portfolio/speaknone.png',
    '/images/portfolio/tanned.png',
    '/images/portfolio/which.png'
  ];

  return (
    <div className="p-8 bg-charcoal text-white">
      <h2 className="text-2xl font-bold mb-4">Image Test</h2>
      <div className="grid grid-cols-2 gap-4">
        {testImages.map((imagePath, index) => (
          <div key={index} className="border border-white p-2">
            <p className="text-sm mb-2">Image {index + 1}: {imagePath}</p>
            <img 
              src={imagePath} 
              alt={`Test ${index + 1}`}
              className="w-full h-32 object-cover"
              onError={(e) => {
                console.error(`Failed to load image: ${imagePath}`);
                e.target.style.border = '2px solid red';
              }}
              onLoad={() => {
                console.log(`Successfully loaded: ${imagePath}`);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
