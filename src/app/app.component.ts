import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<app-sidebar></app-sidebar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
