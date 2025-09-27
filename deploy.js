#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Juan-Ridge Portfolio Deployment Helper');
console.log('==========================================');

// Check if build folder exists
const buildPath = path.join(__dirname, 'build');
if (!fs.existsSync(buildPath)) {
  console.log('❌ Build folder not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('✅ Build folder found');
console.log('📁 Build contents:');
console.log('   - Static files optimized');
console.log('   - Images included');
console.log('   - CSS/JS minified');
console.log('');

console.log('🌐 Deployment Options:');
console.log('');
console.log('1. NETLIFY (Recommended):');
console.log('   - Go to https://netlify.com');
console.log('   - Drag & drop the "build" folder');
console.log('   - Your site will be live in seconds!');
console.log('');
console.log('2. VERCEL:');
console.log('   - Install: npm install -g vercel');
console.log('   - Run: vercel');
console.log('   - Follow the prompts');
console.log('');
console.log('3. GITHUB PAGES:');
console.log('   - Install: npm install --save-dev gh-pages');
console.log('   - Add homepage to package.json');
console.log('   - Run: npm run deploy');
console.log('');
console.log('4. FIREBASE:');
console.log('   - Install: npm install -g firebase-tools');
console.log('   - Run: firebase init hosting');
console.log('   - Run: firebase deploy');
console.log('');
console.log('📱 Your portfolio includes:');
console.log('   ✅ Responsive design');
console.log('   ✅ Mobile optimization');
console.log('   ✅ Fast loading');
console.log('   ✅ Professional gallery');
console.log('   ✅ Contact form');
console.log('   ✅ SEO optimized');
console.log('');
console.log('🎨 Ready to showcase Juan-Ridge\'s artwork!');
