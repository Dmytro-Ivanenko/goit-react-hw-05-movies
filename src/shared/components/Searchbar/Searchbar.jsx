import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from '../Button/Button';
import styles from './searchbar.module.scss';

const Searchbar = ({ onSubmit, inputPlaceholder, title }) => {
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
      {title && <h1>{title}</h1>}

      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={inputPlaceholder}
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
  inputPlaceholder: PropTypes.string,
  title: PropTypes.string,
};
export default Searchbar;
