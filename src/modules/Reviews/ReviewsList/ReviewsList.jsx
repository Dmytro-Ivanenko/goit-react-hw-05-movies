import React from 'react';
import PropTypes from 'prop-types';

import styles from './reviewsList.module.scss';

const ReviewList = ({ review }) => {
  return (
    <>
      <h3>Reviews:</h3>
      {review.length === 0 && <p>There are no reviews..</p>}
      {review.length > 0 && (
        <ul className={styles.ReviewList}>
          {review.map(({ id, author, content, created_at }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
                <p>Creatimg date: {created_at}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

ReviewList.propTypes = {
  review: PropTypes.array.isRequired,
};

export default ReviewList;
