import { Component, inject } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent {
  orderService: OrderService = inject(OrderService);
  foodService: FoodService = inject(FoodService);
  order: Order = new Order();

  constructor() {
    this.foodService.hideHeader();
  }
  ngOnInit() {
    this.orderService.getNewOrderForCurrentUser().subscribe((order) => {
      this.order = order;
      // console.log(this.order);
    });
  }
}
