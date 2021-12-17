import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../../models/todo.model';

export const loadTodos = createAction('[Todos] Load');
export const loadTodosSuccess = createAction('[Todos] Load Success', props<{ todos: TodoItem[] }>());
export const loadTodosFailed = createAction('[Todos] Load Failed');

export const addTodo = createAction('[Todos] Add todo', props<{ todo: TodoItem }>());
export const addTodoSuccess = createAction('[Todos] Add todo Success', props<{ todo: TodoItem }>());
export const addTodoFailed = createAction('[Todos] Add todo Failed');

export const toggleTodo = createAction('[Todos] Toggle complete', props<{ todo: TodoItem }>());
