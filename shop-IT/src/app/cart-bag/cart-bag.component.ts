import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-bag',
  templateUrl: './cart-bag.component.html',
  styleUrls: ['./cart-bag.component.css']
})
export class CartBagComponent {

  @Input()
  value: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.cartService.cartStream
      .subscribe({
        next: cart => {
          this.value = cart.length
        }
      })
  }

}
