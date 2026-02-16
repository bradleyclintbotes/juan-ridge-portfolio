# Portfolio Deployment Guide

This guide shows you how to deploy Juan-Ridge Isaacs' portfolio website to the internet.

## 🚨 QUICK FIX: Blank Page on GitHub Pages

**If you're seeing a blank page, follow these steps IMMEDIATELY:**

1. **Ensure CNAME is copied to build folder:**
   ```bash
   copy CNAME build\CNAME
   ```

2. **Deploy to gh-pages branch:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages to use gh-pages branch:**
   - Go to: `https://github.com/bradleyclintbotes/juan-ridge-portfolio/settings/pages`
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (NOT main!)
   - Folder: **/ (root)**
   - Click **Save**

4. **Wait 2-3 minutes**, then check:
   - `https://bradleyclintbotes.github.io/juan-ridge-portfolio` (should work)
   - `https://www.juanridgeart.co.za` (after DNS is configured)

5. **If still blank, check browser console (F12) for errors**

**See "Troubleshooting DNS Issues" section below for more help.**

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Free & Easy)
**Best for: Quick deployment with automatic updates**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Click "Deploy site"

3. **Custom domain:**
   - Go to Site settings → Domain management
   - Add your custom domain: `www.juanridgeart.co.za`
   - Configure DNS records as instructed by Netlify

### Option 2: Vercel (Free & Fast)
**Best for: React apps with automatic deployments**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live at `https://your-project.vercel.app`

3. **Connect to GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Automatic deployments on every push

### Option 3: GitHub Pages (Free)
**Best for: Simple static hosting**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/juan-ridge-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 4: Firebase Hosting (Free)
**Best for: Google ecosystem integration**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🎯 Recommended Deployment Steps

### Step 1: Prepare for Production
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the build locally
npx serve -s build
```

### Step 2: Choose Your Platform
- **For beginners:** Use Netlify (drag & drop the `build` folder)
- **For developers:** Use Vercel (automatic GitHub integration)
- **For free hosting:** Use GitHub Pages
- **For Google services:** Use Firebase

### Step 3: Custom Domain Setup
1. **Buy a domain** (e.g., juanridge.com, juanridge.art)
2. **Configure DNS** to point to your hosting platform
3. **Add SSL certificate** (usually automatic)

## 🌐 DNS Configuration Guide - Step by Step

This section provides detailed instructions for configuring DNS records with your domain provider to connect your custom domain to your hosting platform.

### Prerequisites
- Your domain name: `www.juanridgeart.co.za`
- Your hosting platform (Netlify, Vercel, GitHub Pages, etc.)
- Access to your domain registrar's DNS management panel

---

## 📋 DNS Setup for GitHub Pages

### Step 1: Configure CNAME File in Git Repository

1. **Ensure CNAME file exists:**
   ```bash
   # Check if CNAME file exists
   cat CNAME
   ```
   Should show: `www.juanridgeart.co.za`

2. **If CNAME file doesn't exist, create it:**
   ```bash
   echo "www.juanridgeart.co.za" > CNAME
   ```

3. **Add and commit the CNAME file:**
   ```bash
   git add CNAME
   git commit -m "Add CNAME for custom domain"
   git push origin main
   ```

### Step 2: Enable GitHub Pages

**IMPORTANT: Use gh-pages branch deployment (recommended for React apps)**

1. **Go to your GitHub repository:**
   - Navigate to: `https://github.com/bradleyclintbotes/juan-ridge-portfolio`

2. **Open Settings:**
   - Click on **Settings** tab in your repository

3. **Go to Pages section:**
   - Scroll down to **Pages** in the left sidebar

4. **Configure source (CRITICAL - Use gh-pages branch):**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: **gh-pages** ⚠️ (NOT main - this is important!)
   - Select folder: **/ (root)**
   - Click **Save**

5. **Deploy using gh-pages:**
   ```bash
   # This will build and deploy to gh-pages branch
   npm run deploy
   ```

6. **Wait 1-2 minutes** for GitHub Pages to process

7. **Verify deployment:**
   - Go to your repository
   - Switch to **gh-pages** branch
   - Verify you see: `index.html`, `CNAME`, and `static/` folder
   - If CNAME is missing, it wasn't copied to build folder

8. **Note your GitHub Pages URL:**
   - GitHub will show: `https://bradleyclintbotes.github.io/juan-ridge-portfolio`
   - This is your target for DNS configuration
   - Test this URL first - if it works, then configure DNS

