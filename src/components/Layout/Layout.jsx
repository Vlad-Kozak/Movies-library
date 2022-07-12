import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/goit-react-hw-05-movies">Home</NavLink>
        <NavLink to="/goit-react-hw-05-movies/movies">Movies</NavLink>
      </nav>

      <Outlet />
    </>
  );
}
