import React, { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';

import Spinner from '../../shared/components/Spinner/Spinner';
import { getMovieAddInfo } from '../../shared/services/movie-api';
import Button from '../../shared/components/Button/Button';

const MovieDetails = () => {
  const [filmData, setFilmData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Навігація
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPage = location.state?.from || '/';
  const toPrevPage = () => navigate(prevPage);

  //  запит деталей фільму:
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const data = await getMovieAddInfo(movieId);

        setFilmData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // деталі фільму
  const { title, poster_path, overview, genres, vote_average } = filmData;

  const genresString = genres?.map(({ name }) => name).join(', ');

  // РЕНДЕР
  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}

      <Button type="button" onClickBtn={toPrevPage}>
        Go back
      </Button>
      {filmData && (
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          )}

          <div>
            <h2>{title}</h2>
            <p>Rating: {vote_average}</p>

            <h3>Description</h3>
            <p>{overview}</p>

            <h3>Genres</h3>
            <p>{genresString}</p>
          </div>
        </div>
      )}

      <div>
        <p>Additional Info</p>
        <div>
          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
