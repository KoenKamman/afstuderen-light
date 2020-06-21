import { Component, OnInit, ElementRef, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  private readonly elementRef: ElementRef;
  @Input() public location = '';
  @Input() public resource = '';

  constructor(element: ElementRef, cd: ChangeDetectorRef) {
    this.elementRef = element;
  }

  ngOnInit(): void {
  }

  public buttonClicked() {
    this.elementRef.nativeElement.dispatchEvent(new CustomEvent('customEvent', {
      bubbles: true
    }));
  }

}
