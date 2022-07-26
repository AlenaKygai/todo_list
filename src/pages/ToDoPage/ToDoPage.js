import React from 'react';
import Header from 'components/Header';
import styles from './ToDoPage.module.scss';
import ToDoForm from 'components/ToDo/ToDoForm';

const ToDoPage = () => {
  return(
    <>
    <Header />
    <h2 className={styles.toDoPageTitle}>Unusual Todo List</h2>
    <ToDoForm />
    </>
  )
}

export default ToDoPage;