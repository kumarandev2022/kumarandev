import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  form: any = {
    customerid: localStorage.getItem('customerid') ?? '',
    reqdate: null,
    reqamount: 0,
    type: null,
    reason: null,
    status:"pending"
  };
  isSuccessful = false;
  isLoanRequestFailed = false;
  errorMessage = '';
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { customerid, reqdate, reqamount,type,reason,status } = this.form;

    this.authService.loanRequest(customerid,reqdate, reqamount,type,reason, status).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isLoanRequestFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoanRequestFailed = true;
      }
    );
  }
}

