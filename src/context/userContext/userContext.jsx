import { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

export const UserContext = createContext(null);

// Custom hook to use the context with proper error handling
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

// Helper functions for localStorage
const getStoredValue = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    toast.error(`Error reading from localStorage for key ${key}: ${error}`);
    return defaultValue;
  }
};

const setStoredValue = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    toast.error(`Error writing to localStorage for key ${key}: ${error}`);
  }
};

export const UserProvider = ({ children }) => {
  // Initialize state from localStorage or default values
  const [isLoggedIn, setIsLoggedInState] = useState(() => getStoredValue('isLoggedIn', false));

  const [id, setIdState] = useState(() => getStoredValue('id', ''));
  const [user, setUserState] = useState(() => getStoredValue('user', null));

  // Custom setters that also update localStorage
  const setIsLoggedIn = (value) => {
    setIsLoggedInState(value);
    setStoredValue('isLoggedIn', value);
  };

  const setId = (value) => {
    setIdState(value);
    setStoredValue('id', value);
  };

  const setUser = (value) => {
    setUserState(value);
    setStoredValue('user', value);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        id,
        setId,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
