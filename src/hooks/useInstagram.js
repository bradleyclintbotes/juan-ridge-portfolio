import { useState, useEffect } from 'react';
import instagramService from '../services/instagramService';

// Custom hook for Instagram integration
export const useInstagram = (limit = 12) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch both posts and profile data
        const [postsData, profileData] = await Promise.all([
          instagramService.getRecentMedia(limit),
          instagramService.getProfileInfo()
        ]);

        setPosts(postsData);
        setProfile(profileData);
      } catch (err) {
        console.error('Error fetching Instagram data:', err);
        setError(err.message);
        // Fallback to mock data
        const mockPosts = instagramService.getMockData();
        setPosts(mockPosts);
        setProfile({
          username: '_ras.juan_',
          name: 'Juan-Ridge Isaacs',
          profile_picture_url: 'https://via.placeholder.com/150',
          biography: 'Visual Artist & Student'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, [limit]);

  return { posts, profile, loading, error };
};

// Hook for Instagram posts only
export const useInstagramPosts = (limit = 12) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const postsData = await instagramService.getRecentMedia(limit);
        setPosts(postsData);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(err.message);
        const mockPosts = instagramService.getMockData();
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};

// Hook for Instagram profile only
export const useInstagramProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const profileData = await instagramService.getProfileInfo();
        setProfile(profileData);
      } catch (err) {
        console.error('Error fetching Instagram profile:', err);
        setError(err.message);
        setProfile({
          username: '_ras.juan_',
          name: 'Juan-Ridge Isaacs',
          profile_picture_url: 'https://via.placeholder.com/150',
          biography: 'Visual Artist & Student'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};
