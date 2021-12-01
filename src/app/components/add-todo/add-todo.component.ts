import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'todolist-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todoItemName = '';
  idCounter = 0;

  @Output() addTodo = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addTodo.emit({
      id: this.idCounter,
      title: this.todoItemName,
      isCompleted: false,
    });

    this.idCounter++;
    this.todoItemName = '';
  }
}
