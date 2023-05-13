import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CadasReceitaComponent } from 'src/app/components/cadas-receita/cadas-receita.component';
import { FeedComponent } from 'src/app/components/feed/feed.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'feed', component: FeedComponent },
      { path: 'cadas-receita', component: CadasReceitaComponent }
    ]
  }
];