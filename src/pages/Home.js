import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';

const Home = () => {
  const [config, setConfig] = useState(null);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    MoviesAPI.getConfig().then(({ images }) => setConfig(images));
    MoviesAPI.getTrending().then(({ results }) => setTrending(results));
  }, [config, trending]);

  if (trending && config) {
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
  }
};

export default Home;
