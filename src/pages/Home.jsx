import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from 'components/Context/Context';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();

const Home = () => {
  const { base_url, poster_sizes } = useUser();
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    moviesApi.getMovie('trending').then(({ results }) => setTrending(results));
  }, []);

  if (trending) {
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
