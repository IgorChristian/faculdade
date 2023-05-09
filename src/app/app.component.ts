import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'faculdade';

  constructor(private foodService: FoodService){}

  obterTodasReceitas():void{
    this.foodService.obterTodos().subscribe(response:Food[])=>{
      this.foods = response;
    }

  }

}
