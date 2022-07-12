import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId, 1).then(el => setReviews(el.results));
  }, [movieId, reviews]);

  return (
    <ul className={s.reviews}>
      {reviews.map(({ id, author, content }) => (
        <li className={s.item} key={id}>
          <h3 className={s.name}>{author}</h3>
          <p className={s.text}>{content}</p>
        </li>
      ))}
    </ul>
  );
}
