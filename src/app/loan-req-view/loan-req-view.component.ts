import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoanRequest } from '../loanrequest';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-loan-req-view',
  templateUrl: './loan-req-view.component.html',
  styleUrls: ['./loan-req-view.component.css']
})
export class LoanReqViewComponent implements OnInit {
  customerId: string ="";
  loanReqView: LoanRequest[] | undefined;
  constructor(private router: Router,private authService:AuthService) {
   }
  ngOnInit(): void {
    this.customerId = localStorage.getItem('customerid') ?? '';
  this.authService.getLoanView(this.customerId).subscribe(
    data => {
      console.log(data);
      let str: string = JSON.stringify(data);
      this.loanReqView = JSON.parse(str);
    }
  )
  }
}
