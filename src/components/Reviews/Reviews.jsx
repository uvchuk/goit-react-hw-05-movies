import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPI from 'services/MoviesAPI/MoviesAPI';
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
        <ul>
          {results.map(({ author, content, id, url, updated_at }) => (
            <li key={id}>
              <p>
                Автор: {author}, створений:{updated_at} , посилання на огляд:
                {url}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      );
  }
};

export default Reviews;
