import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers/app.reducer';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'todolist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$ = this.store.select(fromRoot.getIsLoading).pipe(debounceTime(0));

  constructor(private store: Store<fromRoot.AppState>) {}
}
