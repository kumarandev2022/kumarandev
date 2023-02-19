import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    customerid: 0,
    password: null,
    //customerid: 5001
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user:User = new User();
  //customerId:number = 5001;
  customer:Customer = new Customer();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  //   this.authService.getCustomerCred(this.customerId).subscribe(
  //     data => {
  //       this.customer.customerid = data.customerid;
  //       this.customer.customername = data.customername; 
  //       this.customer.password = data.password;
  //      }
  //   )
   }

   

  onSubmit(): void {
    const { customerid, password } = this.form;
    this.authService.login(customerid,password).subscribe(
      data => {
        console.log(data);
        console.log("inside");
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/home'])
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
   );

   
  }

  reloadPage(): void {
    window.location.reload();
  }
}


 