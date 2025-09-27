// Instagram Basic Display API Integration
// This service handles fetching Instagram posts for the portfolio

class InstagramService {
  constructor() {
    this.baseURL = 'https://graph.instagram.com';
    this.accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
    this.userId = process.env.REACT_APP_INSTAGRAM_USER_ID;
  }

  // Fetch recent media from Instagram
  async getRecentMedia(limit = 12) {
    try {
      // First try to use Instagram Basic Display API if credentials are available
      if (this.accessToken && this.userId) {
        const response = await fetch(
          `${this.baseURL}/${this.userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${this.accessToken}`
        );

        if (response.ok) {
          const data = await response.json();
          return this.formatInstagramData(data.data);
        }
      }

      // Fallback: Use Instagram-style mock data
      console.log('Using Instagram-style mock data with realistic content');
      return this.getInstagramStyleData();
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
      return this.getInstagramStyleData();
    }
  }

  // Format Instagram data for portfolio use
  formatInstagramData(mediaArray) {
    return mediaArray.map((post, index) => ({
      id: post.id,
      title: this.extractTitleFromCaption(post.caption),
      medium: this.determineMedium(post.caption),
      year: new Date(post.timestamp).getFullYear().toString(),
      category: this.categorizePost(post.caption),
      image: post.media_url,
      thumbnail: post.thumbnail_url || post.media_url,
      caption: post.caption,
      permalink: post.permalink,
      timestamp: post.timestamp,
      mediaType: post.media_type
    }));
  }

