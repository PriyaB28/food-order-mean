import { Component, inject } from '@angular/core';
import { Cart } from 'src/app/cart';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  foodService: FoodService = inject(FoodService);
  cartService: CartService = inject(CartService);
  cart!: Cart
  constructor() {
    this.foodService.isSubpage.next(true);
    this.cartService.getCartObservable().subscribe((foods:Cart) => {
      console.log(foods);
      
      this.cart = foods;
    });
    
  }

  increaseQuantity(foodId: string, quantity: number) {
    this.cartService.changeQuantity(foodId, ++quantity);
  }

  decreaseQuantity(foodId: string, quantity: number) {
    this.cartService.changeQuantity(foodId, --quantity);
  }

  removeFromCart(food: Food) {
    this.cartService.removeFromCart(food);
  }
}
