import { useState, useCallback } from 'react';

export default function useToDo(){
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFiltredTasks] = useState([]);

  const addTask = useCallback((task)=>{
    setTasks([...tasks,task])
  },[tasks]);
  // console.log(tasks);

  const removeTask = useCallback((taskId)=>{
    const modifiedTasks = tasks.filter(({id})=>id!==taskId);
    setTasks(modifiedTasks);
  },[tasks]);
  
  const changeStatus = useCallback((taskId)=>{

    const modifiedTasks = tasks.map((elem)=>{
      if(elem.id===taskId){
        return({
          ...elem,
          statusTask:!elem.statusTask,
        })
      }
      return elem;
    })
    setTasks(modifiedTasks);
  },[tasks])
  
  const onFilter = (value)=>{
    if(value==='active'){
      const modifiedTasks = tasks.filter(({statusTask})=>statusTask);
      setFiltredTasks(modifiedTasks);
    }else if(value==='done'){
      const modifiedTasks = tasks.filter(({statusTask})=>!statusTask);
      setFiltredTasks(modifiedTasks);
    }else{
      setFiltredTasks([]);
      setTasks(tasks);
    }
  }
  return {
    tasks: filteredTasks.length? filteredTasks: tasks,
    addTask,
    removeTask,
    changeStatus,
    onFilter,
  }
}