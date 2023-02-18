import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from '../../shared/components/Button/Button';
import styles from './searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (search.trim() !== '') {
      onSubmit(search);
      setSearch('');
    } else {
      Notify.failure('Please enter a search query.');
    }
  };

  const handleChangeInput = e => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.Searchbar}>
      <h1 className={styles.title}>Movie search</h1>

      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter the name of the movie"
          value={search}
          onChange={handleChangeInput}
        />
        <Button type="submit" onClickBtn={handleSubmit}>
          Search
        </Button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
