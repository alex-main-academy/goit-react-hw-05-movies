import getFilms from 'getFilms/getFilms';
import { Suspense, useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import css from './MovieDetails.module.css';
import StyledLink from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [url, setUrl] = useState({});

  const API_KEY = '40e5fb6b16c3c0f0cef94ac33091be49';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const location = useLocation();
  let isLocationTrue = useRef(true);

  useEffect(() => {
    if (isLocationTrue.current) {
      getFilms(
        `${BASE_URL}/movie/${movieId.toString()}?api_key=${API_KEY}&language=en-US`
      ).then(setFilm);

      setUrl(location);
    } else {
      return;
    }

    isLocationTrue.current = false;
  }, [movieId, location]);

  if (!film) {
    return null;
  }

  const { title, poster_path, overview, genres } = film;

  return (
    <section>
      <Link
        to={url.state ? url.state.from : '/'}
        className={css.details__button}
      >
        Go back
      </Link>
      <div className={css.details__wrapper}>
        <div className={css.details__image}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="film descr"
          />
        </div>
        <div className={css.details__info}>
          <h2>{title}</h2>
          <p className={css.details__name}>Overview:</p>
          <p>{overview}</p>
          <p className={css.details__name}>Genres:</p>
          <ul>
            {genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
      <p>Additional information</p>
      <ul className={css.info__list}>
        <li>
          <StyledLink to="cast" className={css.info__link}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" className={css.info__link}>
            Reviews
          </StyledLink>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
