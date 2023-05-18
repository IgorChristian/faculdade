import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Observable, from } from 'rxjs';
import { food } from 'src/app/food';
import { FoodService } from 'src/app/food.service';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
obterTodasReceitas() {
throw new Error('Method not implemented.');
}

  foods$: Observable<food[]> | undefined;
  foods: any;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    const promise = this.foodService.obterTodasReceitas();
  }

  botaoFavoritos(){
    window.alert('O botão Favoritos foi clicado!');
  }

}

