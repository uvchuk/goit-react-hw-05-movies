import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';

const Movies = () => {
  const [config, setConfig] = useState(null);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    MoviesAPI.getConfig().then(({ images }) => setConfig(images));
    if (!query) return;
    MoviesAPI.searchMovies(query, page).then(setResponse);
  }, [query, page]);

  const handleGetQuery = evt => {
    evt.preventDefault();
    setQuery(evt.target[0].value);
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (response) {
    const { base_url, poster_sizes } = config;
    const { results, total_results } = response;
    return (
      <>
        <form onSubmit={handleGetQuery}>
          <input></input>
          <button type="submit">Пошук</button>
        </form>
        {total_results > 0 && (
          <ul>
            {results.map(({ id, poster_path, title }) => (
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
            <button onClick={handleNextPage}>Наступні</button>
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
