import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentTab: number = 1

  products = [
    {
      id: 1,
      name: 'laptop',
      price: 149000,
      description: 'Macbook pro',
      isAvailable: false,
      imgUrl: 'http://placehold.it/50x50'
    },
    // {
    //   id: 2,
    //   name: 'Iphone-7',
    //   price: 40000,
    //   description: 'Iphone',
    //   isAvailable: true,
    //   imgUrl: 'http://placehold.it/50x50'
    // },
  ]

  handleTabChange(tabIndex: number) {
    this.currentTab = tabIndex
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }

}
