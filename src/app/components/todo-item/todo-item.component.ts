import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'todolist-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem | null = null;
  @Output() toggleComplete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleComplete() {
    this.toggleComplete.emit();
  }

}
