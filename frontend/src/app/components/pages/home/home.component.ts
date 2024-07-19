import { Component, inject, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Foods: Food[] = [];
  ActualFoods: Food[] = [];
  foodService: FoodService = inject(FoodService);

  public masonry!: NgxMasonryComponent;
  options: NgxMasonryOptions = {
    gutter: 10,
    columnWidth: 200,
    fitWidth: true,
    initLayout: false,
  };

  constructor() {}

  ngOnInit() {
    // this.Foods = this.foodService.getAllFood()
    this.foodService.getAllFood().subscribe((allFood) => {
      this.Foods = allFood;
      this.ActualFoods = allFood;
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  filters(category: string) {
    if (category == 'app') {
      this.Foods = this.ActualFoods;
      return;
    }
    this.Foods = this.ActualFoods.filter((item) => item.category == category);
    console.log(this.Foods);
  }
}
