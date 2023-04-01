import { Card } from 'components/Details/Details.styled';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useUser } from 'components/Context/Context';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();

const Movie = () => {
  const { base_url, poster_sizes } = useUser();
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getMovie('details', movieId).then(setDetails);
  }, [movieId]);

  if (details) {
    const {
      original_title,
      title,
      tagline,
      poster_path,
      vote_average,
      overview,
      release_date,
      genres,
      production_countries,
      production_companies,
      budget,
    } = details;
    document.title = original_title;

    return (
      <Card>
        <div>
          <img src={base_url + poster_sizes[3] + poster_path} alt={title}></img>
          <h1>{original_title}</h1>
        </div>
        <div>
          <h2>{title}</h2>
          {tagline && <p>{tagline}</p>}
          {vote_average && <p>Рейтинг: {vote_average.toFixed(1)}</p>}
          <p>Бюджет: {budget}$</p>
          <p>Вийшов в прокат: {release_date}</p>
          <p>
            Жанр:{' '}
            {genres.map(genre => (
              <span key={genre.name}>{genre.name} </span>
            ))}
          </p>
          <p>
            Країна:{' '}
            {production_countries.map(country => (
              <span key={country.name}>{country.name}</span>
            ))}
          </p>
          <p>{overview}</p>
          <p>
            За підтримки:{' '}
            {production_companies.map(company =>
              company.logo_path ? (
                <img
                  key={company.id}
                  src={base_url + poster_sizes[0] + company.logo_path}
                  alt={company.name}
                ></img>
              ) : (
                <span key={company.id}>{company.name}</span>
              )
            )}
          </p>
          <Link to="credits">Актори</Link>
          <Link to="reviews">Огляди</Link>
          <Outlet />
        </div>
      </Card>
    );
  }
};

export default Movie;
