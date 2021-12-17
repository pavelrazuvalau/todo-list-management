import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as todoActions from '../actions/todo.actions';
import { TodoItem } from '../../models/todo.model';

export interface TodoState {
  todos: TodoItem[];
}

export const initialState: TodoState = {
  todos: [],
}

export const todoReducer = createReducer(
  initialState,
  on(todoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos
  })),
  on(todoActions.toggleTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(storedTodo => storedTodo.id === todo.id ? { ...storedTodo, isCompleted: !storedTodo.isCompleted } : storedTodo)
  })),
  on(todoActions.addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),
)

export const getTodoState = createFeatureSelector<TodoState>('todos');
export const getTodos = createSelector(
  getTodoState,
  (state: TodoState) => state.todos
);
