import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

const suggestionOptions = [
  'Moscow',
  'London',
  'Ohio',
  'India',
  'Japan',
  'Amsterdam',
  'New York'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  public location = 'Breda';
  public suggestions = [...suggestionOptions];

  public constructor(private cd: ChangeDetectorRef) {
    window.addEventListener('locationSelected', (event: any) => {
      this.location = event.detail.name;
      this.suggestions = this.shuffle([...suggestionOptions]);
      cd.detectChanges();
    });
  }

  private shuffle(a: string[]) {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
