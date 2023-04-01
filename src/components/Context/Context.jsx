import React, { useEffect, useState, createContext, useContext } from 'react';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();
const ConfigContext = createContext();
export const useConfig = () => useContext(ConfigContext);

export const Context = ({ children }) => {
  const [config, setConfig] = useState(null);
  useEffect(() => {
    moviesApi.getMovie('config').then(({ images }) => setConfig(images));
  }, []);
  if (!config) return;
  const { base_url, poster_sizes } = config;
  return (
    <ConfigContext.Provider value={{ base_url, poster_sizes }}>
      {children}
    </ConfigContext.Provider>
  );
};
