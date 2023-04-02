import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import BtnLoadMore from 'components/BtnLoadMore/BtnLoadMore';
import { StyledLink } from 'components/Details/Details.styled';
const moviesApi = new MoviesAPI();

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const filter = searchParams.get('filter') ?? '';
  const page = searchParams.get('page') ?? 1;
  const searchConfig = Object.fromEntries([...searchParams]);
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
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

  const onLoadMore = () => {
    setSearchParams({ ...searchConfig, page: +page + 1 });
  };

  if (movies) {
    document.title = 'Movies';
    return (
      <>
        <StyledLink to={backLink.current}>Back</StyledLink>
        <SearchForm filter={filter} handleGetQuery={handleGetQuery} />
        {movies.length > 0 && (
          <>
            <MoviesList movies={movies} />{' '}
            <BtnLoadMore onLoadMore={onLoadMore} />
          </>
        )}
      </>
    );
  }
};

export default Movies;
