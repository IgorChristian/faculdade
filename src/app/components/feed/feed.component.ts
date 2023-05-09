import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/food';
import { FoodService } from 'src/app/food.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  foods$: Observable<Food[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    const promise = this.foodService.obterTodasReceitas();
    this.foods$ = from(promise);
  }
/*
  obterTodasReceitas():void{
    this.foodService.obterTodos().subscribe(response:Food[])=>{
      this.foods = response;
  }
*/
}
