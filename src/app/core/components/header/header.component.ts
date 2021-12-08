import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todolist-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = 'Todo list management app';

  constructor() { }

  ngOnInit(): void {
  }

}
