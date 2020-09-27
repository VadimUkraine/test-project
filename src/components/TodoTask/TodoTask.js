import React from 'react';
import './TodoTask.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import {deleteTaskRequest, updateTaskRequest} from '../../pages/TodoList/actions';




export const TodoTask = ({task}) => {

  const dispatch = useDispatch()

  const handleDeleteTask = () =>{
    dispatch(deleteTaskRequest(task.id))
  }

  const handleUpdateTask = () =>{
    dispatch(updateTaskRequest({
      id: task.id,
      body: task.body,
      isComplete: !task.isComplete,
    }))
  }

  return (
    <div className="todo-task" >
     <p className="todo-task__checkbx">
      <input type="checkbox" name={task.body} value={task.id} checked={task.isComplete} onChange={handleUpdateTask}/>
      <span className={cn("todo-task__name", {
        'todo-task__name--completed': task.isComplete
      })}>{task.body}</span>
      </p>
     <p className="todo-task__delete" onClick={handleDeleteTask}>
       <span className="todo-task__task-line_up"></span>
       <span className="todo-task__task-line_down"></span>
     </p>      
    </div>
  );
}

export default TodoTask;