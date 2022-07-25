import React from 'react';
import Header from 'components/Header';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return(
    <>
    <Header />
    <div className={styles.homePageTitle} >
      <h2> TASK WITH HOOKS:</h2>
      <h3>MAKE TODO LIST</h3>
    </div>
    </>
    
  )
}

export default HomePage;