# GitHub Repository Setup Guide

## 🚀 Create GitHub Repository

### Step 1: Create Repository on GitHub

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `juan-ridge-portfolio`
4. **Description**: `Modern portfolio website for visual artist Juan-Ridge Isaacs`
5. **Make it Public** (so it can be deployed for free)
6. **Don't initialize** with README (we already have one)
7. **Click "Create repository"**

### Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions. Run these commands:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/juan-ridge-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Upload

1. **Go to your GitHub repository**
2. **Check that all files are there**
3. **Verify the README displays correctly**

## 🌐 Deploy from GitHub

### Option 1: Netlify (Recommended)

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up with GitHub**
3. **Click "New site from Git"**
4. **Choose "GitHub"**
5. **Select your repository**: `juan-ridge-portfolio`
6. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
7. **Click "Deploy site"**
8. **Your site is live!** 🎉

### Option 2: Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Import your repository**
5. **Deploy automatically**
6. **Your site is live!** 🎉

### Option 3: GitHub Pages

1. **Go to repository Settings**
2. **Scroll to "Pages" section**
3. **Source**: Deploy from a branch
4. **Branch**: main
5. **Folder**: / (root)
6. **Save**
7. **Your site will be at**: `https://www.juanridgeart.co.za` (after custom domain setup)

## 🔄 Automatic Updates

Once connected to GitHub:

1. **Make changes locally**
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. **Site automatically updates** (if using Netlify/Vercel)

## 📱 Custom Domain (Optional)

### Domain Setup
- **Current Domain**: `www.juanridgeart.co.za` ✅

### Connect Domain
1. **In Netlify/Vercel**: Go to Domain settings
2. **Add custom domain**: `www.juanridgeart.co.za`
3. **Update DNS records** as instructed by your hosting provider:
   - Add A record or CNAME pointing to your hosting platform
   - For Netlify: Use the provided DNS target
   - For Vercel: Use the provided DNS configuration
4. **SSL certificate** (automatic - usually takes a few minutes to provision)

## 🎯 Repository Features

Your GitHub repository now includes:

- ✅ **Complete source code**
- ✅ **Professional README**
- ✅ **Deployment guides**
- ✅ **All artwork images**
- ✅ **Optimized build**
- ✅ **Version control**

## 📊 Repository Structure

```
juan-ridge-portfolio/
├── 📁 src/                    # Source code
├── 📁 public/                 # Static assets
├── 📁 build/                 # Production build
├── 📄 README.md              # Project documentation
├── 📄 DEPLOYMENT_GUIDE.md    # Deployment instructions
├── 📄 package.json           # Dependencies
└── 📄 .gitignore            # Git ignore rules
```

## 🔧 Future Updates

### Adding New Artwork
1. **Add images** to `public/images/portfolio/`
2. **Update** `src/data/portfolioData.js`
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new artwork"
   git push
   ```

### Updating Content
1. **Edit** the relevant files
2. **Test locally**: `npm start`
3. **Commit changes**: `git add . && git commit -m "Update content"`
4. **Push to GitHub**: `git push`
5. **Site updates automatically**

## 🎨 Portfolio Features

Your portfolio includes:

- 🖼️ **Auto-slideshow** homepage
- 🎨 **Interactive portfolio** gallery
- 📱 **Mobile responsive** design
- ⚡ **Fast loading** performance
- 🔍 **SEO optimized**
- 📧 **Contact form**
- 🎭 **Professional presentation**

## 🌟 Next Steps

1. **Deploy to Netlify/Vercel**
2. **Share the live URL**
3. **Add to Juan-Ridge's social media**
4. **Update as new artwork is created**
5. **Consider custom domain**

Your portfolio is ready to showcase Juan-Ridge's amazing artwork to the world! 🎨✨
