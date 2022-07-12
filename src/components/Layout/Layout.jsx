import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense
        fallback={<PacmanLoader color="#1e90ff" cssOverride={{ margin: 30 }} />}
      >
        <Outlet />
      </Suspense>
    </>
  );
}
