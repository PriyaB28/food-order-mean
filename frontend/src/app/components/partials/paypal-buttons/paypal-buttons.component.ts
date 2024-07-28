import { Component, inject, Input } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig, IPurchaseUnit } from 'ngx-paypal';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-paypal-buttons',
  templateUrl: './paypal-buttons.component.html',
  styleUrls: ['./paypal-buttons.component.css'],
})
export class PaypalButtonsComponent {
  @Input() order: Order = new Order();
  orderService: OrderService = inject(OrderService);
  toasterService:ToastrService = inject(ToastrService)
  ngOnInit() {
    this.initConfig();
  }
  public payPalConfig?: IPayPalConfig;

  private initConfig(): void {
    const self = this;
    this.payPalConfig = {
      currency: 'EUR',
      clientId:
        'ARW-P7m7Gb7ZiOQcWoDAh-HyqtQeZWcqLx1SqJSnb9HN810r_2U7CztzI-3vu1rNHNxvQT8VbPkPOiIs',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: self.order.totalPrice.toString(),
              },
            },
          ],
        },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: async (data, actions) => {
        const orderID = await actions.order.capture();
        this.order.paymentId = orderID.id;
        this.orderService.pay(this.order).subscribe({
          next: (response) => {
            this.toasterService.success('Order has been paid','Order Paid');
          },
          error: (error) => {
            console.error(error);
          },
        });
        console.log(orderID);
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        // actions.order.get().then(details => {
        //   console.log('onApprove - you can get full order details inside onApprove: ', details);
        // });
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
