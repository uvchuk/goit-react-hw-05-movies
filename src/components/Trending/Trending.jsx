import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConfig } from 'components/Context/Context';
import { List } from './Trending.styled';

const Trending = ({ trending }) => {
  const { base_url, poster_sizes } = useConfig();
  const location = useLocation();
  const limitStr = (str, num) =>
    str.length > num ? str.slice(0, num) + '...' : str;
  return (
    <List>
      {trending.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <img
              src={base_url + poster_sizes[2] + poster_path}
              alt={title}
            ></img>
            <p>{limitStr(title, 20)}</p>
          </Link>
        </li>
      ))}
    </List>
  );
};

export default Trending;
