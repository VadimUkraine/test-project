import { 
  GET_TASKS_SUCCEED, 
  GET_TASKS_FAILED, 
  ADD_TASK_SUCCEED, 
  ADD_TASK_FAILED,
  DELETE_TASK_SUCCEED,
  DELETE_TASK_FAILED,
  UPDATE_TASK_SUCCEED, 
  UPDATE_TASK_FAILED,  
  }  from './constants'
  

const INIT_STATE = {
  list:[],
  errorData: null,
};

export default function todoReducer(state = INIT_STATE, action) {
  switch (action.type) {  
    case GET_TASKS_SUCCEED:
    	return {
        ...state,
        list: action.payload,
        errorData: null,
    };
    case GET_TASKS_FAILED:
    	return {
        ...state,
        errorData: action.payload,
    };	   
    case ADD_TASK_SUCCEED:
    	return {
        list: [...state.list, action.payload],
        errorData: null,
      };
    case ADD_TASK_FAILED:
      return {
        ...state,
        errorData: action.payload,
      };
    case DELETE_TASK_SUCCEED:
    	return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        errorData: null,
    };
    case DELETE_TASK_FAILED:
    	return {
        ...state,
        errorData:  action.payload,
    };
    case UPDATE_TASK_SUCCEED:
    	return {
        ...state,
        list: state.list.map(item => {
          if(item.id === action.payload.id){
            return{
              ...item,
              isComplete: action.payload.isComplete
            }
          }
          return item;
        }),
        errorData: null,
    };
    case UPDATE_TASK_FAILED:
    	return {
        ...state,
        errorData:  action.payload,
    };
    default:    
      return state;
  }
}



