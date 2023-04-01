import React, { useEffect, useState, createContext, useContext } from 'react';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const Context = ({ children }) => {
  const [config, setConfig] = useState(null);
  useEffect(() => {
    moviesApi.getMovie('config').then(({ images }) => setConfig(images));
  }, []);
  if (!config) return;
  const { base_url, poster_sizes } = config;
  return (
    <UserContext.Provider value={{ base_url, poster_sizes }}>
      {children}
    </UserContext.Provider>
  );
};
