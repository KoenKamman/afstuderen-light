import { Component } from '@angular/core';

const scripts = [
  {src: 'http://localhost:8080/polyfills-es5.js', module: false },
  {src: 'http://localhost:8080/polyfills-es2015.js', module: true },
  {src: 'http://localhost:8080/main-es2015.js', module: true },
  {src: 'http://localhost:8080/main-es5.js', module: false },
  {src: 'http://localhost:8081/polyfills-es5.js', module: false },
  {src: 'http://localhost:8081/polyfills-es2015.js', module: true },
  {src: 'http://localhost:8081/main-es2015.js', module: true },
  {src: 'http://localhost:8081/main-es5.js', module: false },
  {src: 'http://localhost:8082/polyfills-es5.js', module: false },
  {src: 'http://localhost:8082/polyfills-es2015.js', module: true },
  {src: 'http://localhost:8082/main-es2015.js', module: true },
  {src: 'http://localhost:8082/main-es5.js', module: false }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-shell';

  public constructor() {
    const scriptElements = scripts.map(script => {
      const element = document.createElement('script');
      element.setAttribute('src', script.src);
      if (script.module) {
        element.setAttribute('nomodule', '');
      } else {
        element.setAttribute('type', 'module');
      }
      return element;
    });
    const head = document.getElementsByTagName('head')[0];
    scriptElements.forEach(el => head.appendChild(el));
  }
}
