import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  public constructor(private injector: Injector) { }

  public ngDoBootstrap(): void {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('travel-info', customElement);
  }
}
