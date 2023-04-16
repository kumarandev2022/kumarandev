import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-home',
  templateUrl: './loan-home.component.html',
  styleUrls: ['./loan-home.component.css']
})
export class LoanHomeComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) { }

  OnRequest()
  {
    this.router.navigate(['/loan-request'])
  }

  OnView()
  {
    this.router.navigate(['/loan-view'])
  }

}
