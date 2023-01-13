import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  form: any = {
    interestdate: null,
    totalmembers: null,
    monthlysavings: null,
    totalsavings: null
  };
  isSuccessful = false;
  isInterestFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { reqdate, loanamount } = this.form;

    this.authService.loanRequest(reqdate, loanamount).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isInterestFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isInterestFailed = true;
      }
    );
  }
}

