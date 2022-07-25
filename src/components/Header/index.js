import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants';
import styles from '../Header/Header.module.scss';

const Header = () => {
  return(
    <header className={styles.headerToDo}>
      <Link to={ROUTES.HOME}> Home page </Link>
      <Link to={ROUTES.TODO}> To do list </Link>
    </header>
  )
}

export default Header;