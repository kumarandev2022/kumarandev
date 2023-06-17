import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-loan-req-edit',
  templateUrl: './loan-req-edit.component.html',
  styleUrls: ['./loan-req-edit.component.css']
})
export class LoanReqEditComponent implements OnInit {
  customerId: string ="";
  
  constructor(private router: Router,private authService:AuthService) {
  }
 ngOnInit(): void {
   this.customerId = localStorage.getItem('customerid') ?? '';
 this.authService.getLoanEdit(this.customerId).subscribe(
   data => {
     console.log(data);
     let str: string = JSON.stringify(data);
    //  this.loanReqView = JSON.parse(str);
    //  console.log("kumaran",this.loanReqView);

   }
 )
 }
}
