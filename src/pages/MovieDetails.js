import { Card } from 'components/Details/Details.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';

const MovieDetails = () => {
  const [config, setConfig] = useState([]);
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    MoviesAPI.getConfig().then(({ images }) => setConfig(images));
    MoviesAPI.getMovieDetails(movieId).then(setDetails);
  }, []);
  const { base_url, poster_sizes } = config;
  const {
    original_title,
    title,
    tagline,
    poster_path,
    vote_average,
    overview,
    release_date,
    genres,
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
        <p>Вийшов в прокат: {release_date}</p>
        <p>
          Жанр:{' '}
          {genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </p>
        <p>{overview}</p>
      </div>
    </Card>
  );
};

export default MovieDetails;
