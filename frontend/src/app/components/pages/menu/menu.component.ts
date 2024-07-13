import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  Foods:Food[] = [];
  foodService : FoodService = inject(FoodService)
  activatedRoute : ActivatedRoute = inject(ActivatedRoute)

  constructor(){
    this.Foods = this.foodService.getAllFood()
    this.activatedRoute.url.subscribe(url=>{
      if(url[0].path){
        this.foodService.isSubpage.next(true)
      }
    });
  }
}
