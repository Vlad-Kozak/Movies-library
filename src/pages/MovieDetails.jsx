import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import Movie from 'components/Movie/Movie';
import Goback from 'components/Goback/Goback';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getMovieDetails(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <>
      <Goback goBack={goBack} />
      <Movie movie={movie} />
      <Outlet />
    </>
  );
}
