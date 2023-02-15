import React from 'react';
import PropTypes from 'prop-types';
import styles from './movieItem.module.scss';

const MovieItem = ({
  imgURL,
  onClick,
  altText = 'movie image',
  title = '',
  dateYear = 'some year',
}) => {
  return (
    <li className={styles.MovieItem} onClick={onClick}>
      <img className={styles.MovieItem_image} src={imgURL} alt={altText} />

      <div className="info">
        <p className="info-title">${title}</p>
        <div className="info-other">
          <p className="info-item">${dateYear}</p>
        </div>
      </div>
    </li>
  );
};

MovieItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  dateYear: PropTypes.string,
};

export default MovieItem;
