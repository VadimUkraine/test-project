import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_TASKS_REQUEST, ADD_TASK_REQUEST, DELETE_TASK_REQUEST, UPDATE_TASK_REQUEST }  from './constants'
import { updateTaskSucceed, getTasksSucceed, getTasksFailed, addTaskSucceed, addTaskFailed, deleteTaskSucceed, deleteTaskFailed } from "./actions";
import {todoService} from './service';


function *updateTask(action) {

  try {

    const result = yield call(todoService.updateTask, action.payload)
    if(result.status === 200){
      yield put(updateTaskSucceed(result.data))
    }
      
  } catch (error) {
    console.warn(error);
    yield put(updateTaskFailed(error))
  }
}

function *deleteTask(action) {

  try {

    const id = action.payload
    const result = yield call(todoService.deleteTask, id)
    if(result){
      yield put(deleteTaskSucceed(id))
    }
      
  } catch (error) {
    console.warn(error);
    yield put(deleteTaskFailed(error))
  }
}

function *addTask(action) {

  try {

    const taskName = action.payload
    const result = yield call(todoService.createTask, taskName)
    yield put(addTaskSucceed(result.data))
      
  } catch (error) {
    console.warn(error);
    yield put(addTaskFailed(error))
  }
}


function *getAllTasks() {

  try {

    const result = yield call(todoService.getAllTasks)
    yield put(getTasksSucceed(result.data))

  } catch (error) {
    console.warn(error);
    yield put(getTasksFailed(error))
  }
}


export default function *todoSagaWatcher() {
  yield takeLatest(GET_TASKS_REQUEST, getAllTasks);
  yield takeLatest(ADD_TASK_REQUEST, addTask);
  yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
  yield takeLatest(UPDATE_TASK_REQUEST, updateTask);  
}
