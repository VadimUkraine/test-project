import React from 'react';
import './TodoCompleteTasks.scss';
import TodoTask from '../TodoTask'



export const TodoCompleteTasks = ({completeTasks = []}) => { 
  return (
    <div className="complete-tasks" >
      <p className="complete-tasks__title">Complete ({completeTasks.length})</p>
      {completeTasks.map(item =>  <TodoTask task={item} key={item.id}/>)}        
    </div>
  );
}

export default TodoCompleteTasks;
