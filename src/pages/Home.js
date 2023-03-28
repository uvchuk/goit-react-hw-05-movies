import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [config, setConfig] = useState([]);

  useEffect(() => {
    MoviesAPI.getConfig().then(({ images }) => setConfig(images));
    MoviesAPI.getTrending().then(({ results }) => setTrending(results));
  }, []);
  
  const { base_url, poster_sizes } = config;
  return (
    <ul>
      {trending.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <img
              src={base_url + poster_sizes[3] + poster_path}
              alt={title}
            ></img>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
