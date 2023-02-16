import { Component, OnInit} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-rel-customer',
  templateUrl: './rel-customer.component.html',
  styleUrls: ['./rel-customer.component.css']
})
export class RelCustomerComponent implements OnInit {
  form: any = {
    clubcode: 1911,
    customerid: 0,
    customername: null,
    password: null,
    gender: null,
    dob :null,
    phonenumber: null,
    address: null
  };
  isSuccessful = false;
  isRegisterationFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService,private customerService: CustomerService) { }

  ngOnInit(): void {
   }


  onSubmit(): void {
    const {clubcode, customerid, customername, password, gender, dob, phonenumber} = this.form;

    this.authService.customerRegistration(clubcode, customerid, customername, password, gender, dob, phonenumber).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isRegisterationFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterationFailed = true;
      }
    );
  }
}
