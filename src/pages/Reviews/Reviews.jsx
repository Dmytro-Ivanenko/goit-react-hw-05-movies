import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../../shared/components/Spinner/Spinner';
import ReviewsList from '../../modules/ReviewsList/ReviewsList';
import { getMovieAddInfo } from '../../shared/services/movie-api';

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);

        const data = await getMovieAddInfo(movieId, '/reviews');

        setReviewData(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}
      <ReviewsList review={reviewData} />
    </div>
  );
};

export default Reviews;
