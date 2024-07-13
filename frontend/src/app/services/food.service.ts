import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { Foods } from '../data';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  isSubpage = new BehaviorSubject<boolean>(false)
  constructor() { }

  getAllFood():Food[]{
    return Foods
    
  }

  getFoodBySearchTerm(term:string){
      return this.getAllFood().filter(food => food.category.toLowerCase() == term.toLowerCase())
  }
}
