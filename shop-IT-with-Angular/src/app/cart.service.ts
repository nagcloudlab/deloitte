import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<any> = [];
  cartStream = new Subject<any>();

  constructor() { }

  addToCart(item: any) {
    this.cart.push(item);
    console.log(this.cart);
    this.cartStream.next(this.cart);
  }
  getCart(): Array<any> {
    return this.cart;
  }


}
