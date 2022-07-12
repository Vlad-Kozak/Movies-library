import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Gallery.module.css';

export default function Gallery({ movies }) {
  return (
    <ul className={s.gallery}>
      {movies.map(({ id, poster_path, title }) => (
        <li className={s.item} key={id}>
          <Link to={`/goit-react-hw-05-movies/movies/${id}`}>
            <img
              className={s.image}
              src={'https://image.tmdb.org/t/p/w500/' + poster_path}
              alt={title}
            />
            <p className={s.title}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
