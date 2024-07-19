import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
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
  ActualFoods: Food[] = [];
  foodService: FoodService = inject(FoodService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  options: NgxMasonryOptions = {
    gutter: 10,
    columnWidth: 200,
    fitWidth: true,
    initLayout: false,
  };

  constructor() {
    this.foodService.isSubpage.next(true);

    this.activatedRoute.params.subscribe((params) => {
      console.log();

      if (params['searchTerm']) {
        let food: Food[] = [];
        this.foodService
          .getFoodBySearchTerm(params['searchTerm'])
          .subscribe((foods) => {
            if (foods.length != 0) {
              this.Foods = foods;
            } else {
              // this.Foods = this.foodService.getAllFood();
              this.foodService.getAllFood().subscribe((allFood) => {
                this.Foods = allFood;
                this.ActualFoods = allFood;
              });
            }
          });
      } else {
        this.foodService.getAllFood().subscribe((allFood) => {
          this.Foods = allFood;
          this.ActualFoods = allFood;
        });
      }
    });
  }

  filters(category: string) {
    if (category == 'app') {
      this.Foods = this.ActualFoods;
      return;
    }
    this.Foods = this.ActualFoods.filter((item) => item.category == category);
    console.log(this.Foods);
  }
}
