import { inject, Injectable } from '@angular/core';
import { Cart } from '../cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../cart-item';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartToLocalStorage();
  private cartSubject = new BehaviorSubject<Cart>(this.cart);
  route: Router = inject(Router);
  toastrService: ToastrService = inject(ToastrService);

  constructor() {}

  addToCart(food: Food) {
    let cartItems = this.cart.cartItems.filter(
      (item) => item.food.id == food.id
    );

    if (cartItems.length > 0) {
      this.toastrService.warning('Food already in cart', 'Warning');
      return;
    }
    this.cart.cartItems.push(new CartItem(food));
    this.toastrService.success('Food added to cart successfully', 'Success');
    this.setCartToLocalStorage();
    // return this.cart
  }

  removeFromCart(food: Food) {
    this.cart.cartItems = this.cart.cartItems.filter(
      (item) => item.food.id != food.id
    );
    this.toastrService.success(
      'Food removed from cart successfully',
      'Success'
    );
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItems = this.cart.cartItems.find((item) => item.food.id == foodId);
    if (!cartItems) {
      return;
    }

    cartItems.quantity = quantity;

    cartItems.price = quantity * cartItems.food.price;

    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage() {
    this.cart.totalPrice = this.cart.cartItems.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalQuantity = this.cart.cartItems.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  private getCartToLocalStorage() {
    let cart = localStorage.getItem('Cart');
    return cart ? JSON.parse(cart) : new Cart();
  }
}
