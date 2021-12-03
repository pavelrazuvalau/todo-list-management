import { Component } from '@angular/core';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'todolist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoList: TodoItem[] = [];
  appTitle = 'Todo list management app';

  constructor() {}

  onAddTodo(item: TodoItem) {
    this.todoList = [...this.todoList, item];
  }

  onToggleComplete(changedItem: TodoItem) {
    this.todoList = this.todoList.map((item) =>
      changedItem.id === item.id
        ? { ...item, isCompleted: !changedItem.isCompleted }
        : item
    );
  }
}
