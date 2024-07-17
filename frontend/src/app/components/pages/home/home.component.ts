import { Component, inject } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Foods:Food[] = [];
  foodService : FoodService = inject(FoodService)

  constructor(){
  }
  ngOnInit(){
    this.Foods = this.foodService.getAllFood()
  }

 
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
    },
    768: {
        items: 2
    },
    1000: {
        items: 2
    }
    },
    
  }

}
