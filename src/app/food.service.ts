import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environment/environments';
import { food } from './food';
/* import { interval, take, lastValueFrom } from 'rxjs'; */


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
    return this.httpClient.get<food[]>(`${API_PATH}food`).toPromise()
  }

}
