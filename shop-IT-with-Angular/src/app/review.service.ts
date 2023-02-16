import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addReview(productId: number, review: any) {
    return this.httpClient.post("http://localhost:8080/api/products/" + productId + "/reviews", review)
  }
  getReviews(productId: number) {
    return this.httpClient.get("http://localhost:8080/api/products/" + productId + "/reviews")
  }

}
