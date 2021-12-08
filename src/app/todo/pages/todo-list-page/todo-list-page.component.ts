import { Component, OnInit, Optional } from '@angular/core';
import { TodoItem } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todolist-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  todoList: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  onAddTodo(item: TodoItem) {
    this.todoService.addTodo(item).subscribe(() => {
      this.getTodos();
    });
  }

  onToggleComplete(changedItem: TodoItem) {
    this.todoService.toggleComplete(changedItem).subscribe(() => {
      this.getTodos();
    })
  }

  private getTodos() {
    this.todoService.getTodos().subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

}
