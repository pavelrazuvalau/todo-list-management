import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TodoService } from './services/todo.service';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    TodoListPageComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  exports: [
    TodoListPageComponent
  ],
  imports: [
    TodoRoutingModule,
    CommonModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
