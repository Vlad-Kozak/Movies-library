import { useState, useEffect } from 'react';
import Gallery from 'components/Gallery/Gallery';
import { getTrending } from 'services/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(r => setMovies(r.results));
  }, []);
  return <Gallery movies={movies} />;
}

export default Home;
