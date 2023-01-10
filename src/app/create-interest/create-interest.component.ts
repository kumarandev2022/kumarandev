import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-create-interest',
  templateUrl: './create-interest.component.html',
  styleUrls: ['./create-interest.component.css']
})
export class CreateInterestComponent implements OnInit {
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
    const { interestdate, totalmembers, monthlysavings, totalsavings } = this.form;

    this.authService.interestShare(interestdate, totalmembers, monthlysavings, totalsavings).subscribe(
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
