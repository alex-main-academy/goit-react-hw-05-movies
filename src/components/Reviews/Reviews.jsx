import getFilms from 'getFilms/getFilms';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const API_KEY = '40e5fb6b16c3c0f0cef94ac33091be49';
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    getFilms(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    ).then(({ results }) => setReviews([...results]));
  }, [movieId]);

  return reviews.length ? (
    <ul className={css.reviews__list}>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don`t have any reviews for this movie...</p>
  );
};

export default Reviews;
