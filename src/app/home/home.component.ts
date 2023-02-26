import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  customerId:number = 5001;
  //isLoggedIn = false;
 count:number = 0;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    if(this.count === 0) {
    //this.reloadPage();
  }
    this.authService.getCustomerData(this.customerId).subscribe(
      data => {
        
        console.log(data);
      }
    )
    
}

reloadPage(): void {
  window.location.reload();
  this.count+1;
}
}

