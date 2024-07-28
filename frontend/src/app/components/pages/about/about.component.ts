import { Component, inject } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  foodService: FoodService = inject(FoodService);
  constructor() {
    this.foodService.hideHeader()
  }
}
