import { inject, Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { Foods } from '../data';
import { BehaviorSubject, filter, map, Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  isSubpage = new BehaviorSubject<boolean>(false);
  http: HttpClient = inject(HttpClient);
  constructor() {}

  getAllFood() {
    let URL = 'http://localhost:4000/foodItems/foods';
    return this.http.get<Food[]>(URL);
  }

  getFoodBySearchTerm(term: string) {
    return this.getAllFood().pipe(
      map((food) => {
        return food.filter(
          (food) => food.category.toLowerCase() == term.toLowerCase()
        );
      })
    );
  }

  getFoodById(id: string) {
    return this.getAllFood().pipe(
      map((food) => {
        return food.find((food) => food.id == id) ?? new Food();
      })
    );
  }
}
