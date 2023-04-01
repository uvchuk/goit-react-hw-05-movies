import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from 'components/Context/Context';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();

const Movies = () => {
  const { base_url, poster_sizes } = useUser();
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    if (!query) return;
    setPage(1);
    moviesApi
      .searchMovies(query, page)
      .then(({ results }) => setMatches(results))
      .finally(setPage(prevPage => prevPage + 1));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleGetQuery = evt => {
    evt.preventDefault();
    setQuery(evt.target[0].value);
  };

  const onLoadMore = () => {
    moviesApi
      .searchMovies(query, page)
      .then(({ results }) => setMatches([...matches, ...results]))
      .finally(setPage(prevPage => prevPage + 1));
  };

  if (matches) {
    return (
      <>
        <form onSubmit={handleGetQuery}>
          <input></input>
          <button type="submit">Пошук</button>
        </form>
        {matches.length > 0 && (
          <ul>
            {matches.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link to={`${id}`}>
                  <img
                    src={base_url + poster_sizes[2] + poster_path}
                    alt={title}
                  ></img>
                  <p> {title}</p>
                </Link>
              </li>
            ))}
            <button onClick={onLoadMore}>Наступні</button>
          </ul>
        )}
      </>
    );
  } else {
    return (
      <form onSubmit={handleGetQuery}>
        <input></input>
        <button type="submit">Пошук</button>
      </form>
    );
  }
};

export default Movies;
