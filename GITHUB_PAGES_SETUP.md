# GitHub Pages + Xleeno DNS Setup Guide

Complete step-by-step guide to deploy your portfolio to GitHub Pages with Xleeno DNS.

## 🎯 Current Status Check

Before starting, verify:
- [ ] Repository exists: `https://github.com/bradleyclintbotes/juan-ridge-portfolio`
- [ ] Domain: `www.juanridgeart.co.za`
- [ ] DNS Provider: Xleeno
- [ ] You have access to Xleeno control panel

---

## Step 1: Fix GitHub Pages Deployment

### 1.1 Ensure CNAME File Exists

```bash
# Check if CNAME file exists
cat CNAME
```

Should show: `www.juanridgeart.co.za`

If it doesn't exist:
```bash
echo "www.juanridgeart.co.za" > CNAME
```

### 1.2 Build and Deploy

```bash
# Install dependencies (if not done)
npm install

# Build the project (this now automatically copies CNAME to build folder)
npm run build

# Verify CNAME is in build folder
dir build\CNAME

# Deploy to GitHub Pages
npm run deploy
```

**What this does:**
- Builds your React app
- Copies CNAME file to build folder
- Deploys to `gh-pages` branch on GitHub

### 1.3 Configure GitHub Pages Settings

1. **Go to your repository:**
   ```
   https://github.com/bradleyclintbotes/juan-ridge-portfolio
   ```

2. **Click Settings** (top menu)

3. **Click Pages** (left sidebar)

4. **Configure:**
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` ⚠️ (NOT main!)
   - **Folder:** `/ (root)`
   - Click **Save**

5. **Wait 1-2 minutes** for GitHub to process

6. **Verify:**
   - Go to your repository
   - Click branch dropdown (should show "gh-pages")
   - Switch to `gh-pages` branch
   - Verify you see: `index.html`, `CNAME`, `static/` folder

### 1.4 Test GitHub Pages URL

Visit: `https://bradleyclintbotes.github.io/juan-ridge-portfolio`

**If this works:** Your site is deployed correctly, proceed to DNS setup.

**If this shows blank page:**
- Check browser console (F12) for errors
- Verify `gh-pages` branch has files
- Wait 2-3 more minutes and refresh

---

## Step 2: Configure Xleeno DNS

### 2.1 Log in to Xleeno

