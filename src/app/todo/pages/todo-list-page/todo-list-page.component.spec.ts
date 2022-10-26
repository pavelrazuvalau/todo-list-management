import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPageComponent } from './todo-list-page.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import * as TodoActions from '../../store/actions/todo.actions';

const mockTodo: TodoItem = {
  id: '1',
  title: '2',
  assignee: '3',
  dueDate: '4',
  isCompleted: true,
}

@Component({
  selector: 'todolist-add-todo',
  template: '',
})
class MockAddTodoComponent {
  // @Output() addTodo = new EventEmitter();
}

describe('TodoListPageComponent', () => {
  let component: TodoListPageComponent;
  let fixture: ComponentFixture<TodoListPageComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListPageComponent, MockAddTodoComponent ],
      providers: [ provideMockStore({ initialState: {} }) ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add todo', () => {
    jest.spyOn(store, 'dispatch');

    const form = fixture.debugElement.query(By.directive(MockAddTodoComponent));
    form.triggerEventHandler('addTodo', mockTodo);
    // form.componentInstance.addTodo.emit(mockTodo);

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(TodoActions.addTodo({ todo: mockTodo }));
  });
});
