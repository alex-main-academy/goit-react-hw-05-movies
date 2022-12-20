import getFilms from 'getFilms/getFilms';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const [films, setFilms] = useState([]);
  const location = useLocation();

  const submitMovieName = event => {
    event.preventDefault();
    const searchName = event.target.elements.name.value;

    if (searchName.trim() === '') {
      return;
    }
    setQuery({ query: searchName });
  };

  useEffect(() => {
    if (!query.get('query')) {
      return;
    }
    const API_KEY = '40e5fb6b16c3c0f0cef94ac33091be49';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const FILM_NAME = query.get('query');

    getFilms(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${FILM_NAME}&page=1&include_adult=false`
    ).then(({ results }) => setFilms([...results]));
  }, [query]);

  return (
    <section>
      <form onSubmit={submitMovieName}>
        <input
          type="text"
          placeholder="Enter movie name..."
          name="name"
          className={css.movie__search}
        />
        <button className={css.movie__button}>Search</button>
      </form>
      <ul className={css.movie__list}>
        {films.length ? (
          films.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link
                  to={`${id}`}
                  state={{ from: location }}
                  className={css.movie__link}
                >
                  {title}
                </Link>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </section>
  );
};

export default Movies;
