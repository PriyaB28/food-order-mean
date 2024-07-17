import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  Foods: Food[] = [];
  foodService: FoodService = inject(FoodService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.foodService.isSubpage.next(true);

    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        const food = this.foodService.getFoodBySearchTerm(params['searchTerm']);
        console.log(typeof food);

        if (food.length != 0) {
          this.Foods = food;
        } else {
          this.Foods = this.foodService.getAllFood();
        }
      } else {
        this.Foods = this.foodService.getAllFood();
      }
    });
  }
}
