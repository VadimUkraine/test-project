import { createAction } from 'redux-actions';
import * as a from './constants';


export const getTasksSucceed = createAction(
  a.GET_TASKS_SUCCEED,
  data => data
);

export const getTasksFailed = createAction(
  a.GET_TASKS_FAILED,
  data => data
);

export const addTaskRequest = createAction(
  a.ADD_TASK_REQUEST,
  data => data
);

export const addTaskSucceed = createAction(
  a.ADD_TASK_SUCCEED,
  data => data
);

export const addTaskFailed = createAction(
  a.ADD_TASK_FAILED,
  data => data
);

export const deleteTaskRequest = createAction(
  a.DELETE_TASK_REQUEST,
  data => data
);

export const deleteTaskSucceed = createAction(
  a.DELETE_TASK_SUCCEED,
  data => data
);

export const deleteTaskFailed = createAction(
  a.DELETE_TASK_FAILED,
  data => data
);

export const updateTaskRequest = createAction(
  a.UPDATE_TASK_REQUEST,
  data => data
);

export const updateTaskSucceed = createAction(
  a.UPDATE_TASK_SUCCEED,
  data => data
);

export const updateTaskFailed = createAction(
  a.UPDATE_TASK_FAILED,
  data => data
);







