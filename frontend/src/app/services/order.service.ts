import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CREATE_ORDER, GET_NEW_ORDER_CURRENT_USER, ORDER_PAY } from '../shared/constants/urls';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
http:HttpClient = inject(HttpClient)
  constructor() { }

  createOrder(order:Order){
     return this.http.post<Order>(CREATE_ORDER,order) 
  }

  getNewOrderForCurrentUser(){
    return this.http.get<Order>(GET_NEW_ORDER_CURRENT_USER)
  }

  pay(order:Order){
    return this.http.post<Order>(ORDER_PAY,order)
  }
}
