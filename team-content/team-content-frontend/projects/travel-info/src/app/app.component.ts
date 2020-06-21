import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  public location = 'Breda';

  public constructor(cd: ChangeDetectorRef) {
    window.addEventListener('locationSelected', (event: any) => {
      this.location = event.detail.name;
      cd.detectChanges();
    });
  }
}
