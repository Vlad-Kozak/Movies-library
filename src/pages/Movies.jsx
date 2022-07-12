import { useState, useEffect } from 'react';
import Form from 'components/Form/Form';
import Gallery from 'components/Gallery/Gallery';
import { getMovieByKeyword } from 'services/api';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setKeyword(searchParams.get('query'));

    if (!keyword) {
      return;
    }

    getMovieByKeyword(keyword).then(r => setMovies(r.results));
  }, [keyword, searchParams]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Gallery movies={movies} />
    </>
  );
}
