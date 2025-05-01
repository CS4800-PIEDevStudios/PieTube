import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // listen to route changes

  useEffect(() => {
    setIsLoading(true); // reset loading on route change

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // loading duration

    return () => clearTimeout(timeout);
  }, [location.pathname]); // rerun on path change

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
