import React from 'react';
import './TodoProgressTasks.scss';
import TodoTask from '../TodoTask'



export const TodoProgressTasks = ({progressTasks =[]}) => { 

  return (
    <div className="progress-tasks" >
      <p className="progress-tasks__title">In progress ({progressTasks.length})</p>
      {progressTasks.map(item =>  <TodoTask task={item} key={item.id}/>)}      
    </div>
  );
}

export default TodoProgressTasks;