### Step 3: Configure DNS with Your Domain Provider

Choose your domain provider below and follow the specific instructions:

---

## 🔧 DNS Configuration by Provider

### For GoDaddy

1. **Log in to GoDaddy:**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in to your account

2. **Access DNS Management:**
   - Go to **My Products**
   - Find your domain `juanridgeart.co.za`
   - Click **DNS** or **Manage DNS**

3. **Add/Edit DNS Records:**

   **For www subdomain (www.juanridgeart.co.za):**
   - Find or add a **CNAME** record:
     - **Type:** CNAME
     - **Name:** www
     - **Value:** `bradleyclintbotes.github.io`
     - **TTL:** 600 (or default)
     - Click **Save**

   **For root domain (juanridgeart.co.za):**
   - Add an **A** record:
     - **Type:** A
     - **Name:** @ (or leave blank)
     - **Value:** `185.199.108.153` (GitHub Pages IP)
     - **TTL:** 600
   - Add three more **A** records with these IPs:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Click **Save** for each

4. **Wait for propagation:**
   - DNS changes can take 24-48 hours to propagate
   - Usually works within 1-2 hours

---

### For Namecheap

1. **Log in to Namecheap:**
   - Go to [namecheap.com](https://namecheap.com)
   - Sign in to your account

2. **Access Domain List:**
   - Click **Domain List** from the left menu
   - Find `juanridgeart.co.za`
   - Click **Manage**

3. **Go to Advanced DNS:**
   - Click on **Advanced DNS** tab

4. **Add DNS Records:**

   **For www subdomain:**
   - Click **Add New Record**
   - **Type:** CNAME Record
   - **Host:** www
   - **Value:** `bradleyclintbotes.github.io`
   - **TTL:** Automatic
   - Click **Save**

   **For root domain:**
   - Add four **A** records:
     - **Type:** A Record
     - **Host:** @
     - **Value:** `185.199.108.153` (repeat for all 4 IPs)
     - **TTL:** Automatic
   - Add records for:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

---

### For Cloudflare

1. **Log in to Cloudflare:**
   - Go to [cloudflare.com](https://cloudflare.com)
   - Sign in to your account

2. **Select your domain:**
   - Click on `juanridgeart.co.za` from your dashboard

3. **Go to DNS Settings:**
   - Click **DNS** in the left sidebar

4. **Add DNS Records:**

   **For www subdomain:**
   - Click **Add record**
   - **Type:** CNAME
   - **Name:** www
   - **Target:** `bradleyclintbotes.github.io`
   - **Proxy status:** DNS only (gray cloud) or Proxied (orange cloud)
   - Click **Save**

   **For root domain:**
   - Add four **A** records:
     - **Type:** A
     - **Name:** @
     - **IPv4 address:** `185.199.108.153` (repeat for all 4)
     - **Proxy status:** DNS only
   - Add all four IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

---

### For Google Domains

1. **Log in to Google Domains:**
   - Go to [domains.google.com](https://domains.google.com)
   - Sign in to your account

2. **Select your domain:**
   - Click on `juanridgeart.co.za`

3. **Go to DNS:**
   - Click **DNS** in the left menu

4. **Add DNS Records:**

   **For www subdomain:**
   - Scroll to **Custom resource records**
   - **Name:** www
   - **Type:** CNAME
   - **Data:** `bradleyclintbotes.github.io`
   - Click **Add**

   **For root domain:**
   - Add four **A** records:
     - **Name:** @
     - **Type:** A
     - **Data:** `185.199.108.153` (add each IP separately)
   - Add all four IPs

---

### For Xleeno (South African Provider)

1. **Log in to Xleeno:**
   - Go to [xleeno.com](https://xleeno.com) or your Xleeno control panel
   - Sign in to your account

2. **Access DNS Management:**
   - Navigate to **Domain Management** or **DNS Management**
   - Find your domain `juanridgeart.co.za`
   - Click on **DNS Settings** or **Manage DNS**

3. **Add CNAME Record for www:**
   - Click **Add Record** or **New Record**
   - **Record Type:** Select **CNAME**
   - **Host/Name:** Enter `www` (or `www.juanridgeart.co.za` if it requires full domain)
   - **Points to/Target:** Enter `bradleyclintbotes.github.io`
   - **TTL:** 3600 (or leave as default)
   - Click **Save** or **Add Record**

4. **Add A Records for Root Domain:**
   - Click **Add Record** again
   - **Record Type:** Select **A**
   - **Host/Name:** Enter `@` or leave blank (for root domain)
   - **Points to/IP Address:** Enter `185.199.108.153`
   - **TTL:** 3600
   - Click **Save**

   - Repeat this process 3 more times for:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

5. **Verify Records:**
   - Your DNS records should look like this:
     ```
     Type    Name    Value
     CNAME   www     bradleyclintbotes.github.io
     A       @       185.199.108.153
     A       @       185.199.109.153
     A       @       185.199.110.153
     A       @       185.199.111.153
     ```

6. **Save and Wait:**
   - Click **Save All** or **Apply Changes**
   - DNS changes typically take 1-24 hours to propagate
   - Usually works within 1-2 hours

**Xleeno Support:**
- If you can't find DNS settings, contact Xleeno support
- They can help you access the DNS management panel
- Email: support@xleeno.com (check their website for current contact)

---

### For Other Providers (Generic Instructions)

1. **Log in to your domain registrar**
2. **Find DNS Management/DNS Settings**
3. **Add these records:**

   **CNAME Record:**
   - **Name/Host:** www
   - **Type:** CNAME
   - **Value/Target:** `bradleyclintbotes.github.io`
   - **TTL:** 3600 (or default)

   **A Records (for root domain):**
   - **Name/Host:** @ (or blank, or root domain)
   - **Type:** A
   - **Value:** `185.199.108.153`
   - **TTL:** 3600
   
   Repeat for:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

---

## 🔄 Git Workflow for Updates

### Making Changes and Deploying

1. **Make your changes locally:**
   ```bash
   # Edit files in your project
   # Test locally with: npm start
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Stage your changes:**
   ```bash
   git add .
   ```

4. **Commit your changes:**
   ```bash
   git commit -m "Description of your changes"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

6. **GitHub Pages will automatically deploy:**
   - Wait 1-2 minutes
   - Your changes will be live at `www.juanridgeart.co.za`

### If Push is Rejected (Remote has changes)

1. **Pull remote changes first:**
   ```bash
   git pull origin main
   ```

2. **Resolve any conflicts if needed:**
   - Git will merge automatically if possible
   - If conflicts occur, resolve them manually

3. **Push again:**
   ```bash
   git push origin main
   ```

---

## ✅ Verifying DNS Configuration

### Step 1: Check DNS Propagation

1. **Use online tools:**
   - Go to [whatsmydns.net](https://www.whatsmydns.net)
   - Enter: `www.juanridgeart.co.za`
   - Check if CNAME points to `bradleyclintbotes.github.io`

2. **Check from command line:**
   ```bash
   # Windows PowerShell
   nslookup www.juanridgeart.co.za
   
   # Or use dig (if available)
   dig www.juanridgeart.co.za CNAME
   ```

### Step 2: Verify GitHub Pages

1. **Check GitHub Pages status:**
   - Go to repository Settings → Pages
   - Should show: "Your site is live at https://www.juanridgeart.co.za"

2. **Test the site:**
   - Visit `https://www.juanridgeart.co.za`
   - Should load your portfolio

### Step 3: Check SSL Certificate

- GitHub Pages automatically provides SSL certificates
- Your site should be accessible via `https://`
- If not, wait 24 hours for certificate provisioning

---

## 🐛 Troubleshooting DNS Issues

### Problem: Blank Page / Site not loading

**This is the most common issue! Follow these steps:**

1. **Verify CNAME file is in build folder:**
   ```bash
   # Check if CNAME exists in build folder
   ls build/CNAME
   # If not, copy it:
   copy CNAME build\CNAME
   ```

2. **Ensure GitHub Pages is using gh-pages branch:**
   - Go to repository Settings → Pages
   - Source should be: **Deploy from a branch**
   - Branch should be: **gh-pages** (NOT main)
   - Folder: **/ (root)**
   - Click Save

3. **Redeploy using gh-pages:**
   ```bash
   npm run deploy
   ```
   This will:
   - Build your project
   - Copy CNAME to build folder
   - Deploy to gh-pages branch

4. **Check the deployed branch:**
   - Go to your repository on GitHub
   - Switch to **gh-pages** branch
   - Verify CNAME file exists in the root
   - Verify index.html exists

5. **Wait 1-2 minutes** after deployment for GitHub Pages to update

6. **Clear browser cache:**
   - Press `Ctrl + Shift + Delete`
   - Or try incognito/private browsing mode

7. **Check browser console for errors:**
   - Press `F12` to open developer tools
   - Look for errors in Console tab
   - Common issues: 404 errors for JS/CSS files

8. **Verify GitHub Pages URL:**
   - Check if `https://bradleyclintbotes.github.io/juan-ridge-portfolio` works
   - If this works but custom domain doesn't, it's a DNS issue

**If still blank page:**

9. **Check React Router configuration:**
   - Your app uses HashRouter (good for GitHub Pages)
   - Try accessing: `https://www.juanridgeart.co.za/#/`
   - If this works, the issue is with root path routing

10. **Verify build output:**
    ```bash
    # Test build locally
    npm run build
    npx serve -s build
    # Visit http://localhost:3000
    # If this works, the build is fine
    ```

### Problem: Site not loading (DNS Issues)

**Solutions:**
1. **Wait 24-48 hours** for DNS propagation
2. **Clear your browser cache**
3. **Check DNS records** are correct
4. **Verify CNAME file** is in your repository AND build folder
5. **Check GitHub Pages** is enabled in settings
6. **Verify DNS propagation:**
   - Use [whatsmydns.net](https://www.whatsmydns.net)
   - Check if CNAME resolves correctly

### Problem: SSL certificate not working

**Solutions:**
1. **Wait up to 24 hours** for GitHub to provision SSL
2. **Ensure CNAME file** is in the root of your repository
3. **Check DNS** is pointing correctly
4. **Contact GitHub support** if issue persists

### Problem: Changes not appearing

**Solutions:**
1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Wait 1-2 minutes** for GitHub Pages to rebuild
3. **Check build status** in GitHub Actions tab
4. **Verify you pushed** to the correct branch

---

## 📝 Quick Reference: DNS Records Summary

**For www.juanridgeart.co.za:**
- **Type:** CNAME
- **Name:** www
- **Value:** `bradleyclintbotes.github.io`

**For juanridgeart.co.za (root):**
- **Type:** A
- **Name:** @
- **Value:** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

---

## 🎯 Complete Setup Checklist

- [ ] CNAME file created in repository root
- [ ] CNAME file committed and pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] DNS CNAME record added for www subdomain
- [ ] DNS A records added for root domain (4 IPs)
- [ ] Waited 24-48 hours for DNS propagation
- [ ] Verified site loads at www.juanridgeart.co.za
- [ ] SSL certificate is active (https:// works)
- [ ] Tested site functionality
- [ ] Mobile responsiveness verified

## 📱 Mobile Optimization

The website is already mobile-optimized with:
- ✅ Responsive design
- ✅ Touch-friendly navigation
- ✅ Fast loading images
- ✅ Mobile-first approach

## 🔧 Production Optimizations

### Before Deploying:
1. **Optimize images:**
   - Compress images in `/public/images/`
   - Use WebP format for better performance

2. **Add meta tags:**
   - Update `public/index.html` with proper SEO tags
   - Add Open Graph tags for social sharing

3. **Performance:**
   - The build process already optimizes the code
   - Images are automatically optimized

## 🌐 Domain Options

### Free Subdomains:
- `juanridge.netlify.app`
- `juanridge.vercel.app`
- `yourusername.github.io/juan-ridge-portfolio`

### Custom Domain:
- `www.juanridgeart.co.za` ✅ (Current domain)

## 📊 Analytics & Monitoring

### Add Google Analytics:
1. Get Google Analytics ID
2. Add to `public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

### Performance Monitoring:
- Netlify provides built-in analytics
- Vercel provides performance insights
- Google PageSpeed Insights for optimization

## 🚀 Quick Start (5 Minutes)

**Easiest deployment with Netlify:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)**

3. **Drag and drop the `build` folder**

4. **Your site is live!** 🎉

5. **Customize the URL** in Netlify dashboard

## 🔄 Automatic Updates

### With GitHub Integration:
- Push changes to GitHub
- Site automatically rebuilds and deploys
- No manual deployment needed

### Manual Updates:
- Make changes locally
- Run `npm run build`
- Redeploy to your platform

## 📞 Support

If you need help with deployment:
1. Check the platform's documentation
2. Use their support chat
3. Most platforms have excellent tutorials

## 🎨 Final Checklist

Before going live:
- [ ] Test all pages work
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test contact form (if added)
- [ ] Check loading speed
- [ ] Add analytics (optional)
- [ ] Set up custom domain (optional)

Your portfolio is ready to showcase Juan-Ridge's amazing artwork to the world! 🌟
