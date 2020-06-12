import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appApprovalState]',
})
export class ApprovalStateDirective implements AfterViewInit {
  @Input('appApprovalState') approvalColor: string;

  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.highlight(this.approvalColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
