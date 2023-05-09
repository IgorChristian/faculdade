import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environment/environments';
import { Food } from './food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodService: any;
  obterTodasReceitas() {
    this.foodService.obterTodos();
  }

  constructor(private httpClient: HttpClient) { }

  obterTodos () {
    return this.httpClient.get<Food[]>(`${API_PATH}food`).toPromise()
  }

}
