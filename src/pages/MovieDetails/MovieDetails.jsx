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
import styles from './movieDetails.module.scss';

// Компонент
const MovieDetails = () => {
  const [filmData, setFilmData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // навігація
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPage = location.state?.from || '/';

  // go back
  const toPrevPage = () => {
    navigate(prevPage);
  };

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
    <div className={`${styles.detailsWrapper}`}>
      {isLoading && <Spinner />}
      {error && <p>{error.massage}</p>}

      <Button type="button" onClickBtn={toPrevPage}>
        Go back
      </Button>
      {filmData && (
        <div className={`${styles.filmData}`}>
          {poster_path && (
            <img
              className={`${styles.img}`}
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
        <h3>Additional Info:</h3>
        <div className={`${styles.addInfo}`}>
          <Link
            className={`${styles.link}`}
            to={`cast`}
            state={{ from: prevPage }}
          >
            Cast
          </Link>
          <Link
            className={`${styles.link}`}
            to={`reviews`}
            state={{ from: prevPage }}
          >
            Reviews
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
