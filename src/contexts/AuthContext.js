import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('portfolio_auth');
      const authTime = localStorage.getItem('portfolio_auth_time');
      
      if (authStatus === 'true' && authTime) {
        // Check if session is still valid (24 hours)
        const now = new Date().getTime();
        const loginTime = parseInt(authTime);
        const hoursSinceLogin = (now - loginTime) / (1000 * 60 * 60);
        
        if (hoursSinceLogin < 24) {
          setIsAuthenticated(true);
        } else {
          // Session expired
          localStorage.removeItem('portfolio_auth');
          localStorage.removeItem('portfolio_auth_time');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (password) => {
    // Simple password check - you can change this password
    const correctPassword = 'JuanRidge2024!'; // Change this to your preferred password
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('portfolio_auth', 'true');
      localStorage.setItem('portfolio_auth_time', new Date().getTime().toString());
      return { success: true };
    } else {
      return { success: false, error: 'Invalid password' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('portfolio_auth');
    localStorage.removeItem('portfolio_auth_time');
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
