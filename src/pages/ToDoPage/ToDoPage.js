import React from 'react';
import Header from 'components/Header';
import styles from './ToDoPage.module.scss';
import ToDoForm from 'components/ToDo/ToDoForm';
import ToDoList from 'components/ToDo/ToDoList';
import useTodo from '../../hooks/useToDo';

const ToDoPage = () => {
    const {
    tasks,
    addTask,
    removeTask,
    changeStatus,
    onFilter,
  } = useTodo();
  
  return(
    <>
    <Header />
    <h2 className={styles.toDoPageTitle}>Unusual Todo List</h2>
    <ToDoForm addTask={addTask} onFilter={onFilter}/>
    <ToDoList 
      tasks={tasks} 
      removeTask={removeTask} 
      changeStatus={changeStatus}
    />
    </>
  )
}

export default ToDoPage;