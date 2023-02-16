import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import styles from './cast.module.scss';
import Spinner from '../../shared/components/Spinner/Spinner';
import { getMovieCast } from '../../shared/services/movie-api';

const Cast = () => {
  const [castData, setCatData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const data = await getMovieCast(movieId);

        setCatData(data);
        console.dir(castData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}
    </div>
  );
};

export default Cast;
