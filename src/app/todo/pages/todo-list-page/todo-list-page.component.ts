import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

import * as fromTodos from '../../store/reducers/todo.reducer';
import * as TodoActions from '../../store/actions/todo.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todolist-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  todoList$ = this.store.select(fromTodos.getTodos)

  constructor(private store: Store<fromTodos.TodoState>) {}

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  onAddTodo(todo: TodoItem) {
    this.store.dispatch(TodoActions.addTodo({ todo }));
  }

  onToggleComplete(todo: TodoItem) {
    this.store.dispatch(TodoActions.toggleTodo({ todo }));
  }

}
