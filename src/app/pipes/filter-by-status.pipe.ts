import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Pipe({
  name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {

  transform(value: TodoItem[], isCompleted: boolean): TodoItem[] {
    return value.filter((item) => item.isCompleted === isCompleted);
  }

}
