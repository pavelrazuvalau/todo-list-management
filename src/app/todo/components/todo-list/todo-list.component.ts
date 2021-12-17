import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/todo/models/todo.model';

@Component({
  selector: 'todolist-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoList: TodoItem[] | null = [];
  @Output() toggleComplete = new EventEmitter();

  constructor() { }

  onToggleComplete(item: TodoItem) {
    this.toggleComplete.emit(item);
  }

}
