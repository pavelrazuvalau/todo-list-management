import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { TodoEffects } from '../todo.effects';
import { of } from 'rxjs';
import { TodoService } from '../../../services/todo.service';
import * as TodoActions from '../../actions/todo.actions';
import { cold, hot } from 'jest-marbles';

class MockTodoService {
  getTodos() {
    return of([]);
  }
}

describe('Todo effects', () => {
  let store: MockStore;
  let actions$: Actions;
  let effects$: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: {} }),
        provideMockActions(() => actions$),
        TodoEffects,
        { provide: TodoService, useClass: MockTodoService }
      ]
    });

    store = TestBed.inject(MockStore);
    actions$ = TestBed.inject(Actions)
    effects$ = TestBed.inject(TodoEffects)
  });

  it('should fetch todos', done => {
    actions$ = of(TodoActions.loadTodos());
    effects$.fetchTodos$.subscribe(action => {
      expect(action).toEqual(TodoActions.loadTodosSuccess({ todos: [] }));
      done();
    })
  });

  it('should fetch todos using marble testing', () => {
    const expected = cold('-a', { a: TodoActions.loadTodosSuccess({ todos: [] }) });
    actions$ = hot('-a', { a: TodoActions.loadTodos() });

    expect(effects$.fetchTodos$).toBeObservable(expected);
  });
});
