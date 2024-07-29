import { inject, Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { Foods } from '../data';
import { BehaviorSubject, filter, map, Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_ALL_FOOD, FOOD_BY_ID } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  isSubpage = new BehaviorSubject<boolean>(false);
  http: HttpClient = inject(HttpClient);
  constructor() {}

  hideHeader() {
    this.isSubpage.next(true);
  }

  getAllFood() {
    let URL = GET_ALL_FOOD;
    return this.http.get<Food[]>(URL).pipe(
      map((data: any[]) =>
        data.map((item) => {
          return { ...item, id: item._id }; // map _id to id
        })
      )
    );
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

  // getFoodById(id: string) {
  //   return this.getAllFood().pipe(
  //     map((food) => {
  //       return food.find((food) => food.id == id) ?? new Food();
  //     })
  //   );
  // }

  getFoodById(id: string) {
    return this.http.get<Food>(FOOD_BY_ID + id).pipe(
      map((data: any) => {
        return { ...data, id: data._id }; // map _id to id
      })
    );
  }
}
