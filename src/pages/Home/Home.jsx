import React, { useState, useEffect } from 'react';
import MovieList from '../../modules/MovieList/MovieList';
import Spinner from '../../shared/components/Spinner/Spinner';
import { getTrendsMovies } from '../../shared/services/movie-api';

// import styles from './home.module.scss';
const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getTrendsMovies();
        console.dir(data);
        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}
      {items.length > 0 && <MovieList movies={items} />}
      {/* <Route path='/movies' element={<Movies /> }></Route> */}

      {/* <Route path='/:movieId' element={ }></Route>
        <Route path='/:movieId/cast' element={ }></Route>
        <Route path='/:movieId/reviews' element={ }></Route> */}
    </>
  );
};

export default Home;
