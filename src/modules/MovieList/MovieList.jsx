import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import MovieItem from './MovieItem/MovieItem';
import styles from './movieList.module.scss';

const MovieList = ({ movies }) => {
  return (
    <>
      <h1>Trending movies</h1>
      <ul className={styles.movies}>
        {movies?.map(({ id, poster_path, release_date, title }) => {
          return (
            <MovieItem
              key={nanoid()}
              id={id}
              imgURL={poster_path}
              dateYear={release_date}
              movieTitle={title}
            />
          );
        })}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default memo(MovieList);
