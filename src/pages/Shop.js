import React from 'react';

const Shop = () => {
  console.log('Shop component is rendering!');
  
  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      <div className="container-max section-padding py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Shop Page</h1>
        <p className="text-muted text-lg">This is the shop page - if you can see this, the routing is working!</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Test Artwork</h2>
          <div className="bg-white/5 rounded-lg p-6 max-w-md">
            <h3 className="text-xl text-white mb-2">Feature 1</h3>
            <p className="text-muted mb-4">Digital Art, 2024</p>
            <p className="text-green-400 font-bold text-lg">$150</p>
            <button className="bg-white text-charcoal px-4 py-2 rounded mt-4 hover:bg-muted">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;