import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent {
  order: Order = new Order();
  foodService: FoodService = inject(FoodService);
  cartService: CartService = inject(CartService);
  userService: UserService = inject(UserService);
  checkoutForm!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.foodService.hideHeader();
    const cart = this.cartService.getCart();
    this.order.items = cart.cartItems;
    this.order.totalPrice = cart.totalPrice;
    console.log(this.userService);
    
  }

  ngOnInit() {
    let { name } = this.userService.getUser();
    this.checkoutForm = this._fb.group({
      name: [name],
      address: [''],
    });
    console.log(name);
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder(){
    console.log(this.checkoutForm.value);
  }
}
