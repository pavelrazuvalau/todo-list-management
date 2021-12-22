import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/app/todo/models/todo.model';
import { generateGuid } from '../../../shared/utils/generate-guid';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'todolist-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<TodoItem>();

  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    assignee: ['', [Validators.required, this.customValidator]],
    dueDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit(ngForm: FormGroupDirective) {
    this.addTodo.emit({
      ...this.todoForm.value,
      dueDate: this.todoForm.value.dueDate.toISOString(),
      id: generateGuid(),
      isCompleted: false,
    });

    this.todoForm.reset();
    ngForm.resetForm();
  }

  private customValidator(control: AbstractControl): ValidationErrors | null  {
    console.log(control);
    // return { customValue: true }
    return null;
  }
}
