import React, { useState, useEffect } from 'react';
import MovieList from '../../modules/MovieList/MovieList';
import Spinner from '../../shared/components/Spinner/Spinner';
import { getTrendsMovies } from '../../shared/services/movie-api';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await getTrendsMovies();
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}
      {items.length > 0 && <MovieList movies={items} />}
    </>
  );
};

export default Home;
