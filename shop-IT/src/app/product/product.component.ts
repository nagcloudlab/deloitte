import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  product: any = {}

  currentTab: number = 1

  handleTabChange(tabIndex: number) {
    this.currentTab = tabIndex
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }

}
