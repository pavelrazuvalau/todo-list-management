import { Component } from '@angular/core';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'todolist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: TodoItem[] = [];
  appTitle = 'Todo list management app';

  constructor() {

  }

  onAddTodo(item: TodoItem) {
    this.todoList = [...this.todoList, item];
  }
}
