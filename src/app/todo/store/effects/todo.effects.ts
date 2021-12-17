import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';
import * as TodoActions from '../actions/todo.actions';
import { catchError, finalize, map, of, switchMap, switchMapTo, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import * as fromRoot from '../../../store/reducers/app.reducer';
import * as AppActions from '../../../store/actions/app.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.AppState>,
    private todoService: TodoService,
  ) {
  }

  fetchTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      tap(() => this.store.dispatch(AppActions.setLoadingState({ isLoading: true }))),
      switchMapTo(
        this.todoService.getTodos().pipe(
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(() => of(TodoActions.loadTodosFailed())),
          finalize(() => this.store.dispatch(AppActions.setLoadingState({ isLoading: false })))
        ),
      ),
    ),
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      tap(() => this.store.dispatch(AppActions.setLoadingState({ isLoading: true }))),
      switchMap(({ todo }) =>
        this.todoService.addTodo(todo).pipe(
          map(todos => TodoActions.addTodoSuccess({ todo })),
          catchError(() => of(TodoActions.addTodoFailed())),
          finalize(() => this.store.dispatch(AppActions.setLoadingState({ isLoading: false })))
        ),
      ),
    ),
  );

  toggleTodo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TodoActions.toggleTodo),
        switchMap(({ todo }) => this.todoService.toggleComplete(todo)))
    , { dispatch: false })
}
