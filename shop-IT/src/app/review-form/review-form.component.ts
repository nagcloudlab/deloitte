import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  isOpen = false

  stars = 1
  text = "I love this !"
  author = "Nag"

  @Output()
  review = new EventEmitter<any>()

  toggleForm() {
    this.isOpen = !this.isOpen
  }

  handleSubmit() {
    this.review.emit({
      stars: this.stars,
      text: this.text,
      author: this.author
    })
    this.stars = 1
    this.text = "I love this!"
    this.author = "Nag"
    this.toggleForm()
  }

}
