import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private url = 'todos';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(this.url);
  }

  addTodo(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(this.url, item);
  }

  toggleComplete(changedItem: TodoItem): Observable<TodoItem> {
    return this.httpClient.put<TodoItem>(`${this.url}/${changedItem.id}`, { ...changedItem, isCompleted: !changedItem.isCompleted });
  }
}
