import React from "react";

const ToDoList = ({tasks,removeTask,changeStatus}) => {
   return( 
    <div className='toDoList'>
      { tasks.map((task)=>{
        console.log(task)
        return (
          <li key={task.id} className='task' > {task.bodyTask} 
          <button   onClick={()=>changeStatus(task.id)}>isDone</button>
          <button   onClick={()=>removeTask(task.id)}>Delete</button>
        </li>
        )
      })
    }
    </div>
   )
}

export default ToDoList;