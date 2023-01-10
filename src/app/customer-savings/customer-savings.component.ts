import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-savings',
  templateUrl: './customer-savings.component.html',
  styleUrls: ['./customer-savings.component.css']
})
export class CustomerSavingsComponent {
  dataSource: any;

  constructor() {
    // this.dataSource = AspNetData.createStore({
    //     key: 'Id',
    //     loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales'
    // });
  }
}
