import { useEffect, useState } from 'react';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
import Trending from 'components/Trending/Trending';
const moviesApi = new MoviesAPI();

const Home = () => {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    document.title = 'Trending';
    moviesApi.getMovie('trending').then(({ results }) => setTrending(results));
  }, []);

  if (trending) return <Trending trending={trending} />;
};

export default Home;
