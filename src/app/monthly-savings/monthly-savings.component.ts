import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { CustomerService } from '../_services/customer.service';

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
    customerid: localStorage.getItem('customerid') ?? '',
    status: "pending"
  };
  isSuccessful = false;
  isSavingsFailed = false;
  errorMessage = '';
  customerid: string ="";
  savingStatus = '';

  constructor(private authService: AuthService, private customerService: CustomerService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { createdate, amount,mode,submitted,customerid,status} = this.form;

    this.authService.savings(createdate,amount,mode,submitted,customerid,status).subscribe(
      data => {
        console.log(data);
        this.savingStatus = data.status;
        this.isSuccessful = true;
        this.isSavingsFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSavingsFailed = true;
      }
    );
   }
}

