import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  product: any = {}

  @Output()
  buy = new EventEmitter<any>()

  currentTab: number = 3

  reviews: Array<any> = []

  constructor(
    private cartService: CartService,
    private reviewService: ReviewService
  ) { }

  handleTabChange(tabIndex: number) {
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.reviewService.getReviews(this.product.id)
        .subscribe((reviews: any) => {
          this.reviews = reviews
        })
    }
  }

  handleBuy() {
    // this.buy.emit(this.product)
    this.cartService.addToCart(this.product)
  }

  handleNewReview(review: any) {
    this.reviewService.addReview(this.product.id, review)
      .subscribe({
        next: (response) => {
          console.log(response);
        }
      })
  }

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }

}
