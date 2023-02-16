import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';

const getClassName = ({ isActive }) => {
  const className = isActive
    ? `${styles.navlink} ${styles.active}`
    : styles.navlink;
  return className;
};

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getClassName} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default NavBar;
