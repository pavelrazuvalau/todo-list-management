import { Component, Input, OnChanges } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'todolist-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnChanges {
  @Input() todoList: TodoItem[] = [];
  upcomingTodos: TodoItem[] = [];
  completedTodos: TodoItem[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.handleTodoList();
  }

  onToggleComplete(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
    this.handleTodoList();
  }

  private handleTodoList() {
    this.upcomingTodos = this.todoList.filter((item) => !item.isCompleted);
    this.completedTodos = this.todoList.filter((item) => item.isCompleted);
  }

}
