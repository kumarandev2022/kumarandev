import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-loan-req-view',
  templateUrl: './loan-req-view.component.html',
  styleUrls: ['./loan-req-view.component.css']
})
export class LoanReqViewComponent implements OnInit {
  customerId: string ="";
 
  cards = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'}
  ];
  
  constructor(private router: Router,private authService:AuthService) {
   }
  ngOnInit(): void {
    this.customerId = localStorage.getItem('customerid') ?? '';
  this.authService.getLoanView(this.customerId).subscribe(
    data => {
      console.log(data);
    }
  )
  }
  
   
}
