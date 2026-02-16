# Domain Update Guide - www.juanridgeart.co.za

## ✅ What Has Been Updated

All domain references in the codebase have been updated from `bradleyclintbotes.github.io/juan-ridge-portfolio` to `www.juanridgeart.co.za`.

### Files Updated:

1. **`public/index.html`**
   - Open Graph meta tags (og:url, og:image)
   - Twitter card meta tags
   - Canonical URL
   - Structured data (JSON-LD) for Person and WebSite schemas

2. **`public/robots.txt`**
   - Sitemap URL updated

3. **`public/sitemap.xml`**
   - All page URLs updated (home, about, portfolio, shop, exhibitions, contact)

4. **`package.json`**
   - Homepage field updated

5. **Documentation Files**
   - `README.md` - Live demo URL updated
   - `DEPLOYMENT_GUIDE.md` - Domain references updated
   - `GITHUB_SETUP.md` - Domain setup instructions updated

## 🚀 Next Steps

### 1. Commit and Push to GitHub

```bash
# Stage all changes
git add .

# Commit the changes
git commit -m "Update domain to www.juanridgeart.co.za"

# Push to GitHub
git push origin main
```

### 2. Configure DNS Settings

You need to configure your domain's DNS records to point to your hosting provider. The exact steps depend on where you're hosting:

#### If Using Netlify:
1. Go to your Netlify dashboard
2. Select your site
3. Go to **Domain settings** → **Custom domains**
4. Click **Add custom domain**
5. Enter `www.juanridgeart.co.za`
6. Netlify will provide DNS records to add:
   - **A Record**: Point to Netlify's IP address
   - **CNAME Record**: Point `www` to your Netlify site URL
7. Add these records in your domain registrar's DNS settings
8. Wait for DNS propagation (can take up to 48 hours, usually much faster)

#### If Using Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add `www.juanridgeart.co.za`
5. Follow Vercel's DNS configuration instructions
6. Add the provided DNS records in your domain registrar

#### If Using GitHub Pages:
1. Go to your repository Settings
2. Scroll to **Pages** section
3. Under **Custom domain**, enter `www.juanridgeart.co.za`
4. Configure DNS:
   - Add a **CNAME** record: `www` → `YOUR_USERNAME.github.io`
   - Or add **A records** pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### 3. Domain Registrar DNS Configuration

In your domain registrar (where you bought `juanridgeart.co.za`), you need to add DNS records:

**Common DNS Records Needed:**

1. **A Record** (for root domain):
   - Name: `@` or blank
   - Type: `A`
   - Value: [IP address from your hosting provider]

2. **CNAME Record** (for www subdomain):
   - Name: `www`
   - Type: `CNAME`
   - Value: [Your hosting provider's domain or IP]

**Note:** Your hosting provider (Netlify/Vercel/etc.) will give you the exact values to use.

### 4. SSL Certificate

Most hosting providers (Netlify, Vercel, GitHub Pages) automatically provision SSL certificates once DNS is configured correctly. This usually happens within a few minutes to a few hours.

### 5. Verify Domain Setup

After DNS propagation (check with `nslookup www.juanridgeart.co.za` or online DNS checker):

1. Visit `https://www.juanridgeart.co.za` in your browser
2. Check that the site loads correctly
3. Verify SSL certificate is active (padlock icon in browser)
4. Test all pages and links

### 6. Optional: Redirect Root Domain

If you want `juanridgeart.co.za` (without www) to redirect to `www.juanridgeart.co.za`:

- **Netlify**: Automatically handles this
- **Vercel**: Configure in domain settings
- **GitHub Pages**: Add both domains and set one as primary

## 🔍 Testing Checklist

- [ ] Domain resolves correctly (`nslookup www.juanridgeart.co.za`)
- [ ] Site loads at `https://www.juanridgeart.co.za`
- [ ] SSL certificate is active (HTTPS works)
- [ ] All pages load correctly
- [ ] Images load correctly
- [ ] Social media sharing shows correct preview (test with Facebook/Twitter debugger)
- [ ] Google Search Console recognizes the domain

## 📝 Important Notes

1. **DNS Propagation**: Changes can take 24-48 hours to propagate globally, but often work within minutes
2. **Build After DNS**: You may need to rebuild/redeploy your site after DNS is configured
3. **Search Engines**: Update Google Search Console with your new domain
4. **Social Media**: Update any social media profiles with the new URL

## 🆘 Troubleshooting

### Domain Not Resolving
- Check DNS records are correct in your registrar
- Wait for DNS propagation (use `dig www.juanridgeart.co.za` to check)
- Verify DNS records match your hosting provider's requirements

### SSL Certificate Issues
- Ensure DNS is correctly configured first
- Wait a few hours for automatic SSL provisioning
- Check hosting provider's SSL status page

### Site Not Loading
- Verify DNS points to correct hosting provider
- Check hosting provider's deployment status
- Ensure site is deployed and active

## ✨ Summary

All code changes are complete! The domain `www.juanridgeart.co.za` is now configured throughout your codebase. Next, you need to:

1. ✅ **Code updated** (done)
2. ⏳ **Commit and push to GitHub** (you need to do this)
3. ⏳ **Configure DNS at your domain registrar** (you need to do this)
4. ⏳ **Wait for DNS propagation** (automatic, but takes time)
5. ⏳ **Verify site loads** (test after DNS propagates)

Your portfolio will be live at `https://www.juanridgeart.co.za` once DNS is configured! 🎉

