import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './movieItem.module.scss';

const MovieItem = ({ imgURL, id, movieTitle = '', dateYear = 'some year' }) => {
  const location = useLocation();
  return (
    <li className={styles.MovieItem}>
      <Link
        className={`${styles.link}`}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img
          className={styles.MovieItem_image}
          src={
            imgURL === null
              ? 'https://media0.giphy.com/media/MaUARAPy1EfXS4P0H5/giphy.gif?cid=6c09b952llb5gb5odl4tosfmbrad3iiwjny29y5iuhwl5pya&rid=giphy.gif&ct=s'
              : `https://image.tmdb.org/t/p/w500${imgURL}`
          }
          alt={movieTitle}
        />

        <div className="info">
          <p className="info-title">{movieTitle}</p>
          <div className="info-other">
            <p className="info-item">{dateYear}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgURL: PropTypes.string,
  movieTitle: PropTypes.string.isRequired,
  dateYear: PropTypes.string,
};

export default MovieItem;
