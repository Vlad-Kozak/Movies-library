import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Outlet />
    </>
  );
}
