import React from 'react';
import Header from 'components/Header';
import styles from './ToDoPage.module.scss';

const ToDoPage = () => {
  return(
    <>
    <Header />
    <h2 className={styles.toDoPageTitle}>Unusual Todo List</h2>
    </>
  )
}

export default ToDoPage;