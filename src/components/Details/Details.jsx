import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useConfig } from 'components/Context/Context';
import { Card, StyledLink } from './Details.styled';

const Details = ({ details, children }) => {
  const { base_url, poster_sizes } = useConfig();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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
    // production_companies,
    budget,
  } = details;

  return (
    <>
      <StyledLink to={backLink.current}>Back</StyledLink>
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
          {/* <p>
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
          </p> */}
          {children}
        </div>
      </Card>
    </>
  );
};

export default Details;
