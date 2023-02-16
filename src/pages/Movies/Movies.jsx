import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../../modules/MovieList/MovieList';
import Spinner from '../../shared/components/Spinner/Spinner';
import Searchbar from '../../modules/Searchbar/Searchbar';
import { searchMovies } from '../../shared/services/movie-api';

// import styles from './movies.module.scss';
const Movies = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');

    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search);
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      getMovie();
    }
  }, [searchParams]);

  const handleSubmit = search => {
    setSearchParams({ search });
  };

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}
      <Searchbar onSubmit={handleSubmit} />
      {items.length > 0 && <MovieList movies={items} />}
    </>
  );
};

export default Movies;
