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
    /*this.foods$ = from(promise);*/

  /*obterTodasReceitas().void {
      this.foodService.obterTodos().subscribe(response:food[])=>{
      this.foods = response;*/
  }
  }
/*
  obterTodasReceitas():void{
    this.foodService.obterTodos().subscribe(response:Food[])=>{
      this.foods = response;
  }

}*/

function obterTodasReceitas() {
  throw new Error('Function not implemented.');
}