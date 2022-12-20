import StyledLink from './Layout.styled';
import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  const LayoutItems = [
    { path: '/', name: 'Home' },
    { path: 'movies', name: 'Movies' },
  ];

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <ul className={css.header__list}>
          {LayoutItems.map(({ path, name }) => {
            return (
              <li key={path}>
                <StyledLink to={path}>{name}</StyledLink>
              </li>
            );
          })}
        </ul>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
