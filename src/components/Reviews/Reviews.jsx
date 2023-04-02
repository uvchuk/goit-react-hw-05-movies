import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
import { List } from './Reviews.styled';
const moviesApi = new MoviesAPI();

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getMovie('reviews', movieId).then(setReviews);
  }, [movieId]);

  if (reviews) {
    const { total_results, results } = reviews;
    if (total_results === 0)
      return <p>Ще немає відгуків до поточного фільму</p>;
    else
      return (
        <List>
          {results.map(({ author, content, id, url, updated_at }) => (
            <li key={id}>
              <p>Автор: {author}</p>
              <p>створений:{updated_at}</p>
              <p>
                посилання на огляд:{' '}
                <a href={url} target="_blank" rel="noreferrer">
                  Link
                </a>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </List>
      );
  }
};

export default Reviews;
