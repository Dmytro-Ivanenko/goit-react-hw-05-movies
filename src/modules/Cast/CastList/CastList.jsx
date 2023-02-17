import React from 'react';
import PropTypes from 'prop-types';

import styles from './castList.module.scss';

const CastList = ({ cast }) => {
  return (
    <>
      <h3>Cast</h3>
      <ul className={styles.castList}>
        {cast?.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                className={`${styles.img}`}
                src={
                  profile_path === null
                    ? 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg'
                    : `https://image.tmdb.org/t/p/w500${profile_path}`
                }
                alt={name}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
