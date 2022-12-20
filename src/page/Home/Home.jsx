import getFilms from 'getFilms/getFilms';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './Home.module.css';

const Home = () => {
  const [trend, setTernd] = useState([]);
  const API_KEY = '40e5fb6b16c3c0f0cef94ac33091be49';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const location = useLocation();

  useEffect(() => {
    getFilms(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(
      ({ results }) => setTernd([...results])
    );
  }, []);

  return (
    <section>
      <h2 className={css.trend__title}>Today in trend:</h2>
      <ul className={css.trend__list}>
        {trend.map(({ original_title, id, original_name }) => {
          return (
            <li key={id} className={css.trend__item}>
              <Link
                to={`movies/${id}`}
                className={css.trend__link}
                state={{ from: location }}
              >
                {original_title || original_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
