import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusHighlightDirective } from './directives/status-highlight.directive';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe';

@NgModule({
  declarations: [
    StatusHighlightDirective,
    FilterByStatusPipe,
  ],
  exports: [
    StatusHighlightDirective,
    FilterByStatusPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
