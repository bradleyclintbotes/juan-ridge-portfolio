# Instagram Integration Setup Guide

This guide will help you connect Juan-Ridge Isaacs' Instagram account (@_ras.juan_) to automatically display his latest posts on the portfolio website.

## 🚀 Quick Start (Using Mock Data)

The website is already configured to work with mock data, so it will function immediately without any Instagram API setup. The portfolio will show sample artwork and the Instagram feed will display placeholder content.

## 📱 Instagram API Integration (Optional)

To connect real Instagram content, follow these steps:

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" as the app type
4. Fill in app details:
   - App Name: "Juan-Ridge Portfolio"
   - App Contact Email: your email
   - App Purpose: "Portfolio Website"

### Step 2: Configure Instagram Basic Display

1. In your Facebook App dashboard:
   - Go to "Products" → "Instagram Basic Display"
   - Click "Set Up"
   - Add Instagram Basic Display product

2. Configure OAuth Redirect URIs:
   - Add: `http://localhost:3000` (for development)
   - Add: `https://yourdomain.com` (for production)

3. Get your Instagram User ID:
   - Go to Instagram Basic Display → "User Token Generator"
   - Generate a token for the Instagram account
   - Copy the User ID from the response

### Step 3: Generate Access Token

1. In the User Token Generator:
   - Click "Generate Token"
   - Authorize the app with the Instagram account
   - Copy the generated access token

### Step 4: Configure Environment Variables

1. Copy `env.example` to `.env` in the project root
2. Fill in your values:

```env
REACT_APP_INSTAGRAM_USER_ID=your_instagram_user_id_here
REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here
REACT_APP_USE_MOCK_DATA=false
```

### Step 5: Restart the Development Server

```bash
npm start
```

## 🔧 Features

### Automatic Content Updates
- Portfolio automatically updates when new posts are added to Instagram
- Posts are categorized by content (Digital Art, Photography, Mixed Media, etc.)
- Captions are used to extract artwork titles and descriptions

### Smart Content Processing
- Automatically determines artwork medium from captions
- Extracts titles from post captions
- Categorizes posts for filtering
- Handles both images and videos

### Fallback System
- If Instagram API is unavailable, the site uses mock data
- Graceful error handling ensures the site always works
- Loading states provide good user experience

## 📝 Content Guidelines for Instagram

To get the best results from the automatic integration, Juan should:

1. **Use descriptive captions** that include:
   - Artwork title
   - Medium (e.g., "Digital Art", "Mixed Media", "Photography")
   - Year created
   - Brief description

2. **Example caption format**:
   ```
   "Digital Dreams" - A new digital art piece exploring themes of memory and identity. 
   Created in 2024 using mixed digital techniques. #digitalart #contemporaryart
   ```

3. **Use relevant hashtags** for better categorization:
   - #digitalart
   - #photography
   - #mixedmedia
   - #painting
   - #sculpture

## 🛠️ Troubleshooting

### Common Issues

1. **"Error loading portfolio" message**
   - Check that environment variables are set correctly
   - Verify Instagram access token is valid
   - Ensure Instagram account is public

2. **No images showing**
   - Check network connection
   - Verify Instagram API credentials
   - Check browser console for errors

3. **Rate limiting**
   - Instagram API has rate limits
   - The app includes automatic retry logic
   - Consider caching for production use

### Development vs Production

- **Development**: Uses mock data by default
- **Production**: Requires valid Instagram API credentials
- **Testing**: Can switch between mock and real data using environment variables

## 🔒 Security Notes

- Never commit `.env` files to version control
- Instagram access tokens expire and need renewal
- Consider implementing token refresh logic for production
- Use environment-specific configurations

## 📊 Performance Optimization

The integration includes several performance optimizations:

- **Lazy loading** for images
- **Thumbnail generation** for faster loading
- **Caching** to reduce API calls
- **Error boundaries** to prevent crashes
- **Loading states** for better UX

## 🎨 Customization

You can customize the Instagram integration by modifying:

- `src/services/instagramService.js` - API integration logic
- `src/hooks/useInstagram.js` - React hooks for data fetching
- `src/components/InstagramFeed.js` - Display component
- `src/pages/Portfolio.js` - Portfolio integration

## 📞 Support

If you encounter issues with the Instagram integration:

1. Check the browser console for error messages
2. Verify Instagram API credentials
3. Test with mock data first
4. Check Instagram account privacy settings

The website will work perfectly with mock data, so the Instagram integration is optional but provides a great way to keep the portfolio automatically updated with Juan's latest work!
