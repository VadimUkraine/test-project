import React from 'react';
import './TodoTextInput.scss';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';


export const TodoTextInput = ({addTask}) => {

  const dispatch = useDispatch()
  
  const onSubmit  = (values) =>{
    dispatch(addTask({body: values.newTodo}))     
    values.newTodo = ''
  }

  return (
    <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="todo-form">
          <Field
            name="newTodo"
            component="input"
            type="text"
            placeholder="Add new todo..."
            className="todo-form__input"
          /> 
        <button type="submit" className="todo-form__btn"> Add </button>
      </form>
    )}
  />
  );
}

export default TodoTextInput;