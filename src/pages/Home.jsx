import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConfig } from 'components/Context/Context';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();

const Home = () => {
  document.title = 'Trending';
  const { base_url, poster_sizes } = useConfig();
  const [trending, setTrending] = useState(null);
  const location = useLocation();

  useEffect(() => {
    moviesApi.getMovie('trending').then(({ results }) => setTrending(results));
  }, []);

  if (trending) {
    return (
      <ul>
        {trending.map(({ id, poster_path, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
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
