import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useConfig } from 'components/Context/Context';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
import { List } from './Credits.styled';
const moviesApi = new MoviesAPI();

const Credits = () => {
  const { base_url, poster_sizes } = useConfig();
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();
  const limitStr = (str, num) =>
    str.length > num ? str.slice(0, num) + '...' : str;

  useEffect(() => {
    moviesApi.getMovie('credits', movieId).then(({ cast }) => setCredits(cast));
  }, [movieId]);

  if (credits) {
    return (
      <List>
        {credits.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={base_url + poster_sizes[0] + profile_path}
              alt={name}
            ></img>
            <p>{limitStr(name, 10)}</p>
            <p>{limitStr(character, 10)}</p>
          </li>
        ))}
      </List>
    );
  }
};

export default Credits;
