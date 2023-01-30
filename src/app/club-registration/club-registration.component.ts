import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-club-registration',
  templateUrl: './club-registration.component.html',
  styleUrls: ['./club-registration.component.css']
})
export class ClubRegistrationComponent implements OnInit {
  form: any = {
    clubname: null,
    clubcode: 0,
    yfsccode: null,
    address: null
  };
  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { clubname, clubcode, yfsccode,address } = this.form;

    this.authService.clubRegistration(clubname, clubcode, yfsccode,address).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isRegisterFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    );
  }
}

