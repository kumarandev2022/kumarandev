import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savings-home',
  templateUrl: './savings-home.component.html',
  styleUrls: ['./savings-home.component.css']
})
export class SavingsHomeComponent implements OnInit {

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
