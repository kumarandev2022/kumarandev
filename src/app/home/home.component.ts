import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  customerId:number = 5001;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getCustomerData(this.customerId).subscribe(
      data => {
        console.log(data);
      }
    )
}
}