  // Extract title from Instagram caption
  extractTitleFromCaption(caption) {
    if (!caption) return 'Untitled Work';
    
    // Try to extract title from first line or hashtag
    const lines = caption.split('\n');
    const firstLine = lines[0].trim();
    
    // Remove common prefixes and clean up
    const title = firstLine
      .replace(/^[#@].*?\s/, '') // Remove hashtags and mentions at start
      .replace(/^[A-Z\s]+:\s*/, '') // Remove "TITLE:" format
      .trim();
    
    return title.length > 0 ? title : 'Untitled Work';
  }

  // Determine medium from caption content
  determineMedium(caption) {
    if (!caption) return 'Digital Art';
    
    const captionLower = caption.toLowerCase();
    
    if (captionLower.includes('painting') || captionLower.includes('acrylic') || captionLower.includes('oil')) {
      return 'Painting';
    } else if (captionLower.includes('photo') || captionLower.includes('photography')) {
      return 'Photography';
    } else if (captionLower.includes('digital') || captionLower.includes('illustration')) {
      return 'Digital Art';
    } else if (captionLower.includes('mixed media') || captionLower.includes('collage')) {
      return 'Mixed Media';
    } else if (captionLower.includes('sculpture') || captionLower.includes('3d')) {
      return 'Sculpture';
    }
    
    return 'Digital Art'; // Default
  }

  // Categorize posts based on content
  categorizePost(caption) {
    if (!caption) return 'digital';
    
    const captionLower = caption.toLowerCase();
    
    if (captionLower.includes('photo') || captionLower.includes('photography')) {
      return 'photography';
    } else if (captionLower.includes('painting') || captionLower.includes('acrylic') || captionLower.includes('oil')) {
      return 'painting';
    } else if (captionLower.includes('digital') || captionLower.includes('illustration')) {
      return 'digital';
    } else if (captionLower.includes('mixed media') || captionLower.includes('collage')) {
      return 'mixed';
    }
    
    return 'digital'; // Default
  }

  // Enhanced mock data with realistic Instagram-style content
  getEnhancedMockData() {
    return [
      {
        id: 'mock-1',
        title: 'Digital Dreams',
        medium: 'Digital Art',
        year: '2024',
        category: 'digital',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center',
        caption: 'Digital Dreams - Exploring the intersection of technology and human emotion through contemporary digital art. This piece represents my ongoing investigation into how digital mediums can convey complex emotional narratives. #digitalart #contemporaryart #studentartist',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-2',
        title: 'Memory Fragments',
        medium: 'Mixed Media',
        year: '2024',
        category: 'mixed',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center',
        caption: 'Memory Fragments - A mixed media exploration of how we process and remember experiences. Combining traditional collage techniques with digital manipulation to create layered narratives. #mixedmedia #memory #identity',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-3',
        title: 'Urban Echoes',
        medium: 'Photography',
        year: '2023',
        category: 'photography',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center',
        caption: 'Urban Echoes - Part of my ongoing photography series documenting the rhythm and energy of city life. Each image captures a moment of connection in the urban landscape. #photography #urban #citylife',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-4',
        title: 'Abstract Realities',
        medium: 'Digital Art',
        year: '2024',
        category: 'digital',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center',
        caption: 'Abstract Realities - Experimenting with form and color to create new visual languages. This digital piece challenges traditional notions of representation. #abstract #digitalart #experimental',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-5',
        title: 'Textured Memories',
        medium: 'Mixed Media',
        year: '2023',
        category: 'mixed',
        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=400&fit=crop&crop=center',
        caption: 'Textured Memories - Layering different materials and techniques to explore the complexity of personal history. Each texture tells a story. #mixedmedia #texture #memory',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-6',
        title: 'Light Studies',
        medium: 'Photography',
        year: '2024',
        category: 'photography',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center',
        caption: 'Light Studies - Capturing the interplay between light and shadow in everyday spaces. These images explore how light shapes our perception of reality. #photography #light #shadow #studies',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-7',
        title: 'Digital Landscapes',
        medium: 'Digital Art',
        year: '2024',
        category: 'digital',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center',
        caption: 'Digital Landscapes - Creating imaginary worlds through digital painting techniques. Each landscape represents an emotional journey. #digitalart #landscape #imagination',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      },
      {
        id: 'mock-8',
        title: 'Color Theory',
        medium: 'Painting',
        year: '2023',
        category: 'painting',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center',
        caption: 'Color Theory - Exploring the emotional impact of color relationships in this acrylic painting. Each hue carries its own weight and meaning. #painting #colortheory #acrylic',
        permalink: 'https://instagram.com/_ras.juan_',
        timestamp: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE'
      }
    ];
  }

  // Instagram-style data that looks like real Instagram posts
  getInstagramStyleData() {
    return [
      {
        id: 'ig-1',
        title: 'Digital Dreams',
        medium: 'Digital Art',
        year: '2024',
        category: 'digital',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center&auto=format',
        thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center&auto=format',
        caption: 'Digital Dreams ✨\n\nExploring the intersection of technology and human emotion through contemporary digital art. This piece represents my ongoing investigation into how digital mediums can convey complex emotional narratives.\n\n#digitalart #contemporaryart #studentartist #visualart #creative #art #digital #technology #emotion #narrative',
        permalink: 'https://www.instagram.com/_ras.juan_/',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE',
        likes: 47,
        comments: 8
      },
      {
        id: 'ig-2',
        title: 'Memory Fragments',
        medium: 'Mixed Media',
        year: '2024',
        category: 'mixed',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop&crop=center&auto=format',
        thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center&auto=format',
        caption: 'Memory Fragments 🧩\n\nA mixed media exploration of how we process and remember experiences. Combining traditional collage techniques with digital manipulation to create layered narratives that speak to the complexity of human memory.\n\n#mixedmedia #memory #identity #collage #digital #layered #narrative #personal #experience',
        permalink: 'https://www.instagram.com/_ras.juan_/',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE',
        likes: 52,
        comments: 12
      },
      {
        id: 'ig-3',
        title: 'Urban Echoes',
        medium: 'Photography',
        year: '2023',
        category: 'photography',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=800&fit=crop&crop=center&auto=format',
        thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center&auto=format',
        caption: 'Urban Echoes 📸\n\nPart of my ongoing photography series documenting the rhythm and energy of city life. Each image captures a moment of connection in the urban landscape, revealing the poetry in everyday spaces.\n\n#photography #urban #citylife #streetphotography #urban #rhythm #energy #connection #poetry #everyday',
        permalink: 'https://www.instagram.com/_ras.juan_/',
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE',
        likes: 38,
        comments: 6
      },
      {
        id: 'ig-4',
        title: 'Abstract Realities',
        medium: 'Digital Art',
        year: '2024',
        category: 'digital',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop&crop=center&auto=format',
        thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center&auto=format',
        caption: 'Abstract Realities 🎨\n\nExperimenting with form and color to create new visual languages. This digital piece challenges traditional notions of representation, inviting viewers to find their own meaning in the abstract forms.\n\n#abstract #digitalart #experimental #form #color #visual #language #representation #meaning #challenge',
        permalink: 'https://www.instagram.com/_ras.juan_/',
        timestamp: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE',
        likes: 41,
        comments: 9
      },
      {
        id: 'ig-5',
        title: 'Textured Memories',
        medium: 'Mixed Media',
        year: '2023',
        category: 'mixed',
        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=800&fit=crop&crop=center&auto=format',
        thumbnail: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=400&fit=crop&crop=center&auto=format',
        caption: 'Textured Memories 🖼️\n\nLayering different materials and techniques to explore the complexity of personal history. Each texture tells a story, creating a tactile map of memory and experience.\n\n#mixedmedia #texture #memory #materials #techniques #personal #history #story #tactile #map',
        permalink: 'https://www.instagram.com/_ras.juan_/',
        timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE',
        likes: 35,
        comments: 7
      },
      {
        id: 'ig-6',
        title: 'Light Studies',
        medium: 'Photography',
        year: '2024',
        category: 'photography',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop&crop=center&auto=format',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center&auto=format',
        caption: 'Light Studies 💡\n\nCapturing the interplay between light and shadow in everyday spaces. These images explore how light shapes our perception of reality, revealing hidden beauty in ordinary moments.\n\n#photography #light #shadow #studies #interplay #perception #reality #beauty #ordinary #moments',
        permalink: 'https://www.instagram.com/_ras.juan_/',
        timestamp: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
        mediaType: 'IMAGE',
        likes: 44,
        comments: 11
      }
    ];
  }

  // Original mock data for backward compatibility
  getMockData() {
    return this.getInstagramStyleData();
  }

  // Get Instagram profile info
  async getProfileInfo() {
    try {
      if (!this.accessToken || !this.userId) {
        return {
          username: '_ras.juan_',
          name: 'Juan-Ridge Isaacs',
          profile_picture_url: 'https://via.placeholder.com/150',
          biography: 'Visual Artist & Student'
        };
      }

      const response = await fetch(
        `${this.baseURL}/${this.userId}?fields=id,username,name,profile_picture_url,biography&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching Instagram profile:', error);
      return {
        username: '_ras.juan_',
        name: 'Juan-Ridge Isaacs',
        profile_picture_url: 'https://via.placeholder.com/150',
        biography: 'Visual Artist & Student'
      };
    }
  }
}

export default new InstagramService();
