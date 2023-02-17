import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../../shared/components/Spinner/Spinner';
import CastList from './CastList/CastList';
import { getMovieAddInfo } from '../../shared/services/movie-api';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);

        const data = await getMovieAddInfo(movieId, '/credits');

        setCastData(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}
      <CastList cast={castData} />
    </div>
  );
};

export default Cast;
