import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(el => setCast(el.cast));
  }, [movieId]);

  return (
    <ul className={s.cast}>
      {cast.map(({ id, name, profile_path, character }) => (
        <li className={s.actor} key={id}>
          <img
            className={s.image}
            src={'https://image.tmdb.org/t/p/w500/' + profile_path}
            alt={name}
          />
          <div className={s.wrap}>
            <h3 className={s.name}>{name}</h3>
            <p className={s.character}>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
