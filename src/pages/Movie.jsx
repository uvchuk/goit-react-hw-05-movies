import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
import Details from 'components/Details/Details';
const moviesApi = new MoviesAPI();

const Movie = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    moviesApi.getMovie('details', movieId).then(setDetails);
  }, [movieId]);

  if (details) {
    document.title = details.original_title;
    return (
      <Details details={details}>
        <Link to="credits">Актори</Link>
        <Link to="reviews">Огляди</Link>
        <Suspense>
          <Outlet />
        </Suspense>
      </Details>
    );
  }
};

export default Movie;
