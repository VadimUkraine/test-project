import React, {useMemo} from 'react';
import './TodoList.scss';
import TodoTextInput from '../../components/TodoTextInput';
import TodoCompleteTasks from '../../components/TodoCompleteTasks';
import TodoProgressTasks from '../../components/TodoProgressTasks';
import { useSelector } from 'react-redux';
import {addTaskRequest, } from './actions';


export const TodoList = () => {

  const list = useSelector(state => state.todos.list)
  const progressTasks = useMemo(()=>list.filter(item => !item.isComplete), [list]);
  const completeTasks = useMemo(()=>list.filter(item => item.isComplete), [list]);


  return (
    <div className="todo-wrapper" >
      <h2>ToDo List</h2>
      <TodoTextInput addTask={addTaskRequest}/>  
      <TodoProgressTasks progressTasks={progressTasks} />
      <TodoCompleteTasks completeTasks={completeTasks} />   
    </div>
  );
}

export default TodoList;
