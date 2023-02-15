import React, { memo } from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';
import styles from './movieList.module.scss';

// передивитись логіку, чи треба тут обробка кліку, інщі пропси

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <ul className={styles.movies}>
      {movies?.map(({ id }) => {
        return <MovieItem key={id} onClick={() => onMovieClick()} />;
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onMovieClick: PropTypes.func,
};

export default memo(MovieList);
