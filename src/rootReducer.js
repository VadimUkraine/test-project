import { combineReducers } from "redux";
import todoReducer from './pages/TodoList/reducer';



const rootReducer = combineReducers({
  todos: todoReducer,
});


export default rootReducer;
