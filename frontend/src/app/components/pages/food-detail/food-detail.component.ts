import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})
export class FoodDetailComponent {
  foodService: FoodService = inject(FoodService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  route:Router= inject(Router)
  foodId!: string;
  foodDetail!: Food 
  cartService:CartService = inject(CartService)
  constructor() {
    this.foodService.isSubpage.next(true);
    this.activatedRoute.params.subscribe((params) => {
      this.foodId = params['id'];
    });

    if (this.foodId) {
      this.foodDetail = this.foodService.getFoodById(this.foodId);
    }
  }

  addToCart(food:Food){
    this.cartService.addToCart(food)
    this.route.navigateByUrl('/cart-page');
  }
}
