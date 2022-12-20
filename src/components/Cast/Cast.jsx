import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);

  const API_KEY = '40e5fb6b16c3c0f0cef94ac33091be49';
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(({ cast }) => setActor(cast))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <ul className={css.cast__list}>
      {actor.map(({ name, id, profile_path }) => {
        return (
          <li key={id}>
            <div className={css.cast__image}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                }
                alt="actor"
              />
            </div>
            <p className={css.cast__name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
