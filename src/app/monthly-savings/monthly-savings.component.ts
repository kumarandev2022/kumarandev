import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-monthly-savings',
  templateUrl: './monthly-savings.component.html',
  styleUrls: ['./monthly-savings.component.css']
})
export class MonthlySavingsComponent implements OnInit {
  form: any = {
    createdate: null,
    amount: 0,
    mode: null,
    submitted: null,
    customerid: 5001
  };
  isSuccessful = false;
  isInterestFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { createdate, amount,mode,submitted,customerid } = this.form;

    this.authService.savings(createdate, amount,mode,submitted,customerid).subscribe(
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

