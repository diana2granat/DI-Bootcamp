// "actions/actions.js"
import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DATE } from './ActionTypes';

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task }
});

export const editTask = (day, taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { day, taskId, updatedTask }
});

export const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId }
});

export const selectDate = date => ({
  type: SELECT_DATE,
  payload: date
});