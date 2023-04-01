import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useConfig } from 'components/Context/Context';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
const moviesApi = new MoviesAPI();

const Credits = () => {
  const { base_url, poster_sizes } = useConfig();
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getMovie('credits', movieId).then(({ cast }) => setCredits(cast));
  }, [movieId]);

  if (credits) {
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
