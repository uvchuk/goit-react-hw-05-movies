import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useConfig } from 'components/Context/Context';
import { MoviesList } from 'components/MoviesList/MoviesList.styled';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();

const Movies = () => {
  const { base_url, poster_sizes } = useConfig();
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const filter = searchParams.get('filter') ?? '';
  const page = searchParams.get('page') ?? 1;
  const searchConfig = Object.fromEntries([...searchParams]);
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    document.title = 'Movies';
    if (!searchParams) return;
    moviesApi
      .searchMovies(filter, page)
      .then(({ results }) => setMovies(results));
  }, [filter, page, searchParams]);

  const handleGetQuery = evt => {
    const searchInput = evt.target.value;
    if (searchInput === '') {
      // delete searchConfig.filter;
      return setSearchParams({});
    }
    setSearchParams({ filter: searchInput, page: 1 });
  };

  if (movies) {
    return (
      <>
        <Link to={backLink.current}>Назад</Link>
        <form onSubmit={evt => evt.preventDefault()}>
          <input value={filter} onChange={handleGetQuery}></input>
        </form>
        {movies.length > 0 && (
          <MoviesList>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <img
                    src={base_url + poster_sizes[2] + poster_path}
                    alt={title}
                  ></img>
                  <p> {title}</p>
                </Link>
              </li>
            ))}
          </MoviesList>
        )}
        <button
          onClick={() => setSearchParams({ ...searchConfig, page: +page + 1 })}
          type="button"
        >
          Наступні
        </button>
      </>
    );
  }
};

export default Movies;
