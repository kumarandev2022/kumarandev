import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-create-saving',
  templateUrl: './create-saving.component.html',
  styleUrls: ['./create-saving.component.css']
})
export class CreateSavingComponent implements OnInit {
  form: any = {
    createDate: null,
    totalMembers: null,
    monthlySavAmt: null,
    totalSavAmt: null
  };
  isSuccessful = false;
  isSavingFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { createDate, totalMembers, monthlySavAmt, totalSavAmt } = this.form;

    this.authService.savings(createDate, totalMembers, monthlySavAmt, totalSavAmt).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSavingFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSavingFailed = true;
      }
    );
  }
}