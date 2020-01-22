import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './actionTypes';

const url = 'https://jsonplaceholder.typicode.com/todos';

// .......................................
// payload types
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
// .......................................
// action types
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}
// .......................................
// action creators
// async (redux-thunk)
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  }
}
// sync (default)
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  }
}