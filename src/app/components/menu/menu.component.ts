import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  template: `<button (click)="irParaCadReceita()">Cadastrar nova</button>`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }

  irParaCadReceita() {
    this.router.navigate(['/cadas-receita']);
}
}
