import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Movie.module.css';

export default function Movie({ movie }) {
  return (
    movie && (
      <div className={s.movie}>
        <img
          className={s.image}
          src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
          alt={movie.title}
        />
        <div className={s.wrap}>
          <h2 className={s.title}>
            {movie.title}
            <span className={s.year}>({movie.release_date.slice(0, 4)})</span>
          </h2>
          <p className={s.vote}>
            User score:
            <span className={s.voteValue}>{movie.vote_average * 10}%</span>
          </p>
          <h3 className={s.subtitle}>Overview</h3>
          <p className={s.text}>{movie.overview}</p>
          <h3 className={s.subtitle}>Genres</h3>
          <p className={s.text}>{movie.genres.map(el => el.name).join(', ')}</p>
          <Link to="cast" className={s.btn}>
            Cast
          </Link>
          <Link to="reviews" className={s.btn}>
            Reviews
          </Link>
        </div>
      </div>
    )
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
