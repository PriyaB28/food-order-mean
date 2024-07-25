import { Injectable } from '@angular/core';
import { Cart } from '../cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartToLocalStorage() 
  private cartSubject = new BehaviorSubject<Cart>(this.cart);
  constructor() {}

  addToCart(food: Food) {
    let cartItems = this.cart.cartItems.filter(
      (item) => item.food.id == food.id
    );
    if (cartItems.length > 0) {
      return;
    }
    this.cart.cartItems.push(new CartItem(food));
    this.setCartToLocalStorage()
  }

  removeFromCart(food: Food) {
    this.cart.cartItems = this.cart.cartItems.filter(
      (item) => item.food.id != food.id
    );
    this.setCartToLocalStorage()
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItems = this.cart.cartItems.find((item) => item.food.id == foodId);
    if (!cartItems) {
      return;
    }
    console.log(cartItems);
    
    cartItems.quantity = quantity;
    console.log(quantity);
    
    cartItems.price = quantity * cartItems.food.price;
    console.log(cartItems);
    
    this.setCartToLocalStorage()
  }

  clearCart() {
    this.cart = new Cart();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart():Cart{
   return this.cartSubject.value
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