1. Go to [xleeno.com](https://xleeno.com) or your Xleeno control panel URL
2. Sign in with your credentials

### 2.2 Access DNS Management

1. Navigate to **Domain Management** or **My Domains**
2. Find `juanridgeart.co.za`
3. Click on the domain or **Manage DNS** / **DNS Settings**

**If you can't find DNS settings:**
- Look for "DNS", "DNS Management", "DNS Records", or "Zone Editor"
- Contact Xleeno support if needed

### 2.3 Add CNAME Record for www

1. Click **Add Record** or **New Record** or **+**
2. Fill in:
   - **Record Type:** `CNAME`
   - **Host/Name:** `www` (or `www.juanridgeart.co.za` if required)
   - **Points to/Target/Value:** `bradleyclintbotes.github.io`
   - **TTL:** `3600` (or leave default)
3. Click **Save** or **Add Record**

### 2.4 Add A Records for Root Domain

You need to add **4 A records** for the root domain:

**Record 1:**
- **Record Type:** `A`
- **Host/Name:** `@` (or leave blank, or `juanridgeart.co.za`)
- **Points to/IP Address:** `185.199.108.153`
- **TTL:** `3600`
- Click **Save**

**Record 2:**
- **Record Type:** `A`
- **Host/Name:** `@`
- **Points to/IP Address:** `185.199.109.153`
- **TTL:** `3600`
- Click **Save**

**Record 3:**
- **Record Type:** `A`
- **Host/Name:** `@`
- **Points to/IP Address:** `185.199.110.153`
- **TTL:** `3600`
- Click **Save**

**Record 4:**
- **Record Type:** `A`
- **Host/Name:** `@`
- **Points to/IP Address:** `185.199.111.153`
- **TTL:** `3600`
- Click **Save**

### 2.5 Verify DNS Records

Your DNS records should look like this:

```
Type    Name    Value/Points to              TTL
CNAME   www     bradleyclintbotes.github.io  3600
A       @       185.199.108.153              3600
A       @       185.199.109.153              3600
A       @       185.199.110.153              3600
A       @       185.199.111.153              3600
```

### 2.6 Save All Changes

- Click **Save All** or **Apply Changes** if available
- Some panels save automatically

---

## Step 3: Wait for DNS Propagation

### 3.1 DNS Propagation Time

- **Usually:** 1-2 hours
- **Maximum:** 24-48 hours
- **Sometimes:** 15-30 minutes

### 3.2 Check DNS Propagation

Use these tools to verify:

1. **whatsmydns.net:**
   - Go to: https://www.whatsmydns.net
   - Enter: `www.juanridgeart.co.za`
   - Select: **CNAME**
   - Check if it shows: `bradleyclintbotes.github.io`

2. **Command line (PowerShell):**
   ```powershell
   nslookup www.juanridgeart.co.za
   ```

3. **Online DNS checker:**
   - https://dnschecker.org
   - Enter: `www.juanridgeart.co.za`
   - Select: **CNAME**

---

## Step 4: Verify Everything Works

### 4.1 Test GitHub Pages URL

Visit: `https://bradleyclintbotes.github.io/juan-ridge-portfolio`

✅ **Should work immediately** (no DNS needed)

### 4.2 Test Custom Domain

Visit: `https://www.juanridgeart.co.za`

⚠️ **May take 1-24 hours** for DNS to propagate

### 4.3 Check SSL Certificate

- GitHub automatically provides SSL certificates
- Your site should work with `https://`
- If SSL doesn't work, wait up to 24 hours

### 4.4 Test All Pages

Visit these URLs to verify:
- `https://www.juanridgeart.co.za/` (Home)
- `https://www.juanridgeart.co.za/#/about` (About)
- `https://www.juanridgeart.co.za/#/portfolio` (Portfolio)
- `https://www.juanridgeart.co.za/#/contact` (Contact)

---

## 🐛 Troubleshooting

### Problem: Blank Page

**Solution:**
1. Verify GitHub Pages uses `gh-pages` branch (NOT main)
2. Check `gh-pages` branch has `index.html` and `CNAME`
3. Run `npm run deploy` again
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try incognito mode
6. Check browser console (F12) for errors

### Problem: DNS Not Working

**Solution:**
1. Wait 24 hours for full propagation
2. Verify DNS records are correct in Xleeno
3. Check DNS propagation with whatsmydns.net
4. Clear DNS cache:
   ```powershell
   ipconfig /flushdns
   ```

### Problem: SSL Certificate Not Working

**Solution:**
1. Wait up to 24 hours for GitHub to provision SSL
2. Ensure CNAME file is in `gh-pages` branch
3. Verify DNS is pointing correctly
4. Try accessing via `http://` first, then `https://`

### Problem: 404 Errors

**Solution:**
1. Your app uses HashRouter, so URLs should have `#/`
2. Try: `https://www.juanridgeart.co.za/#/`
3. Verify all routes work with hash

---

## ✅ Complete Checklist

- [ ] CNAME file exists in repository root
- [ ] CNAME file is copied to build folder (automatic with npm run build)
- [ ] `npm run deploy` completed successfully
- [ ] GitHub Pages configured to use `gh-pages` branch
- [ ] `gh-pages` branch contains `index.html`, `CNAME`, and `static/` folder
- [ ] GitHub Pages URL works: `https://bradleyclintbotes.github.io/juan-ridge-portfolio`
- [ ] CNAME record added in Xleeno for `www`
- [ ] 4 A records added in Xleeno for root domain
- [ ] DNS records verified in Xleeno panel
- [ ] Waited 1-24 hours for DNS propagation
- [ ] DNS propagation checked with whatsmydns.net
- [ ] Custom domain works: `https://www.juanridgeart.co.za`
- [ ] SSL certificate is active
- [ ] All pages load correctly
- [ ] Mobile version works

---

## 📞 Need Help?

1. **Check browser console** (F12) for errors
2. **Verify GitHub Pages status** in repository Settings → Pages
3. **Check DNS propagation** with online tools
4. **Contact Xleeno support** if DNS panel is unclear
5. **Review DEPLOYMENT_GUIDE.md** for more details

---

## 🔄 Making Updates

After initial setup, to update your site:

```bash
# Make your changes
# Then:
npm run deploy
```

GitHub Pages will automatically update within 1-2 minutes!

---

**Your site should now be live at: https://www.juanridgeart.co.za** 🎉

