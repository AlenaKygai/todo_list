import React from "react";
import cx from 'classnames';
import styles from './ToDoList.module.scss';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = ({tasks,removeTask,changeStatus}) => {
   return( 
    <ul className={styles.toDoList}>
      { tasks.map((task)=>{
        console.log(task)
        return (
          <li key={task.id} className={cx(styles.task,{
              [styles.isDone]:!task.statusTask
            })} >
          <p className={styles.bodyTask}> {task.bodyTask} </p>
          <button  
            className={styles.statusBtn} 
            onClick={()=>changeStatus(task.id)}><DoneIcon/>
          </button>
          <button  className={styles.deleteBtn} onClick={()=>removeTask(task.id)}><DeleteIcon/></button>
        </li>
        )
      })
    }
    </ul>
   )
}

export default ToDoList;