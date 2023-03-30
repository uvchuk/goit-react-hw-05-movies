import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';

const Credits = () => {
  const [config, setConfig] = useState(null);
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.getConfig().then(({ images }) => setConfig(images));
    MoviesAPI.getMovieCredits(movieId).then(({ cast }) => setCredits(cast));
  }, [movieId]);

  if (config && credits) {
    const { base_url, poster_sizes } = config;
    return (
      <div>
        {credits.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={base_url + poster_sizes[0] + profile_path}
              alt={name}
            ></img>
            <p>{name}</p>
            <p>В ролі: {character}</p>
          </li>
        ))}
      </div>
    );
  }
};

export default Credits;
