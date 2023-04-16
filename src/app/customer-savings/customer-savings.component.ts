import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-customer-savings',
  templateUrl: './customer-savings.component.html',
  styleUrls: ['./customer-savings.component.css']
})
export class CustomerSavingsComponent implements OnInit{
  dataSource: any;
  customerId: string ="";
  constructor(private authService:AuthService) {
    // this.dataSource = AspNetData.createStore({
    //     key: 'Id',
    //     loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales'
    // });

  }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('customerid') ?? '';
    this.authService.getSavingsShare(this.customerId).subscribe(
      data => {
        
        console.log(data);
      }
    )
  }


}
