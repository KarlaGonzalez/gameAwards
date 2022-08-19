import { Component } from '@angular/core';
//import { setTheme } from 'ngx-bootstrap/utils'; // works?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    //setTheme('bs3'); // or 'bs4' // works?
  }
  title = 'last';
  isNavbarCollapsed = true;
}
