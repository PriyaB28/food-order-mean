import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';
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
  orderService: OrderService = inject(OrderService)
  checkoutForm!: FormGroup;
  router: Router = inject(Router);
  constructor(private _fb: FormBuilder) {
    this.foodService.hideHeader();
    const cart = this.cartService.getCart();
    this.order.items = cart.cartItems;
    this.order.totalPrice = cart.totalPrice;
    this.order.totalPrice = cart.totalPrice;
    
  }

  ngOnInit() {
    let { name } = this.userService.getUser();
    this.checkoutForm = this._fb.group({
      name: [name],
      address: [''],
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder(){
    this.order.name = this.fc['name'].value
    this.orderService.createOrder(this.order).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('/order-payment');
      }
    })
  }
}
