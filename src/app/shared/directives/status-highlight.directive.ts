import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[todolistStatusHighlight]'
})
export class StatusHighlightDirective implements OnInit {
  @Input('todolistStatusHighlight') isCompleted: boolean | undefined = false;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    if (this.isCompleted) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'completed');
    }
  }

}
