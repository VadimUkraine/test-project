import React, { useEffect } from 'react';
import TodoList from './pages/TodoList';
import { useDispatch } from 'react-redux';
import {  getTasksRequest } from "./pages/TodoList/actions.js";


export const App: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTasksRequest())  
    }, []);
  


    return (
        <div className="test">
            <TodoList/>
        </div>
    );
};

export default App;

